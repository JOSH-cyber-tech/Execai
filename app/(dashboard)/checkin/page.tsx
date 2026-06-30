import { CheckinView } from '@/components/dashboard/CheckinView';

export default function CheckinPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center max-w-2xl mx-auto py-12">
      <div className="w-full text-center mb-8">
        <h1 className="page-title">Evening Check-in</h1>
        <p className="page-subtitle mx-auto">Reflect on your day and plan for tomorrow.</p>
      </div>
      
      <div className="w-full">
        <CheckinView />
      </div>
    </div>
  );
}
