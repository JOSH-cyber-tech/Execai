'use client';

import { useState, useEffect, useRef } from 'react';
import { Bell, AlertTriangle, Clock, BookOpen, CheckCircle2, Sparkles } from 'lucide-react';
import { UserButton, useAuth } from '@clerk/nextjs';
import { useAssistantMonitor } from '@/hooks/useExecAI';
import { clsx } from 'clsx';

type Reminder = {
  id: string;
  title: string;
  message: string;
  type: string;
};

export function Header() {
  const { isLoaded, isSignedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const { data: monitor } = useAssistantMonitor(Boolean(isLoaded && isSignedIn));
  const reminders: Reminder[] = monitor?.reminders || [];
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'task_overdue':
        return <AlertTriangle className="h-4 w-4 text-rose-200 mt-0.5 shrink-0" />;
      case 'deadline_soon':
        return <Clock className="h-4 w-4 text-cyan-200 mt-0.5 shrink-0" />;
      case 'deadline_risk':
        return <AlertTriangle className="h-4 w-4 text-violet-200 mt-0.5 shrink-0" />;
      case 'missed_session':
        return <BookOpen className="h-4 w-4 text-violet-200 mt-0.5 shrink-0" />;
      case 'study_block_starting':
        return <Clock className="h-4 w-4 text-blue-200 mt-0.5 shrink-0" />;
      default:
        return <Bell className="h-4 w-4 text-cyan-200 mt-0.5 shrink-0" />;
    }
  };

  return (
    <header className="relative z-20 flex h-20 items-center justify-between px-4 pt-5 md:px-8 lg:px-10">
      <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-medium text-cyan-100/70 shadow-lg shadow-blue-950/20 backdrop-blur-xl md:flex">
        <Sparkles className="h-3.5 w-3.5 text-cyan-200" />
        Neural workspace online
      </div>
      
      <div className="flex items-center space-x-4 relative">
        <div ref={dropdownRef} className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={clsx(
              "relative rounded-2xl border border-white/10 p-3 text-slate-200 shadow-lg shadow-blue-950/20 backdrop-blur-xl transition duration-300 focus:outline-none",
              isOpen ? "bg-cyan-300/12 text-white" : "bg-white/[0.045] hover:-translate-y-0.5 hover:bg-white/[0.08] hover:text-white"
            )}
          >
            <span className="sr-only">View notifications</span>
            <Bell className="h-5 w-5" aria-hidden="true" />
            {reminders.length > 0 && (
              <span className="absolute right-2 top-2 block h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(87,216,255,0.9)] ring-2 ring-[#07101e]" />
            )}
          </button>

          {isOpen && (
            <div className="glass-panel absolute right-0 z-50 mt-3 w-80 origin-top-right overflow-hidden rounded-[1.5rem] focus:outline-none">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <h3 className="text-sm font-semibold text-white">Notifications</h3>
                {reminders.length > 0 && (
                  <span className="inline-flex items-center rounded-full border border-cyan-200/20 bg-cyan-300/10 px-2 py-0.5 text-xs font-medium text-cyan-100">
                    {reminders.length} New
                  </span>
                )}
              </div>
              
              <div className="max-h-[320px] overflow-y-auto">
                {reminders.length === 0 ? (
                  <div className="px-4 py-8 text-center text-sm text-slate-400">
                    <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-cyan-200/45" />
                    You&apos;re all caught up!
                  </div>
                ) : (
                  <ul className="divide-y divide-white/10">
                    {reminders.map((reminder) => (
                      <li key={reminder.id} className="px-4 py-3 transition-colors hover:bg-white/[0.055]">
                        <div className="flex gap-3">
                          {getIcon(reminder.type)}
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium text-white">
                              {reminder.title}
                            </p>
                            <p className="line-clamp-2 text-sm text-slate-300/70">
                              {reminder.message}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
        
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </header>
  );
}
