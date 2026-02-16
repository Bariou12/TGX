"use client";

import { useState } from "react";
import PageBanner from "@/components/PageBanner";

const sections = [
  { id: "apropos", label: "A propos" },
  { id: "conseil", label: "Conseil d'administration" },
  { id: "direction", label: "Direction exécutive" },
  { id: "textes", label: "Textes fondamentaux" },
];

const conseilMembers = [
  { role: "Président du conseil", org: "" },
  { role: "Administrateur", org: "Représentant de YAS TOGO" },
  { role: "Administrateur", org: "Représentant de GVA" },
  { role: "Administrateur", org: "Représentant de CAFE Informatique" },
  { role: "Administrateur", org: "Représentant de MOOV TOGO" },
];

export default function TGIXPage() {
  const [active, setActive] = useState("apropos");

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
                  className={`block w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                    active === s.id
                      ? "border-l-4 border-tgix-green bg-tgix-dark text-white rounded-r-md"
                      : "text-tgix-dark hover:text-tgix-green"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1">
            {active === "apropos" && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-tgix-dark mb-6">
                  TGIX &ndash; Le point d&apos;échange Internet du Togo
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Le TGIX est une association à but non lucratif, créée le 12 décembre 2016, dont la mission est de mettre à la disposition de l&apos;écosystème numérique national une infrastructure d&apos;interconnexion Internet neutre, ouverte et sécurisée, dédiée à l&apos;échange du trafic Internet local.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  À ce titre, le TGIX a pour principaux objectifs :
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 text-sm text-gray-600">
                  <li>l&apos;établissement, l&apos;exploitation et la gestion de points d&apos;échange Internet sur le territoire national ;</li>
                  <li>le soutien au développement et au renforcement des infrastructures d&apos;échange Internet ;</li>
                  <li>la promotion et l&apos;accompagnement du développement des contenus et services numériques locaux.</li>
                </ul>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Le TGIX exploite le premier Point d&apos;Échange Internet (IXP) du Togo, une infrastructure critique au cœur de l&apos;écosystème Internet national. Cet IXP constitue une plateforme neutre, ouverte et sécurisée permettant l&apos;interconnexion directe et locale des fournisseurs d&apos;accès à Internet, opérateurs de télécommunications, hébergeurs, fournisseurs de contenus, ainsi que des institutions publiques et privées.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  En favorisant l&apos;échange local du trafic Internet, le TGIX contribue à l&apos;amélioration de la qualité de service, à la réduction des coûts de connectivité, au renforcement de la résilience des réseaux nationaux et au développement de la souveraineté numérique du Togo.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Le TGIX est géré par un conseil d&apos;administration et une direction exécutive.
                </p>
              </>
            )}

            {active === "conseil" && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-tgix-dark mb-6">
                  Le conseil d&apos;administration
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Le conseil d&apos;administration est l&apos;organe d&apos;administration et de surveillance. Il est chargé d&apos;assurer le contrôle du bon fonctionnement de l&apos;Association ainsi que la supervision de ses activités. Il est en charge de la mise en œuvre des programmes de l&apos;association, de la préservation de ses biens ainsi que de sa réputation. Il se réunit trimestriellement pour définir les nouvelles orientations à donner pour le bon fonctionnement du TGIX.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Le Conseil d&apos;Administration est composé de :
                </p>
                <ul className="list-disc list-inside space-y-2 mb-8 text-sm text-gray-600">
                  <li>cinq (5) membres dont quatre (4) membres fondateurs admis d&apos;office</li>
                  <li>un (1) membre associé élu par l&apos;Assemblée Générale ordinaire.</li>
                </ul>

                <h3 className="text-lg font-bold text-tgix-dark mb-4">Membres du conseil d&apos;administration</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-tgix-dark text-white text-sm">
                        <th className="text-left px-4 py-3 font-semibold border border-tgix-dark">Fonction</th>
                        <th className="text-left px-4 py-3 font-semibold border border-tgix-dark">Organisation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {conseilMembers.map((m, i) => (
                        <tr key={i} className="border-b border-gray-200">
                          <td className="px-4 py-3 text-sm text-gray-700 border border-gray-200 font-medium">{m.role}</td>
                          <td className="px-4 py-3 text-sm text-gray-600 border border-gray-200">{m.org}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {active === "direction" && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-tgix-dark mb-6">
                  La direction exécutive du TGIX
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  La direction exécutive est l&apos;organe de gestion opérationnelle du TGIX. Elle assure à cet effet la gestion administrative et technique du TGIX. Elle promeut l&apos;association et suscite l&apos;adhésion de nouveaux membres.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Elle a, à sa tête, un Directeur Exécutif nommé par le Conseil d&apos;Administration. Le Directeur Exécutif est assisté dans ses fonctions par une équipe technique et administrative recrutée à cet effet.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 border mt-6">
                  <h3 className="text-base font-bold text-tgix-dark mb-2">Directeur Exécutif</h3>
                  <p className="text-sm text-gray-600">La fonction de Directeur Exécutif du TGIX est actuellement assurée par le directeur en poste.</p>
                </div>
              </>
            )}

            {active === "textes" && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-tgix-dark mb-6">
                  Textes fondamentaux
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Les textes fondamentaux du TGIX définissent le cadre juridique, organisationnel et opérationnel de l&apos;association. Ils comprennent notamment :
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                  <li>Les statuts de l&apos;association TGIX</li>
                  <li>Le règlement intérieur</li>
                  <li>La politique de peering</li>
                  <li>Les conditions générales d&apos;adhésion et d&apos;utilisation</li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
