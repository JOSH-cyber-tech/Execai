'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Pause, Play, SkipForward, Timer, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTasks, useUpdateTask } from '@/hooks/useExecAI';

type Task = {
  id: string;
  title: string;
  status: string;
  priorityScore?: number;
  estimatedMinutes?: number;
  timeEstimate?: number;
};

const PRESETS = [
  { label: '25/5', focus: 25, break: 5 },
  { label: '50/10', focus: 50, break: 10 },
  { label: '90/20', focus: 90, break: 20 },
];

function fmt(seconds: number) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

export function SmartFocusMode({ onClose }: { onClose: () => void }) {
  const { data: tasks = [] } = useTasks() as { data?: Task[] };
  const updateTask = useUpdateTask();
  const [preset, setPreset] = useState(PRESETS[0]);
  const [seconds, setSeconds] = useState(PRESETS[0].focus * 60);
  const [running, setRunning] = useState(false);
  const [sessions, setSessions] = useState(0);
  const [mode, setMode] = useState<'focus' | 'break'>('focus');
  const currentTask = useMemo(() => tasks.filter((task) => task.status !== 'completed').sort((a, b) => (b.priorityScore || 0) - (a.priorityScore || 0))[0], [tasks]);
  const total = (mode === 'focus' ? preset.focus : preset.break) * 60;
  const progress = Math.round(((total - seconds) / total) * 100);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setSeconds((value) => {
        if (value > 1) return value - 1;
        setRunning(false);
        if (mode === 'focus') {
          setSessions((count) => count + 1);
          if (currentTask) {
            updateTask.mutate({ id: currentTask.id, status: 'in_progress', estimatedMinutes: currentTask.estimatedMinutes || currentTask.timeEstimate || 30 });
          }
          setMode('break');
          return preset.break * 60;
        }
        setMode('focus');
        return preset.focus * 60;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [currentTask, mode, preset.break, preset.focus, running, updateTask]);

  useEffect(() => {
    setSeconds((mode === 'focus' ? preset.focus : preset.break) * 60);
    setRunning(false);
  }, [preset, mode]);

  const radius = 132;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-[#030712]/95 p-4 backdrop-blur-2xl"
    >
      <div className="mx-auto flex min-h-full max-w-6xl flex-col">
        <div className="flex items-center justify-between py-4">
          <Button variant="outline" onClick={onClose}>
            <ArrowLeft className="h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" onClick={onClose} aria-label="Close focus mode">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="grid flex-1 place-items-center gap-8 lg:grid-cols-[1fr_22rem]">
          <div className="text-center">
            <Badge className="mb-5">{mode === 'focus' ? 'Deep Work' : 'Recovery Break'}</Badge>
            <h1 className="text-3xl font-semibold text-white md:text-5xl">{currentTask?.title || 'Choose one meaningful task'}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">Finish the next visible step. Keep the screen clean, the timer honest, and the task small enough to win.</p>

            <div className="relative mx-auto mt-10 h-[20rem] w-[20rem]">
              <svg className="h-full w-full -rotate-90" viewBox="0 0 320 320" aria-hidden="true">
                <circle cx="160" cy="160" r={radius} stroke="rgba(255,255,255,0.1)" strokeWidth="18" fill="none" />
                <circle cx="160" cy="160" r={radius} stroke="url(#focusGradient)" strokeWidth="18" fill="none" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} />
                <defs>
                  <linearGradient id="focusGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#57D8FF" />
                    <stop offset="55%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#F472B6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 grid place-items-center">
                <div>
                  <p className="text-6xl font-semibold tabular-nums text-white">{fmt(seconds)}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.28em] text-cyan-100/50">{progress}% complete</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" className="electric-button" onClick={() => setRunning((value) => !value)}>
                {running ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                {running ? 'Pause' : 'Start'}
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                setMode('focus');
                setSeconds(preset.focus * 60);
                setRunning(false);
              }}>
                <Timer className="h-5 w-5" />
                Reset
              </Button>
              <Button size="lg" variant="ghost" onClick={() => {
                setMode('focus');
                setSeconds(preset.focus * 60);
                setRunning(false);
              }}>
                <SkipForward className="h-5 w-5" />
                Skip Break
              </Button>
            </div>
          </div>

          <aside className="w-full rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/50">Session</p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {PRESETS.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    setPreset(item);
                    setMode('focus');
                  }}
                  className={`rounded-2xl border px-3 py-3 text-sm transition ${preset.label === item.label ? 'border-cyan-200/40 bg-cyan-300/15 text-white' : 'border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.07]'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between border-b border-white/10 pb-3 text-slate-300"><span>Completed sessions</span><strong className="text-white">{sessions}</strong></div>
              <div className="flex justify-between border-b border-white/10 pb-3 text-slate-300"><span>Daily focus</span><strong className="text-white">{Math.round((sessions * preset.focus) / 60 * 10) / 10}h</strong></div>
              <div className="flex justify-between text-slate-300"><span>Current streak</span><strong className="text-white">{sessions > 0 ? sessions : 0}</strong></div>
            </div>
            <div className="mt-6 rounded-[1.25rem] border border-fuchsia-200/10 bg-fuchsia-300/[0.045] p-4">
              <p className="text-sm font-medium text-white">Today’s target</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{currentTask ? `Move ${currentTask.title} forward and mark it complete when the work is real.` : 'Add a priority task, then start a focused session.'}</p>
            </div>
          </aside>
        </div>
      </div>
    </motion.div>
  );
}
