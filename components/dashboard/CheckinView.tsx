'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Moon, Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
import { useSubmitCheckIn } from '@/hooks/useExecAI';

export function CheckinView() {
  const [reflection, setReflection] = useState('');
  const [obstacles, setObstacles] = useState('');
  const [tomorrowPlan, setTomorrowPlan] = useState('');
  const [coachResponse, setCoachResponse] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submitCheckIn = useSubmitCheckIn();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitCheckIn.mutate({ reflection, obstacles, tomorrowPlan }, {
      onSuccess: (data) => {
        setCoachResponse(data.coachResponse);
        setSubmitted(true);
      }
    });
  };

  if (submitted && coachResponse) {
    return (
      <Card className="w-full overflow-hidden">
        <CardHeader className="border-b border-white/10 bg-cyan-300/5 text-white">
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-cyan-200" />
            Check-in Complete!
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-100/60">AI Coach Response</p>
          <div className="rounded-[1.35rem] border border-cyan-200/15 bg-white/[0.045] p-4">
            <p className="leading-relaxed text-slate-100">{coachResponse}</p>
          </div>
          <Button 
            variant="outline" 
            className="w-full mt-4"
            onClick={() => { setSubmitted(false); setCoachResponse(''); setReflection(''); setObstacles(''); setTomorrowPlan(''); }}
          >
            Do Another Check-in
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader className="border-b border-white/10 bg-cyan-300/5 text-white">
        <CardTitle className="flex items-center gap-2">
          <Moon className="h-5 w-5 text-cyan-200" />
          End of Day Reflection
        </CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-3">
            <Label htmlFor="reflection" className="text-sm font-medium text-slate-300">What did you accomplish today?</Label>
            <Textarea 
              id="reflection"
              placeholder="I finished the MVP features and..."
              className="min-h-[100px] resize-none"
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="obstacles" className="text-sm font-medium text-slate-300">What blocked you or slowed you down?</Label>
            <Textarea 
              id="obstacles"
              placeholder="I got distracted by..."
              className="min-h-[80px] resize-none"
              value={obstacles}
              onChange={(e) => setObstacles(e.target.value)}
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="tomorrowPlan" className="text-sm font-medium text-slate-300">What&apos;s the main priority for tomorrow?</Label>
            <Textarea 
              id="tomorrowPlan"
              placeholder="Tomorrow I need to focus on..."
              className="min-h-[80px] resize-none"
              value={tomorrowPlan}
              onChange={(e) => setTomorrowPlan(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t border-white/10 bg-white/[0.035] p-4">
          <p className="flex items-center gap-1 text-sm text-slate-400">
            <Sparkles className="h-4 w-4 text-cyan-200" />
            AI will analyze and respond
          </p>
          <Button type="submit" disabled={submitCheckIn.isPending}>
            {submitCheckIn.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {submitCheckIn.isPending ? 'Submitting...' : 'Submit Check-in'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
