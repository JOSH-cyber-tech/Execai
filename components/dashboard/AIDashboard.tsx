'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { AlertTriangle, Brain, CalendarClock, Flame, Gauge, Sparkles, TimerReset, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAnalytics } from '@/hooks/useExecAI';

type DashboardProps = {
  onStartFocus: () => void;
};

type AnalyticsData = {
  logs?: Array<{ date: string; completionRate: number; focusMinutes: number; tasksCompleted: number }>;
  completionRate?: number;
  coach?: {
    productivityScore: number;
    consistencyScore: number;
    dailySummary: string;
    weeklySummary: string;
    monthlySummary: string;
    motivationMessage: string;
    recommendation: string;
    focusDropInsight: string;
    paceInsight: string;
  };
  priorityTasks?: Array<{ id: string; title: string; priorityScore: number; priorityReason?: string; deadline?: string | null }>;
  deadlineRisks?: Array<{ id: string; title: string; riskLevel: string; riskDetails?: { likelihood: number; recommendedDailyHours: number } }>;
};

function Metric({ icon: Icon, label, value }: { icon: typeof Sparkles; label: string; value: string }) {
  return (
    <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-4">
      <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-cyan-100/50">
        <Icon className="h-4 w-4" />
        {label}
      </div>
      <p className="text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}

export function AIDashboard({ onStartFocus }: DashboardProps) {
  const { data, isLoading } = useAnalytics() as { data?: AnalyticsData; isLoading: boolean };
  const logs = useMemo(() => (data?.logs || []).slice(-7).map((log) => ({
    date: new Date(log.date).toLocaleDateString([], { weekday: 'short' }),
    completion: Math.round(log.completionRate || 0),
    focus: Math.round((log.focusMinutes || 0) / 60),
    tasks: log.tasksCompleted || 0,
  })), [data?.logs]);
  const coach = data?.coach;
  const topTask = data?.priorityTasks?.[0];
  const topRisk = data?.deadlineRisks?.[0];

  return (
    <div className="grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
      <Card className="overflow-hidden">
        <CardHeader className="border-b border-white/10">
          <CardTitle className="flex items-center gap-3">
            <span className="ai-orb flex h-9 w-9 items-center justify-center rounded-2xl">
              <Brain className="h-4 w-4" />
            </span>
            AI Productivity Coach
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 p-4 md:grid-cols-3 md:p-5">
          <Metric icon={Gauge} label="Productivity" value={isLoading ? '-' : `${coach?.productivityScore ?? data?.completionRate ?? 0}%`} />
          <Metric icon={Flame} label="Consistency" value={isLoading ? '-' : `${coach?.consistencyScore ?? 0}%`} />
          <Metric icon={TimerReset} label="Focus Time" value={`${logs.reduce((sum, log) => sum + log.focus, 0)}h`} />
          <div className="rounded-[1.35rem] border border-cyan-200/10 bg-cyan-300/[0.045] p-4 md:col-span-2">
            <p className="text-sm font-medium text-white">{coach?.dailySummary || 'Complete a task to unlock today’s coach signal.'}</p>
            <p className="mt-2 text-sm text-slate-300">{coach?.weeklySummary || 'Weekly trend will appear after your next completion.'}</p>
            <p className="mt-2 text-sm text-cyan-100/80">{coach?.recommendation || 'Quick start focus when you are ready.'}</p>
          </div>
          <div className="rounded-[1.35rem] border border-fuchsia-200/10 bg-fuchsia-300/[0.045] p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-white">
              <Sparkles className="h-4 w-4 text-fuchsia-200" />
              Motivation
            </div>
            <p className="text-sm leading-6 text-slate-300">{coach?.motivationMessage || 'One focused block can turn the day.'}</p>
          </div>
          <div className="h-44 md:col-span-3">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={logs}>
                <XAxis dataKey="date" stroke="rgba(203,213,225,0.45)" />
                <Tooltip contentStyle={{ background: 'rgba(7,16,30,0.9)', border: '1px solid rgba(87,216,255,0.18)', borderRadius: 16, color: '#fff' }} />
                <Area type="monotone" dataKey="completion" stroke="#57D8FF" fill="rgba(87,216,255,0.16)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-5">
        <motion.div layout className="rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-blue-950/30 backdrop-blur-2xl">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/50">Quick Start</p>
              <h3 className="mt-1 text-lg font-semibold text-white">Smart Focus Mode</h3>
            </div>
            <Button onClick={onStartFocus} className="electric-button">
              <Zap className="h-4 w-4" />
              Start
            </Button>
          </div>
          <p className="text-sm leading-6 text-slate-300">{coach?.focusDropInsight || 'Schedule deep work before lunch for the strongest focus signal.'}</p>
        </motion.div>

        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2 text-base"><CalendarClock className="h-4 w-4 text-cyan-200" /> Priority + Risk</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {topTask ? (
              <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.045] p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-white">{topTask.title}</p>
                  <Badge>{topTask.priorityScore}</Badge>
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-400">{topTask.priorityReason}</p>
              </div>
            ) : <p className="text-sm text-slate-400">No priority tasks yet.</p>}
            {topRisk && (
              <div className="rounded-[1.2rem] border border-rose-300/15 bg-rose-400/[0.055] p-3">
                <div className="flex items-center gap-2 text-sm font-medium text-rose-100">
                  <AlertTriangle className="h-4 w-4" />
                  {topRisk.riskLevel.toLowerCase()} risk
                </div>
                <p className="mt-2 text-sm text-white">{topRisk.title}</p>
                <p className="mt-1 text-xs text-slate-300">Miss likelihood {topRisk.riskDetails?.likelihood ?? 0}% · {topRisk.riskDetails?.recommendedDailyHours ?? 0}h/day recommended</p>
              </div>
            )}
            <div className="h-24">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={logs}>
                  <Bar dataKey="focus" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
