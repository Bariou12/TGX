"use client";

import { useState } from "react";
import PageBanner from "@/components/PageBanner";

const allNews = [
  {
    tag: "Actualite",
    title: "TGIX augmente sa capacite a 10Tbps",
    desc: "Mise a niveau majeure de l'infrastructure permettant une connectivite plus rapide a travers l'Afrique de l'Ouest.",
    date: "15 mars 2024",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
  {
    tag: "Actualite",
    title: "TGIX etend son reseau a cinq nouveaux pays",
    desc: "Initiative visant a renforcer l'acces a Internet en Afrique de l'Ouest avec des points de presence strategiques.",
    date: "15 mars 2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
  },
  {
    tag: "Evenement",
    title: "TGIX lance son service de cloud hybride",
    desc: "Nouvelle offre combinant les avantages du cloud public et prive pour une flexibilite accrue.",
    date: "15 mars 2024",
    image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?w=600&q=80",
  },
];

const filters = ["Tous", "Actualites", "Evenement"];

export default function ActualitesPage() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredNews = activeFilter === "Tous"
    ? allNews
    : allNews.filter((n) =>
        activeFilter === "Actualites" ? n.tag === "Actualite" : n.tag === "Evenement"
      );

  return (
    <main>
      <PageBanner title="Actualites et Event" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Filter tabs */}
        <div className="flex gap-6 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xl md:text-2xl font-bold transition-colors ${
                activeFilter === f
                  ? "text-tgix-dark"
                  : "text-tgix-green/60 hover:text-tgix-green"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredNews.map((n, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
              <div className="h-56 overflow-hidden">
                <img
                  src={n.image}
                  alt={n.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-tgix-green">
                  🏷 {n.tag}
                </span>
                <h3 className="font-bold text-base text-tgix-dark mt-2 mb-2">{n.title}</h3>
                <p className="text-sm text-tgix-gray mb-3">{n.desc}</p>
                <p className="text-xs text-tgix-gray">{n.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
