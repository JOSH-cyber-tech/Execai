'use client';

import { useState, useEffect, useRef } from 'react';
import { Bot, Send, User, Loader2 } from 'lucide-react';
import type { CSSProperties } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type AssistantTask = {
  title: string;
  deadline?: string | null;
  deadlinePreview?: {
    dateLabel?: string;
    timeLabel?: string;
  };
  priorityScore?: number;
};

type AddTaskResult = {
  error?: string;
  task?: AssistantTask;
};

type ElectronWindow = Window & {
  require?: (module: 'electron') => {
    ipcRenderer: {
      send: (channel: string, ...args: unknown[]) => void;
      invoke: (channel: string, ...args: unknown[]) => Promise<AddTaskResult>;
    };
  };
};

type DragStyle = CSSProperties & {
  WebkitAppRegion?: 'drag' | 'no-drag';
};

function getElectron() {
  const electronWindow = window as ElectronWindow;
  return electronWindow.require?.('electron');
}

export default function AssistantPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! How can I help you today? Try saying "Add completion of JavaScript video to my task list".' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        try {
          getElectron()?.ipcRenderer.send('close-assistant');
        } catch {
          window.close();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    // Immediately show user message and clear input
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setIsLoading(true);

    try {
      // Use Electron IPC if available (main process handles auth)
      const electron = typeof window !== 'undefined' ? getElectron() : undefined;

      if (electron) {
        const { ipcRenderer } = electron;
        const result = await ipcRenderer.invoke('add-task', text);

        if (result.error) {
          setMessages(prev => [...prev, {
            role: 'assistant',
            content: `❌ ${result.error}`
          }]);
        } else {
          const task = result.task;
          if (!task) throw new Error('Task was not returned by the desktop companion.');
          const deadline = task.deadline ? new Date(task.deadline).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) : null;
          const preview = task.deadlinePreview?.dateLabel && task.deadlinePreview?.timeLabel ? ` — deadline detected **${task.deadlinePreview.dateLabel} ${task.deadlinePreview.timeLabel}**` : '';
          setMessages(prev => [...prev, {
            role: 'assistant',
            content: `Done. I've added **${task.title}**${preview || (deadline ? ` — due **${deadline}**` : '')}${task.priorityScore ? ` · priority **${task.priorityScore}**` : ''}.`
          }]);
        }
      } else {
        // Fallback: try direct API call (only works if user has a browser session)
        const res = await fetch('/api/tasks/quickadd', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ input: text }),
        });
        const data = await res.json() as AssistantTask & { error?: string };
        if (!res.ok) throw new Error(data.error || `Error ${res.status}`);
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: `Done. I've added **${data.title}** to your task list.`
        }]);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Please try again.';
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Something went wrong: ${message}`
      }]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', background: 'transparent' }}>
      <div style={{
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
        border: '1px solid rgba(255,255,255,0.3)',
      }}>

        {/* Draggable Header */}
        <div style={{
          height: '40px',
          background: 'rgba(0,0,0,0.04)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          userSelect: 'none',
          WebkitAppRegion: 'drag',
          cursor: 'grab',
        } as DragStyle}>
          <div style={{ width: '48px', height: '6px', background: 'rgba(0,0,0,0.15)', borderRadius: '999px' }} />
        </div>

        {/* Chat Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {messages.map((msg, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
            }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                background: msg.role === 'user'
                  ? '#2563eb'
                  : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: 'white',
              }}>
                {msg.role === 'user' ? <User size={15} /> : <Bot size={15} />}
              </div>
              <div style={{
                padding: '10px 14px',
                borderRadius: msg.role === 'user' ? '16px 4px 16px 16px' : '4px 16px 16px 16px',
                maxWidth: '78%',
                background: msg.role === 'user' ? '#2563eb' : 'rgba(255,255,255,0.9)',
                color: msg.role === 'user' ? 'white' : '#1f2937',
                boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                border: msg.role === 'user' ? 'none' : '1px solid rgba(0,0,0,0.06)',
                fontSize: '14px',
                lineHeight: '1.5',
              }}>
                {msg.content.split('**').map((part, idx) =>
                  idx % 2 === 1
                    ? <strong key={idx} style={{ fontWeight: 600 }}>{part}</strong>
                    : part
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: 'white', flexShrink: 0,
              }}>
                <Bot size={15} />
              </div>
              <div style={{
                padding: '10px 16px',
                background: 'rgba(255,255,255,0.9)',
                borderRadius: '4px 16px 16px 16px',
                border: '1px solid rgba(0,0,0,0.06)',
                display: 'flex', alignItems: 'center', gap: '8px',
                color: '#6b7280', fontSize: '14px',
              }}>
                <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} />
                Adding task...
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input Area */}
        <div style={{
          padding: '12px',
          background: 'rgba(255,255,255,0.5)',
          borderTop: '1px solid rgba(0,0,0,0.06)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', position: 'relative' }}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Add a task, remind me..."
              disabled={isLoading}
              style={{
                flex: 1,
                padding: '12px 52px 12px 16px',
                border: '1px solid rgba(0,0,0,0.12)',
                borderRadius: '12px',
                fontSize: '15px',
                background: 'white',
                outline: 'none',
                color: '#111827',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                opacity: isLoading ? 0.7 : 1,
              }}
            />
            <button
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              disabled={!input.trim() || isLoading}
              style={{
                position: 'absolute',
                right: '8px',
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: input.trim() && !isLoading ? '#6366f1' : '#e5e7eb',
                border: 'none',
                cursor: input.trim() && !isLoading ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: input.trim() && !isLoading ? 'white' : '#9ca3af',
                transition: 'background 0.15s ease',
                flexShrink: 0,
              }}
            >
              <Send size={16} />
            </button>
          </div>
          <div style={{ textAlign: 'center', marginTop: '8px' }}>
            <span style={{ fontSize: '10px', color: '#9ca3af', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Press Enter to send • Esc to close
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: transparent !important; }
        html { background: transparent !important; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 4px; }
      `}</style>
    </div>
  );
}
