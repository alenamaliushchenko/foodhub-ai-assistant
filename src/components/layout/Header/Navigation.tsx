"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/deals",
    label: "Deals",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/assistant",
    label: "AI Assistant",
  },
  {
    href: "/about",
    label: "About",
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-2">
      {navigationLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`
              relative rounded-full px-5 py-2.5
              text-sm font-medium tracking-wide
              transition-all duration-300

              ${
                isActive
                  ? "bg-green-600 text-white shadow-md shadow-green-200"
                  : "text-slate-600 hover:bg-green-50 hover:text-green-700"
              }
            `}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}