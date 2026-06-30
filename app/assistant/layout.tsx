export default function AssistantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-transparent h-screen w-screen overflow-hidden text-black font-sans">
      {children}
    </div>
  );
}
