import Image from "next/image";
import Link from "next/link";

export default function Logo({
  size = "default",
}: {
  size?: "default" | "compact";
}) {
  const isCompact = size === "compact";

  return (
    <Link
      href="/"
      className="flex items-center gap-3 transition-opacity hover:opacity-90"
      aria-label="FoodHub AI Assistant"
    >
      <Image
        src="/logo/logo.svg"
        alt="FoodHub Logo"
        width={isCompact ? 24 : 40}
        height={isCompact ? 24 : 40}
        priority
      />

      <div className="leading-none">
        <h1
          className={
            isCompact
              ? "text-base font-bold text-slate-900"
              : "text-xl font-bold tracking-tight text-slate-900"
          }
        >
          FoodHub
        </h1>

        {!isCompact && (
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-green-600">
            AI Assistant
          </p>
        )}
      </div>
    </Link>
  );
}