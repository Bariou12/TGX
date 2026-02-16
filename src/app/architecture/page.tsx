"use client";

import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import { Globe, Wifi, Users } from "lucide-react";

const sections = [
  { id: "chiffres", label: "Chiffre cles" },
  { id: "statistiques", label: "Statistiques" },
  { id: "schema", label: "Schema de l'architechture" },
];

const stats = [
  { icon: Globe, value: "07", label: "AS connectes" },
  { icon: Wifi, value: "10", label: "Ports actifs" },
  { icon: Users, value: "04", label: "Utilisateurs RS" },
];

export default function ArchitecturePage() {
  const [active, setActive] = useState("chiffres");

  return (
    <main>
      <PageBanner title="Architecture technique du TGIX" />

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
            {active === "chiffres" && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-tgix-dark mb-8">Chiffres cles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {stats.map((s, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-tgix-green/10 flex items-center justify-center">
                        <s.icon className="text-tgix-green" size={28} />
                      </div>
                      <div>
                        <span className="text-4xl font-extrabold text-tgix-dark">{s.value}</span>
                        <p className="text-sm text-tgix-gray">{s.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {active === "statistiques" && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-tgix-dark mb-8">Statistiques</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-bold text-base text-tgix-dark mb-3">Trafic global sur SWBB01</h3>
                    <div className="bg-gray-100 rounded-lg p-6 h-48 flex items-center justify-center">
                      <div className="w-full h-full bg-gradient-to-r from-blue-200 via-green-200 to-blue-100 rounded opacity-60 flex items-end px-4 pb-4">
                        <div className="flex gap-1 items-end w-full">
                          {Array.from({ length: 30 }).map((_, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-blue-500/40 rounded-t"
                              style={{ height: `${Math.random() * 80 + 20}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-tgix-dark mb-3">Trafic global sur SWBB01 et SWBB02</h3>
                    <div className="bg-gray-100 rounded-lg p-6 h-48 flex items-center justify-center">
                      <div className="w-full h-full bg-gradient-to-r from-green-200 via-green-300 to-green-100 rounded opacity-60 flex items-end px-4 pb-4">
                        <div className="flex gap-1 items-end w-full">
                          {Array.from({ length: 30 }).map((_, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-green-600/40 rounded-t"
                              style={{ height: `${Math.random() * 80 + 20}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-tgix-dark mb-3">Trafic global sur SWBB02</h3>
                    <div className="bg-gray-100 rounded-lg p-6 h-48 flex items-center justify-center">
                      <div className="w-full h-full bg-gradient-to-r from-blue-100 via-blue-200 to-green-100 rounded opacity-60 flex items-end px-4 pb-4">
                        <div className="flex gap-1 items-end w-full">
                          {Array.from({ length: 30 }).map((_, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-blue-400/40 rounded-t"
                              style={{ height: `${Math.random() * 80 + 20}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center text-xs text-tgix-gray">
                  <p className="font-bold text-red-600 text-lg">MRTG <span className="text-blue-800">MULTI ROUTER TRAFFIC GRAPHER</span></p>
                  <p>version 2.17.4</p>
                </div>
              </>
            )}

            {active === "schema" && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-tgix-dark mb-8">Schema de l&apos;architechture</h2>
                <div className="bg-gray-50 rounded-lg p-8 border">
                  <div className="text-center">
                    {/* Architecture diagram representation */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold uppercase text-tgix-dark mb-6">LOCAUX OPERATEURS</h3>
                      <div className="flex justify-center gap-8 flex-wrap">
                        <div className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center">
                          <p className="text-xs text-red-500 mb-1">Routeur Vlx-a-</p>
                          <p className="font-bold text-sm">AS Tgt</p>
                          <p className="text-xs text-tgix-gray">IXP ASN TGT</p>
                        </div>
                        <div className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center">
                          <p className="text-xs text-red-500 mb-1">Routeur Vlx-a-</p>
                          <p className="font-bold text-sm">AS Cafe</p>
                          <p className="text-xs text-tgix-gray">IXP ASN Cafe</p>
                        </div>
                        <div className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center">
                          <p className="text-xs text-red-500 mb-1">Routeur Vlx-a-</p>
                          <p className="font-bold text-sm">AS Moov</p>
                          <p className="text-xs text-tgix-gray">IXP ASN Moov</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-100 rounded-lg p-4 mb-6">
                      <p className="font-bold text-sm text-orange-800">Reseau fibre optique</p>
                    </div>

                    <div className="mb-8">
                      <div className="flex justify-center gap-8 flex-wrap">
                        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4 text-center">
                          <p className="font-bold text-sm">Coeur IXP</p>
                          <div className="flex gap-4 mt-2">
                            <div className="bg-white border rounded p-2 text-xs">SW-BB1</div>
                            <div className="bg-white border rounded p-2 text-xs">SW-B02</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-6">
                      <h3 className="text-lg font-bold uppercase text-tgix-dark mb-4">LOCAL TGIX</h3>
                      <div className="flex justify-center gap-6 flex-wrap text-xs">
                        <div className="bg-white border rounded p-3">
                          <p className="font-bold">Router Transit</p>
                        </div>
                        <div className="bg-white border rounded p-3">
                          <p className="font-bold">Router Gestion</p>
                        </div>
                        <div className="bg-white border rounded p-3">
                          <p className="font-bold">RS1</p>
                        </div>
                        <div className="bg-white border rounded p-3">
                          <p className="font-bold">RS2</p>
                        </div>
                      </div>
                      <div className="flex justify-center gap-6 mt-4 flex-wrap text-xs">
                        <div className="bg-white border rounded p-3">
                          <p className="font-bold">Firewall1</p>
                        </div>
                        <div className="bg-white border rounded p-3">
                          <p className="font-bold">VLAN Exploitation</p>
                        </div>
                        <div className="bg-white border rounded p-3">
                          <p className="font-bold">VLAN Production</p>
                        </div>
                        <div className="bg-white border rounded p-3">
                          <p className="font-bold">Firewall2</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 text-left text-xs text-tgix-gray">
                      <p className="font-bold mb-2">Legende :</p>
                      <p><span className="inline-block w-8 h-0.5 bg-red-500 mr-2"></span>Lien F.O principal</p>
                      <p><span className="inline-block w-8 h-0.5 bg-red-300 mr-2 border-dashed"></span>Lien F.O secondaire</p>
                      <p><span className="inline-block w-8 h-0.5 bg-black mr-2"></span>Lien ethernet principal</p>
                      <p><span className="inline-block w-8 h-0.5 bg-gray-400 mr-2"></span>Lien ethernet secondaire</p>
                      <p><span className="inline-block w-8 h-0.5 bg-green-500 mr-2"></span>Lien ethernet de management</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
