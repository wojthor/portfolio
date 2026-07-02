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
  description:
    "Web developer from Gdańsk specialising in web applications, data pipelines, and data science.",
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
    "Data Studio",
    "Dataform",
    "Google Cloud Platform",
    "SQL",
    "Prisma",
    "Payload CMS",
    "Hygraph",
    "Stripe",
    "Tailwind CSS",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Wojciech Aniszewski - Freelance Developer",
  description:
    "Web developer from Gdańsk. React, Next.js, BigQuery, SQL, Data Studio, and Google Cloud Platform. I build web apps, SaaS platforms, dashboards, and data pipelines.",
  keywords: [
    "Wojciech Aniszewski",
    "Aniszewski",
    "freelance developer",
    "freelance web developer",
    "web developer",
    "software developer",
    "full stack developer",
    "freelancer",
    "Gdańsk",
    "data science",
    "data engineering",
    "web applications",
    "SaaS developer",
    "dashboard developer",
    "data pipelines",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "BigQuery",
    "SQL",
    "Data Studio",
    "Dataform",
    "Google Cloud Platform",
    "Payload CMS",
    "Hygraph",
    "PostgreSQL",
    "Stripe",
    "Tailwind CSS",
    "Portfolio",
    "programista",
    "frontend",
    "backend",
    "web development",
    "developer",
    "wojthor",
    "aniszewski-code",
    "aniszewski portfolio",
    "programista react",
    "programista next.js",
    "programista bigquery",
    "google cloud platform",
    "data studio dashboard",
    "aplikacje webowe",
    "pipeline danych",
    "wilczynska.visuals",
    "wilczynska",
    "wilczynska martyna",
    "martyna wilczynska",
    "design portfolio",
    "headless CMS",
    "Base Camp",
    "StudioRE",
    "Unschool Your English",
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
      "Web apps and data pipelines from Gdańsk. React, Next.js, BigQuery, Data Studio, Dataform, and Google Cloud Platform. Projects: Unschool Your English, Base Camp, StudioRE.",
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
      "Web developer from Gdańsk. React, Next.js, BigQuery, Data Studio, and Google Cloud Platform. Web apps, dashboards, and data pipelines.",
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
