"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "TGIX" },
  { href: "/membres", label: "MEMBRES" },
  { href: "/services", label: "SERVICES ET TARIFS" },
  { href: "/architecture", label: "ARCHITECTURE TECHNIQUE DU TGIX" },
  { href: "/actualites", label: "ACTUALITES ET EVENT" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-1 font-bold text-xl">
            <span className="text-tgix-dark">tgi</span>
            <span className="text-tgix-green text-2xl font-extrabold">X</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-semibold tracking-wide transition-colors hover:text-tgix-green ${
                  pathname === item.href
                    ? "text-tgix-green"
                    : "text-tgix-dark"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-tgix-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 text-sm font-semibold ${
                pathname === item.href
                  ? "text-tgix-green"
                  : "text-tgix-dark"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
