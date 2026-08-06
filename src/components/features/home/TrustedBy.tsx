import { FaGoogle, FaShopify, FaStripe, FaAws } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";

const brands = [
  { icon: FaGoogle, name: "Google", color: "text-[#4285F4]" },
  { icon: SiTrustpilot, name: "Trustpilot", color: "text-[#00B67A]" },
  { icon: FaShopify, name: "Shopify", color: "text-[#95BF47]" },
  { icon: FaStripe, name: "Stripe", color: "text-[#635BFF]" },
  { icon: FaAws, name: "AWS", color: "text-[#FF9900]" },
];

export default function TrustedBy() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 text-center md:px-8">
      <p className="mb-6 text-sm font-medium text-slate-400">
        Trusted by 10,000+ customers
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        {brands.map(({ icon: Icon, name, color }) => (
          <Icon
            key={name}
            className={`h-7 w-auto opacity-70 transition hover:opacity-100 ${color}`}
            title={name}
          />
        ))}
      </div>
    </section>
  );
}