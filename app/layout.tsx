import type { Metadata } from "next";
import { Lexend, Bitter, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: 'swap',
});

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  display: 'swap',
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vickyaphalo.site"),
  title: "Vicky Aphalo | Acompañamiento pedagógico para docentes",
  description:
    "Sesiones 1:1, talleres y capacitaciones para docentes que buscan comprender lo que pasa en el aula y construir un plan de intervención concreto.",
  keywords: [
    "acompañamiento docente",
    "sesiones 1:1",
    "talleres para docentes",
    "capacitaciones institucionales",
    "intervención en el aula",
    "Vicky Aphalo",
    "educación",
  ],
  authors: [{ name: "Vicky Aphalo" }],
  icons: {
    icon: "/images/vicky-square.jpg",
    apple: "/images/vicky-square.jpg",
  },
  openGraph: {
    title: "Vicky Aphalo | Acompañamiento pedagógico para docentes",
    description:
      "Herramientas para enseñar con más calma y claridad. Sesiones 1:1, talleres y capacitaciones para equipos docentes.",
    url: "https://vickyaphalo.site",
    siteName: "Vicky Aphalo",
    images: [
      {
        url: "/images/vicky-square.jpg",
        width: 1200,
        height: 630,
        alt: "Vicky Aphalo, Licenciada en Educación y maestra",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vicky Aphalo | Acompañamiento pedagógico para docentes",
    description:
      "Sesiones 1:1, talleres y capacitaciones para pensar situaciones concretas del aula.",
    images: ["/images/vicky-square.jpg"],
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
      className={`${lexend.variable} ${bitter.variable} ${caveat.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link
          rel="preload"
          href="/videos/clases-video.mp4"
          as="video"
          type="video/mp4"
          media="(min-width: 1024px)"
        />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-lexend)] selection:bg-marker selection:text-ink">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
