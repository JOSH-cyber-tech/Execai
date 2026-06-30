'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useTasks } from '@/hooks/useExecAI';

type Task = {
  deadline?: string | null;
  status: string;
};

export function ProgressRing() {
  const { data: tasks = [] } = useTasks() as { data?: Task[] };
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const todayTasks = tasks.filter((task) => {
    if (!task.deadline) return false;
    const deadline = new Date(task.deadline);
    return deadline >= today && deadline < tomorrow;
  });
  const completed = todayTasks.filter((task) => task.status === 'completed').length;
  const percentage = todayTasks.length === 0 ? 0 : Math.round((completed / todayTasks.length) * 100);
  const radius = 40;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <Card className="overflow-hidden text-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-cyan-50">Today&apos;s Progress</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <div className="relative flex items-center justify-center">
          <svg className="h-24 w-24 -rotate-90 transform drop-shadow-[0_0_18px_rgba(87,216,255,0.35)]">
            <circle
              cx="48"
              cy="48"
              r={radius}
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-white/10"
            />
            <circle
              cx="48"
              cy="48"
              r={radius}
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="text-cyan-200 transition-all duration-1000 ease-out"
            />
          </svg>
          <span className="absolute text-2xl font-semibold">{percentage}%</span>
        </div>
        <div className="text-right">
          <p className="text-3xl font-semibold">{completed}/{todayTasks.length}</p>
          <p className="mt-1 text-sm text-cyan-100/65">Tasks Completed</p>
        </div>
      </CardContent>
    </Card>
  );
}
