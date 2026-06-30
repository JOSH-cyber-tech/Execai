import { GoalsView } from '@/components/dashboard/GoalsView';

export default function GoalsPage() {
  return (
    <div className="h-full flex flex-col">
      <h1 className="page-title">Goals & Projects</h1>
      <p className="page-subtitle">Break down big goals into manageable tasks.</p>
      
      <div className="mt-8 flex-1">
        <GoalsView />
      </div>
    </div>
  );
}
