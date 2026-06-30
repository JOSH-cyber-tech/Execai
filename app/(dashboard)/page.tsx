'use client';

import { useState } from 'react';
import { TodayView } from '@/components/dashboard/TodayView';
import { ProgressRing } from '@/components/dashboard/ProgressRing';
import { RiskAlerts } from '@/components/dashboard/RiskAlerts';
import { AIDashboard } from '@/components/dashboard/AIDashboard';
import { SmartFocusMode } from '@/components/dashboard/SmartFocusMode';

export default function DashboardPage() {
  const [focusOpen, setFocusOpen] = useState(false);

  return (
    <div className="flex h-full flex-col">
      {focusOpen && <SmartFocusMode onClose={() => setFocusOpen(false)} />}
      <div className="pb-2">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.32em] text-cyan-100/45">Good evening, Hrishita</p>
        <h1 className="page-title">Ready to conquer today?</h1>
        <p className="page-subtitle">Your prioritized tasks, progress signal, and risk intelligence are quietly synchronized.</p>
      </div>
      
      <div className="mt-8 space-y-6 overflow-y-auto pr-1">
        <AIDashboard onStartFocus={() => setFocusOpen(true)} />
      </div>

      <div className="mt-6 grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="col-span-2 h-full">
          <TodayView />
        </div>
        <div className="space-y-6 h-full flex flex-col">
          <ProgressRing />
          <RiskAlerts />
        </div>
      </div>
    </div>
  );
}
