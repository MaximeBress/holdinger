import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Holdinger | Les Orres",
  description: "Location de chalet, vente immobilière, découverte 4x4 et location de matériel BTP aux Orres (Hautes-Alpes).",
  keywords: ["Les Orres", "Immobilier", "Chalet", "Location", "4x4", "Quad", "BTP", "Alpes"],
  openGraph: {
    title: "Holdinger",
    description: "Votre partenaire montagne aux Orres.",
    url: "https://holdinger.fr",
    siteName: "Holdinger",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
