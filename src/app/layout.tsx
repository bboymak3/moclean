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
  title: "Limpieza24/7 - Limpieza a Domicilio Profesional en Santiago de Chile",
  description:
    "Servicio profesional de limpieza a domicilio en Santiago de Chile. Alfombras, sillones, colchones, cortinas, autos, Airbnb, casas, oficinas, post obra y más. Trabajo a mano, productos ecológicos. Cotiza gratis al +56 9 4034 9957.",
  keywords: [
    "limpieza a domicilio",
    "limpieza profesional Santiago",
    "limpieza de alfombras",
    "limpieza de sillones",
    "limpieza de colchones",
    "limpieza de cortinas",
    "limpieza de autos",
    "limpieza Airbnb",
    "limpieza post obra",
    "limpieza de oficinas",
    "tapicería profesional",
    "limpieza profunda",
    "aseo a domicilio Chile",
    "Limpieza24/7",
  ],
  authors: [{ name: "Limpieza24/7" }],
  openGraph: {
    title: "Limpieza24/7 - Limpieza a Domicilio Profesional en Santiago de Chile",
    description:
      "Servicio profesional de limpieza a domicilio en Santiago. Atendemos casas, departamentos, oficinas, Airbnb y más en la Región Metropolitana.",
    type: "website",
    locale: "es_CL",
  },
  verification: {
    google: "AO8x2D5digAhJVNmj0wVdeJx60EpOc56vELa9rh_CmY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="AO8x2D5digAhJVNmj0wVdeJx60EpOc56vELa9rh_CmY" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
