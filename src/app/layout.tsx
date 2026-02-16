import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { VisualEditsMessenger } from "orchids-visual-edits";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TGIX - Le coeur de l'internet togolais",
  description: "TGIX favorise une interconnexion rapide, securisee et locale entre les acteurs du numerique au Togo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} antialiased font-sans`}>
        <Navbar />
        {children}
        <Footer />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
