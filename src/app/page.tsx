import type { Metadata } from "next";
import { FaqSection } from "@/components/sections/home/faq-section";
import { FinalCtaSection } from "@/components/sections/home/final-cta-section";
import { FounderPainSection } from "@/components/sections/home/founder-pain-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { MobileConversionBar } from "@/components/sections/home/mobile-conversion-bar";
import { ProcessSection } from "@/components/sections/home/process-section";
import { ServicesSection } from "@/components/sections/home/services-section";
import { TrustSection } from "@/components/sections/home/trust-section";
import { JsonLd } from "@/components/seo/json-ld";
import { auditOfferSchema, faqPageSchema, organizationSchema, serviceSchema, webPageSchema, websiteSchema } from "@/lib/seo/schema";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Finish your AI-built MVP before your investor pitch",
  description:
    "We finish the MVPs that Lovable, Cursor, Bolt and v0 couldn't — for non-technical founders pitching investors in the next 30 days. $199 audit. $7.5k 2-week sprint. $19.5k 4-week MVP.",
  path: "/",
  keywords: [
    "finish my Lovable app",
    "fix AI-generated code",
    "MVP rescue agency",
    "investor-ready MVP",
    "non-technical founder developer",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />
      <JsonLd data={serviceSchema()} />
      <JsonLd data={auditOfferSchema()} />
      <JsonLd data={faqPageSchema()} />
      <JsonLd
        data={webPageSchema({
          name: "Finish your AI-built MVP before your investor pitch",
          description:
            "We finish the MVPs that Lovable, Cursor, Bolt and v0 couldn't — for non-technical founders pitching investors in the next 30 days.",
          path: "/",
          topics: ["MVP rescue", "AI-built MVP completion", "investor-ready MVP"],
        })}
      />
      <HeroSection />
      <TrustSection />
      <FounderPainSection />
      <ServicesSection />
      <ProcessSection />
      <FaqSection />
      <FinalCtaSection />
      <MobileConversionBar />
    </>
  );
}
