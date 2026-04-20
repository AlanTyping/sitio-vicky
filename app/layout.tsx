import type { Metadata } from "next";
import { Geist, Geist_Mono, Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Vicky Aphalo | Acompañamiento Emocional para Educadores",
  description: "Espacio de sanación y fortalecimiento diseñado exclusivamente para docentes. Supera el estrés laboral, recupera tu bienestar emocional y redescubre tu propósito en la enseñanza.",
  keywords: ["acompañamiento emocional", "docentes", "bienestar educadores", "estrés laboral docente", "Vicky Aphalo", "taller para maestros"],
  authors: [{ name: "Vicky Aphalo" }],
  openGraph: {
    title: "Vicky Aphalo | Bienestar para Educadores",
    description: "Sanar, fortalecerse y reencontrar el propósito en la enseñanza.",
    url: "https://sitio-vicky.vercel.app",
    siteName: "Vicky Aphalo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vicky Aphalo - Bienestar Docente",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vicky Aphalo | Bienestar para Educadores",
    description: "Acompañamiento emocional diseñado exclusivamente para educadores.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} h-full antialiased scroll-smooth`}
    >
      <body className={`${lexend.variable} font-sans min-h-full flex flex-col selection:bg-sky-100 selection:text-sky-900`}>
        {children}
      </body>
    </html>
  );
}
