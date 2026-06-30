'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Target, CalendarDays, CheckCircle2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCreateGoal, useGoals } from '@/hooks/useExecAI';
import Link from 'next/link';

type Goal = {
  id: string;
  title: string;
  deadline: string;
  progress: number;
  tasksCount: number;
  tasksCompleted: number;
};

export function GoalsView() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { data: goals = [], isLoading } = useGoals() as { data?: Goal[]; isLoading: boolean };
  const createGoal = useCreateGoal();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    createGoal.mutate({ title, description, days: 7 }, {
      onSuccess: () => {
        setTitle('');
        setDescription('');
      }
    });
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {isLoading && <p className="text-sm text-slate-400">Loading goals...</p>}
      {goals.map((goal) => (
        <Card key={goal.id}>
          <CardHeader className="border-b border-white/10 pb-3">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <div className="rounded-2xl border border-cyan-200/15 bg-cyan-300/10 p-2 text-cyan-100">
                  <Target className="h-4 w-4" />
                </div>
                <CardTitle className="text-lg font-medium text-white">{goal.title}</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <CalendarDays className="h-4 w-4" />
              <span>Due: {new Date(goal.deadline).toLocaleDateString()}</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-slate-200">Progress</span>
                <span className="text-slate-400">{goal.progress}%</span>
              </div>
              <Progress value={goal.progress} className="h-2" />
            </div>

            <div className="flex items-center gap-2 border-t border-white/10 pt-2 text-sm text-slate-400">
              <CheckCircle2 className="h-4 w-4 text-cyan-200" />
              <span>{goal.tasksCompleted} / {goal.tasksCount} tasks completed</span>
            </div>
            
            <Button asChild variant="outline" className="w-full">
              <Link href={`/goals/${goal.id}`}>View Tasks</Link>
            </Button>
          </CardContent>
        </Card>
      ))}

      <Card className="min-h-[250px] border-2 border-dashed border-cyan-200/20 bg-white/[0.025]">
        <form onSubmit={handleSubmit} className="p-5 space-y-3">
          <div className="flex items-center gap-2 text-cyan-100">
            <Plus className="h-5 w-5" />
            <p className="font-medium">Create New Goal</p>
          </div>
          <Input placeholder="Goal title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <Textarea placeholder="What outcome are you aiming for?" value={description} onChange={(e) => setDescription(e.target.value)} />
          <Button type="submit" className="w-full" disabled={createGoal.isPending}>
            {createGoal.isPending ? 'Building plan...' : 'Generate Plan'}
          </Button>
        </form>
      </Card>
    </div>
  );
}
