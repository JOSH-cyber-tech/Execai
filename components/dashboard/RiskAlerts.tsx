'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertTriangle, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTasks } from '@/hooks/useExecAI';

type Task = {
  id: string;
  title: string;
  deadline?: string | null;
  riskLevel: string;
  status: string;
  riskDetails?: {
    likelihood: number;
    remainingHours: number;
    recommendedDailyHours: number;
  };
};

export function RiskAlerts() {
  const { data: tasks = [] } = useTasks() as { data?: Task[] };
  const riskyTasks = tasks.filter((task) => ['critical', 'high', 'medium'].includes(task.riskLevel) && task.status !== 'completed').slice(0, 3);

  return (
    <Card>
      <CardHeader className="border-b border-white/10 pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-medium text-white">
          <AlertTriangle className="h-5 w-5 text-cyan-200" />
          AI Risk Alerts
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        {riskyTasks.length === 0 && <p className="text-sm text-slate-400">No deadline risks detected right now.</p>}
        {riskyTasks.map((task) => (
          <div key={task.id} className="rounded-[1.2rem] border border-white/10 bg-white/[0.045] p-3">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-2xl border border-cyan-200/15 bg-cyan-300/10 p-2 text-cyan-100 shadow-[0_0_24px_rgba(87,216,255,0.12)]">
                <TrendingDown className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">{task.title}</h4>
                <p className="mt-1 text-sm text-slate-300/75">
                  Risk: {task.riskLevel}. Due {task.deadline ? new Date(task.deadline).toLocaleString() : 'soon'}.
                </p>
                {task.riskDetails && (
                  <p className="mt-1 text-xs text-rose-100/80">
                    {task.riskDetails.remainingHours}h work · {task.riskDetails.recommendedDailyHours}h/day · {task.riskDetails.likelihood}% miss likelihood
                  </p>
                )}
                <Button variant="outline" size="sm" className="mt-3 h-8 text-xs">
                  Review schedule
                </Button>
              </div>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-rose-400 transition-all"
                style={{ width: `${task.riskDetails?.likelihood || (task.riskLevel === 'critical' ? 92 : task.riskLevel === 'high' ? 72 : 44)}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
