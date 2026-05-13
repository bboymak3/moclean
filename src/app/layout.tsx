import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ÁtomoClean - Limpieza a Domicilio con Aspiradora a Vapor en Santiago",
  description:
    "Servicio profesional de limpieza a domicilio con aspiradora a vapor en Santiago de Chile. Alfombras, sillones, colchones, cortinas, autos, Airbnb, casas, oficinas y más. Cotiza gratis.",
  keywords: [
    "limpieza a domicilio",
    "aspiradora a vapor",
    "limpieza de alfombras",
    "limpieza de sillones",
    "limpieza de colchones",
    "limpieza de cortinas",
    "limpieza de autos",
    "limpieza Airbnb",
    "limpieza post obra",
    "limpieza de oficinas",
    "tapicería a vapor",
    "limpieza profunda",
    "limpieza a vapor Santiago",
    "ÁtomoClean",
    "aseo a domicilio Chile",
  ],
  authors: [{ name: "ÁtomoClean" }],
  openGraph: {
    title: "ÁtomoClean - Limpieza a Domicilio con Aspiradora a Vapor en Santiago",
    description:
      "Servicio profesional de limpieza a domicilio con aspiradora a vapor. Atendemos casas, departamentos, oficinas, Airbnb y más en Santiago de Chile.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
