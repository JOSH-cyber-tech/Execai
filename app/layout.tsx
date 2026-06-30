import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider } from '@clerk/nextjs';
import { QueryProvider } from '@/components/providers/QueryProvider';
import { FloatingAssistant } from '@/components/assistant/FloatingAssistant';
import "./globals.css";

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ExecAI - Don't just plan. Execute.",
  description: "An AI-powered productivity companion that actively helps you plan, schedule, track, adapt, and complete tasks before deadlines are missed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} font-sans antialiased`}
      >
        <ClerkProvider>
          <QueryProvider>
            {children}
            <FloatingAssistant />
          </QueryProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
