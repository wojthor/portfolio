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
  jobTitle: "Freelance Developer",
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
    "TypeScript",
    "Node.js",
    "GraphQL",
    "Python",
    "BigQuery",
    "Dataform",
    "SQL",
    "Prisma",
    "Stripe",
    "Tailwind CSS",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Wojciech Aniszewski - Freelance Developer",
  description:
    "Freelance developer from Gdańsk. React, Next.js, BigQuery, SQL. Web apps and data pipelines.",
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
    title: "Wojciech Aniszewski - Freelance Developer",
    description:
      "Web development and data engineering. React, Next.js, BigQuery, Dataform. Projects: Unschool Your English, Base Camp, StudioRE.",
    siteName: "Wojciech Aniszewski Portfolio",
    images: [
      {
        url: `${siteUrl}/photo3.png`,
        width: 1280,
        height: 720,
        alt: "Wojciech Aniszewski - Freelance Developer",
      },
    ],
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wojciech Aniszewski - Freelance Developer",
    description:
      "Freelance developer. React, Next.js, BigQuery. Web apps and data pipelines from Gdańsk.",
    images: [`${siteUrl}/photo3.png`],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon-apple.png", type: "image/png" }],
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
