"use client";

import PageBanner from "@/components/PageBanner";
import { useState } from "react";

const sidebarItems = [
  { id: "services", label: "Les services offerts" },
  { id: "tarifs", label: "Les tarifs" },
];

const tarifsFCFA = [
  { designation: "Frais d'adhésion", membres: "295 000 CFA", nonMembres: "0 FCFA" },
  { designation: "Cotisation annuelles", membres: "142 000 F CFA", nonMembres: "0 FCFA" },
  { designation: "Redevances d'interconnexion\nPorts 10 Mbps", membres: "120 000 F CFA", nonMembres: "240 000 FCFA" },
  { designation: "Redevances d'interconnexion\nPorts 100 Mbps", membres: "500 000 F CFA", nonMembres: "1 000 000 FCFA" },
  { designation: "Redevances d'interconnexion\nPorts 1 Gbps", membres: "1 500 000 F CFA", nonMembres: "3 000 000 FCFA" },
  { designation: "Redevance d'interconnexion\nPorts 10 Gbps", membres: "3 000 000 F CFA", nonMembres: "6 000 000 FCFA" },
];

const tarifsDollars = [
  { designation: "Membership fees", membres: "509 $", nonMembres: "0 $" },
  { designation: "Annual Membership fees", membres: "245 $", nonMembres: "0 $" },
  { designation: "Annual interconnection charges\nPorts 10 Mbps", membres: "207 $", nonMembres: "414 $" },
  { designation: "Annual interconnection charges\nPorts 100 Mbps", membres: "862 $", nonMembres: "1724 $" },
  { designation: "Annual interconnection charges\nPorts 1 Gbps", membres: "2586 $", nonMembres: "5175 $" },
  { designation: "Annual interconnection charges\nPorts 10 Gbps", membres: "51751 $", nonMembres: "10345 $" },
];

function TarifTable({ rows, currencyLabel }: { rows: typeof tarifsFCFA; currencyLabel: string }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full max-w-2xl border-collapse">
        <thead>
          <tr className="bg-tgix-dark text-white text-sm">
            <th className="text-left px-4 py-3 font-semibold border border-tgix-dark">Désignation</th>
            <th className="text-left px-4 py-3 font-semibold border border-tgix-dark">{currencyLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-gray-200">
              <td className="px-4 py-3 text-sm text-gray-700 border border-gray-200 whitespace-pre-line">
                {row.designation}
              </td>
              <td className="px-4 py-3 text-sm border border-gray-200">
                <div>
                  <span className="font-bold text-tgix-dark">Membres : {row.membres}</span>
                </div>
                <div className="text-gray-600">
                  Non membres : {row.nonMembres}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ServicesPage() {
  const [active, setActive] = useState("services");

  return (
    <main>
      <PageBanner title="Services et Tarifs" />

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
            {/* Les services offerts */}
            <section id="services" className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-tgix-dark mb-6">
                Les services offerts
              </h2>

              <ul className="space-y-6 ml-2">
                <li className="text-sm text-gray-600 leading-relaxed">
                  <span className="w-2 h-2 inline-block rounded-full bg-tgix-dark mr-2 -translate-y-px"></span>
                  <strong className="text-tgix-dark">Le peering</strong> : la politique de peering au TGIX est ouverte. Les membres peuvent établir une session avec les
                  routes serveurs disponibles au IXP ou établir plusieurs sessions bilatérales à travers l&apos;IXP.
                  <br />
                  Le TGIX met à disposition des membres les ressources nécessaires pour son interconnexion au nœud,
                  notamment les adresses IP et les VLAN nécessaires le cas échéant, les ports de (10, 100, 1000 et 10 000
                  Mbps) à la demande du client. Deux routes serveurs sont disponibles pour offrir des facilités d&apos;interconnexion
                  aux pairs qui le souhaitent.
                </li>
                <li className="text-sm text-gray-600 leading-relaxed">
                  <span className="w-2 h-2 inline-block rounded-full bg-tgix-dark mr-2 -translate-y-px"></span>
                  <strong className="text-tgix-dark">Le TGIX</strong> met également à disposition plusieurs services centralisés d&apos;intérêt public qui profitent à l&apos;ensemble de
                  la communauté de peering, à l&apos;instar de l&apos;instance anycast du serveur D-Root (géré par l&apos;Université du
                  Maryland), les caches DNS sécurisés fournis par Quad9 et des instances d&apos;environ 400 TLD exploitées et mis à
                  disposition par le partenaire Packet Clearing House(www.pch.net).
                </li>
              </ul>
            </section>

            {/* Les Tarifs */}
            <section id="tarifs">
              <h2 className="text-2xl md:text-3xl font-bold text-tgix-dark mb-8">
                Les Tarifs
              </h2>

              <div className="space-y-10">
                <TarifTable rows={tarifsFCFA} currencyLabel="Prix/Coûts en FCFA" />
                <TarifTable rows={tarifsDollars} currencyLabel="Price/fees in Dollars" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
