'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTasks, useUpdateTask } from '@/hooks/useExecAI';
import { CheckCircle2, Clock } from 'lucide-react';

type Task = {
  id: string;
  title: string;
  deadline?: string | null;
  priority: string;
  status: string;
};

export default function TasksPage() {
  const { data: tasks = [], isLoading } = useTasks() as { data?: Task[]; isLoading: boolean };
  const updateTask = useUpdateTask();

  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="page-title">All Tasks</h1>
        <p className="page-subtitle">Every commitment ExecAI is tracking for you.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Task Queue</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {isLoading && <p className="text-sm text-slate-400">Loading tasks...</p>}
          {tasks.length === 0 && !isLoading && <p className="text-sm text-slate-400">No tasks yet. Add one from Today.</p>}
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-4 shadow-lg shadow-blue-950/20 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/25 hover:bg-white/[0.07]">
              <div>
                <p className="font-medium text-white">{task.title}</p>
                <div className="mt-1 flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{task.deadline ? new Date(task.deadline).toLocaleString() : 'No deadline'}</span>
                  <Badge variant="outline">{task.priority}</Badge>
                  <Badge variant={task.status === 'completed' ? 'default' : 'secondary'}>{task.status}</Badge>
                </div>
              </div>
              {task.status !== 'completed' && (
                <Button variant="outline" size="sm" onClick={() => updateTask.mutate({ id: task.id, status: 'completed' })}>
                  <CheckCircle2 className="mr-2 h-4 w-4" />Done
                </Button>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
