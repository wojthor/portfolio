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
  jobTitle: "Freelancer Web Developer",
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
  knowsAbout: [
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "GraphQL",
    "Python",
    "Prisma",
    "Hygraph",
    "Stripe",
    "Node.js",
    "Tailwind CSS",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Wojciech Aniszewski - Software Developer",
  description:
    "Freelancer Web Developer specializing in React, Next.js, and Angular. Full-stack projects with Prisma, Hygraph, Stripe. Collaboration with wilczynska.visuals.",
  keywords: [
    "Wojciech Aniszewski",
    "Aniszewski",
    "Software Developer",
    "Full Stack Developer",
    "Freelancer",
    "freelance developer",
    "freelance web developer",
    "Gdańsk",
    "React",
    "Next.js",
    "Angular",
    "Angular developer",
    "TypeScript",
    "Portfolio",
    "programista",
    "frontend",
    "backend",
    "JavaScript",
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
    "Prisma",
    "Hygraph",
    "GraphQL",
    "Stripe",
    "Headless CMS",
    "Base Camp",
    "StudioRE",
    "Rental Rate",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Wojciech Aniszewski - Software Developer",
    description:
      "Freelancer Web Developer from Gdańsk. React, Next.js, Angular. Projects: Base Camp e-commerce, StudioRE (with wilczynska.visuals), Rental Rate. Prisma, Hygraph, Stripe.",
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
      "Freelancer Web Developer. React, Next.js, Angular. Collaboration with wilczynska.visuals. Base Camp, StudioRE, Rental Rate.",
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
