import PageBanner from "@/components/PageBanner";

export default function ContactPage() {
  return (
    <main>
      <PageBanner title="Contact" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-tgix-dark mb-2">
            Vous avez une question,
          </h2>
          <h2 className="text-2xl md:text-3xl font-bold text-tgix-dark mb-4">
            un projet ou une idee a partager ?
          </h2>
          <p className="text-sm text-tgix-gray">
            Remplissez le formulaire ci-dessous et nous reviendrons vers vous rapidement.
          </p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Votre nom*"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-tgix-green transition-colors"
            />
            <input
              type="email"
              placeholder="Votre adresse email*"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-tgix-green transition-colors"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Votre telephone"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-tgix-green transition-colors"
            />
            <input
              type="text"
              placeholder="Votre sujet"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-tgix-green transition-colors"
            />
          </div>
          <textarea
            placeholder="Votre message"
            rows={6}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-tgix-green transition-colors resize-none"
          />
          <div className="text-center">
            <button
              type="submit"
              className="bg-tgix-green hover:bg-tgix-green-dark text-white font-semibold px-8 py-3 rounded-lg text-sm uppercase tracking-wide transition-colors"
            >
              Soumettre
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
