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
