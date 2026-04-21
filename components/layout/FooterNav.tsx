"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { href: string; label: string };

export function FooterNav({ items }: { items: readonly NavItem[] }) {
  const pathname = usePathname();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // If the link points to the page we're already on (e.g. clicking "Home"
    // from the footer while on the home page), Next.js won't navigate or
    // scroll — so we manually smooth-scroll to the top.
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <ul className="space-y-2">
      {items.map((n) => (
        <li key={n.href}>
          <Link
            href={n.href}
            onClick={(e) => handleClick(e, n.href)}
            className="text-sm text-ink-soft hover:text-orange transition-colors"
          >
            {n.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
