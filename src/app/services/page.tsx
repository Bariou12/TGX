"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import { Server, CreditCard, FileText, ChevronRight, Check } from "lucide-react";

const sidebarItems = [
  { id: "services", label: "Services", icon: Server },
  { id: "tarifs", label: "Tarification", icon: CreditCard },
  { id: "politique", label: "Politique de peering", icon: FileText },
];

const ports = [
  { speed: "1 Gbps", fcfa: "250 000", usd: "400" },
  { speed: "10 Gbps", fcfa: "625 000", usd: "1 000" },
  { speed: "40 Gbps", fcfa: "1 500 000", usd: "2 400" },
  { speed: "100 Gbps", fcfa: "3 750 000", usd: "6 000" },
];

const servicesList = [
  "Ports de peering 1G / 10G / 40G / 100G",
  "Route server (RS) avec filtrage IRR/RPKI",
  "Peering prive (PNI) sur demande",
  "Statistiques de trafic en temps reel",
  "Supervision Zabbix / MRTG",
  "Support technique dedie",
];

const contentVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
};

export default function ServicesPage() {
  const [active, setActive] = useState("services");

  return (
    <main>
      <PageBanner title="Services et Tarifs" subtitle="Des solutions d'interconnexion performantes et accessibles" />

      <section className="relative py-20 md:py-28 bg-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-tgix-green/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0">
              <div className="lg:sticky lg:top-28">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-tgix-muted mb-4">Navigation</p>
                <nav className="space-y-1.5">
                  {sidebarItems.map((s) => {
                    const isActive = active === s.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setActive(s.id)}
                        className={`group flex items-center gap-3 w-full text-left px-5 py-3.5 rounded-2xl text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-tgix-dark text-white shadow-lg shadow-tgix-dark/20"
                            : "text-tgix-dark/60 hover:text-tgix-dark hover:bg-tgix-light"
                        }`}
                      >
                        <s.icon size={18} className={isActive ? "text-tgix-green" : "text-tgix-muted group-hover:text-tgix-green transition-colors"} />
                        <span className="flex-1">{s.label}</span>
                        <ChevronRight size={14} className={`transition-all ${isActive ? "opacity-100 text-tgix-green" : "opacity-0 group-hover:opacity-50"}`} />
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                {active === "services" && (
                  <motion.div key="services" variants={contentVariants} initial="hidden" animate="visible" exit="exit">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-10 h-[2px] bg-tgix-green" />
                      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-tgix-green">Offres</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-tgix-dark tracking-tight mb-8">
                      Nos services
                    </h2>
                    <div className="space-y-5 text-tgix-dark/60 leading-relaxed mb-10">
                      <p>
                        Le TGIX fournit des ports d&apos;interconnexion en 1 Gbps, 10 Gbps, 40 Gbps et 100 Gbps. Chaque participant connecte ses routeurs sur l&apos;infrastructure du TGIX pour echanger du trafic localement.
                      </p>
                      <p>
                        Le TGIX fournit egalement des route servers qui facilitent l&apos;echange multilateral de routes entre participants, permettant ainsi de reduire la complexite de configuration.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {servicesList.map((s, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.06 }}
                          className="flex items-start gap-3 p-4 rounded-xl bg-tgix-light"
                        >
                          <div className="w-6 h-6 rounded-lg bg-tgix-green/15 flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={12} className="text-tgix-green" />
                          </div>
                          <span className="text-sm text-tgix-dark font-medium">{s}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {active === "tarifs" && (
                  <motion.div key="tarifs" variants={contentVariants} initial="hidden" animate="visible" exit="exit">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-10 h-[2px] bg-tgix-green" />
                      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-tgix-green">Pricing</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-tgix-dark tracking-tight mb-8">
                      Tarification
                    </h2>
                    <p className="text-tgix-dark/60 mb-8 leading-relaxed">
                      Tarification mensuelle par port. Pas de frais sur le trafic echange (settlement-free peering).
                    </p>

                    {/* Pricing cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {ports.map((p, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className={`group relative p-8 rounded-2xl border transition-all duration-500 card-hover ${
                            i === 1
                              ? "bg-tgix-dark text-white border-tgix-dark"
                              : "bg-white border-tgix-border hover:border-tgix-green/30"
                          }`}
                        >
                          {i === 1 && (
                            <span className="absolute top-4 right-4 px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-tgix-green text-tgix-dark rounded-full">
                              Populaire
                            </span>
                          )}
                          <p className={`text-xs font-semibold tracking-[0.15em] uppercase mb-2 ${i === 1 ? "text-tgix-green" : "text-tgix-muted"}`}>
                            Port {p.speed}
                          </p>
                          <div className="flex items-baseline gap-1 mb-1">
                            <span className={`text-3xl font-bold ${i === 1 ? "text-white" : "text-tgix-dark"}`}>{p.fcfa}</span>
                            <span className={`text-sm ${i === 1 ? "text-white/50" : "text-tgix-muted"}`}>FCFA/mois</span>
                          </div>
                          <p className={`text-sm ${i === 1 ? "text-white/40" : "text-tgix-muted"}`}>
                            soit {p.usd} USD/mois
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 p-6 rounded-2xl bg-tgix-light border border-tgix-border">
                      <h3 className="text-sm font-bold text-tgix-dark mb-2">Frais d&apos;adhesion unique</h3>
                      <p className="text-sm text-tgix-muted">
                        Un droit d&apos;adhesion unique est requis lors de la premiere connexion. Contactez-nous pour plus de details.
                      </p>
                    </div>
                  </motion.div>
                )}

                {active === "politique" && (
                  <motion.div key="politique" variants={contentVariants} initial="hidden" animate="visible" exit="exit">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-10 h-[2px] bg-tgix-green" />
                      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-tgix-green">Peering</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-tgix-dark tracking-tight mb-8">
                      Politique de peering
                    </h2>
                    <div className="space-y-5 text-tgix-dark/60 leading-relaxed">
                      <p>
                        Le TGIX adopte une politique de peering multilateral libre (Multilateral Peering Agreement &ndash; MPA). Chaque membre connecte au TGIX accepte d&apos;echanger du trafic avec l&apos;ensemble des autres membres via les route servers.
                      </p>
                      <p>Les principes cles sont :</p>
                      <ul className="space-y-3 ml-1">
                        {[
                          "Echange de trafic gratuit (settlement-free peering)",
                          "Utilisation obligatoire du route server pour le peering multilateral",
                          "Possibilite de peering bilateral (PNI) en complement",
                          "Chaque membre doit maintenir un ratio de trafic raisonnable",
                          "Le trafic doit etre strictement de type IP unicast ou multicast",
                          "Les membres doivent annoncer uniquement leurs propres prefixes et ceux de leurs clients",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-tgix-green mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
