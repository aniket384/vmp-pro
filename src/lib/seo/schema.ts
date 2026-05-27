import { siteConfig } from "@/config/site";
import { faqs, services, founderBio } from "@/content/home";
import type { Insight } from "@/content/insights";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: ["Northstar Labs by Aniket", "Northstar Studio"],
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    email: siteConfig.links.email,
    sameAs: [founderBio.linkedin],
    description: siteConfig.description,
    knowsAbout: [
      "MVP rescue",
      "Finishing AI-built MVPs",
      "Lovable code completion",
      "Cursor codebase rescue",
      "Bolt project completion",
      "v0 prototype to production",
      "Investor-ready MVP development",
      "Stripe integration for AI-built apps",
      "Supabase auth fixes",
      "Next.js MVP engineering",
    ],
    knowsLanguage: "en",
    areaServed: ["United States", "United Kingdom", "Canada", "European Union", "Australia"],
    founder: {
      "@type": "Person",
      "@id": `${siteConfig.url}/about#aniket`,
      name: founderBio.name,
      jobTitle: "Founding Engineer",
      url: `${siteConfig.url}/about`,
      sameAs: [founderBio.linkedin],
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/about#aniket`,
    name: founderBio.name,
    jobTitle: "Founding Engineer at Northstar Labs",
    description:
      "Engineer who has shipped 30+ MVPs and engineered an app to 10M+ downloads. Founder of Northstar Labs.",
    url: `${siteConfig.url}/about`,
    sameAs: [founderBio.linkedin],
    worksFor: { "@id": `${siteConfig.url}/#organization` },
    knowsAbout: [
      "MVP development",
      "Next.js",
      "Supabase",
      "Stripe integrations",
      "AI-generated codebase rescue",
      "Production system scaling",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "India TV",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en",
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#professional-service`,
    name: siteConfig.name,
    url: siteConfig.url,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: ["United States", "United Kingdom", "Canada", "European Union", "Australia"],
    serviceType: [
      "MVP Rescue",
      "AI-Built MVP Completion",
      "Investor-Ready MVP Development",
      "Codebase Audit",
    ],
    audience: {
      "@type": "Audience",
      audienceType:
        "Non-technical founders with AI-built prototypes (Lovable, Cursor, Bolt, v0, Replit) pitching investors",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Northstar Labs engagements",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        name: service.title,
        url: `${siteConfig.url}${service.href}`,
        description: service.description,
        priceSpecification: parsePrice(service.metric),
      })),
    },
    description: siteConfig.description,
  };
}

function parsePrice(metric: string): Record<string, unknown> | undefined {
  const match = metric.match(/\$([0-9,]+)/);
  if (!match) return undefined;
  const value = Number(match[1].replace(/,/g, ""));
  return {
    "@type": "PriceSpecification",
    price: value,
    priceCurrency: "USD",
  };
}

export function auditOfferSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/audit#service`,
    name: "The 48-Hour Audit",
    url: `${siteConfig.url}/audit`,
    description:
      "48-hour honest audit of your AI-built MVP. Loom walkthrough plus written report. Credited toward any paid project within 30 days.",
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: ["United States", "United Kingdom", "Canada", "European Union", "Australia"],
    serviceType: "MVP audit",
    offers: {
      "@type": "Offer",
      price: 199,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/audit`,
      itemOffered: {
        "@type": "Service",
        name: "Codebase audit and rescue assessment",
      },
    },
  };
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function webPageSchema({
  name,
  description,
  path,
  topics,
}: {
  name: string;
  description: string;
  path: string;
  topics: string[];
}) {
  const url = `${siteConfig.url}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: topics.map((topic) => ({
      "@type": "Thing",
      name: topic,
    })),
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en",
  };
}

export function articleSchema(insight: Insight) {
  const url = `${siteConfig.url}/blog/${insight.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.description,
    abstract: insight.takeaways.join(" "),
    datePublished: insight.publishedAt,
    dateModified: insight.updatedAt,
    articleSection: insight.category,
    keywords: insight.tags.join(", "),
    url,
    inLanguage: "en",
    author: {
      "@type": "Person",
      "@id": `${siteConfig.url}/about#aniket`,
      name: founderBio.name,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: insight.tags.map((tag) => ({
      "@type": "Thing",
      name: tag,
    })),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}
