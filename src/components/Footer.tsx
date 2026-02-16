"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube, ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

const partenaires = [
  { name: "Ministeres", initials: "MIN" },
  { name: "ARCEP", initials: "ARCEP" },
  { name: "AFRINIC", initials: "AFRINIC" },
  { name: "PCH", initials: "PCH" },
  { name: "PeeringDB", initials: "PDB" },
  { name: "AFIX", initials: "AFIX" },
];

const quickLinks = [
  { href: "/tgix", label: "A propos" },
  { href: "/membres", label: "Membres" },
  { href: "/services", label: "Services et Tarifs" },
  { href: "/publications", label: "Publications" },
];

const resources = [
  { href: "/faq", label: "FAQ" },
  { href: "/architecture", label: "Architecture technique" },
  { href: "/contact", label: "Support" },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative bg-tgix-dark text-white overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-tgix-green/40 to-transparent" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-tgix-green/3 rounded-full blur-[120px] pointer-events-none" />

      {/* Partners marquee */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-tgix-green mb-8 text-center">
            Nos Partenaires
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {partenaires.map((p) => (
              <div
                key={p.name}
                className="group px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-tgix-green/30 hover:bg-white/[0.06] transition-all duration-500 cursor-default"
              >
                <span className="text-sm font-bold text-white/80 group-hover:text-tgix-green transition-colors duration-300">
                  {p.initials}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-0.5 mb-6">
              <span className="text-2xl font-bold text-white">tgi</span>
              <span className="text-3xl font-black text-tgix-green">X</span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Connecter l&apos;avenir numerique de l&apos;Afrique grace a une infrastructure d&apos;echange Internet de classe mondiale.
            </p>
            <div className="flex gap-2 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:bg-tgix-green/10 hover:border-tgix-green/30 transition-all duration-300 group"
                >
                  <s.icon size={15} className="text-white/40 group-hover:text-tgix-green transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-5">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {l.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-5">Ressources</h3>
            <ul className="space-y-3">
              {resources.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {l.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-5">Newsletter</h3>
            <p className="text-sm text-white/40 mb-4">
              Restez informe de nos dernieres nouvelles.
            </p>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-white/25 focus:border-tgix-green/40 focus:bg-white/[0.06] transition-all duration-300"
                />
              </div>
              <button className="px-5 py-3 bg-tgix-green text-tgix-dark font-semibold text-sm rounded-xl hover:bg-tgix-green-dark transition-colors duration-300 shrink-0">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} TGIX. Tous droits reserves.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">Confidentialite</Link>
            <Link href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">Conditions</Link>
            <Link href="/contact" className="text-xs text-white/25 hover:text-white/50 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
