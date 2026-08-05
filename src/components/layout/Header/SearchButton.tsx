import { Search } from "lucide-react";

export default function SearchButton() {
  return (
    <button
      aria-label="Search"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:bg-slate-100"
    >
      <Search size={18} />
    </button>
  );
}