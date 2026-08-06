import Link from "next/link";

export default function AIAssistantButton({
  variant = "primary",
  children,
}: {
  variant?: "primary" | "outline";
  children: React.ReactNode;
}) {
  const base = "rounded-lg px-6 py-3 font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-green-600 text-white hover:bg-green-700"
      : "border border-slate-300 text-slate-700 hover:bg-slate-50";

  return (
    <Link href="/assistant" className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}