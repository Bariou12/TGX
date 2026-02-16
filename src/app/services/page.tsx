import PageBanner from "@/components/PageBanner";

const services = [
  {
    title: "Peering public",
    desc: "Echange de trafic multilateral entre tous les membres connectes au TGIX.",
    features: ["Acces au reseau de peering", "Politique d'echange ouverte", "Support technique 24/7"],
  },
  {
    title: "Peering prive",
    desc: "Connexion directe et dediee entre deux membres pour un echange de trafic bilateral.",
    features: ["Connexion point-a-point", "Bande passante garantie", "SLA personnalise"],
  },
  {
    title: "Colocation",
    desc: "Hebergement d'equipements dans les locaux securises du TGIX.",
    features: ["Alimentation redondante", "Securite physique", "Acces 24/7"],
  },
  {
    title: "Services cloud",
    desc: "Solutions cloud hybrides pour les entreprises togolaises.",
    features: ["Cloud public et prive", "Stockage scalable", "Migration assistee"],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageBanner title="Services et Tarifs" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-tgix-dark mb-4">Nos services</h2>
        <p className="text-sm text-tgix-gray mb-10 max-w-2xl">
          Le TGIX offre une gamme de services d&apos;interconnexion pour repondre aux besoins des operateurs et fournisseurs de services Internet au Togo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-tgix-dark mb-2">{s.title}</h3>
              <p className="text-sm text-tgix-gray mb-4">{s.desc}</p>
              <ul className="space-y-1">
                {s.features.map((f, j) => (
                  <li key={j} className="text-sm text-tgix-gray flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-tgix-green shrink-0"></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
