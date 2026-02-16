"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import { UserPlus, Shield, Network, ChevronRight, Globe } from "lucide-react";

const sidebarItems = [
  { id: "devenir", label: "Devenir membre", icon: UserPlus },
  { id: "regles", label: "Regles d'interconnexion", icon: Shield },
  { id: "membres", label: "Membres connectes", icon: Network },
];

const conditions = [
  "Exercer a titre professionnel, des activites de telecommunications dans le respect des textes en vigueur en la matiere au TOGO ;",
  "Etre susceptible de produire ou de fournir des contenus et d'echanger du trafic Internet ;",
  "Adresser une demande officielle a TGIX ;",
  "S'acquitter du droit d'adhesion fixe par l'assemblee Generale ;",
  "Se conformer strictement aux presents statuts et au reglement interieur de l'association ;",
  "S'acquitter regulierement et a bonne date de ses cotisations.",
];

const membresConnectes = [
  {
    name: "YAS TOGO",
    initials: "YAS",
    color: "from-red-500 to-red-600",
    description: "TOGO CELLULAIRE est une societe d'Etat, constituee sous la forme d'une societe anonyme de droit prive creee en 1997.",
  },
  {
    name: "GVA",
    initials: "GVA",
    color: "from-purple-600 to-purple-700",
    description: "Group Vivendi Africa est une filiale du groupe Vivendi dediee au developpement de l'acces internet Tres Haut Debit en Afrique.",
  },
  {
    name: "CAFE Informatique",
    initials: "CAFE",
    color: "from-emerald-500 to-emerald-600",
    description: "CAFE Informatique est une societe anonyme detenu entierement par des capitaux prives. La societe a commence ses activites en 1996.",
  },
  {
    name: "MOOV TOGO",
    initials: "MOOV",
    color: "from-blue-500 to-blue-600",
    description: "MOOV Togo est ne en 2006 du rachat de TELECEL TOGO, qui exploitait depuis 1998 une licence d'exploitation de reseaux.",
  },
  {
    name: "TEOLIS",
    initials: "TEO",
    color: "from-amber-500 to-amber-600",
    description: "TEOLIS est un acteur du secteur des telecommunications au Togo, contribuant au developpement de l'infrastructure numerique nationale.",
  },
];

const contentVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
};

export default function MembresPage() {
  const [active, setActive] = useState("devenir");

  return (
    <main>
      <PageBanner title="Membres" subtitle="Rejoignez l'ecosysteme d'interconnexion du Togo" />

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
                {active === "devenir" && (
                  <motion.div key="devenir" variants={contentVariants} initial="hidden" animate="visible" exit="exit">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-10 h-[2px] bg-tgix-green" />
                      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-tgix-green">Adhesion</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-tgix-dark tracking-tight mb-8">
                      Devenir membre
                    </h2>
                    <div className="space-y-5 text-tgix-dark/60 leading-relaxed">
                      <p>
                        Peuvent adherer a TGIX sans que cette enumeration ne soit exhaustive, les entreprises de telecommunication, les
                        fournisseurs d&apos;acces Internet, les fournisseurs ou producteurs de contenus, les organisations internationales de
                        developpement, les organismes de recherche ou d&apos;enseignement prives ou publics exercant leurs activites au
                        TOGO et remplissant les conditions suivantes :
                      </p>
                      <ul className="space-y-3 ml-1">
                        {conditions.map((c, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-tgix-green mt-2 shrink-0" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                      <p>
                        Les demandes d&apos;adhesion sont recues et analysees par le Directeur executif qui a la faculte de demander la
                        production de tous les documents qu&apos;il juge utiles pour l&apos;instruction de la demande.
                      </p>
                      <p>
                        L&apos;admission en tant que membre prend effet des paiement des droits d&apos;adhesion et de la cotisation pour l&apos;annee
                        en cours, au prorata du temps restant a courir par trimestre indivisible.
                      </p>
                    </div>
                  </motion.div>
                )}

                {active === "regles" && (
                  <motion.div key="regles" variants={contentVariants} initial="hidden" animate="visible" exit="exit">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-10 h-[2px] bg-tgix-green" />
                      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-tgix-green">Peering</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-tgix-dark tracking-tight mb-8">
                      Regles d&apos;interconnexion
                    </h2>
                    <div className="space-y-5 text-tgix-dark/60 leading-relaxed">
                      <p>
                        Peuvent adherer a TGIX sans que cette enumeration ne soit exhaustive, les entreprises de telecommunication, les
                        fournisseurs d&apos;acces Internet, les fournisseurs ou producteurs de contenus, les organisations internationales de
                        developpement, les organismes de recherche ou d&apos;enseignement prives ou publics exercant leurs activites au
                        TOGO et remplissant les conditions suivantes :
                      </p>
                      <ul className="space-y-3 ml-1">
                        {conditions.map((c, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-tgix-green mt-2 shrink-0" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                      <p>
                        Les demandes d&apos;adhesion sont recues et analysees par le Directeur executif qui a la faculte de demander la
                        production de tous les documents qu&apos;il juge utiles pour l&apos;instruction de la demande.
                      </p>
                    </div>
                  </motion.div>
                )}

                {active === "membres" && (
                  <motion.div key="membres" variants={contentVariants} initial="hidden" animate="visible" exit="exit">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-10 h-[2px] bg-tgix-green" />
                      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-tgix-green">Connectes</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-tgix-dark tracking-tight mb-10">
                      Membres connectes
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {membresConnectes.map((m, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="group p-6 rounded-2xl bg-tgix-light border border-transparent hover:border-tgix-green/20 transition-all duration-500 card-hover"
                        >
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-500`}>
                            <span className="text-white font-bold text-xs">{m.initials}</span>
                          </div>
                          <h3 className="font-bold text-tgix-dark mb-2">{m.name}</h3>
                          <p className="text-sm text-tgix-muted leading-relaxed">{m.description}</p>
                        </motion.div>
                      ))}
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
