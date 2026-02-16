"use client";

import { motion } from "framer-motion";

export default function PageBanner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="banner-bg relative overflow-hidden">
      <div className="banner-overlay relative py-32 md:py-40">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-tgix-green/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-tgix-green/3 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.02]">
            <div className="w-full h-full border border-white/20 rounded-full" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-tgix-green" />
              <span className="text-tgix-green text-xs font-semibold tracking-[0.2em] uppercase">TGIX</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-white/60 text-lg max-w-2xl">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
