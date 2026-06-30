'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home, 
  Target, 
  CheckSquare, 
  Calendar, 
  Moon, 
  Activity, 
  BarChart, 
  Settings,
  Sparkles
} from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import clsx from 'clsx';

const navItems = [
  { name: 'Today', href: '/', icon: Home },
  { name: 'Goals', href: '/goals', icon: Target },
  { name: 'All Tasks', href: '/tasks', icon: CheckSquare },
  { name: 'Schedule', href: '/schedule', icon: Calendar },
  { name: 'Check In', href: '/checkin', icon: Moon },
  { name: 'Habits', href: '/habits', icon: Activity },
  { name: 'Analytics', href: '/analytics', icon: BarChart },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="group relative z-20 hidden h-full w-[5.75rem] shrink-0 px-4 py-5 transition-[width] duration-500 ease-out hover:w-64 md:block">
      <div className="glass-panel flex h-full flex-col overflow-hidden rounded-[1.75rem]">
      <div className="flex h-16 items-center gap-3 border-b border-white/10 px-4">
        <div className="ai-orb flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white animate-orb-breathe">
          <Sparkles className="h-5 w-5" />
        </div>
        <div className="min-w-0 opacity-0 transition duration-300 group-hover:opacity-100">
          <span className="block text-lg font-semibold tracking-tight text-white">ExecAI</span>
          <span className="block text-xs text-cyan-100/55">Assistant OS</span>
        </div>
      </div>

      <nav className="flex-1 space-y-2 px-3 py-5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                'relative flex h-12 items-center gap-3 overflow-hidden rounded-2xl px-3 text-sm font-medium transition duration-300 hover:-translate-y-0.5',
                isActive
                  ? 'border border-cyan-200/20 bg-cyan-300/12 text-white shadow-lg shadow-blue-500/15'
                  : 'text-slate-300/80 hover:bg-white/[0.07] hover:text-white'
              )}
            >
              {isActive && <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(87,216,255,0.75)]" />}
              <Icon 
                className={clsx(
                  'h-5 w-5 shrink-0 transition',
                  isActive ? 'text-cyan-100 drop-shadow-[0_0_10px_rgba(87,216,255,0.75)]' : 'text-slate-400 group-hover:text-cyan-100'
                )} 
              />
              <span className="whitespace-nowrap opacity-0 transition duration-300 group-hover:opacity-100">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="space-y-4 border-t border-white/10 p-3">
        <button className="flex h-12 w-full items-center gap-3 rounded-2xl px-3 text-sm font-medium text-slate-300/80 transition hover:-translate-y-0.5 hover:bg-white/[0.07] hover:text-white">
          <Settings className="h-5 w-5 shrink-0 text-slate-400" />
          <span className="whitespace-nowrap opacity-0 transition duration-300 group-hover:opacity-100">Settings</span>
        </button>
        <div className="flex items-center gap-3 rounded-2xl px-3 py-2">
          <UserButton afterSignOutUrl="/sign-in" />
          <span className="whitespace-nowrap text-sm font-medium text-slate-300/80 opacity-0 transition duration-300 group-hover:opacity-100">Account</span>
        </div>
      </div>
      </div>
    </aside>
  );
}
