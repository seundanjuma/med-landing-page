import { useState, useEffect } from "react";
import {
  Check,
  Clock,
  ArrowRight,
  BarChart2,
  Calendar,
  ChevronRight,
  ShieldCheck,
  Brain,
  Play,
  Settings,
  FileText,
  Image,
  TrendingUp,
  Instagram,
  Camera,
  Palette,
  BookOpen,
  Eye,
  Heart,
  Copy,
  MoveUpRight,
} from "lucide-react";

export default function MedicalIGLanding() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Nav />
      <Hero scrollY={scrollY} />
      <Portfolio />
      <PainPoints />
      <Solution />
      <Process />
      <Pricing />
      <ROIMath />
      <FAQs />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
      {children}
    </div>
  );
}

function Button({ children, href = "#", variant = "primary", icon: Icon }) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 px-6 transition-all duration-300 overflow-hidden";

  const styles = {
    primary: "bg-black text-white hover:bg-orange-500",
    secondary:
      "bg-white text-gray-900 border border-gray-300 hover:border-gray-400 hover:bg-gray-50",
  };

  return (
    <a
      href={href}
      className={`${base} ${styles[variant]}`}
      style={{
        height: "44px",
        borderRadius: "12px",
        fontSize: "16px",
        fontWeight: 500,
      }}
    >
      {children}
      {Icon && (
        <>
          <Icon
            className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-0"
            style={{ color: variant === "primary" ? "#ffffff" : undefined }}
          />
          <Icon
            className="h-4 w-4 absolute right-6 transition-all duration-300 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            style={{ color: variant === "primary" ? "#ffffff" : undefined }}
          />
        </>
      )}
    </a>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-gray-200">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-orange-500 rounded"></div>
            <span className="text-2xl font-bold tracking-tight">numa</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#process"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              How it works
            </a>
            <a
              href="#portfolio"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Our Work
            </a>
            <Button href="#book" icon={ArrowRight}>
              Schedule your intro call
            </Button>
          </div>

          <div className="md:hidden">
            <Button href="#book" icon={ArrowRight}>
              Schedule call
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

function Hero({ scrollY }) {
  // Video starts at 0.55, container grows to 1.0, video continues to 1.1
  const scrollProgress = Math.min(scrollY / 500, 1);

  // Container scale: 0.55 → 1.0
  const containerScale = 0.55 + scrollProgress * 0.45;

  // Video scale: starts at 1.0, then zooms to 1.1 after container reaches 1.0
  const videoScale =
    scrollProgress > 0.9 ? 1.0 + ((scrollProgress - 0.9) / 0.1) * 0.1 : 1.0;

  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16 lg:pt-32 lg:pb-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-gray-700"
            style={{ fontSize: "12px" }}
          >
            <Settings className="h-4 w-4" />
            Instagram for medical practices
          </div>

          <h1
            className="mt-8 leading-tight tracking-tight text-gray-900"
            style={{ fontSize: "48px", fontWeight: 500 }}
          >
            <span>We keep your practice visible on Instagram </span>
            <span
              style={{
                fontFamily: "Instrument Serif, serif",
                fontStyle: "italic",
              }}
              className="text-orange-500"
            >
              without you lifting a finger.
            </span>
          </h1>

          <p
            className="mt-6 mx-auto max-w-3xl leading-relaxed text-gray-600"
            style={{ fontSize: "16px" }}
          >
            Done-For-You Instagram for Medical Practices; A content calendar and
            4 professional posts per week. Your page looks credible, builds
            trust, and quietly attracts new patients while you focus on care,
            not content.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="#book" icon={ArrowRight}>
              Schedule your intro call
            </Button>
            <Button href="#portfolio" variant="secondary" icon={ChevronRight}>
              View our work
            </Button>
          </div>
        </div>
      </Container>

      {/* Video Section - Full Width */}
      <div className="mt-20 px-4">
        <div
          className="relative mx-auto transition-transform duration-500 ease-out"
          style={{
            transform: `scale(${containerScale})`,
            maxWidth: "calc(100vw - 30px)",
            width: "100%",
          }}
        >
          <div
            className="overflow-hidden rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300"
            style={{
              paddingBottom: "56.25%",
              position: "relative",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out"
              style={{
                transform: `scale(${videoScale})`,
              }}
            >
              <div className="text-gray-400 text-center">
                <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-sm">
                  Video - scales 0.55→1.0, then zooms to 1.1
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
            <FeaturePill icon={Instagram} text="Content Calendar" />
            <FeaturePill icon={TrendingUp} text="Page optimization" />
            <FeaturePill icon={Image} text="Story templates" />
            <FeaturePill icon={FileText} text="Monthly report" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturePill({ icon: Icon, text }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-gray-700"
      style={{ fontSize: "12px", fontWeight: 500 }}
    >
      <Icon className="h-4 w-4" />
      {text}
    </div>
  );
}

function Portfolio() {
  const portfolioItems = [
    {
      practice: "Novus Dental Care",
      label: "Professional content design",
      icon: Palette,
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=600&fit=crop",
    },
    {
      practice: "Lumine Aesthetics",
      label: "Educational content strategy",
      icon: BookOpen,
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=600&fit=crop",
    },
    {
      practice: "ClearView Eye Care",
      label: "Brand-aligned Instagram posts",
      icon: Eye,
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=600&fit=crop",
    },
    {
      practice: "Thrive Chiropractic",
      label: "Trust-building content",
      icon: Heart,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2
            className="text-gray-900"
            style={{ fontSize: "48px", fontWeight: 500 }}
          >
            <span>See the </span>
            <span
              style={{
                fontFamily: "Instrument Serif, serif",
                fontStyle: "italic",
              }}
              className="text-orange-500"
            >
              quality of work
            </span>
            <span> your practice gets</span>
          </h2>
          <p className="mt-4 text-gray-600" style={{ fontSize: "16px" }}>
            Engaging Instagram content we create for medical practices like
            yours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} {...item} />
          ))}
        </div>

        <div className="text-center">
          <Button href="#book" icon={ArrowRight}>
            Schedule your intro call
          </Button>
        </div>
      </Container>
    </section>
  );
}

