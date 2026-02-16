"use client";

import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import { ChevronDown, ChevronRight } from "lucide-react";

const faqs = [
  {
    q: "Qu'est-ce qu'un Internet Exchange Point (IXP) ?",
    a: "Un Internet Exchange Point (IXP) est une infrastructure réseau neutre permettant à plusieurs réseaux autonomes (AS) d'échanger du trafic Internet localement, via des accords de peering, sans passer par des liens de transit internationaux.",
  },
  {
    q: "Quel est le rôle d'un IXP dans l'écosystème Internet national ?",
    a: "Un IXP permet : l'interconnexion locale des réseaux nationaux ; l'amélioration des performances (latence, débit) ; la réduction des coûts de transit international ; le renforcement de la souveraineté numérique et de la résilience Internet nationale.",
  },
  {
    q: "Pourquoi un IXP est-il considéré comme une infrastructure critique ?",
    a: "Un IXP est une infrastructure critique car il supporte des flux essentiels (administrations, services numériques, contenus locaux), contribue à la continuité des services Internet en cas de défaillance internationale, participe à la stabilité et à la résilience de l'Internet national.",
  },
  {
    q: "Quelle est l'architecture réseau de TGIX (L2, L3, topologie, redondance) ?",
    a: "Le TGIX repose sur une architecture Ethernet de niveau 2 avec une topologie redondée (switchs cœur/distribution, liens multiples) et une séparation claire entre plan de commutation (L2) et plan de routage (L3) opéré par les membres.",
  },
  {
    q: "Le TGIX fonctionne-t-il exclusivement en Layer 2 Ethernet ?",
    a: "Oui. Le TGIX est opéré en Layer 2 (Ethernet). Le routage BGP (IPv4 / IPv6) est entièrement sous la responsabilité des membres connectés.",
  },
  {
    q: "Comment est assurée la haute disponibilité du TGIX ?",
    a: "La haute disponibilité repose sur la redondance des équipements (switchs, alimentations) et des liaisons multiples, la maîtrise des procédures d'exploitation et de maintenance et la supervision continue de l'infrastructure.",
  },
  {
    q: "Pourquoi se connecter au TGIX et quels sont les avantages pour les opérateurs et les fournisseurs d'accès Internet ?",
    a: "Les principaux avantages sont : baisse significative des coûts de transit IP ; amélioration de la qualité d'expérience (QoE) ; accès direct aux contenus et services locaux ; meilleure résilience réseau.",
  },
  {
    q: "En quoi le TGIX améliore-t-il la qualité de l'Internet (latence, débit, résilience) ?",
    a: "Le TGIX permet : une réduction drastique de la latence entre les nœuds des différents réseaux nationaux ; une augmentation du débit effectif en décongestionnant les liaisons internationaux des membres interconnectés ; une meilleure tolérance aux pannes internationales ; un routage plus court et plus efficace.",
  },
  {
    q: "Comment le TGIX contribue-t-il à la réduction des coûts de transit international ?",
    a: "Le TGIX maintient le trafic local ce qui : évite le passage par des routes internationales coûteuses ; réduit la dépendance aux fournisseurs de transit ; optimise les investissements réseau des opérateurs.",
  },
  {
    q: "Qui peut devenir membre du TGIX ?",
    a: "Peuvent devenir membres : FAI et opérateurs télécoms ; fournisseurs de contenus et CDN ; hébergeurs et data centers ; réseaux institutionnels disposant d'un ASN.",
  },
  {
    q: "Les administrations publiques, les universités et centres de recherche peuvent-ils se connecter au TGIX ?",
    a: "Oui, sous réserve : de disposer d'un réseau autonome (ASN) ou d'un parrainage ; de respecter les règles administratives, techniques et opérationnelles du TGIX.",
  },
  {
    q: "Les opérateurs étrangers peuvent-ils se connecter au TGIX ?",
    a: "Oui, sous réserve : d'une présence technique locale ou régionale ; du respect du cadre réglementaire et contractuel ; de l'intérêt mutuel en matière de peering.",
  },
  {
    q: "Y a-t-il des prérequis techniques pour adhérer au TGIX ?",
    a: "Les principaux prérequis sont : disposer d'un ASN et de ressources IP (IPv4 et/ou IPv6) ; maîtriser le BGP (IPv4 et/ou IPv6) ; disposer d'un équipement compatible Ethernet (L2/L3) ; signer les accords d'adhésion et de peering.",
  },
  {
    q: "Quels types de ports et de capacités sont proposés ?",
    a: "Les capacités proposées incluent : ports 1G, 10G, 40G, 100G Ethernet ; interfaces SFP, SFP+, QSFP/QSFP28 selon disponibilité.",
  },
  {
    q: "Quels sont les modes d'interconnexion disponibles (peering bilatéral, multilatéral) ?",
    a: "Le TGIX supporte : le peering bilatéral (BGP direct) ; le peering multilatéral via route servers.",
  },
  {
    q: "L'IXP prend-il en charge IPv6 ?",
    a: "Le TGIX supporte IPv4. L'IPv6 est prévue dans les mois à venir.",
  },
  {
    q: "Est-il possible d'établir des accords de peering privés via l'IXP ?",
    a: "Oui. Les membres peuvent établir : des peerings privés (PNI) ; des accords spécifiques, indépendamment du peering multilatéral.",
  },
  {
    q: "Quels équipements sont nécessaires pour se connecter ?",
    a: "Un membre doit disposer : d'un routeur ou switch L3 supportant BGP ; d'interfaces Ethernet compatibles ; de fibres optiques ou liens de transport vers le site TGIX.",
  },
  {
    q: "Des services de route servers sont-ils disponibles au TGIX ?",
    a: "Oui. Le TGIX met à disposition des route servers pour simplifier le peering multilatéral.",
  },
  {
    q: "Le TGIX héberge-t-il des services critiques (DNS, NTP, caches de contenus) ?",
    a: "Oui, notamment, copies de serveurs racines et les anycast de serveurs DNS (gTLD et ccTLD).",
  },
  {
    q: "Existe-t-il des services de supervision et de statistiques de trafic au TGIX ?",
    a: "Oui. Le TGIX fournit : des statistiques de trafic agrégées ; des outils de supervision (disponibilité, capacité, tendances) ainsi que des indicateurs utiles aux membres et aux autorités.",
  },
  {
    q: "L'adhésion au TGIX est-elle payante ?",
    a: "Oui. L'adhésion inclut généralement : des frais d'entrée unique (frais fixe payable une seule fois) ; des cotisations annuelles ; des frais récurrents liés au port et aux services.",
  },
  {
    q: "Existe-t-il des tarifs préférentiels pour certains acteurs ?",
    a: "Oui, selon les politiques du TGIX : des tarifs spécifiques pour les membres ; des tarifs spécifiques pour universités, recherche, administrations ; des conditions peuvent être adaptées pour certains acteurs stratégiques.",
  },
  {
    q: "Comment s'effectue la facturation des services ?",
    a: "La facturation est : périodique (annuelle) ; basée sur le type de port, la capacité et les services utilisés ; conforme aux règles de transparence et de gouvernance du TGIX.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main>
      <PageBanner title="FAQ" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-tgix-dark mb-10">
          Questions Fréquemment Posées (FAQ)
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-semibold text-tgix-dark pr-4">{faq.q}</span>
                <span className="shrink-0">
                  {openIndex === i ? (
                    <ChevronDown className="text-tgix-green" size={24} />
                  ) : (
                    <ChevronRight className="text-tgix-green" size={24} />
                  )}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-tgix-gray leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
