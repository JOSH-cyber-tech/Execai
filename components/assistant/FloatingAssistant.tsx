'use client';

import { FormEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BarChart3,
  Bot,
  CalendarDays,
  CheckSquare,
  Clock3,
  Command,
  Gauge,
  LayoutDashboard,
  Loader2,
  Maximize2,
  Minimize2,
  Send,
  Settings,
  Sparkles,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useAssistantCheckIn, useAssistantCommand, useAssistantMonitor, useGenerateStudyPlan } from '@/hooks/useExecAI';
import clsx from 'clsx';

type Message = {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  createdAt: string;
};

type Reminder = {
  id: string;
  title: string;
  message: string;
  type: string;
};

const STORAGE_KEY = 'execai.assistant.messages';
const NOTIFIED_KEY = 'execai.assistant.notified';
const PERMISSION_KEY = 'execai.notifications.permissionAsked';

const quickActions = [
  { label: 'Open Dashboard', route: '/', icon: LayoutDashboard },
  { label: "Today's Tasks", route: '/tasks', icon: CheckSquare },
  { label: 'Calendar', route: '/schedule', icon: CalendarDays },
  { label: 'Schedule', route: '/schedule', icon: Clock3 },
  { label: 'Deadlines', route: '/tasks', icon: Gauge },
  { label: 'Analytics', route: '/analytics', icon: BarChart3 },
  { label: 'Settings', route: '/', icon: Settings },
];

function buildId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function assistantMessage(content: string): Message {
  return { id: buildId(), role: 'assistant', content, createdAt: new Date().toISOString() };
}

function userMessage(content: string): Message {
  return { id: buildId(), role: 'user', content, createdAt: new Date().toISOString() };
}

function taskSummary(task: { title?: string; deadline?: string; priorityLabel?: string; estimatedMinutes?: number; description?: string }) {
  return [
    '**Task Added Successfully**',
    `Title: ${task.title || 'Untitled task'}`,
    task.description ? `Description: ${task.description}` : '',
    task.deadline ? `Deadline: ${new Date(task.deadline).toLocaleString()}` : '',
    task.priorityLabel ? `Priority: ${String(task.priorityLabel).toLowerCase()}` : '',
    task.estimatedMinutes ? `Estimated duration: ${task.estimatedMinutes} minutes` : '',
  ].filter(Boolean).join('\n');
}

function renderMarkdown(text: string) {
  const lines = text.split('\n');
  return lines.map((line, index) => {
    if (line.startsWith('**') && line.endsWith('**')) {
      return <strong key={index} className="block">{line.replace(/\*\*/g, '')}</strong>;
    }
    if (line.startsWith('```')) return null;
    if (line.startsWith('- ') || line.startsWith('• ')) {
      return <li key={index} className="ml-4 list-disc">{line.slice(2)}</li>;
    }
    return <p key={index} className={line ? '' : 'h-2'}>{line}</p>;
  });
}

async function showBrowserNotification(title: string, body: string) {
  if (typeof window === 'undefined' || !('Notification' in window) || Notification.permission !== 'granted') return;

  const registration = 'serviceWorker' in navigator ? await navigator.serviceWorker.getRegistration() : null;
  if (registration) {
    await registration.showNotification(title, { body, icon: '/favicon.ico', badge: '/favicon.ico' });
    return;
  }

  new Notification(title, { body, icon: '/favicon.ico' });
}

