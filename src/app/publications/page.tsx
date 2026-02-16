"use client";

import PageBanner from "@/components/PageBanner";
import { FileText } from "lucide-react";

const categories = [
  { id: "rapports", label: "Rapports d'activité" },
  { id: "plans", label: "Plans d'actions" },
  { id: "autres", label: "Autres documents" },
];

export default function PublicationsPage() {
  return (
    <main>
      <PageBanner title="Publications" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-tgix-dark mb-4">
          Publications du TGIX
        </h2>
        <p className="text-center text-sm text-tgix-gray mb-10 max-w-2xl mx-auto">
          Dans cette rubrique sont publiés les rapports d&apos;activité, les plans d&apos;actions et tout autre document issu des activités du TGIX jugés utiles.
        </p>

        <div className="space-y-10">
          {categories.map((cat) => (
            <section key={cat.id}>
              <h3 className="text-lg font-bold text-tgix-dark mb-4 border-b border-gray-200 pb-2">
                {cat.label}
              </h3>
              <div className="bg-gray-50 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                <FileText className="text-gray-300 mb-3" size={48} />
                <p className="text-sm text-gray-400">
                  Aucun document disponible pour le moment.
                </p>
                <p className="text-xs text-gray-300 mt-1">
                  Les documents seront publiés ici prochainement.
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