function PortfolioCard({ practice, label, icon: Icon, image }) {
  return (
    <div className="group rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <div className="relative" style={{ paddingBottom: "140%" }}>
        <img
          src={image}
          alt={practice}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="p-6 bg-white">
        <div
          className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 mb-4"
          style={{ fontSize: "12px" }}
        >
          <Icon className="h-4 w-4" />
          {label}
        </div>

        <h3
          className="text-gray-900 mb-3"
          style={{ fontSize: "20px", fontWeight: 500 }}
        >
          {practice}
        </h3>

        <a
          href="#"
          className="group/link inline-flex items-center gap-2 text-gray-900 font-semibold transition-all hover:gap-3"
          style={{ fontSize: "14px" }}
        >
          View case study
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function PainPoints() {
  const painPoints = [
    {
      title: "No time for content",
      description: "Your clinic is busy. Marketing slips. Consistency dies.",
    },
    {
      title: "Design looks DIY",
      description: "Patients judge credibility by visuals and clarity.",
    },
    {
      title: "No content plan",
      description: "Random posting ≠ growth. You need a rhythm.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2
            className="text-gray-900"
            style={{ fontSize: "48px", fontWeight: 500 }}
          >
            <span>This is probably </span>
            <span
              style={{
                fontFamily: "Instrument Serif, serif",
                fontStyle: "italic",
              }}
              className="text-orange-500"
            >
              what you're dealing with
            </span>
          </h2>
          <p className="mt-4 text-gray-600" style={{ fontSize: "16px" }}>
            The problem isn't Instagram. It's trying to do marketing on top of
            patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <PainPointCard key={index} {...point} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function PainPointCard({ title, description }) {
  return (
    <div className="text-center">
      <div
        className="rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300 mb-6 overflow-hidden"
        style={{ paddingBottom: "75%", position: "relative" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-400 text-sm">GIF/Lottie animation</div>
        </div>
      </div>

      <h3
        className="text-gray-900 mb-2"
        style={{ fontSize: "20px", fontWeight: 500 }}
      >
        {title}
      </h3>

      <p className="text-gray-600" style={{ fontSize: "16px" }}>
        {description}
      </p>
    </div>
  );
}

function Solution() {
  const features = [
    "Done-for-you monthly content calendar",
    "4 professionally designed posts per week",
    "Captions written in your voice",
    "Optional: scheduling + posting handled",
    "Monthly performance review & tweaks",
  ];

  const cards = [
    {
      title: "Built for healthcare",
      description: "Language, ethics, and visuals tailored to your specialty.",
    },
    {
      title: "Reels option",
      description: "Add 2 reels/month on Growth for momentum.",
    },
    {
      title: "Handoff ready",
      description: "We can schedule + post so you don't have to.",
    },
    {
      title: "Monthly report",
      description: "See what worked. We iterate monthly.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2
            className="text-gray-900"
            style={{ fontSize: "48px", fontWeight: 500 }}
          >
            <span>Here's </span>
            <span
              style={{
                fontFamily: "Instrument Serif, serif",
                fontStyle: "italic",
              }}
              className="text-orange-500"
            >
              how we fix it
            </span>
          </h2>
          <p
            className="mt-4 text-gray-600 max-w-3xl mx-auto"
            style={{ fontSize: "16px" }}
          >
            We turn Instagram into a simple, predictable channel for credibility
            and patient acquisition, with almost no time demanded from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card, index) => (
            <SolutionCard key={index} {...card} />
          ))}
        </div>

        <div className="flex justify-center">
          <div className="inline-block">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                  <Check className="h-4 w-4 text-gray-600" />
                </div>
                <span className="text-gray-900" style={{ fontSize: "16px" }}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function SolutionCard({ title, description }) {
  return (
    <div className="text-center">
      <div
        className="rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300 mb-6 overflow-hidden"
        style={{ paddingBottom: "75%", position: "relative" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-400 text-sm">Card visual</div>
        </div>
      </div>

      <h3
        className="text-gray-900 mb-2"
        style={{ fontSize: "18px", fontWeight: 500 }}
      >
        {title}
      </h3>

      <p className="text-gray-600" style={{ fontSize: "14px" }}>
        {description}
      </p>
    </div>
  );
}

function Process() {
  const steps = [
    {
      number: "01",
      title: "Kickoff call (15–20 min)",
      description:
        "We learn your services, tone, and goals. You share any assets/logos.",
    },
    {
      number: "02",
      title: "Plan the month",
      description:
        "We build a content calendar around education, social proof, FAQs, and promos.",
    },
    {
      number: "03",
      title: "Design + write",
      description:
        "We create your weekly posts and captions... and design them.",
    },
    {
      number: "04",
      title: "Post, learn, refine",
      description:
        "We schedule (if included) and send a simple report. We iterate next month.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2
            className="text-gray-900"
            style={{ fontSize: "48px", fontWeight: 500 }}
          >
            <span>Simple, </span>
            <span
              style={{
                fontFamily: "Instrument Serif, serif",
                fontStyle: "italic",
              }}
              className="text-orange-500"
            >
              proven process
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <ProcessCard key={index} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProcessCard({ number, title, description }) {
  return (
    <div
      className="rounded-3xl p-8 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div
        className="text-gray-400 mb-4"
        style={{ fontSize: "14px", fontWeight: 500 }}
      >
        Step {number}
      </div>

      <h3
        className="text-gray-900 mb-3"
        style={{ fontSize: "20px", fontWeight: 500 }}
      >
        {title}
      </h3>

      <p
        className="text-gray-600"
        style={{ fontSize: "16px", lineHeight: "1.6" }}
      >
        {description}
      </p>
    </div>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Essentials",
      tagline: "Stay visible, credible, and consistent.",
      price: "$399/mo",
      features: [
        "16 professional posts/month",
        "Monthly content calendar",
        "1 round of revisions",
        "Ready-to-post files delivered",
      ],
    },
    {
      name: "Hands-Off",
      tagline: "Never worry about content again.",
      price: "$699/mo",
      features: [
        "Everything in Essentials",
        "Captions written for every post",
        "Scheduling + posting done for you",
        "Basic monthly performance report",
        "2 rounds of revisions",
      ],
    },
    {
      name: "Growth",
      tagline: "For high-value, growth-focused practices.",
      price: "$1,199/mo",
      features: [
        "Everything in Hands-Off",
        "2 reels/month + story templates",
        "Deeper analytics & recommendations",
        "Optional add-on: ad management",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2
            className="text-gray-900"
            style={{ fontSize: "48px", fontWeight: 500 }}
          >
            <span>Choose </span>
            <span
              style={{
                fontFamily: "Instrument Serif, serif",
                fontStyle: "italic",
              }}
              className="text-orange-500"
            >
              your plan
            </span>
          </h2>
          <p
            className="mt-4 text-gray-600 max-w-3xl mx-auto"
            style={{ fontSize: "16px" }}
          >
            We turn Instagram into a simple, predictable channel for credibility
            and patient acquisition, with almost no time spent by you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <p
          className="text-center text-gray-600 italic"
          style={{ fontSize: "14px" }}
        >
          Most practices recoup cost in 2–6 visits. Transparent month-to-month.
        </p>
      </Container>
    </section>
  );
}

function PricingCard({ name, tagline, price, features }) {
  return (
    <div className="rounded-3xl bg-white p-8 border border-gray-200 flex flex-col">
      <div className="mb-6">
        <h3
          className="text-gray-900 mb-2"
          style={{ fontSize: "24px", fontWeight: 600 }}
        >
          {name}
        </h3>
        <p className="text-gray-600" style={{ fontSize: "14px" }}>
          {tagline}
        </p>
      </div>

      <div
        className="text-gray-900 mb-6"
        style={{ fontSize: "32px", fontWeight: 600 }}
      >
        {price}
      </div>

      <div className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center mt-0.5">
              <Check className="h-3 w-3 text-gray-600" />
            </div>
            <span className="text-gray-900" style={{ fontSize: "16px" }}>
              {feature}
            </span>
          </div>
        ))}
      </div>

      <Button href="#book" icon={ChevronRight}>
        Choose {name}
      </Button>
    </div>
  );
}

function ROIMath() {
  const roiCards = [
    { specialty: "Chiropractor", calculation: "5–6 visits ≈ $399" },
    { specialty: "Plastic surgeon", calculation: "< 1 procedure ≈ $399" },
    { specialty: "Dermatologist", calculation: "1–2 consults ≈ $399" },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div
          className="rounded-3xl p-12 lg:p-16"
          style={{
            background: "#F97316",
          }}
        >
          <div className="flex items-start justify-between">
            <div className="text-white flex-1 flex flex-col">
              <div>
                <h2 style={{ fontSize: "48px", fontWeight: 500 }}>
                  <span>ROI math </span>
                  <span
                    style={{
                      fontFamily: "Instrument Serif, serif",
                      fontStyle: "italic",
                    }}
                  >
                    (simple & conservative)
                  </span>
                </h2>
                <p className="mt-6" style={{ fontSize: "16px" }}>
                  For most practices, just 2–6 patient visits cover the monthly
                  cost.
                </p>
              </div>

              <div className="mt-auto pt-8">
                <Button href="#book" variant="secondary" icon={ChevronRight}>
                  Let's get started
                </Button>
              </div>
            </div>

            <div className="w-1/4 flex flex-col ml-12">
              <div className="space-y-4">
                {roiCards.map((card, index) => (
                  <ROICard key={index} {...card} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ROICard({ specialty, calculation }) {
  return (
    <div
      className="rounded-2xl bg-white p-6"
      style={{
        height: "120px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className="text-gray-600 mb-2" style={{ fontSize: "14px" }}>
        {specialty}
      </div>
      <div
        className="text-gray-900"
        style={{ fontSize: "24px", fontWeight: 600 }}
      >
        {calculation}
      </div>
    </div>
  );
}

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is this compliant with medical marketing rules?",
      answer:
        "We avoid patient-identifiable info, make no medical claims, and keep messaging educational and ethical. You approve all content before posting.",
    },
    {
      question: "What if I don't like a post?",
      answer:
        "Each plan includes revisions (1 round on Essentials, 2 rounds on Hands‑Off). We refine until it fits your brand and voice.",
    },
    {
      question: "Can you work with my existing brand guidelines?",
      answer:
        "Absolutely. Share your logo, colors, past posts, and we'll align with your visual language.",
    },
    {
      question: "Do you handle comments and DMs?",
      answer:
        "We focus on content creation, scheduling, and reporting. Engagement management can be scoped as an add‑on if needed.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2
            className="text-gray-900"
            style={{ fontSize: "48px", fontWeight: 500 }}
          >
            <span>Frequently </span>
            <span
              style={{
                fontFamily: "Instrument Serif, serif",
                fontStyle: "italic",
              }}
              className="text-orange-500"
            >
              asked questions
            </span>
          </h2>
          <p
            className="mt-4 text-gray-600 max-w-3xl mx-auto"
            style={{ fontSize: "16px" }}
          >
            We turn Instagram into a simple, predictable channel for credibility
            and patient acquisition, with almost no time spent by you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div
      className="rounded-2xl bg-white border border-gray-200 overflow-hidden transition-all duration-300"
      onClick={onClick}
    >
      <button
        className="w-full flex items-center justify-between p-6 text-left"
        style={{ cursor: "pointer" }}
      >
        <span
          className="text-gray-900"
          style={{ fontSize: "18px", fontWeight: 500 }}
        >
          {question}
        </span>
        <span
          className="text-gray-900 text-2xl transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? "200px" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-6 pb-6 text-gray-600" style={{ fontSize: "16px" }}>
          {answer}
        </div>
      </div>
    </div>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h2
            className="text-gray-900"
            style={{ fontSize: "48px", fontWeight: 500 }}
          >
            <span>Ready to free up your time </span>
            <span
              style={{
                fontFamily: "Instrument Serif, serif",
                fontStyle: "italic",
              }}
              className="text-orange-500"
            >
              and keep your clinic visible?
            </span>
          </h2>

          <p className="mt-6 text-gray-900" style={{ fontSize: "18px" }}>
            Book a 15-minute intro call and lets work together!
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="#book" icon={ArrowRight}>
              Schedule your intro call
            </Button>
            <Button href="#pricing" variant="secondary" icon={ChevronRight}>
              View pricing
            </Button>
          </div>

          <p className="mt-8 text-gray-600 italic" style={{ fontSize: "14px" }}>
            We work with only 4–5 practices at a time to maintain quality.
          </p>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const email = "hello@numa.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const socialLinks = [
    { label: "EMAIL", href: null, isEmail: true },
    { label: "TWITTER/X", href: "https://twitter.com" },
    { label: "LINKEDIN", href: "https://linkedin.com" },
    { label: "INSTAGRAM", href: "https://instagram.com" },
  ];

  return (
    <footer style={{ backgroundColor: "#222222" }} className="text-white py-16">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-8 mb-16">
          {socialLinks.map((link) =>
            link.isEmail ? (
              <button
                key={link.label}
                onClick={handleCopyEmail}
                onMouseEnter={() => setShowEmail(true)}
                onMouseLeave={() => setShowEmail(false)}
                className="relative flex items-center gap-3 text-white hover:text-orange-500 transition-colors"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                }}
              >
                <span>{showEmail ? email : link.label}</span>
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <Copy className="h-4 w-4" />
                </div>
                {copiedEmail && (
                  <span className="absolute -bottom-6 left-0 text-xs text-orange-500">
                    Copied!
                  </span>
                )}
              </button>
            ) : (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-orange-500 transition-colors"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                }}
              >
                <span>{link.label}</span>
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <MoveUpRight className="h-4 w-4" />
                </div>
              </a>
            )
          )}
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-4" style={{ width: "100%" }}>
            <div
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: "#F97316",
                borderRadius: "24px",
                flexShrink: 0,
              }}
            ></div>
            <div
              className="text-white flex-1"
              style={{
                fontSize: "200px",
                fontWeight: 700,
                lineHeight: "1",
                letterSpacing: "-0.02em",
              }}
            >
              numa
            </div>
          </div>
        </div>

        <div
          className="flex flex-wrap items-center justify-between gap-4 text-gray-400"
          style={{ fontSize: "14px" }}
        >
          <div>Copyright © 2025 Numa Works</div>
          <a
            href="#terms"
            className="hover:text-white transition-colors underline"
          >
            Terms & Conditions
          </a>
        </div>
      </Container>
    </footer>
  );
}
