'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAnalytics } from '@/hooks/useExecAI';
import { BarChart, Bar, LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

type ProductivityLog = {
  date: string;
  completionRate: number;
  focusMinutes?: number;
};

type AnalyticsData = {
  logs: ProductivityLog[];
  completionRate: number;
  completedTasks: number;
  habits: unknown[];
};

export default function AnalyticsPage() {
  const { data, isLoading } = useAnalytics() as { data?: AnalyticsData; isLoading: boolean };
  const logs = data?.logs?.map((log) => ({
    date: new Date(log.date).toLocaleDateString([], { month: 'short', day: 'numeric' }),
    completion: Math.round(log.completionRate),
    focus: Math.round((log.focusMinutes || 0) / 60),
  })) || [];

  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="page-title">Analytics</h1>
        <p className="page-subtitle">Execution trends from your tasks, check-ins, and habits.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card><CardHeader><CardTitle className="text-base text-slate-300">Completion Rate</CardTitle></CardHeader><CardContent className="text-3xl font-semibold text-white">{isLoading ? '-' : `${data?.completionRate || 0}%`}</CardContent></Card>
        <Card><CardHeader><CardTitle className="text-base text-slate-300">Tasks Completed</CardTitle></CardHeader><CardContent className="text-3xl font-semibold text-white">{data?.completedTasks || 0}</CardContent></Card>
        <Card><CardHeader><CardTitle className="text-base text-slate-300">Active Habits</CardTitle></CardHeader><CardContent className="text-3xl font-semibold text-white">{data?.habits?.length || 0}</CardContent></Card>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Completion Trend</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={logs}><XAxis dataKey="date" stroke="rgba(203,213,225,0.45)" /><YAxis stroke="rgba(203,213,225,0.45)" /><Tooltip contentStyle={{ background: 'rgba(7,16,30,0.88)', border: '1px solid rgba(87,216,255,0.18)', borderRadius: 18, color: '#f8fafc' }} /><Line type="monotone" dataKey="completion" stroke="#57D8FF" strokeWidth={3} dot={{ fill: '#57D8FF', strokeWidth: 0, r: 4 }} /></LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Focus Hours</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={logs}><XAxis dataKey="date" stroke="rgba(203,213,225,0.45)" /><YAxis stroke="rgba(203,213,225,0.45)" /><Tooltip contentStyle={{ background: 'rgba(7,16,30,0.88)', border: '1px solid rgba(87,216,255,0.18)', borderRadius: 18, color: '#f8fafc' }} /><Bar dataKey="focus" fill="#3D7EFF" radius={[10, 10, 0, 0]} /></BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
