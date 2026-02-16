"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/tgix", label: "A propos" },
  { href: "/membres", label: "Membres" },
  { href: "/services", label: "Services" },
  { href: "/architecture", label: "Architecture" },
  { href: "/publications", label: "Publications" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-0.5 group relative">
              <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-tgix-dark' : 'text-white'}`}>
                tgi
              </span>
              <span className="text-2xl font-black text-tgix-green transition-transform duration-300 group-hover:scale-110">
                X
              </span>
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-tgix-green transition-all duration-300 ${pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 rounded-full ${
                      isActive
                        ? "text-tgix-green"
                        : scrolled
                          ? "text-tgix-dark/70 hover:text-tgix-dark"
                          : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-tgix-green/10 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <Link
              href="/contact"
              className={`hidden lg:flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold rounded-full transition-all duration-300 ${
                scrolled
                  ? "bg-tgix-dark text-white hover:bg-tgix-navy"
                  : "bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20"
              }`}
            >
              Nous contacter
              <ChevronRight size={14} />
            </Link>

            {/* Mobile toggle */}
            <button
              className={`lg:hidden p-2 rounded-xl transition-colors ${scrolled ? 'text-tgix-dark' : 'text-white'}`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-tgix-dark/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <Link href="/" className="flex items-center gap-0.5" onClick={() => setMobileOpen(false)}>
                  <span className="text-xl font-bold text-tgix-dark">tgi</span>
                  <span className="text-2xl font-black text-tgix-green">X</span>
                </Link>
                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-xl hover:bg-gray-100 transition-colors">
                  <X size={20} className="text-tgix-dark" />
                </button>
              </div>
              <div className="p-4 space-y-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                        pathname === item.href
                          ? "bg-tgix-green/10 text-tgix-green"
                          : "text-tgix-dark hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                      <ChevronRight size={16} className="opacity-30" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-tgix-dark text-white text-sm font-semibold rounded-xl hover:bg-tgix-navy transition-colors"
                >
                  Nous contacter
                  <ChevronRight size={14} />
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
