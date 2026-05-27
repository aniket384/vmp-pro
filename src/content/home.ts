export const trustIndicators = [
  {
    value: "30+",
    label: "MVPs shipped by the founder",
  },
  {
    value: "10M+",
    label: "Downloads on apps we've engineered",
  },
  {
    value: "48 hr",
    label: "Honest audit on your broken AI build",
  },
  {
    value: "Direct",
    label: "You work with Aniket, not an account manager",
  },
];

export const founderPainPoints = [
  {
    title: "Your demo crashes when an investor clicks the wrong button.",
    description:
      "Lovable, Cursor, and Bolt build something that looks like a product. Then a real click finds a real bug, and the pitch falls apart in 90 seconds.",
  },
  {
    title: "Stripe and auth almost work — until production.",
    description:
      "Sign-in loops, webhooks that never fire, users that disappear after refresh. The AI confidently writes code it has no way of testing in your real environment.",
  },
  {
    title: "The AI keeps re-introducing the bug it just fixed.",
    description:
      "Three days into a panic loop, the codebase is 14,000 lines, nothing is named consistently, and even Claude or Cursor can't reason about it anymore.",
  },
  {
    title: "Your pitch is in 3 weeks. Your product is in 5.",
    description:
      "The deadline is real. The demo isn't. You don't need a co-founder, you don't need to learn React — you need someone to finish the product properly before the meeting.",
  },
];

export const services = [
  {
    title: "The 48-Hour Audit",
    href: "/audit",
    description:
      "Send me your repo, Lovable link, or Bolt project. In 48 hours you get a Loom walkthrough and a written report: what's broken, what's salvageable, what it'll cost to finish, and whether you should finish it or start over. Credited toward any project within 30 days.",
    metric: "$199 — 48 hours",
  },
  {
    title: "Demo-Ready Sprint",
    href: "/contact",
    description:
      "Two weeks. Your AI-built prototype, stabilized for a live investor demo. Golden-path flow that always works, polished landing page, realistic data, and a backup demo video in case the wifi fails on pitch day.",
    metric: "$7,500 — 2 weeks",
  },
  {
    title: "Investor-Ready MVP",
    href: "/contact",
    description:
      "Four weeks. A real product you can pitch, demo live, and defend under questioning. Auth, Stripe, real database, deployed on Vercel. Code and infrastructure are yours from day one.",
    metric: "$19,500 — 4 weeks",
  },
  {
    title: "Post-Raise Build-Out",
    href: "/contact",
    description:
      "After you raise. We turn the investor-ready MVP into a product that can carry your first 100 paying customers. Scope and pricing decided together once the round closes.",
    metric: "Custom scope",
  },
];

export const process = [
  {
    step: "01",
    title: "Audit",
    description:
      "You send the repo or prototype link. Within 48 hours I send back a Loom walkthrough and a written report with an honest verdict and a fixed-price quote.",
    evidence: "Loom + written report + fixed-price quote",
  },
  {
    step: "02",
    title: "Rescue",
    description:
      "We stabilize the demo path first — the flow your investor will actually click through — then fix Stripe, auth, deployment, and the database. Daily Loom updates, one Slack channel.",
    evidence: "Working demo + daily updates + code freeze 5 days before pitch",
  },
  {
    step: "03",
    title: "Ship",
    description:
      "You walk into the pitch with a product that survives a live demo, a polished landing page, a backup video, and a one-pager that matches what you're showing.",
    evidence: "Live product + backup video + handoff doc",
  },
];

export const faqs = [
  {
    question: "I built mine in Lovable / Cursor / Bolt / v0. Can you actually work with that?",
    answer:
      "Yes — that's the whole point. I read the code, tell you the truth about what's there, and either finish it or rebuild it on the same modern stack (Next.js, Supabase, Stripe) so you can keep iterating with AI tools afterward.",
  },
  {
    question: "What if my codebase is a complete mess?",
    answer:
      "Sometimes the honest answer is to rebuild. If that's the case, I'll tell you in the audit, credit the $199, and quote a fresh build using your prototype as the spec. You're not stuck paying me to fight bad code.",
  },
  {
    question: "Will I be able to maintain it after you're done?",
    answer:
      "Yes. I hand over a clean codebase with a written 'how this works' doc so Cursor, Claude Code, or the next developer can actually help you. The whole point is that you don't get locked into me.",
  },
  {
    question: "You're based in India. How does that work for a US founder?",
    answer:
      "I work 4+ hours of overlap with US time zones every day. Daily Loom updates, one Slack channel, fixed weekly demo. Payment in USD via Stripe. If radical transparency about where I am bothers you more than 30 shipped MVPs and a 10M-download track record, I'm probably not your guy.",
  },
  {
    question: "What if my pitch is in 7 days and I'm panicking?",
    answer:
      "Don't book a full sprint with anyone that close. Book the $199 audit. I'll tell you in 48 hours whether your current build can be stabilized in the time you have, or whether the smarter play is to walk into the pitch with a great deck and a Loom video instead.",
  },
  {
    question: "Do you take equity instead of cash?",
    answer:
      "Occasionally, for the right project. Default is cash. Equity-only is rarely a good deal for either side this early — we don't know each other yet.",
  },
  {
    question: "When are you not the right fit?",
    answer:
      "If you want a 20-person team, a full agency relationship, or someone to build your idea without you involved at all — I'm not it. I take two projects at a time, I work directly with the founder, and I need you on a Loom call once a week.",
  },
];

export const founderBio = {
  name: "Aniket Mishra",
  location: "India — 4+ hours US time zone overlap",
  linkedin: "https://www.linkedin.com/in/aniket-mishra23",
  intro:
    "I'm Aniket. I've shipped 30+ MVPs, engineered an app that crossed 10 million downloads, and worked on production systems at India TV. Northstar Labs is what I do now: I help non-technical founders finish the products they started building with AI tools.",
  why:
    "Every week I watched friends and strangers post the same thing on X: 'Lovable built 80% of my app in a weekend, but I can't get the last 20% to work and my pitch is in three weeks.' Nobody was answering that specific call. So I am.",
};
