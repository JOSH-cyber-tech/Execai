'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useCreateScheduleBlock, useSchedule } from '@/hooks/useExecAI';
import { CalendarClock, Plus } from 'lucide-react';

type ScheduleBlock = {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
};

export default function SchedulePage() {
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const { data: blocks = [], isLoading } = useSchedule() as { data?: ScheduleBlock[]; isLoading: boolean };
  const createBlock = useCreateScheduleBlock();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !startTime || !endTime) return;
    createBlock.mutate({ title, startTime: new Date(startTime).toISOString(), endTime: new Date(endTime).toISOString() }, {
      onSuccess: () => {
        setTitle('');
        setStartTime('');
        setEndTime('');
      }
    });
  }

  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="page-title">Schedule</h1>
        <p className="page-subtitle">Plan focused work blocks for the week.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Plus className="h-5 w-5" />Add Block</CardTitle></CardHeader>
          <CardContent>
            <form onSubmit={submit} className="space-y-3">
              <Input placeholder="Focus block title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <Input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
              <Input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
              <Button className="w-full" disabled={createBlock.isPending}>Schedule</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><CalendarClock className="h-5 w-5" />Upcoming Blocks</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {isLoading && <p className="text-sm text-slate-400">Loading schedule...</p>}
            {blocks.length === 0 && !isLoading && <p className="text-sm text-slate-400">No blocks scheduled yet.</p>}
            {blocks.map((block) => (
              <div key={block.id} className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/25">
                <p className="font-medium text-white">{block.title}</p>
                <p className="mt-1 text-sm text-slate-400">{new Date(block.startTime).toLocaleString()} - {new Date(block.endTime).toLocaleTimeString()}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
