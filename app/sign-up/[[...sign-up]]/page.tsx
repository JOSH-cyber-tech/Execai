import { SignUp } from "@clerk/nextjs";
import { Sparkles } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className="relative flex min-h-screen overflow-hidden bg-[#050816] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(61,126,255,0.22),transparent_30rem),radial-gradient(circle_at_76%_24%,rgba(87,216,255,0.1),transparent_26rem),linear-gradient(135deg,#050816,#07101e_48%,#0a1128)]" />
      <div className="neural-grid pointer-events-none absolute -inset-20 opacity-80" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-35" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M12 36 L25 41 L36 68 L62 32 L86 84" fill="none" stroke="url(#auth-line)" strokeWidth="0.12" />
        <circle cx="12" cy="36" r="0.7" fill="#57D8FF" />
        <circle cx="25" cy="41" r="0.5" fill="#57D8FF" />
        <circle cx="36" cy="68" r="0.6" fill="#57D8FF" />
        <circle cx="62" cy="32" r="0.8" fill="#57D8FF" />
        <circle cx="86" cy="84" r="0.6" fill="#57D8FF" />
        <defs>
          <linearGradient id="auth-line" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#57D8FF" stopOpacity="0.26" />
            <stop offset="1" stopColor="#3D7EFF" stopOpacity="0.36" />
          </linearGradient>
        </defs>
      </svg>
      <section className="relative z-10 hidden flex-1 flex-col justify-between p-10 lg:flex">
        <div className="flex items-center gap-3">
          <div className="ai-orb flex h-12 w-12 items-center justify-center rounded-2xl animate-orb-breathe">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-semibold text-white">ExecAI</p>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/45">Assistant OS</p>
          </div>
        </div>
        <div className="max-w-xl pb-10">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.32em] text-cyan-100/45">Neural workspace</p>
          <h1 className="page-title">Build your execution OS.</h1>
          <p className="page-subtitle">A calm command layer for tasks, goals, schedules, check-ins, and momentum.</p>
        </div>
      </section>
      <section className="relative z-10 flex min-h-screen w-full items-center justify-center px-4 py-10 lg:w-[34rem] lg:justify-start lg:pr-10">
        <SignUp
          appearance={{
            elements: {
              card: "glass-panel rounded-[1.75rem] border-white/10 bg-transparent shadow-2xl",
              headerTitle: "text-white",
              headerSubtitle: "text-slate-300",
              socialButtonsBlockButton: "rounded-2xl border-white/10 bg-white/[0.06] text-slate-100 hover:bg-white/[0.1]",
              dividerLine: "bg-white/10",
              dividerText: "text-slate-400",
              formFieldLabel: "text-slate-300",
              formFieldInput: "rounded-2xl border-cyan-200/15 bg-white/[0.045] text-slate-100",
              footerActionText: "text-slate-400",
              footerActionLink: "text-cyan-200 hover:text-white",
              formButtonPrimary: "electric-button rounded-2xl",
            },
          }}
        />
      </section>
    </div>
  );
}
