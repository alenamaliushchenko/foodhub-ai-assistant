import { Sparkles, Leaf, Truck, ShieldCheck } from "lucide-react";

const features = [
  { icon: Sparkles, title: "AI Recommendations", subtitle: "Personalized picks just for you" },
  { icon: Leaf, title: "Fresh & Quality", subtitle: "Handpicked products daily" },
  { icon: Truck, title: "Fast Delivery", subtitle: "At your doorstep" },
  { icon: ShieldCheck, title: "Secure Payments", subtitle: "100% safe & secure" },
];

export default function HeroFeatures() {
  return (
    <div className="mt-14 grid grid-cols-2 gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-4">
      {features.map(({ icon: Icon, title, subtitle }) => (
        <div key={title} className="flex flex-col gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-500 text-green-600">
            <Icon className="h-5 w-5" strokeWidth={2} />
          </span>
          <span className="text-sm font-semibold text-slate-800">{title}</span>
          <span className="text-xs text-slate-500">{subtitle}</span>
        </div>
      ))}
    </div>
  );
}