import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-tgix-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-1 font-bold text-xl mb-4">
              <span className="text-white">tgi</span>
              <span className="text-tgix-green text-2xl font-extrabold">X</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Connecter l&apos;avenir numerique de l&apos;Afrique grace a une infrastructure d&apos;echange Internet de classe mondiale.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-bold text-base mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-tgix-green transition-colors">A propos de nous</Link></li>
              <li><Link href="/membres" className="hover:text-tgix-green transition-colors">Membres</Link></li>
              <li><Link href="/services" className="hover:text-tgix-green transition-colors">Services</Link></li>
              <li><Link href="/actualites" className="hover:text-tgix-green transition-colors">Nouvelles</Link></li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="font-bold text-base mb-4">Ressources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-tgix-green transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-tgix-green transition-colors">Politique de peering</Link></li>
              <li><Link href="#" className="hover:text-tgix-green transition-colors">Informations techniques</Link></li>
              <li><Link href="#" className="hover:text-tgix-green transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Bulletin */}
          <div>
            <h3 className="font-bold text-base mb-4">Bulletin d&apos;information</h3>
            <p className="text-sm text-gray-300 mb-3">
              Restez informe de nos dernieres nouvelles
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-3 py-2 text-sm bg-tgix-navy border border-gray-600 rounded-l text-white placeholder-gray-400 focus:outline-none focus:border-tgix-green"
              />
              <button className="bg-tgix-green hover:bg-tgix-green-dark text-white px-3 py-2 rounded-r transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </button>
            </div>
            <div className="flex gap-2 mt-4">
              <a href="#" className="w-8 h-8 rounded border border-gray-600 flex items-center justify-center hover:border-tgix-green transition-colors">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded border border-gray-600 flex items-center justify-center hover:border-tgix-green transition-colors">
                <Twitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded border border-gray-600 flex items-center justify-center hover:border-tgix-green transition-colors">
                <Linkedin size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded border border-gray-600 flex items-center justify-center hover:border-tgix-green transition-colors">
                <Youtube size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; 2024 TGIX. Tous droits reserves.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link href="#" className="hover:text-tgix-green transition-colors">Politique de confidentialite</Link>
            <Link href="#" className="hover:text-tgix-green transition-colors">Conditions de service</Link>
            <Link href="/contact" className="hover:text-tgix-green transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
