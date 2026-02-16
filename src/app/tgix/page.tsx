"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import { Building2, Users, UserCircle, ChevronRight } from "lucide-react";

const sections = [
  { id: "apropos", label: "A propos", icon: Building2 },
  { id: "conseil", label: "Conseil d'administration", icon: Users },
  { id: "direction", label: "Direction executive", icon: UserCircle },
];

const conseilMembers = [
  { role: "President du conseil", org: "" },
  { role: "Administrateur", org: "Representant de YAS TOGO" },
  { role: "Administrateur", org: "Representant de GVA" },
  { role: "Administrateur", org: "Representant de CAFE Informatique" },
  { role: "Administrateur", org: "Representant de MOOV TOGO" },
];

const contentVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
};

export default function TGIXPage() {
  const [active, setActive] = useState("apropos");

  return (
    <main>
      <PageBanner title="A propos" subtitle="Decouvrez le point d'echange Internet du Togo" />

      <section className="relative py-20 md:py-28 bg-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-tgix-green/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0">
              <div className="lg:sticky lg:top-28">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-tgix-muted mb-4">Navigation</p>
                <nav className="space-y-1.5">
                  {sections.map((s) => {
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
                {active === "apropos" && (
                  <motion.div key="apropos" variants={contentVariants} initial="hidden" animate="visible" exit="exit">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-10 h-[2px] bg-tgix-green" />
                      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-tgix-green">Presentation</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-tgix-dark tracking-tight mb-8">
                      TGIX &ndash; Le point d&apos;echange
                      <br />Internet du Togo
                    </h2>
                    <div className="space-y-5 text-tgix-dark/60 leading-relaxed">
                      <p>
                        Le TGIX est une association a but non lucratif, creee le 12 decembre 2016, dont la mission est de mettre a la disposition de l&apos;ecosysteme numerique national une infrastructure d&apos;interconnexion Internet neutre, ouverte et securisee, dediee a l&apos;echange du trafic Internet local.
                      </p>
                      <p>A ce titre, le TGIX a pour principaux objectifs :</p>
                      <ul className="space-y-3 ml-1">
                        {[
                          "l'etablissement, l'exploitation et la gestion de points d'echange Internet sur le territoire national ;",
                          "le soutien au developpement et au renforcement des infrastructures d'echange Internet ;",
                          "la promotion et l'accompagnement du developpement des contenus et services numeriques locaux.",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-tgix-green mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p>
                        Le TGIX exploite le premier Point d&apos;Echange Internet (IXP) du Togo, une infrastructure critique au coeur de l&apos;ecosysteme Internet national. Cet IXP constitue une plateforme neutre, ouverte et securisee permettant l&apos;interconnexion directe et locale des fournisseurs d&apos;acces a Internet, operateurs de telecommunications, hebergeurs, fournisseurs de contenus, ainsi que des institutions publiques et privees.
                      </p>
                      <p>
                        En favorisant l&apos;echange local du trafic Internet, le TGIX contribue a l&apos;amelioration de la qualite de service, a la reduction des couts de connectivite, au renforcement de la resilience des reseaux nationaux et au developpement de la souverainete numerique du Togo.
                      </p>
                      <p>Le TGIX est gere par un conseil d&apos;administration et une direction executive.</p>
                    </div>
                  </motion.div>
                )}

                {active === "conseil" && (
                  <motion.div key="conseil" variants={contentVariants} initial="hidden" animate="visible" exit="exit">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-10 h-[2px] bg-tgix-green" />
                      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-tgix-green">Gouvernance</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-tgix-dark tracking-tight mb-8">
                      Le conseil d&apos;administration
                    </h2>
                    <div className="space-y-5 text-tgix-dark/60 leading-relaxed mb-10">
                      <p>
                        Le conseil d&apos;administration est l&apos;organe d&apos;administration et de surveillance. Il est charge d&apos;assurer le controle du bon fonctionnement de l&apos;Association ainsi que la supervision de ses activites. Il est en charge de la mise en oeuvre des programmes de l&apos;association, de la preservation de ses biens ainsi que de sa reputation. Il se reunit trimestriellement pour definir les nouvelles orientations a donner pour le bon fonctionnement du TGIX.
                      </p>
                      <p>Le Conseil d&apos;Administration est compose de :</p>
                      <ul className="space-y-2 ml-1">
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-tgix-green mt-2 shrink-0" />
                          <span>cinq (5) membres dont quatre (4) membres fondateurs admis d&apos;office</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-tgix-green mt-2 shrink-0" />
                          <span>un (1) membre associe elu par l&apos;Assemblee Generale ordinaire.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-tgix-border overflow-hidden">
                      <div className="bg-tgix-dark px-6 py-4">
                        <h3 className="text-sm font-semibold text-white">Membres du conseil d&apos;administration</h3>
                      </div>
                      <div className="divide-y divide-tgix-border">
                        {conseilMembers.map((m, i) => (
                          <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-tgix-light/50 transition-colors">
                            <div className="w-10 h-10 rounded-xl bg-tgix-green/10 flex items-center justify-center shrink-0">
                              <Users size={16} className="text-tgix-green" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-tgix-dark">{m.role}</p>
                              {m.org && <p className="text-xs text-tgix-muted mt-0.5">{m.org}</p>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {active === "direction" && (
                  <motion.div key="direction" variants={contentVariants} initial="hidden" animate="visible" exit="exit">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-10 h-[2px] bg-tgix-green" />
                      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-tgix-green">Equipe</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-tgix-dark tracking-tight mb-8">
                      La direction executive du TGIX
                    </h2>
                    <div className="space-y-5 text-tgix-dark/60 leading-relaxed mb-10">
                      <p>
                        La direction executive est l&apos;organe de gestion operationnelle du TGIX. Elle assure a cet effet la gestion administrative et technique du TGIX. Elle promeut l&apos;association et suscite l&apos;adhesion de nouveaux membres.
                      </p>
                      <p>
                        Elle a, a sa tete, un Directeur Executif nomme par le Conseil d&apos;Administration. Le Directeur Executif est assiste dans ses fonctions par une equipe technique et administrative recrutee a cet effet.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-gradient-to-br from-tgix-dark to-tgix-navy p-8 text-white">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-tgix-green/20 flex items-center justify-center">
                          <UserCircle size={24} className="text-tgix-green" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Directeur Executif</h3>
                          <p className="text-white/40 text-sm">TGIX</p>
                        </div>
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed">
                        La fonction de Directeur Executif du TGIX est actuellement assuree par le directeur en poste.
                      </p>
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
