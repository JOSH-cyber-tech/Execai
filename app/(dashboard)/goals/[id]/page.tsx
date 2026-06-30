'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGoals } from '@/hooks/useExecAI';
import { useParams } from 'next/navigation';

type Milestone = {
  id: string;
  title: string;
  targetDate: string;
};

type Goal = {
  id: string;
  title: string;
  description?: string | null;
  milestones?: Milestone[];
};

export default function GoalDetailPage() {
  const params = useParams();
  const { data: goals = [] } = useGoals() as { data?: Goal[] };
  const goal = goals.find((item) => item.id === params?.id);

  if (!goal) {
    return <p className="text-sm text-slate-400">Loading goal...</p>;
  }

  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="page-title">{goal.title}</h1>
        <p className="page-subtitle">{goal.description || 'AI-generated execution plan'}</p>
      </div>
      <Card>
        <CardHeader><CardTitle>Milestones</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {goal.milestones?.map((milestone) => (
            <div key={milestone.id} className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-4">
              <p className="font-medium text-white">{milestone.title}</p>
              <p className="text-sm text-slate-400">Target {new Date(milestone.targetDate).toLocaleDateString()}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
