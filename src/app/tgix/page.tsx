"use client";

import { useState } from "react";
import PageBanner from "@/components/PageBanner";

const sections = [
  { id: "apropos", label: "A propos" },
  { id: "direction", label: "Direction executif" },
  { id: "conseil", label: "Conseil d'administration" },
  { id: "textes", label: "Textes fondamentaux" },
];

const sectionContent = {
  apropos: {
    title: "A propos",
    paragraphs: [
      "Les points d'echange Internet (IXP) forment une partie capitale de l'infrastructure Internet. Ce sont des installations techniques ou les acteurs nationaux de l'Internet s'interconnectent pour echanger leur trafic local. L'interconnexion a un IXP cree des avantages techniques et economiques pour la communaute Internet locale. Les operateurs et fournisseurs de services Internet togolais, conscient de ces enjeux, se sont associes sous l'impulsion du Ministere des Postes et de l'Economie Numerique pour creer le premier point d'echange Internet du Togo (TGIX).",
      "Le TGIX est une association a but non lucratif portee sur les fonts baptismaux, le 12 decembre 2016. Elle a pour objet :",
    ],
    list: [
      "(i) l'etablissement et la gestion de points d'echange Internet au Togo,",
      "(ii) le soutien au developpement de points d'echange Internet,",
      "(iii) le soutien et la promotion du developpement des contenus locaux.",
    ],
    closing: "La mise en place du TGIX favorisera aussi l'entree sur le marche des fournisseurs de contenu, stimulera, l'innovation, la recherche et l'emploi par la promotion et le developpement des contenus locaux",
  },
  direction: {
    title: "Direction executif",
    paragraphs: [
      "Les points d'echange Internet (IXP) forment une partie capitale de l'infrastructure Internet. Ce sont des installations techniques ou les acteurs nationaux de l'Internet s'interconnectent pour echanger leur trafic local. L'interconnexion a un IXP cree des avantages techniques et economiques pour la communaute Internet locale. Les operateurs et fournisseurs de services Internet togolais, conscient de ces enjeux, se sont associes sous l'impulsion du Ministere des Postes et de l'Economie Numerique pour creer le premier point d'echange Internet du Togo (TGIX).",
      "Le TGIX est une association a but non lucratif portee sur les fonts baptismaux, le 12 decembre 2016. Elle a pour objet :",
    ],
    list: [
      "(i) l'etablissement et la gestion de points d'echange Internet au Togo,",
      "(ii) le soutien au developpement de points d'echange Internet,",
      "(iii) le soutien et la promotion du developpement des contenus locaux.",
    ],
    closing: "La mise en place du TGIX favorisera aussi l'entree sur le marche des fournisseurs de contenu, stimulera, l'innovation, la recherche et l'emploi par la promotion et le developpement des contenus locaux",
  },
  conseil: {
    title: "Conseil d'administration",
    paragraphs: [
      "Les points d'echange Internet (IXP) forment une partie capitale de l'infrastructure Internet. Ce sont des installations techniques ou les acteurs nationaux de l'Internet s'interconnectent pour echanger leur trafic local. L'interconnexion a un IXP cree des avantages techniques et economiques pour la communaute Internet locale. Les operateurs et fournisseurs de services Internet togolais, conscient de ces enjeux, se sont associes sous l'impulsion du Ministere des Postes et de l'Economie Numerique pour creer le premier point d'echange Internet du Togo (TGIX).",
      "Le TGIX est une association a but non lucratif portee sur les fonts baptismaux, le 12 decembre 2016. Elle a pour objet :",
    ],
    list: [
      "(i) l'etablissement et la gestion de points d'echange Internet au Togo,",
      "(ii) le soutien au developpement de points d'echange Internet,",
      "(iii) le soutien et la promotion du developpement des contenus locaux.",
    ],
    closing: "La mise en place du TGIX favorisera aussi l'entree sur le marche des fournisseurs de contenu, stimulera, l'innovation, la recherche et l'emploi par la promotion et le developpement des contenus locaux",
  },
  textes: {
    title: "Textes fondamentaux",
    paragraphs: [
      "Les points d'echange Internet (IXP) forment une partie capitale de l'infrastructure Internet. Ce sont des installations techniques ou les acteurs nationaux de l'Internet s'interconnectent pour echanger leur trafic local. L'interconnexion a un IXP cree des avantages techniques et economiques pour la communaute Internet locale. Les operateurs et fournisseurs de services Internet togolais, conscient de ces enjeux, se sont associes sous l'impulsion du Ministere des Postes et de l'Economie Numerique pour creer le premier point d'echange Internet du Togo (TGIX).",
      "Le TGIX est une association a but non lucratif portee sur les fonts baptismaux, le 12 decembre 2016. Elle a pour objet :",
    ],
    list: [
      "(i) l'etablissement et la gestion de points d'echange Internet au Togo,",
      "(ii) le soutien au developpement de points d'echange Internet,",
      "(iii) le soutien et la promotion du developpement des contenus locaux.",
    ],
    closing: "La mise en place du TGIX favorisera aussi l'entree sur le marche des fournisseurs de contenu, stimulera, l'innovation, la recherche et l'emploi par la promotion et le developpement des contenus locaux",
  },
};

export default function TGIXPage() {
  const [active, setActive] = useState("apropos");
  const content = sectionContent[active as keyof typeof sectionContent];

  return (
    <main>
      <PageBanner title="TGIX" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <aside className="md:w-64 shrink-0">
            <nav className="space-y-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors rounded ${
                    active === s.id
                      ? "border-l-4 border-tgix-green bg-tgix-green/5 text-tgix-dark font-bold"
                      : "text-tgix-gray hover:text-tgix-dark hover:bg-gray-50"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-tgix-dark mb-6">{content.title}</h2>
            {content.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-tgix-gray leading-relaxed mb-4">{p}</p>
            ))}
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm text-tgix-gray">
              {content.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-sm text-tgix-gray leading-relaxed">{content.closing}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
