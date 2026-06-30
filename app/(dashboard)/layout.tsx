import { Sidebar } from '@/components/shared/Sidebar';
import { Header } from '@/components/shared/Header';
import { ElectronTokenSync } from '@/components/shared/ElectronTokenSync';
import { NeuralBackground } from '@/components/shared/NeuralBackground';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-[#050816] text-slate-100">
      <ElectronTokenSync />
      <NeuralBackground />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_48%_0%,rgba(61,126,255,0.1),transparent_34rem),linear-gradient(180deg,rgba(5,8,22,0.12),rgba(5,8,22,0.82))]" />
      <Sidebar />
      <div className="relative z-10 flex min-w-0 flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto px-4 pb-8 pt-3 md:px-8 lg:px-10">
          <div className="mx-auto h-full max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
