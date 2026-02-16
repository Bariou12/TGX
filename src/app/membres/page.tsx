import PageBanner from "@/components/PageBanner";

const members = [
  { name: "Moov Africa", description: "Operateur de telecommunications majeur en Afrique de l'Ouest" },
  { name: "GVA", description: "Groupe Vivendi Africa - Fournisseur d'acces Internet haut debit" },
  { name: "YAS", description: "Fournisseur de services Internet et telecommunications" },
  { name: "CAFE Informatique", description: "Premier fournisseur d'acces Internet au Togo" },
];

export default function MembresPage() {
  return (
    <main>
      <PageBanner title="Membres" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-tgix-dark mb-4">Nos membres</h2>
        <p className="text-sm text-tgix-gray mb-10 max-w-2xl">
          Rejoignez les principales entreprises de telecommunications et de technologie d&apos;Afrique pour construire l&apos;infrastructure numerique du continent.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {members.map((m, i) => (
            <div key={i} className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-tgix-dark mb-2">{m.name}</h3>
              <p className="text-sm text-tgix-gray">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
