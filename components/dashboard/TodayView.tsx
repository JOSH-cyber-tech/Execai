'use client';

import { useMemo, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PlusCircle, Clock, AlertTriangle, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useTasks, useQuickAddTask, useUpdateTask } from '@/hooks/useExecAI';
import { previewDeadline } from '@/lib/deadlinePreview';

type Task = {
  id: string;
  title: string;
  deadline: string;
  priority: string;
  riskLevel: string;
  status: string;
  priorityScore?: number;
  priorityReason?: string;
  riskReason?: string;
};

export function TodayView() {
  const [newTask, setNewTask] = useState('');
  const { data: tasks, isLoading, isError } = useTasks();
  const quickAdd = useQuickAddTask();
  const updateTask = useUpdateTask();
  const detectedDeadline = useMemo(() => previewDeadline(newTask), [newTask]);

  const handleQuickAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    quickAdd.mutate(newTask, {
      onSuccess: () => setNewTask('')
    });
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const todayTasks = tasks?.filter((t: Task) => {
    const dl = new Date(t.deadline);
    return dl >= today && dl < tomorrow && t.status !== 'completed';
  }) ?? [];

  return (
    <Card className="flex h-full min-h-[36rem] flex-col overflow-hidden">
      <CardHeader className="sticky top-0 z-10 border-b border-white/10 bg-[#07101e]/55 backdrop-blur-2xl">
        <CardTitle className="flex items-center gap-3 text-xl text-white">
          <span className="ai-orb flex h-9 w-9 items-center justify-center rounded-2xl">
            <Sparkles className="h-4 w-4" />
          </span>
          Prioritized Tasks
          {todayTasks.length > 0 && (
            <Badge className="ml-1">{todayTasks.length}</Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 md:p-5">
        {/* Quick Add */}
        <form onSubmit={handleQuickAdd} className="flex flex-col gap-3 sm:flex-row">
          <Input 
            placeholder='Try "Finish report by 5pm" or "Review code in 30 mins"' 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1"
            disabled={quickAdd.isPending}
          />
          <Button type="submit" disabled={quickAdd.isPending}>
            {quickAdd.isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <PlusCircle className="mr-2 h-4 w-4" />
            )}
            {quickAdd.isPending ? 'Adding...' : 'Add'}
          </Button>
        </form>
        {detectedDeadline && (
          <div className="rounded-[1.2rem] border border-cyan-200/15 bg-cyan-300/[0.055] px-4 py-3 text-sm text-slate-200">
            <span className="font-medium text-cyan-100">Deadline detected:</span>{' '}
            {detectedDeadline.dateLabel} · {detectedDeadline.timeLabel}
          </div>
        )}
        {quickAdd.data?.deadlinePreview?.hasDeadline && (
          <div className="rounded-[1.2rem] border border-fuchsia-200/15 bg-fuchsia-300/[0.055] px-4 py-3 text-sm text-slate-200">
            Saved with deadline: <span className="font-medium text-white">{quickAdd.data.deadlinePreview.dateLabel} · {quickAdd.data.deadlinePreview.timeLabel}</span>
          </div>
        )}

        {/* Task List */}
        <div className="flex flex-col gap-3 mt-4">
          {isLoading && (
            <>
              {[1, 2, 3].map(i => (
                <Skeleton key={i} className="h-16 w-full rounded-xl" />
              ))}
            </>
          )}

          {isError && (
            <div className="py-8 text-center text-slate-400">
              <p>Could not load tasks. Is the backend running?</p>
            </div>
          )}

          {!isLoading && !isError && todayTasks.length === 0 && (
            <div className="rounded-[1.5rem] border border-cyan-200/10 bg-white/[0.035] py-12 text-center text-slate-400">
              <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-cyan-200/60" />
              <p className="font-medium text-slate-100">All clear for today.</p>
              <p className="mt-1 text-sm">Add a task above to get started.</p>
            </div>
          )}

          {todayTasks.sort((a: Task, b: Task) => (b.priorityScore || 0) - (a.priorityScore || 0)).map((task: Task) => (
            <div 
              key={task.id} 
              className="group flex items-center justify-between rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-4 shadow-lg shadow-blue-950/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-white/[0.075] hover:shadow-blue-500/15"
            >
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  aria-label={`Mark ${task.title} complete`}
                  onClick={() => updateTask.mutate({ id: task.id, status: 'completed' })}
                  className="h-5 w-5 flex-shrink-0 cursor-pointer rounded-lg border border-cyan-200/25 bg-cyan-200/5 shadow-[0_0_16px_rgba(87,216,255,0.08)] transition group-hover:border-cyan-200/70 group-hover:bg-cyan-200/15"
                />
                <div>
                  <p className="font-medium text-white">{task.title}</p>
                  <div className="mt-1 flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {new Date(task.deadline).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </span>
                    {task.priorityReason && <span className="hidden md:inline">{task.priorityReason}</span>}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {['critical', 'high'].includes(task.riskLevel) && (
                  <Badge variant="destructive" className="flex items-center gap-1">
                    <AlertTriangle className="h-3 w-3" /> {task.riskLevel} Risk
                  </Badge>
                )}
                {(task.priority === 'high' || task.priority === 'critical') && (
                  <Badge>{task.priorityScore || 'High'} Priority</Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
