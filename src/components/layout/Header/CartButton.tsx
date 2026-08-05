import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function CartButton() {
  return (
    <Link
      href="/cart"
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:bg-slate-100"
    >
      <ShoppingCart size={18} />

      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-[10px] font-bold text-white">
        2
      </span>
    </Link>
  );
}