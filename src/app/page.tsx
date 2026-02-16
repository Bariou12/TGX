import { Globe, Wifi, Users, CheckCircle, Eye, Target, Heart } from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: Globe, value: "07", label: "AS connectes" },
  { icon: Wifi, value: "10", label: "Ports actifs" },
  { icon: Users, value: "04", label: "Utilisateurs RS" },
  { icon: CheckCircle, value: "100%", label: "Disponibilite" },
];

const members = [
  { name: "Moov Africa", color: "bg-blue-600", textColor: "text-white" },
  { name: "GVA", color: "bg-white border-2 border-green-500", textColor: "text-green-600" },
  { name: "YAS", color: "bg-green-500", textColor: "text-white" },
  { name: "CAFE Informatique", color: "bg-white border-2 border-green-600", textColor: "text-green-700" },
];

const news = [
  {
    tag: "Actualite",
    title: "TGIX augmente sa capacite a 10Tbps",
    desc: "Mise a niveau majeure de l'infrastructure permettant une connectivite plus rapide a travers l'Afrique de l'Ouest.",
    date: "15 mars 2024",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
  },
  {
    tag: "Actualite",
    title: "TGIX etend son reseau a cinq nouveaux pays",
    desc: "Initiative visant a renforcer l'acces a Internet en Afrique de l'Ouest avec des points de presence strategiques.",
    date: "15 mars 2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
  },
  {
    tag: "Evenement",
    title: "TGIX lance son service de cloud hybride",
    desc: "Nouvelle offre combinant les avantages du cloud public et prive pour une flexibilite accrue.",
    date: "15 mars 2024",
    image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?w=400&q=80",
  },
];

const partners = ["PCH", "AFRINIC", "PCH", "AFRINIC"];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="banner-bg relative">
        <div className="banner-overlay py-24 md:py-40 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-wide uppercase">
              Le coeur de<br />l&apos;internet togolais
            </h1>
            <p className="mt-6 text-gray-300 text-base md:text-lg max-w-xl mx-auto">
              TGIX favorise une interconnexion rapide, securisee et locale entre les acteurs du numerique au Togo.
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <Link
                href="/"
                className="bg-tgix-green hover:bg-tgix-green-dark text-white font-semibold px-6 py-3 rounded text-sm transition-colors"
              >
                EN SAVOIR PLUS
              </Link>
              <Link
                href="/"
                className="border border-white text-white font-semibold px-6 py-3 rounded text-sm hover:bg-white/10 transition-colors"
              >
                EN SAVOIR PLUS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres cles */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-tgix-dark mb-12">Chiffres cles</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-tgix-green/10 flex items-center justify-center mb-3">
                  <s.icon className="text-tgix-green" size={28} />
                </div>
                <span className="text-4xl md:text-5xl font-extrabold text-tgix-dark">{s.value}</span>
                <span className="text-sm text-tgix-gray mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos membres */}
      <section className="py-16 bg-tgix-light">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-tgix-dark mb-4">Nos membres</h2>
          <p className="text-sm text-tgix-gray max-w-2xl mx-auto mb-10">
            Rejoignez les principales entreprises de telecommunications et de technologie d&apos;Afrique pour construire l&apos;infrastructure numerique du continent.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {members.map((m, i) => (
              <div
                key={i}
                className={`${m.color} ${m.textColor} rounded-full px-6 py-3 font-bold text-sm flex items-center justify-center min-w-[120px] shadow-sm`}
              >
                {m.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interconnexion */}
      <section className="py-16 bg-tgix-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Une interconnexion ouverte et equitable
          </h2>
          <p className="text-sm text-gray-300 mb-8 max-w-2xl mx-auto">
            TGIX adopte une politique d&apos;echange de trafic multilateral, simple transparent. Cela permet a tous les membres de reduire la complexite et d&apos;ameliorer la performance de contenus locaux.
          </p>
          <Link
            href="#"
            className="inline-block border border-white text-white font-semibold px-6 py-3 rounded text-sm hover:bg-white/10 transition-colors"
          >
            Consultez la politique complete
          </Link>
        </div>
      </section>

      {/* Vision, Mission, Valeurs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-tgix-dark mb-12">
            Construire ensemble l&apos;avenir du numerique togolais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-tgix-green/10 flex items-center justify-center mb-4">
                <Eye className="text-tgix-green" size={32} />
              </div>
              <h3 className="font-bold text-lg text-tgix-dark mb-2">Notre vision</h3>
              <p className="text-sm text-tgix-gray">
                Un internet de qualite performant et accessible a tout du Togo
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-tgix-green/10 flex items-center justify-center mb-4">
                <Target className="text-tgix-green" size={32} />
              </div>
              <h3 className="font-bold text-lg text-tgix-dark mb-2">Notre mission</h3>
              <p className="text-sm text-tgix-gray">
                Offrir des infrastructures d&apos;interconnexion neutres et promouvoir le developpement des contenus locaux
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-tgix-green/10 flex items-center justify-center mb-4">
                <Heart className="text-tgix-green" size={32} />
              </div>
              <h3 className="font-bold text-lg text-tgix-dark mb-2">Nos valeurs</h3>
              <p className="text-sm text-tgix-gray">
                Professionnalisme, loyaute et Transparence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dernieres nouvelles */}
      <section className="py-16 bg-tgix-light">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-tgix-dark mb-2">Dernieres nouvelles</h2>
          <p className="text-sm text-tgix-gray mb-10">Restez informe de nos derniers developpements</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((n, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className={`text-xs font-semibold ${n.tag === "Evenement" ? "text-tgix-green" : "text-tgix-green"}`}>
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
      </section>

      {/* Partenaires */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-tgix-dark mb-10">
            Fiable pour les grandes organisations
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((p, i) => (
              <div key={i} className="text-2xl md:text-3xl font-extrabold text-tgix-dark opacity-60">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