export function FloatingAssistant() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isLoaded, isSignedIn } = useAuth();
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const command = useAssistantCommand();
  const plan = useGenerateStudyPlan();
  const assistantEnabled = Boolean(isLoaded && isSignedIn);
  const { data: checkin } = useAssistantCheckIn(assistantEnabled);
  const { data: monitor } = useAssistantMonitor(assistantEnabled);

  const reminders: Reminder[] = useMemo(() => monitor?.reminders || [], [monitor]);

  useEffect(() => {
    // Removed auto-open behavior
  }, [searchParams]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setMessages(JSON.parse(saved));
        return;
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
    setMessages([assistantMessage('Good Morning!\n\nI can add tasks, plan study blocks, monitor deadlines, update progress, and open dashboard areas for you.')]);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-40)));
  }, [messages]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, command.isPending, plan.isPending]);

  useEffect(() => {
    function onKeyDown(event: globalThis.KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen(true);
        setMinimized(false);
        setTimeout(() => inputRef.current?.focus(), 50);
      }
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => undefined);
    }
  }, []);

  useEffect(() => {
    if (!reminders.length || typeof window === 'undefined') return;

    const notified = new Set<string>(JSON.parse(localStorage.getItem(NOTIFIED_KEY) || '[]'));
    const next = new Set(notified);

    reminders.forEach((reminder) => {
      if (notified.has(reminder.id)) return;
      next.add(reminder.id);
      void showBrowserNotification(reminder.title, reminder.message);
      setMessages((current) => {
        if (current.some((message) => message.content.includes(reminder.title))) return current;
        return [...current, assistantMessage(`${reminder.title}\n${reminder.message}`)];
      });
    });

    localStorage.setItem(NOTIFIED_KEY, JSON.stringify(Array.from(next).slice(-100)));
  }, [reminders]);

  useEffect(() => {
    if (!checkin || messages.length > 1) return;

    const focus = checkin.focus?.map((task: { title: string }) => `- ${task.title}`).join('\n') || '- No urgent focus yet';
    const deadlines = checkin.deadlines?.map((task: { title: string; deadline?: string }) => `- ${task.title}${task.deadline ? ` by ${new Date(task.deadline).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : ''}`).join('\n') || '- No deadlines today';
    setMessages((current) => [
      ...current,
      assistantMessage(`${checkin.greeting}\n\n**Today's Focus**\n${focus}\n\n**Today's Deadlines**\n${deadlines}\n\nRemaining Study Hours: ${checkin.remainingStudyHours || 0}\nProductivity Score: ${checkin.productivityScore ?? 100}%`),
    ]);
  }, [checkin, messages.length]);

  async function requestNotificationPermission() {
    if (typeof window === 'undefined' || !('Notification' in window)) return;
    if (localStorage.getItem(PERMISSION_KEY)) return;
    localStorage.setItem(PERMISSION_KEY, 'true');
    if (Notification.permission === 'default') {
      await Notification.requestPermission();
    }
  }

  function navigate(route: string, label: string) {
    setOpen(false);
    router.push(route);
    setMessages((current) => [...current, userMessage(label), assistantMessage(`Opened ${label.replace(/^Open\s+/i, '')}. The chat stays here when you need it.`)]);
  }

  async function submitMessage(value = input) {
    const trimmed = value.trim();
    if (!trimmed || command.isPending) return;
    setInput('');
    setMessages((current) => [...current, userMessage(trimmed)]);

    if (!assistantEnabled) {
      setMessages((current) => [...current, assistantMessage('Please sign in first. Once you are in, I can add tasks, update progress, plan your study blocks, and monitor deadlines.')]);
      router.push('/sign-in');
      return;
    }

    try {
      const response = await command.mutateAsync(trimmed);
      if (response.type === 'navigation' && response.route) {
        setOpen(false);
        router.push(response.route);
      }
      if (response.type === 'task_created') {
        setMessages((current) => [...current, assistantMessage(taskSummary(response.task))]);
      } else if (response.type === 'study_plan') {
        setMessages((current) => [...current, assistantMessage(`${response.message}\n\nOpen Schedule to review the new timetable.`)]);
      } else {
        setMessages((current) => [...current, assistantMessage(response.message || 'Done.')]);
      }
      await requestNotificationPermission();
    } catch {
      setMessages((current) => [...current, assistantMessage('I could not complete that request. Please check that the backend is running, then try again.')]);
    }
  }

  async function generatePlan() {
    setMessages((current) => [...current, userMessage('Create my study plan')]);
    if (!assistantEnabled) {
      setMessages((current) => [...current, assistantMessage('Please sign in first so I can read your tasks and build the study plan.')]);
      router.push('/sign-in');
      return;
    }
    try {
      const response = await plan.mutateAsync(7);
      setMessages((current) => [...current, assistantMessage(`Created ${response.blocks?.length || 0} optimized study blocks. I considered deadlines, priority, available hours, and breaks.`)]);
      await requestNotificationPermission();
    } catch {
      setMessages((current) => [...current, assistantMessage('I could not generate the study plan right now.')]);
    }
  }

  function onInputKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      void submitMessage();
    }
  }

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            type="button"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.06, y: -2 }}
            transition={{ type: 'spring', stiffness: 360, damping: 24 }}
            onClick={() => {
              setOpen(true);
              setMinimized(false);
              void requestNotificationPermission();
            }}
            className="ai-orb fixed bottom-5 right-5 z-40 flex h-16 w-16 items-center justify-center rounded-full text-white animate-orb-breathe focus:outline-none focus:ring-2 focus:ring-cyan-200/50"
            aria-label="Open ExecAI assistant"
          >
            <span className="absolute -inset-3 rounded-full border border-cyan-200/10" />
            <span className="absolute -right-1 top-2 h-2 w-2 rounded-full bg-cyan-200/80 shadow-[0_0_14px_rgba(87,216,255,0.85)]" />
            <Sparkles className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.section
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={clsx(
              'glass-panel fixed bottom-5 right-5 z-50 flex w-[min(420px,calc(100vw-2rem))] max-h-[min(640px,calc(100vh-2.5rem))] flex-col overflow-hidden rounded-[1.75rem]',
              minimized && 'h-16 min-h-0 max-h-16',
            )}
          >
              <header className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="ai-orb flex h-11 w-11 items-center justify-center rounded-2xl text-white animate-orb-breathe">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-white">ExecAI Assistant</h2>
                    <p className="flex items-center gap-1 text-xs text-cyan-100/55"><Command className="h-3 w-3" /> Ctrl/Cmd + K</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" onClick={() => setMinimized((value) => !value)} aria-label="Minimize assistant">
                    {minimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close assistant">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </header>

              {!minimized && (
                <>
                  <div className="border-b border-white/10 px-4 py-3">
                    <div className="flex gap-2 overflow-x-auto pb-1">
                      {quickActions.map((action) => {
                        const Icon = action.icon;
                        return (
                          <button
                            key={action.label}
                            type="button"
                            onClick={() => navigate(action.route, action.label)}
                            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-cyan-200/15 bg-white/[0.045] px-3 py-2 text-xs font-medium text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/35 hover:bg-cyan-300/10 hover:text-white"
                          >
                            <Icon className="h-3.5 w-3.5" />
                            {action.label}
                          </button>
                        );
                      })}
                      <button
                        type="button"
                        onClick={generatePlan}
                        className="inline-flex shrink-0 items-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-300/10 px-3 py-2 text-xs font-medium text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/15"
                      >
                        <Sparkles className="h-3.5 w-3.5" />
                        Plan Study
                      </button>
                    </div>
                  </div>

                  <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto bg-[#050816]/25 px-4 py-5">
                    {messages.map((message) => (
                      <div key={message.id} className={clsx('flex', message.role === 'user' ? 'justify-end' : 'justify-start')}>
                        <div
                          className={clsx(
                            'max-w-[86%] rounded-[1.35rem] px-4 py-3 text-sm leading-6 shadow-lg backdrop-blur-xl',
                            message.role === 'user'
                              ? 'rounded-br-md bg-gradient-to-br from-[#1d4ed8] to-[#3d7eff] text-white shadow-blue-500/20'
                              : 'rounded-bl-md border border-cyan-200/15 bg-white/[0.06] text-slate-100 shadow-blue-950/20',
                          )}
                        >
                          <div className="space-y-1">{renderMarkdown(message.content)}</div>
                        </div>
                      </div>
                    ))}
                    {(command.isPending || plan.isPending) && (
                      <div className="flex justify-start">
                        <div className="flex items-center gap-2 rounded-[1.35rem] rounded-bl-md border border-cyan-200/15 bg-white/[0.06] px-4 py-3 text-sm text-cyan-100/70 shadow-lg shadow-blue-950/20">
                          <Loader2 className="h-4 w-4 animate-spin text-cyan-200" />
                          Thinking
                        </div>
                      </div>
                    )}
                  </div>

                  <form
                    onSubmit={(event: FormEvent) => {
                      event.preventDefault();
                      void submitMessage();
                    }}
                    className="border-t border-white/10 bg-white/[0.035] p-3"
                  >
                    <div className="flex items-end gap-2 rounded-[1.35rem] border border-cyan-200/15 bg-white/[0.045] p-2 shadow-inner shadow-blue-950/30 focus-within:border-cyan-200/40 focus-within:ring-2 focus-within:ring-cyan-300/15">
                      <Textarea
                        ref={inputRef}
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        onKeyDown={onInputKeyDown}
                        placeholder='Add a task, ask for a study plan, or type "open dashboard"'
                        className="min-h-[44px] resize-none border-0 bg-transparent p-2 shadow-none focus-visible:ring-0"
                        rows={1}
                      />
                      <Button type="submit" size="icon" disabled={!input.trim() || command.isPending} className="shrink-0">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
