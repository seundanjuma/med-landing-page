import React from "react";
import {
  Check,
  Sparkles,
  Stethoscope,
  Clock,
  ArrowRight,
  BarChart2,
  Calendar,
  Video,
  PenTool,
  UploadCloud,
  Instagram,
  ChevronRight,
  ShieldCheck,
  Brain,
  Rocket,
} from "lucide-react";

/**
 * One-page marketing site for a done-for-you Instagram service for medical practices.
 * Built in the narrative style of regnatus.com (bold hero, pains -> solution -> process -> pricing -> proof/FAQ -> CTA).
 * TailwindCSS styling. Replace hrefs with your Calendly/booking links.
 */

export default function MedicalIGLanding() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-neutral-800">
      <Nav />
      <Hero />
      <SocialProof />
      <PainPoints />
      <Solution />
      <Process />
      <Plans />
      <RoiMath />
      <FAQs />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

function Button({ children, href = "#", variant = "primary", icon: Icon }) {
  const base =
    "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-0";
  const styles =
    variant === "primary"
      ? "bg-white text-neutral-900 hover:bg-neutral-200 focus:ring-white/30"
      : variant === "ghost"
      ? "bg-transparent text-white hover:text-neutral-300"
      : "bg-neutral-800 text-white hover:bg-neutral-700";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      {Icon && <Icon className="h-4 w-4" />}
    </a>
  );
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      <Sparkles className="h-3.5 w-3.5" /> {children}
    </span>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-xl bg-white text-neutral-900">
              <Instagram className="h-4 w-4" />
            </div>
            <div className="text-sm font-semibold tracking-tight">
              Done‑For‑You Instagram for Medical Practices
            </div>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#process"
              className="text-sm text-white/70 hover:text-white"
            >
              How it works
            </a>
            <a href="#plans" className="text-sm text-white/70 hover:text-white">
              Plans
            </a>
            <a href="#faq" className="text-sm text-white/70 hover:text-white">
              FAQs
            </a>
            <Button href="#book" icon={ArrowRight}>
              Book a 15‑min intro call
            </Button>
          </div>
          <div className="md:hidden">
            <Button href="#book" variant="secondary" icon={ArrowRight}>
              Book a call
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.10),rgba(0,0,0,0))]" />
      <Container>
        <div className="grid items-center gap-10 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <Tag>Attention: busy doctors & clinic owners</Tag>
            <h1 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              We keep your practice visible on Instagram —
              <span className="block text-white/80">
                without you lifting a finger.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/70">
              A done‑for‑you content calendar and{" "}
              <span className="font-semibold text-white">
                4 professional posts per week
              </span>
              . Your page looks credible, builds trust, and quietly attracts new
              patients — while you focus on care, not content.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#book" icon={ArrowRight}>
                Schedule your intro call
              </Button>
              <Button href="#plans" variant="secondary" icon={ChevronRight}>
                See plans
              </Button>
            </div>
            <p className="mt-4 text-xs text-white/50">
              Most practices recoup cost in 2–6 visits. Transparent
              month‑to‑month.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
            <div className="grid grid-cols-2 gap-4">
              <KPI label="Posts / week" value="4" />
              <KPI label="Time you spend" value="~0h" />
              <KPI label="Turnaround" value="7 days" />
              <KPI label="Avg. assets" value="16/mo" />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-white/70">
              <Badge>Calendar planned</Badge>
              <Badge>Captions written</Badge>
              <Badge>Scheduling handled</Badge>
              <Badge>Reels (Growth plan)</Badge>
              <Badge>Story templates</Badge>
              <Badge>Monthly report</Badge>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function KPI({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70">
      <Check className="h-3.5 w-3.5" /> {children}
    </span>
  );
}

function SocialProof() {
  return (
    <section className="border-y border-white/5 bg-neutral-900/40 py-6">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" /> HIPAA‑respectful workflows
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4" /> Saves ~8–12 hours/mo
          </span>
          <span className="inline-flex items-center gap-2">
            <BarChart2 className="h-4 w-4" /> Analytics included
          </span>
          <span className="inline-flex items-center gap-2">
            <Brain className="h-4 w-4" /> Strategy‑first, design‑led
          </span>
        </div>
      </Container>
    </section>
  );
}

