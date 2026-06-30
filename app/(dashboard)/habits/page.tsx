'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useCompleteHabit, useCreateHabit, useHabits } from '@/hooks/useExecAI';
import { Activity, Flame, Plus } from 'lucide-react';

type Habit = {
  id: string;
  name: string;
  currentStreak: number;
};

export default function HabitsPage() {
  const [name, setName] = useState('');
  const { data: habits = [], isLoading } = useHabits() as { data?: Habit[]; isLoading: boolean };
  const createHabit = useCreateHabit();
  const completeHabit = useCompleteHabit();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    createHabit.mutate({ name }, { onSuccess: () => setName('') });
  }

  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="page-title">Habits</h1>
        <p className="page-subtitle">Track repeatable actions that support execution.</p>
      </div>
      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><Plus className="h-5 w-5" />New Habit</CardTitle></CardHeader>
        <CardContent>
          <form onSubmit={submit} className="flex gap-2">
            <Input placeholder="Read 20 minutes, review tasks, exercise..." value={name} onChange={(e) => setName(e.target.value)} />
            <Button disabled={createHabit.isPending}>Add</Button>
          </form>
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {isLoading && <p className="text-sm text-slate-400">Loading habits...</p>}
        {habits.map((habit) => (
          <Card key={habit.id}>
            <CardHeader><CardTitle className="flex items-center gap-2 text-lg text-white"><Activity className="h-5 w-5 text-cyan-200" />{habit.name}</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-slate-400"><Flame className="h-4 w-4 text-cyan-200" />{habit.currentStreak} day streak</div>
              <Button variant="outline" className="w-full" onClick={() => completeHabit.mutate(habit.id)}>Mark Today Complete</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
