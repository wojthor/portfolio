import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const siteUrl = "https://aniszewski-code.pl";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Wojciech Aniszewski",
  jobTitle: "Software Developer",
  url: siteUrl,
  image: `${siteUrl}/photo3.png`,
  email: "mailto:wojtek1aniszewski1@gmail.com",
  sameAs: [
    "https://github.com/wojthor",
    "https://www.linkedin.com/in/wojciech-aniszewski/",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gdańsk",
    addressCountry: "PL",
  },
  knowsAbout: ["React", "Next.js", "TypeScript", "GraphQL", "Python"],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Wojciech Aniszewski - Software Developer",
  description: "Software Developer specializing in React and Node.js",
  keywords: [
    "Wojciech Aniszewski",
    "Aniszewski",
    "Software Developer",
    "Full Stack Developer",
    "Gdańsk",
    "React",
    "Next.js",
    "Portfolio",
    "programista",
    "frontend",
    "backend",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "web development",
    "developer",
    "wojthor",
    "aniszewski-code",
    "aniszewski.dev",
    "aniszewski portfolio",
    "aniszewski",
    "programista react",
    "wilczynska.visuals",
    "wilczynska",
    "wilczynska martyna",
    "martyna wilczynska",
    "design portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Wojciech Aniszewski - Software Developer",
    description:
      "Discover the portfolio of Wojciech Aniszewski, a full stack developer from Gdańsk crafting modern web experiences.",
    siteName: "Wojciech Aniszewski Portfolio",
    images: [
      {
        url: `${siteUrl}/photo3.png`,
        width: 1280,
        height: 720,
        alt: "Wojciech Aniszewski - Software Developer",
      },
    ],
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wojciech Aniszewski - Software Developer",
    description:
      "Full Stack Developer from Gdańsk specializing in React and Next.js.",
    images: [`${siteUrl}/photo3.png`],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="dark">
      <body className={inter.className}>
        <Script id="person-structured-data" type="application/ld+json">
          {JSON.stringify(structuredData)}
        </Script>
        {children}
      </body>
    </html>
  );
}