function PainPoints() {
  const items = [
    {
      icon: Clock,
      title: "No time for content",
      desc: "Clinics are busy. Marketing slips. Consistency dies.",
    },
    {
      icon: PenTool,
      title: "Design looks DIY",
      desc: "Patients judge credibility by visuals and clarity.",
    },
    {
      icon: Calendar,
      title: "No content plan",
      desc: "Random posting ≠ growth. You need a rhythm.",
    },
  ];
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-center text-2xl font-semibold sm:text-3xl">
          This is probably what you’re dealing with
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          The problem isn’t Instagram. It’s trying to do marketing on top of
          patient care.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5"
            >
              <it.icon className="h-6 w-6" />
              <div className="mt-4 text-lg font-medium">{it.title}</div>
              <div className="mt-1 text-sm text-white/70">{it.desc}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Solution() {
  const bullets = [
    "Done‑for‑you monthly content calendar",
    "4 professionally designed posts per week",
    "Captions written in your voice",
    "Optional: scheduling + posting handled",
    "Monthly performance review & tweaks",
  ];
  return (
    <section className="border-y border-white/5 bg-neutral-900/30 py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold sm:text-3xl">
              Here’s how we fix it
            </h3>
            <p className="mt-3 max-w-xl text-white/70">
              We turn Instagram into a simple, predictable channel for
              credibility and patient acquisition — with almost no time from
              you.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <MiniCard
                icon={Stethoscope}
                title="Built for healthcare"
                desc="Language, ethics, and visuals tailored to your specialty."
              />
              <MiniCard
                icon={Video}
                title="Reels option"
                desc="Add 2 reels/month on Growth for momentum."
              />
              <MiniCard
                icon={UploadCloud}
                title="Handoff ready"
                desc="We can schedule + post so you don’t have to."
              />
              <MiniCard
                icon={BarChart2}
                title="Monthly report"
                desc="See what worked. We iterate monthly."
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function MiniCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
      <Icon className="h-5 w-5" />
      <div className="mt-3 text-base font-medium">{title}</div>
      <div className="mt-1 text-sm text-white/70">{desc}</div>
    </div>
  );
}

function Process() {
  const steps = [
    {
      title: "Kickoff call (15–20 min)",
      desc: "We learn your services, tone, and goals. You share any assets/logos.",
    },
    {
      title: "Plan the month",
      desc: "We build a content calendar around education, social proof, FAQs, and promos.",
    },
    {
      title: "Design + write",
      desc: "We create your weekly posts and captions. You approve — we refine.",
    },
    {
      title: "Post + learn",
      desc: "We schedule (if included) and send a simple report. We iterate next month.",
    },
  ];
  return (
    <section id="process" className="py-20">
      <Container>
        <h3 className="text-2xl font-semibold sm:text-3xl">
          Simple, proven process
        </h3>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="text-xs text-white/50">Step {i + 1}</div>
              <div className="mt-1 text-lg font-medium">{s.title}</div>
              <div className="mt-1 text-sm text-white/70">{s.desc}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Plans() {
  const plans = [
    {
      name: "Essentials",
      price: "$399/mo",
      tagline: "Stay visible, credible, and consistent.",
      features: [
        "16 professional posts/month",
        "Monthly content calendar",
        "1 round of revisions",
        "Ready‑to‑post files delivered",
      ],
      cta: "Choose Essentials",
    },
    {
      name: "Hands‑Off",
      price: "$649/mo",
      highlighted: true,
      tagline: "Never worry about content again.",
      features: [
        "16 professional posts/month",
        "Monthly content calendar",
        "Captions written for every post",
        "Scheduling + posting done for you",
        "Basic monthly performance report",
        "2 rounds of revisions",
      ],
      cta: "Choose Hands‑Off",
    },
    {
      name: "Growth",
      price: "$1,200+/mo",
      tagline: "For high‑value, growth‑focused practices.",
      features: [
        "Everything in Hands‑Off",
        "2 reels/month",
        "Branded story templates",
        "Deeper analytics & recommendations",
        "Optional add‑on: ad management",
      ],
      cta: "Choose Growth",
    },
  ];
  return (
    <section
      id="plans"
      className="border-y border-white/5 bg-neutral-900/40 py-20"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-2xl font-semibold sm:text-3xl">
            Choose your plan
          </h3>
          <p className="mt-2 text-white/70">
            Month‑to‑month. Cancel anytime. Most clinics recoup cost in 2–6
            patient visits.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-3xl border ${
                p.highlighted
                  ? "border-white/20 bg-white/10"
                  : "border-white/10 bg-white/5"
              } p-6`}
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-lg font-semibold">{p.name}</div>
                  <div className="text-sm text-white/60">{p.tagline}</div>
                </div>
                <div className="text-xl font-semibold">{p.price}</div>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  href="#book"
                  variant={p.highlighted ? "primary" : "secondary"}
                  icon={ArrowRight}
                >
                  {p.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function RoiMath() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold sm:text-3xl">
              ROI math (simple & conservative)
            </h3>
            <p className="mt-2 text-white/70">
              For most practices, just 2–6 patient visits cover the monthly
              cost.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <RoiCard title="Dentist" value="2 visits ≈ $399" />
              <RoiCard title="Chiropractor" value="5–6 visits ≈ $399" />
              <RoiCard title="Plastic surgeon" value="< 1 procedure ≈ $399" />
              <RoiCard title="Dermatologist" value="1–2 consults ≈ $399" />
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h4 className="text-lg font-medium">What you don’t do anymore</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {[
                "Brainstorming topics",
                "Designing posts in Canva late at night",
                "Writing captions from scratch",
                "Remembering to post on time",
                "Guessing at what worked",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function RoiCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
      <div className="text-sm text-white/60">{title}</div>
      <div className="mt-1 text-xl font-semibold">{value}</div>
    </div>
  );
}

function FAQs() {
  const faqs = [
    {
      q: "Is this compliant with medical marketing rules?",
      a: "We avoid patient-identifiable info, make no medical claims, and keep messaging educational and ethical. You approve all content before posting.",
    },
    {
      q: "What if I don’t like a post?",
      a: "Each plan includes revisions (1 round on Essentials, 2 rounds on Hands‑Off). We refine until it fits your brand and voice.",
    },
    {
      q: "Can you work with my existing brand guidelines?",
      a: "Absolutely. Share your logo, colors, past posts, and we’ll align with your visual language.",
    },
    {
      q: "Do you handle comments and DMs?",
      a: "We focus on content creation, scheduling, and reporting. Engagement management can be scoped as an add‑on if needed.",
    },
  ];
  return (
    <section
      id="faq"
      className="border-y border-white/5 bg-neutral-900/30 py-20"
    >
      <Container>
        <h3 className="text-2xl font-semibold sm:text-3xl">FAQs</h3>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="text-base font-medium">{f.q}</div>
              <div className="mt-2 text-sm text-white/70">{f.a}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="book" className="py-20">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8 text-center">
          <div className="mx-auto max-w-2xl">
            <h3 className="text-2xl font-semibold sm:text-3xl">
              Ready to free up your time and keep your clinic visible?
            </h3>
            <p className="mt-2 text-white/70">
              Book a 15‑minute intro call. If we’re a fit, we’ll start your
              first calendar this week.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button href="#" icon={ArrowRight}>
                Book an intro call
              </Button>
              <Button href="#plans" variant="secondary" icon={ChevronRight}>
                Compare plans
              </Button>
            </div>
            <p className="mt-4 text-xs text-white/50">
              We work with only 3–4 practices at a time to maintain quality.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 text-sm text-white/60">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-xl bg-white text-neutral-900">
              <Instagram className="h-4 w-4" />
            </div>
            <div>Done‑For‑You Instagram for Medical Practices</div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#process" className="hover:text-white">
              Process
            </a>
            <a href="#plans" className="hover:text-white">
              Plans
            </a>
            <a href="#faq" className="hover:text-white">
              FAQs
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} — All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
