"use client";

import PageBanner from "@/components/PageBanner";
import { useState } from "react";

const sidebarItems = [
  { id: "devenir", label: "Devenir membre" },
  { id: "regles", label: "Règles d'interconnexion" },
  { id: "membres", label: "Membres connectés" },
];

const conditions = [
  "Exercer à titre professionnel, des activités de télécommunications dans le respect des textes en vigueur en la matière au TOGO ;",
  "Etre susceptible de produire ou de fournir des contenus et d'échanger du trafic Internet ;",
  "Adresser une demande officielle à TGIX ;",
  "S'acquitter du droit d'adhésion fixé par l'assemblée Générale ;",
  "Se conformer strictement aux présents statuts et au règlement intérieur de l'association ;",
  "S'acquitter régulièrement et à bonne date de ses cotisations.",
];

const membresConnectes = [
  {
    name: "YAS TOGO",
    logo: "yas",
    color: "#e74c3c",
    description:
      "TOGO CELLULAIRE est une société d'Etat, constituée sous la forme d'une société anonyme de droit privé créée en 1997. Elle est une filiale...",
  },
  {
    name: "GVA",
    logo: "gva",
    color: "#6c3483",
    description:
      "Group Vivendi Africa – GVA – est une filiale du groupe Vivendi dédiée au développement de l'accès internet Très Haut Débit en Afrique. GVA mobilis...",
  },
  {
    name: "CAFE INFORMATIQUE & TELECOMMUNICATIONS",
    logo: "cafe",
    color: "#27ae60",
    description:
      "CAFE Informatique est une société anonyme détenu entièrement par des capitaux privés. La société a commencé ses activités en 1996 dans le...",
  },
  {
    name: "MOOV TOGO",
    logo: "moov",
    color: "#2980b9",
    description:
      "MOOV Togo est né en 2006 du rachat de TELECEL TOGO, qui exploitait depuis 1998 une licence d'exploitation de réseaux e...",
  },
  {
    name: "TEOLIS",
    logo: "teolis",
    color: "#f39c12",
    description:
      "TEOLIS est un acteur du secteur des télécommunications au Togo, contribuant au développement de l'infrastructure numérique nationale.",
  },
];

export default function MembresPage() {
  const [active, setActive] = useState("devenir");

  return (
    <main>
      <PageBanner title="Membres" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Sidebar */}
          <nav className="md:w-56 shrink-0">
            <ul className="space-y-1">
              {sidebarItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActive(item.id);
                      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                      active === item.id
                        ? "border-l-4 border-tgix-green bg-tgix-dark text-white rounded-r-md"
                        : "text-tgix-dark hover:text-tgix-green"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Devenir membre */}
            <section id="devenir" className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-tgix-dark mb-6">
                Devenir membre
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Peuvent adhérer à TGIX sans que cette énumération ne soit exhaustive, les entreprises de télécommunication, les
                fournisseurs d&apos;accès Internet, les fournisseurs ou producteurs de contenus, les organisations internationales de
                développement, les organismes de recherche ou d&apos;enseignement privés ou publics exerçant leurs activités au
                TOGO et remplissant les conditions suivantes :
              </p>
              <ul className="space-y-2 mb-6 ml-4">
                {conditions.map((c, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-tgix-dark mt-1.5 shrink-0"></span>
                    {c}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 leading-relaxed">
                Les demandes d&apos;adhésion sont reçues et analysées par le Directeur exécutif qui a la faculté de demander la
                production de tous les documents qu&apos;il juge utiles pour l&apos;instruction de la demande.
                <br />
                L&apos;admission en tant que membre prend effet dès paiement des droits d&apos;adhésion et de la cotisation pour l&apos;année
                en cours, au prorata du temps restant à courir par trimestre indivisible.
              </p>
            </section>

            {/* Règles d'interconnexion */}
            <section id="regles" className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-tgix-dark mb-6">
                Règles d&apos;interconnexion
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Peuvent adhérer à TGIX sans que cette énumération ne soit exhaustive, les entreprises de télécommunication, les
                fournisseurs d&apos;accès Internet, les fournisseurs ou producteurs de contenus, les organisations internationales de
                développement, les organismes de recherche ou d&apos;enseignement privés ou publics exerçant leurs activités au
                TOGO et remplissant les conditions suivantes :
              </p>
              <ul className="space-y-2 mb-6 ml-4">
                {conditions.map((c, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-tgix-dark mt-1.5 shrink-0"></span>
                    {c}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 leading-relaxed">
                Les demandes d&apos;adhésion sont reçues et analysées par le Directeur exécutif qui a la faculté de demander la
                production de tous les documents qu&apos;il juge utiles pour l&apos;instruction de la demande.
                <br />
                L&apos;admission en tant que membre prend effet dès paiement des droits d&apos;adhésion et de la cotisation pour l&apos;année
                en cours, au prorata du temps restant à courir par trimestre indivisible.
              </p>
            </section>

            {/* Textes fondamentaux / Membres connectés */}
            <section id="membres">
              <h2 className="text-2xl md:text-3xl font-bold text-tgix-dark mb-8">
                Textes fondamentaux
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {membresConnectes.map((m, i) => (
                  <div key={i} className="space-y-3">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-xs"
                      style={{ backgroundColor: m.color }}
                    >
                      {m.logo === "yas" && (
                        <span className="text-lg italic font-black">yas</span>
                      )}
                      {m.logo === "gva" && (
                        <div className="text-center leading-tight">
                          <span className="text-[8px] block">Group Vivendi Africa</span>
                          <span className="text-lg font-black">gva</span>
                        </div>
                      )}
                      {m.logo === "cafe" && (
                        <span className="text-2xl">🌐</span>
                      )}
                      {m.logo === "moov" && (
                        <div className="text-center">
                          <span className="text-[10px] block font-bold">Moov</span>
                          <span className="text-[8px]">Africa</span>
                        </div>
                      )}
                    </div>
                    <h3 className="font-bold text-sm text-tgix-dark uppercase">{m.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{m.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
