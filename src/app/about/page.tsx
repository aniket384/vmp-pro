import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { founderBio } from "@/content/home";

export const metadata: Metadata = createMetadata({
  title: "About Aniket Mishra — Northstar Labs",
  description:
    "I'm Aniket. I've shipped 30+ MVPs, engineered an app to 10M+ downloads, and worked at India TV. Northstar Labs is what I do now: finishing AI-built MVPs for founders pitching investors.",
  path: "/about",
  keywords: ["Aniket Mishra developer", "MVP rescue engineer", "Northstar Labs founder"],
});

const work = [
  {
    title: "30+ MVPs shipped",
    body: "SaaS, marketplaces, AI, consumer. The same engineer who'll work on yours.",
  },
  {
    title: "10M+ downloads",
    body: "Engineered systems for an app past 10 million downloads. I know what breaks at scale.",
  },
  {
    title: "India TV production",
    body: "Real-traffic systems at one of India's largest broadcasters. Not toy projects.",
  },
];

const principles = [
  {
    title: "Two clients at a time. No more.",
    body: "You get me, not a junior dev with my name on the email.",
  },
  {
    title: "Fixed scope. Fixed price. Written.",
    body: "Three columns in every contract: In, Not in, Costs extra.",
  },
  {
    title: "Daily Loom. One Slack channel.",
    body: "One update per weekday. One place for questions. No chaos.",
  },
  {
    title: "Code freeze 5 days before your pitch.",
    body: "The last 5 days are for rehearsing the demo, not patching it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: "About Aniket Mishra — Northstar Labs",
          description: founderBio.intro,
          path: "/about",
          topics: ["Aniket Mishra", "Northstar Labs", "MVP rescue"],
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "About", url: `${siteConfig.url}/about` },
        ])}
      />

      <section className="border-b border-border py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-accent">About</p>
            <h1 className="mt-3 text-4xl font-medium leading-tight sm:text-6xl">
              Hi, I&apos;m Aniket. I finish AI-built MVPs.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {founderBio.intro}
            </p>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {founderBio.why}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/audit" size="lg">
                Get the $199 audit
                <ArrowRight size={17} />
              </ButtonLink>
              <ButtonLink
                href={founderBio.linkedin}
                size="lg"
                variant="secondary"
              >
                LinkedIn
              </ButtonLink>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {founderBio.location}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-medium text-accent">Track record</p>
              <h2 className="mt-3 text-3xl font-medium leading-tight sm:text-4xl">
                What I&apos;ve actually shipped.
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-muted-foreground">
                None of these were for US clients — that&apos;s why I&apos;m
                here. The work is real, the numbers are real, and the LinkedIn
                checks out.
              </p>
            </div>
            <div className="grid gap-4">
              {work.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-border bg-background p-6 sm:p-7"
                >
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-muted/35 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-medium text-accent">How I work</p>
              <h2 className="mt-3 text-3xl font-medium leading-tight sm:text-4xl">
                Four operating principles. They&apos;re in every contract.
              </h2>
            </div>
            <div className="grid gap-4">
              {principles.map((p) => (
                <article
                  key={p.title}
                  className="rounded-lg border border-border bg-background p-6 sm:p-7"
                >
                  <h3 className="text-xl font-medium">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
                    {p.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 rounded-lg border border-border bg-foreground p-8 text-background sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
            <div>
              <p className="text-sm font-medium opacity-70">Next step</p>
              <h2 className="mt-3 text-3xl font-medium leading-tight sm:text-4xl">
                Send me your project. 48 hours. $199.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 opacity-75">
                I&apos;ll tell you exactly what&apos;s wrong, what it&apos;ll
                cost to fix, and whether I&apos;m the right person for it.
                If I&apos;m not, I&apos;ll say so.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end lg:justify-end">
              <ButtonLink
                href="/audit"
                size="lg"
                className="bg-background text-foreground hover:opacity-90"
              >
                Get the audit
                <ArrowRight size={17} />
              </ButtonLink>
              <Link
                href={`mailto:${siteConfig.links.email}`}
                className="text-sm opacity-75 underline underline-offset-4 hover:opacity-100"
              >
                Or email me directly
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
