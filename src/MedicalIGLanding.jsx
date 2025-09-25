import React, { useState, useEffect } from "react";
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
  Play,
} from "lucide-react";

export default function MedicalIGLanding() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-orange-200">
      <Nav />
      <Hero scrollY={scrollY} />
      <Portfolio />
      <AnimatedDivider text="RESULTS" />
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
    "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2";

  const styles = {
    primary:
      "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 focus:ring-orange-500/50 active:translate-y-0",
    secondary:
      "bg-white text-gray-900 border-2 border-gray-200 hover:border-orange-500 hover:shadow-lg hover:-translate-y-0.5 focus:ring-orange-500/50 active:translate-y-0",
    ghost:
      "bg-transparent text-gray-700 hover:text-orange-500 hover:bg-orange-50",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
      {Icon && (
        <Icon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </a>
  );
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-2 text-sm font-medium text-orange-800 ring-1 ring-orange-200">
      <Sparkles className="h-4 w-4 text-orange-500" />
      {children}
    </span>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg">
              <Instagram className="h-5 w-5 text-white" />
            </div>
            <div className="font-display text-lg font-bold text-gray-900">
              Done‑For‑You Instagram
            </div>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#process"
              className="font-medium text-gray-600 hover:text-orange-500 transition-colors"
            >
              How it works
            </a>
            <a
              href="#plans"
              className="font-medium text-gray-600 hover:text-orange-500 transition-colors"
            >
              Plans
            </a>
            <a
              href="#faq"
              className="font-medium text-gray-600 hover:text-orange-500 transition-colors"
            >
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

function Hero({ scrollY }) {
  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white py-20 lg:py-28">
      {/* Background Elements */}
      <div
        className="absolute inset-0 opacity-60"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-gradient-to-br from-orange-200 to-amber-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-gradient-to-br from-orange-300 to-red-300 opacity-20 blur-3xl"></div>
      </div>

      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Tag>Attention: busy doctors & clinic owners</Tag>

            <h1 className="font-display mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              We keep your practice visible on Instagram —
              <span className="block bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                without you lifting a finger.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              A done‑for‑you content calendar and{" "}
              <span className="font-semibold text-gray-900">
                4 professional posts per week
              </span>
              . Your page looks credible, builds trust, and quietly attracts new
              patients — while you focus on care, not content.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="#book" icon={ArrowRight}>
                Schedule your intro call
              </Button>
              <Button href="#plans" variant="secondary" icon={ChevronRight}>
                See plans
              </Button>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Most practices recoup cost in 2–6 visits. Transparent
              month‑to‑month.
            </p>
          </div>

          {/* Video Mockup */}
          <div className="relative">
            <div
              className="relative rounded-3xl bg-gradient-to-br from-white to-gray-100 p-8 shadow-2xl ring-1 ring-gray-200"
              style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
            >
              <div className="grid grid-cols-2 gap-6">
                <KPI label="Posts / week" value="4" />
                <KPI label="Time you spend" value="~0h" />
                <KPI label="Turnaround" value="7 days" />
                <KPI label="Avg. assets" value="16/mo" />
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <Badge>Calendar planned</Badge>
                <Badge>Captions written</Badge>
                <Badge>Scheduling handled</Badge>
                <Badge>Reels (Growth plan)</Badge>
                <Badge>Story templates</Badge>
                <Badge>Monthly report</Badge>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function KPI({ label, value }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
      <div className="text-sm font-medium text-gray-500">{label}</div>
      <div className="mt-2 font-display text-3xl font-bold text-gray-900">
        {value}
      </div>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-2 text-xs font-medium text-orange-800 ring-1 ring-orange-200">
      <Check className="h-3 w-3 text-orange-500" />
      {children}
    </span>
  );
}

function AnimatedDivider({ text }) {
  return (
    <div className="overflow-hidden border-y border-orange-200 bg-gradient-to-r from-orange-50 via-white to-orange-50 py-8">
      <div
        className="flex gap-12"
        style={{ animation: "scroll 30s linear infinite" }}
      >
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="font-display text-6xl font-bold text-orange-200 whitespace-nowrap"
          >
            {text} •
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

function Portfolio() {
  const portfolioItems = [
    {
      title: "Dental Practice - West Coast",
      specialty: "General Dentistry",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=400&fit=crop&crop=center",
      results: "Professional content design",
      link: "#",
    },
    {
      title: "Dermatology Clinic - Miami",
      specialty: "Cosmetic Dermatology",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop&crop=center",
      results: "Brand-aligned Instagram posts",
      link: "#",
    },
    {
      title: "Chiropractic Office - Chicago",
      specialty: "Sports Medicine",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center",
      results: "Educational content strategy",
      link: "#",
    },
    {
      title: "Plastic Surgery - Beverly Hills",
      specialty: "Cosmetic Surgery",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=center",
      results: "Premium visual identity",
      link: "#",
    },
    {
      title: "Physical Therapy - Austin",
      specialty: "Sports Rehabilitation",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
      results: "Patient education focus",
      link: "#",
    },
    {
      title: "Cardiology Practice - NYC",
      specialty: "Heart Health",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop&crop=center",
      results: "Trust-building content",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl">
            See the quality of work your practice gets
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Professional Instagram content we create for medical practices like
            yours
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-4">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80"
                style={{
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <PortfolioCard {...item} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button href="#" variant="secondary" icon={ChevronRight}>
            View full portfolio
          </Button>
        </div>
      </Container>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

function PortfolioCard({ title, specialty, image, results, link }) {
  return (
    <div className="group rounded-3xl bg-white p-6 shadow-lg ring-1 ring-gray-200 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-2 hover:ring-orange-300">
      <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        <img
          src={image}
          alt={`${title} Instagram content example`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 shadow-lg">
          <Instagram className="h-4 w-4 text-orange-500" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-800 ring-1 ring-orange-200">
            {specialty}
          </span>
        </div>

        <div className="font-display text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
          {title}
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200">
          <div className="rounded-full bg-orange-100 p-2">
            <BarChart2 className="h-4 w-4 text-orange-500" />
          </div>
          <span className="text-sm font-medium text-gray-700">{results}</span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <a
          href={link}
          className="group/link inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-all duration-300 hover:text-orange-500 hover:gap-3"
        >
          View case study
          <div className="rounded-full bg-gray-100 p-1 transition-colors duration-300 group-hover/link:bg-orange-100">
            <ArrowRight className="h-3 w-3" />
          </div>
        </a>
      </div>
    </div>
  );
}

function SocialProof() {
  return (
    <section className="border-y border-orange-200 bg-gradient-to-r from-orange-50 via-white to-orange-50 py-8">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-gray-600">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-orange-500" />
            HIPAA‑respectful workflows
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-5 w-5 text-orange-500" />
            Saves ~8–12 hours/mo
          </span>
          <span className="inline-flex items-center gap-2">
            <BarChart2 className="h-5 w-5 text-orange-500" />
            Analytics included
          </span>
          <span className="inline-flex items-center gap-2">
            <Brain className="h-5 w-5 text-orange-500" />
            Strategy‑first, design‑led
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
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl">
            This is probably what you're dealing with
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            The problem isn't Instagram. It's trying to do marketing on top of
            patient care.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, index) => (
            <div
              key={it.title}
              className="group rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:ring-orange-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="rounded-2xl bg-orange-50 p-4 w-fit ring-1 ring-orange-200">
                <it.icon className="h-8 w-8 text-orange-500" />
              </div>
              <div className="mt-6 font-display text-xl font-semibold text-gray-900">
                {it.title}
              </div>
              <div className="mt-3 text-gray-600 leading-relaxed">
                {it.desc}
              </div>
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
    <section className="py-20 bg-white">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl">
              Here's how we fix it
            </h3>
            <p className="mt-4 max-w-xl text-lg text-gray-600 leading-relaxed">
              We turn Instagram into a simple, predictable channel for
              credibility and patient acquisition — with almost no time from
              you.
            </p>

            <ul className="mt-8 space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-4">
                  <div className="rounded-full bg-orange-100 p-1 mt-0.5">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 p-8 ring-1 ring-orange-200">
            <div className="grid gap-6 sm:grid-cols-2">
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
                desc="We can schedule + post so you don't have to."
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
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="rounded-xl bg-orange-50 p-3 w-fit ring-1 ring-orange-200">
        <Icon className="h-6 w-6 text-orange-500" />
      </div>
      <div className="mt-4 font-display text-lg font-semibold text-gray-900">
        {title}
      </div>
      <div className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</div>
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
    <section id="process" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h3 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple, proven process
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="group relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="font-display text-5xl font-bold text-orange-200 group-hover:text-orange-300 transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-gray-200 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 group-hover:ring-orange-300">
                  <div className="font-display text-lg font-semibold text-gray-900">
                    {s.title}
                  </div>
                  <div className="mt-3 text-gray-600 leading-relaxed">
                    {s.desc}
                  </div>
                </div>
              </div>
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
    <section id="plans" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h3 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl">
            Choose your plan
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Month‑to‑month. Cancel anytime. Most clinics recoup cost in 2–6
            patient visits.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                p.highlighted
                  ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-2xl shadow-orange-500/25 ring-4 ring-orange-200 scale-105"
                  : "bg-white shadow-lg ring-1 ring-gray-200 hover:shadow-xl hover:ring-orange-300"
              }`}
            >
              {p.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-baseline justify-between mb-6">
                <div>
                  <div
                    className={`font-display text-2xl font-bold ${
                      p.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {p.name}
                  </div>
                  <div
                    className={`text-sm ${
                      p.highlighted ? "text-orange-100" : "text-gray-500"
                    }`}
                  >
                    {p.tagline}
                  </div>
                </div>
                <div
                  className={`font-display text-3xl font-bold ${
                    p.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  {p.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div
                      className={`rounded-full p-1 mt-0.5 ${
                        p.highlighted ? "bg-white/20" : "bg-orange-100"
                      }`}
                    >
                      <Check
                        className={`h-4 w-4 ${
                          p.highlighted ? "text-white" : "text-orange-500"
                        }`}
                      />
                    </div>
                    <span
                      className={`leading-relaxed ${
                        p.highlighted ? "text-orange-50" : "text-gray-700"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="#book"
                variant={p.highlighted ? "secondary" : "primary"}
                icon={ArrowRight}
              >
                {p.cta}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function RoiMath() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl">
              ROI math (simple & conservative)
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              For most practices, just 2–6 patient visits cover the monthly
              cost.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <RoiCard title="Dentist" value="2 visits ≈ $399" />
              <RoiCard title="Chiropractor" value="5–6 visits ≈ $399" />
              <RoiCard title="Plastic surgeon" value="< 1 procedure ≈ $399" />
              <RoiCard title="Dermatologist" value="1–2 consults ≈ $399" />
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
            <h4 className="font-display text-xl font-semibold text-gray-900 mb-6">
              What you don't do anymore
            </h4>
            <ul className="space-y-4">
              {[
                "Brainstorming topics",
                "Designing posts in Canva late at night",
                "Writing captions from scratch",
                "Remembering to post on time",
                "Guessing at what worked",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="rounded-full bg-orange-100 p-1 mt-0.5">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{f}</span>
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
    <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:ring-orange-300">
      <div className="text-sm font-medium text-gray-500 mb-2">{title}</div>
      <div className="font-display text-2xl font-bold text-gray-900">
        {value}
      </div>
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
      q: "What if I don't like a post?",
      a: "Each plan includes revisions (1 round on Essentials, 2 rounds on Hands‑Off). We refine until it fits your brand and voice.",
    },
    {
      q: "Can you work with my existing brand guidelines?",
      a: "Absolutely. Share your logo, colors, past posts, and we'll align with your visual language.",
    },
    {
      q: "Do you handle comments and DMs?",
      a: "We focus on content creation, scheduling, and reporting. Engagement management can be scoped as an add‑on if needed.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h3 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl">
            FAQs
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {faqs.map((f, index) => (
            <div
              key={f.q}
              className="group rounded-3xl bg-gray-50 p-8 ring-1 ring-gray-200 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 hover:ring-orange-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="font-display text-lg font-semibold text-gray-900 mb-4">
                {f.q}
              </div>
              <div className="text-gray-600 leading-relaxed">{f.a}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      id="book"
      className="py-20 bg-gradient-to-br from-orange-500 to-orange-600"
    >
      <Container>
        <div className="rounded-3xl bg-white/10 backdrop-blur-sm p-8 text-center ring-1 ring-white/20">
          <div className="mx-auto max-w-3xl">
            <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to free up your time and keep your clinic visible?
            </h3>
            <p className="mt-4 text-lg text-orange-100">
              Book a 15‑minute intro call. If we're a fit, we'll start your
              first calendar this week.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="#" variant="secondary" icon={ArrowRight}>
                Book an intro call
              </Button>
              <button className="group inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10">
                Compare plans
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            <p className="mt-6 text-sm text-orange-200">
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
    <footer className="border-t border-gray-200 bg-white py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg">
              <Instagram className="h-5 w-5 text-white" />
            </div>
            <div className="font-display text-lg font-bold text-gray-900">
              Done‑For‑You Instagram for Medical Practices
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#process"
              className="font-medium text-gray-600 hover:text-orange-500 transition-colors"
            >
              Process
            </a>
            <a
              href="#plans"
              className="font-medium text-gray-600 hover:text-orange-500 transition-colors"
            >
              Plans
            </a>
            <a
              href="#faq"
              className="font-medium text-gray-600 hover:text-orange-500 transition-colors"
            >
              FAQs
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} — All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
