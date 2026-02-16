"use client";

import { Globe, Wifi, Users, CheckCircle, Eye, Target, Heart, ArrowRight, ChevronRight, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { icon: Globe, value: "07", label: "AS connectes", suffix: "" },
  { icon: Wifi, value: "10", label: "Ports actifs", suffix: "" },
  { icon: Users, value: "04", label: "Utilisateurs RS", suffix: "" },
  { icon: CheckCircle, value: "100", label: "Disponibilite", suffix: "%" },
];

const members = [
  { name: "Moov Africa", initials: "MA" },
  { name: "GVA", initials: "GVA" },
  { name: "YAS", initials: "YAS" },
  { name: "CAFE Informatique", initials: "CAFE" },
  { name: "TEOLIS", initials: "TEO" },
];

const values = [
  { icon: Eye, title: "Notre vision", desc: "Un internet de qualite, performant et accessible a tous au Togo." },
  { icon: Target, title: "Notre mission", desc: "Offrir des infrastructures d'interconnexion neutres et promouvoir le developpement des contenus locaux." },
  { icon: Heart, title: "Nos valeurs", desc: "Professionnalisme, loyaute et transparence." },
];

const partners = ["Ministeres", "ARCEP", "AFRINIC", "PCH", "PeeringDB", "AFIX"];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-tgix-dark">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80')" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-tgix-darker/90 via-tgix-dark/80 to-tgix-dark" />

        {/* Decorative orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-tgix-green/5 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-tgix-green/3 rounded-full blur-[100px] pointer-events-none" />

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm mb-8">
              <Zap size={14} className="text-tgix-green" />
              <span className="text-xs font-medium text-white/60">Point d&apos;echange Internet du Togo</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.95]"
          >
            Le coeur de
            <br />
            <span className="gradient-text">l&apos;internet</span>
            <br />
            togolais
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 text-white/40 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            TGIX favorise une interconnexion rapide, securisee et locale entre les acteurs du numerique au Togo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <Link
              href="/tgix"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-tgix-green text-tgix-dark font-semibold text-sm rounded-full hover:shadow-[0_0_40px_rgba(46,232,165,0.3)] transition-all duration-500"
            >
              Decouvrir TGIX
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/[0.06] text-white font-semibold text-sm rounded-full border border-white/[0.1] hover:bg-white/[0.1] backdrop-blur-sm transition-all duration-500"
            >
              Nous contacter
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── Stats ── */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-tgix-green mb-4">
                <span className="w-8 h-[2px] bg-tgix-green" /> Chiffres cles
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-bold text-tgix-dark tracking-tight">
              TGIX en quelques chiffres
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="group relative p-8 rounded-3xl bg-tgix-light border border-transparent hover:border-tgix-green/20 transition-all duration-500 card-hover text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-tgix-green/10 flex items-center justify-center mb-5 group-hover:bg-tgix-green/20 transition-colors duration-500">
                  <s.icon size={24} className="text-tgix-green" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-tgix-dark tracking-tight">
                  {s.value}<span className="text-tgix-green">{s.suffix}</span>
                </div>
                <p className="text-sm text-tgix-muted mt-2 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Members ── */}
      <section className="relative py-24 md:py-32 bg-tgix-light overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-tgix-green/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-tgix-green mb-4">
                <span className="w-8 h-[2px] bg-tgix-green" /> Nos membres
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-bold text-tgix-dark tracking-tight mb-4">
              Membres connectes
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-tgix-muted max-w-2xl mx-auto">
              Rejoignez les principales entreprises de telecommunications et de technologie pour construire l&apos;infrastructure numerique du Togo.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
          >
            {members.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="group relative p-6 rounded-2xl bg-white border border-tgix-border hover:border-tgix-green/30 hover:shadow-lg transition-all duration-500 text-center card-hover"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-tgix-dark to-tgix-navy flex items-center justify-center mb-4 group-hover:from-tgix-green group-hover:to-tgix-green-dark transition-all duration-500">
                  <span className="text-white font-bold text-sm">{m.initials}</span>
                </div>
                <p className="text-sm font-semibold text-tgix-dark">{m.name}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/membres"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-tgix-dark hover:text-tgix-green transition-colors"
            >
              Voir tous les membres
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Interconnexion CTA ── */}
      <section className="relative py-24 md:py-32 bg-tgix-dark overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tgix-green/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-tgix-green mb-6">
              <span className="w-8 h-[2px] bg-tgix-green" /> Peering
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Une interconnexion
              <br />
              <span className="gradient-text">ouverte et equitable</span>
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              TGIX adopte une politique d&apos;echange de trafic multilateral, simple et transparente. Cela permet a tous les membres de reduire la complexite et d&apos;ameliorer la performance des contenus locaux.
            </p>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white/[0.06] text-white font-semibold text-sm rounded-full border border-white/[0.1] hover:bg-tgix-green hover:text-tgix-dark hover:border-tgix-green transition-all duration-500"
            >
              Consultez la politique complete
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Vision, Mission, Valeurs ── */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-tgix-green/3 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-tgix-green mb-4">
                <span className="w-8 h-[2px] bg-tgix-green" /> Qui sommes-nous
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-bold text-tgix-dark tracking-tight">
              Construire ensemble l&apos;avenir
              <br />du numerique togolais
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="group relative p-8 rounded-3xl bg-tgix-light border border-transparent hover:border-tgix-green/20 transition-all duration-500 card-hover"
              >
                <div className="w-14 h-14 rounded-2xl bg-tgix-green/10 flex items-center justify-center mb-6 group-hover:bg-tgix-green/20 transition-colors duration-500">
                  <v.icon size={24} className="text-tgix-green" />
                </div>
                <h3 className="text-lg font-bold text-tgix-dark mb-3">{v.title}</h3>
                <p className="text-sm text-tgix-muted leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="py-20 bg-tgix-light border-t border-tgix-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-tgix-muted">Nos partenaires</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          >
            {partners.map((p, i) => (
              <span
                key={i}
                className="text-xl md:text-2xl font-bold text-tgix-dark/20 hover:text-tgix-dark/60 transition-colors duration-500 cursor-default"
              >
                {p}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
