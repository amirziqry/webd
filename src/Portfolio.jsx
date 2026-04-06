import {
  ArrowUpRight,
  Code2,
  ShoppingCart,
  Layers,
  Mail,
  ChevronRight,
  PenTool,
  Globe,
  Cpu,
  Palette,
  ExternalLink,
  GraduationCap,
  Zap,
  Menu,
  X,
} from "lucide-react";
// At the top of your file, add these imports:
import yusufRick from "./assets/yusuf-rick.jpg";
import amirZiqry from "./assets/amir-ziqry.jpg";
import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────
   THEME TOKENS
───────────────────────────────────────── */
const C = {
  cream: "#f0f4ff",
  ink: "#0f172a",
  inkLight: "#1e3a5f",
  muted: "#64748b",
  border: "#cbd5e1",
  white: "#ffffff",
  amber: "#3b82f6",
  amberLight: "#dbeafe",
  amberDark: "#1e40af",
  sky: "#e0f2fe",
  skyDark: "#0c4a6e",
  emerald: "#d1fae5",
  emeraldDark: "#064e3b",
  darkBg: "#0a0f1e",
  darkCard: "#0f172a",
  darkBorder: "#1e2d4a",
};

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const PROJECTS = [
  {
    tag: "Medical & B2B",
    tagBg: C.sky,
    tagColor: C.skyDark,
    title: "Mediliance",
    year: "2025",
    challenge:
      "A medical equipment supplier needed a professional web presence that could communicate trust, certifications, and a broad product catalogue to hospital procurement teams.",
    solution:
      "Built a clean, conversion-focused B2B site with structured product listings, service pages, and an enquiry system — establishing credibility in a regulated industry.",
    metrics: ["B2B Platform", "Service Catalogue", "Enquiry System"],
    live: "https://mediliance.org",
  },
  {
    tag: "E-Commerce",
    tagBg: C.amberLight,
    tagColor: C.amberDark,
    title: "Luxe Atelier",
    year: "2026",
    challenge:
      "A luxury fashion brand needed a storefront that matched their premium identity — existing platforms felt generic and were quietly killing conversions.",
    solution:
      "Delivered a headless e-commerce experience with curated product reveals, a streamlined checkout flow, and brand-first design that turns browsers into buyers.",
    metrics: ["Premium Storefront", "Frictionless Payment-Gateway", "Brand-first UX"],
    live: "https://luxeatelier.shop",
  },
  {
    tag: "Creative Agency",
    tagBg: C.emerald,
    tagColor: C.emeraldDark,
    title: "Kasahara",
    year: "2025",
    challenge:
      "A creative agency needed a bespoke digital home that felt as distinctive as the work they produce — generic templates simply were not an option.",
    solution:
      "Crafted a fully custom agency site with bold typography, immersive transitions, and a portfolio showcase that positions Kasahara as a premium creative studio.",
    metrics: ["Custom Build", "Optimized Checkout", "Immersive Design"],
    live: "https://kasahara.co",
  },
];

const SERVICES = [
  {
    icon: <Palette size={24} />,
    title: "UI/UX Design",
    desc: "Figma-first design systems. Every screen is pixel-intentional — from wireframe to dev-handoff.",
  },
  {
    icon: <Code2 size={24} />,
    title: "Full-Stack Development",
    desc: "React frontends paired with Node/Express backends. Clean APIs, scalable architecture.",
  },
  {
    icon: <ShoppingCart size={24} />,
    title: "E-Commerce",
    desc: "Headless Shopify & custom storefronts built for conversion — not just aesthetics.",
  },
];

const STACK = [
  { label: "React", icon: <Globe size={20} /> },
  { label: "Tailwind v4", icon: <Layers size={20} /> },
  { label: "Node.js", icon: <Cpu size={20} /> },
  { label: "Figma", icon: <PenTool size={20} /> },
  { label: "Next.js", icon: <Zap size={20} /> },
  { label: "TypeScript", icon: <Code2 size={20} /> },
];

/* ─────────────────────────────────────────
   RESPONSIVE HOOK
───────────────────────────────────────── */
function useWidth() {
  const [w, setW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return w;
}

/* ─────────────────────────────────────────
   NAV
───────────────────────────────────────── */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const w = useWidth();
  const isMobile = w <= 768;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: isMobile ? "0 24px" : "0 48px",
        height: 68,
        background: scrolled ? "rgba(247,244,239,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <a
        href="#"
        style={{
          fontWeight: 900,
          fontSize: 15,
          letterSpacing: "-0.01em",
          color: C.ink,
          textDecoration: "none",
          textTransform: "uppercase",
        }}
      >
        WEBD<span style={{ color: C.amber }}>.</span>tech
      </a>

      {!isMobile && (
        <ul
          style={{
            display: "flex",
            gap: 36,
            listStyle: "none",
          }}
        >
          {["Work", "Services", "About", "Contact"].map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                style={{
                  fontSize: 13,
                  color: C.muted,
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}

      {!isMobile ? (
        <NavCTA />
      ) : (
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: C.ink,
            display: "flex",
            alignItems: "center",
          }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      )}

      {open && isMobile && (
        <div
          style={{
            position: "absolute",
            top: 68,
            left: 0,
            right: 0,
            background: C.cream,
            borderBottom: `1px solid ${C.border}`,
            padding: "28px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {["Work", "Services", "About", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 17,
                fontWeight: 700,
                color: C.ink,
                textDecoration: "none",
              }}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function NavCTA() {
  const [hov, setHov] = useState(false);
  return (
    <a
      href="#contact"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "9px 20px",
        borderRadius: 999,
        border: `1.5px solid ${C.ink}`,
        fontSize: 12,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        textDecoration: "none",
        background: hov ? C.ink : "transparent",
        color: hov ? C.cream : C.ink,
        transition: "all 0.22s ease",
      }}
    >
      Get a Quote
    </a>
  );
}

function useCountUp(target, duration = 1500, startTrigger = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startTrigger) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, startTrigger]);
  return count;
}

function StatsRow() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const projects = useCountUp(3, 1200, triggered);
  const satisfaction = useCountUp(100, 1600, triggered);
  const founders = useCountUp(2, 900, triggered);

  const stats = [
    [projects + "+", "Projects"],
    [satisfaction + "%", "Satisfaction"],
    [founders, "Founders"],
  ];

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 24,
        maxWidth: 300,
        marginTop: 88,
      }}
    >
      {stats.map(([num, label]) => (
        <div key={label} style={{ textAlign: "center" }}>
          <p style={{ fontSize: 26, fontWeight: 900, color: C.ink, lineHeight: 1 }}>
            {num}
          </p>
          <p style={{ fontSize: 11, color: C.muted, marginTop: 5 }}>{label}</p>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function Hero() {
  const w = useWidth();
  const isMobile = w < 640;

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: isMobile ? "120px 24px 80px" : "140px 48px 96px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.045,
          backgroundImage:
            "linear-gradient(#1c1917 1px,transparent 1px),linear-gradient(90deg,#1c1917 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />
      {/* Warm glow */}
      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "18%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "rgba(251,191,36,0.16)",
          filter: "blur(110px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          width: "100%",
          position: "relative",
        }}
      >
        {/* Status */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 40,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#10b981",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          <span
            style={{
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: C.muted,
              fontWeight: 600,
            }}
          >
            Available for Projects
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: isMobile ? 56 : w < 1024 ? 76 : 96,
            fontWeight: 900,
            lineHeight: 0.94,
            letterSpacing: "-0.03em",
            color: C.ink,
            marginBottom: 36,
          }}
        >
          Elevating
          <br />
          <span style={{ color: "#a8a29e" }}>Digital</span>
          <br />
          Experiences
          <span style={{ color: C.amber }}>.</span>
        </h1>

        <p
          style={{
            fontSize: isMobile ? 15 : 17,
            color: C.muted,
            maxWidth: 430,
            lineHeight: 1.75,
            marginBottom: 52,
          }}
        >
          We build web products that convert — from custom storefronts to
          full-stack SaaS. Grounded in engineering, obsessed with craft.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          <HeroBtn href="#contact" primary>
            Get a Quote <ChevronRight size={15} />
          </HeroBtn>
          <HeroBtn href="#work">View Our Work</HeroBtn>
        </div>

        {/* Stats row */}
<StatsRow />
      </div>
    </section>
  );
}

function HeroBtn({ href, primary, children }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "14px 28px",
        borderRadius: 14,
        fontSize: 13,
        fontWeight: 700,
        textDecoration: "none",
        border: `1.5px solid ${primary ? (hov ? C.amber : C.ink) : hov ? C.ink : C.border}`,
        background: primary
          ? hov
            ? C.amber
            : C.ink
          : hov
          ? C.ink
          : "transparent",
        color: primary
          ? hov
            ? C.ink
            : C.cream
          : hov
          ? C.cream
          : C.ink,
        transition: "all 0.22s ease",
      }}
    >
      {children}
    </a>
  );
}

/* ─────────────────────────────────────────
   CASE STUDIES
───────────────────────────────────────── */
function CaseStudies() {
  const w = useWidth();
  const isMobile = w < 640;

  return (
    <section
      id="work"
      style={{
        padding: isMobile ? "80px 24px" : "112px 48px",
        background: C.cream,
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <SectionLabel>Previous Works</SectionLabel>
        <SectionTitle isMobile={isMobile}>Projects</SectionTitle>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              w >= 1024 ? "repeat(3,1fr)" : w >= 640 ? "repeat(2,1fr)" : "1fr",
            gap: 20,
          }}
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }) {
  const [hov, setHov] = useState(false);
  return (
    <article
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov
          ? "linear-gradient(145deg,#fffbeb 0%,#ffffff 55%)"
          : C.white,
        border: `1px solid ${hov ? "#a8a29e" : C.border}`,
        borderRadius: 20,
        padding: "30px 28px",
        display: "flex",
        flexDirection: "column",
        gap: 22,
        transition: "all 0.3s ease",
        boxShadow: hov ? "0 12px 40px -10px rgba(0,0,0,0.11)" : "none",
        cursor: "default",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 14,
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              background: p.tagBg,
              color: p.tagColor,
              padding: "4px 10px",
              borderRadius: 999,
            }}
          >
            {p.tag}
          </span>
          <span style={{ fontSize: 12, color: C.muted }}>{p.year}</span>
        </div>
        <h3
          style={{
            fontSize: 20,
            fontWeight: 900,
            color: C.ink,
            letterSpacing: "-0.02em",
          }}
        >
          {p.title}
        </h3>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
        {[
          ["Challenge", p.challenge],
          ["Solution", p.solution],
        ].map(([lbl, txt]) => (
          <div key={lbl}>
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.13em",
                color: C.muted,
                marginBottom: 5,
              }}
            >
              {lbl}
            </p>
            <p
              style={{ fontSize: 13, color: C.inkLight, lineHeight: 1.65 }}
            >
              {txt}
            </p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {p.metrics.map((m) => (
          <span
            key={m}
            style={{
              fontSize: 10,
              fontWeight: 600,
              background: "#f5f5f4",
              color: C.inkLight,
              padding: "5px 10px",
              borderRadius: 8,
            }}
          >
            {m}
          </span>
        ))}
      </div>

      <a
        href={p.live}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: 12,
          fontWeight: 700,
          color: hov ? C.amber : C.ink,
          textDecoration: "none",
          paddingTop: 16,
          borderTop: `1px solid ${C.border}`,
          transition: "color 0.2s",
          marginTop: "auto",
        }}
      >
        <ExternalLink size={12} /> View Live <ArrowUpRight size={12} />
      </a>
    </article>
  );
}

/* ─────────────────────────────────────────
   TECH STACK
───────────────────────────────────────── */
function TechStack() {
  const w = useWidth();
  const isMobile = w < 640;

  return (
    <section
      style={{
        padding: isMobile ? "64px 24px" : "80px 48px",
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        background: C.cream,
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: C.muted,
            fontWeight: 600,
            textAlign: "center",
            marginBottom: 36,
          }}
        >
          Tech We Ship With
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(3,1fr)" : "repeat(6,1fr)",
            gap: 12,
          }}
        >
          {STACK.map((s) => (
            <StackCard key={s.label} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StackCard({ s }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        padding: "24px 12px",
        background: hov ? "#fffbeb" : C.white,
        border: `1px solid ${hov ? "#fbbf24" : C.border}`,
        borderRadius: 16,
        transition: "all 0.22s ease",
        cursor: "default",
      }}
    >
      <span style={{ color: hov ? C.amber : C.muted, transition: "color 0.2s" }}>
        {s.icon}
      </span>
      <span
        style={{
          fontSize: 10,
          fontWeight: 700,
          color: hov ? C.ink : C.muted,
          transition: "color 0.2s",
          textAlign: "center",
        }}
      >
        {s.label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────
   SERVICES
───────────────────────────────────────── */
function Services() {
  const w = useWidth();
  const isMobile = w < 640;

  return (
    <section
      id="services"
      style={{
        padding: isMobile ? "80px 24px" : "112px 48px",
        background: C.cream,
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <SectionLabel>What We Do</SectionLabel>
        <SectionTitle isMobile={isMobile}>Services</SectionTitle>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: w >= 768 ? "repeat(3,1fr)" : "1fr",
            gap: 20,
          }}
        >
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ s }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: C.white,
        border: `1px solid ${hov ? C.ink : C.border}`,
        borderRadius: 20,
        padding: "36px 32px",
        transition: "border-color 0.22s ease",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: hov ? C.ink : "#f5f5f4",
          color: hov ? C.cream : C.inkLight,
          borderRadius: 14,
          marginBottom: 24,
          transition: "all 0.22s ease",
          flexShrink: 0,
        }}
      >
        {s.icon}
      </div>
      <h3
        style={{
          fontSize: 16,
          fontWeight: 800,
          color: C.ink,
          marginBottom: 10,
        }}
      >
        {s.title}
      </h3>
      <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.65 }}>{s.desc}</p>
    </div>
  );
}

/* ─────────────────────────────────────────
   ABOUT
───────────────────────────────────────── */
function About() {
  const w = useWidth();
  const isMobile = w < 640;

  const members = [
  {
    name: "Yusuf Rick",
    image: yusufRick,
    role: "Backend Engineering",
    bio: "Software Engineering student at Sheffield Hallam University. Architects robust server-side systems, REST APIs, and scalable infrastructure that power production-grade applications.",
    accent: "rgba(56,189,248,0.1)",
  },
  {
    name: "Amir Ziqry",
    image: amirZiqry,
    role: "Frontend & UI/UX",
    bio: "IT student at Multimedia University (MMU). Translates design vision into pixel-perfect React interfaces — obsessed with interaction details, performance, and craft.",
    accent: "rgba(251,191,36,0.12)",
  },
];

  return (
    <section
      id="about"
      style={{
        background: C.darkBg,
        padding: isMobile ? "80px 24px" : "112px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "rgba(245,158,11,0.07)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 960, margin: "0 auto", position: "relative" }}>
        <p
          style={{
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "#57534e",
            fontWeight: 600,
            marginBottom: 10,
          }}
        >
          The Team
        </p>
        <h2
          style={{
            fontSize: isMobile ? 32 : 42,
            fontWeight: 900,
            color: C.cream,
            letterSpacing: "-0.025em",
            marginBottom: 52,
            lineHeight: 1.15,
          }}
        >
          Built by Students in IT,
          <br />
          <span style={{ color: "#57534e" }}>designed for impact.</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: w >= 640 ? "1fr 1fr" : "1fr",
            gap: 20,
            marginBottom: 20,
          }}
        >
          {members.map((m) => (
  <div
    key={m.name}
    style={{
      background: `linear-gradient(135deg, ${m.accent} 0%, ${C.darkCard} 100%)`,
      border: `1px solid ${C.darkBorder}`,
      borderRadius: 20,
      overflow: "hidden",
    }}
  >
    <div
      style={{
        width: "100%",
        aspectRatio: "4 / 5",
        overflow: "hidden",
      }}
    >
      <img
        src={m.image}
        alt={m.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          display: "block",
        }}
      />
    </div>

    <div style={{ padding: "24px 28px 28px" }}>
      <p style={{ fontWeight: 800, color: C.cream, fontSize: 17, marginBottom: 4 }}>
        {m.name}
      </p>
      <p
        style={{
          fontSize: 12,
          color: C.amber,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: 14,
        }}
      >
        {m.role}
      </p>
      <p style={{ fontSize: 14, color: "#a8a29e", lineHeight: 1.65 }}>
        {m.bio}
      </p>
    </div>
  </div>
))}
        </div>

        {/* MMU badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "flex-start",
            gap: 14,
            background: C.darkCard,
            border: `1px solid ${C.darkBorder}`,
            borderRadius: 16,
            padding: "18px 24px",
          }}
        >
          <GraduationCap
            size={20}
            color={C.amber}
            style={{ flexShrink: 0, marginTop: 1 }}
          />
          <p style={{ fontSize: 13, color: "#a8a29e", lineHeight: 1.6 }}>
            Students from{" "}
            <strong style={{ color: C.cream, fontWeight: 700 }}>
              Sheffield Hallam University
            </strong>{" "}
            &{" "}
            <strong style={{ color: C.cream, fontWeight: 700 }}>
              Multimedia University (MMU)
            </strong>{" "}
            — grounding every line of code in solid CS & IT fundamentals.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   CONTACT
───────────────────────────────────────── */
function Contact() {
  const w = useWidth();
  const isMobile = w < 640;
  const [form, setForm] = useState({
    name: "",
    project: "",
    budget: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [focus, setFocus] = useState(null);

  const handle = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_4xbq64g",
          template_id: "template_wylqvgj",
          user_id: "aG7mei6jOPXvafMT3",
          template_params: {
            from_name: form.name,
            project_name: form.project,
            budget: form.budget,
            message: form.message,
          },
        }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setSending(false);
    }
  };

  const inputStyle = (name) => ({
    width: "100%",
    background: C.white,
    border: `1.5px solid ${focus === name ? C.ink : C.border}`,
    borderRadius: 12,
    padding: "13px 16px",
    fontSize: 14,
    color: C.ink,
    outline: "none",
    transition: "border-color 0.2s ease",
    boxSizing: "border-box",
    fontFamily: "inherit",
  });

  const labelStyle = {
    display: "block",
    fontSize: 11,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.13em",
    color: C.muted,
    marginBottom: 8,
  };

  return (
    <section
      id="contact"
      style={{
        background: C.cream,
        padding: isMobile ? "80px 24px" : "112px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 280,
          background: "rgba(251,191,36,0.1)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 540, margin: "0 auto", position: "relative" }}>
        <SectionLabel>Start a Project</SectionLabel>
        <h2
          style={{
            fontSize: isMobile ? 32 : 42,
            fontWeight: 900,
            color: C.ink,
            letterSpacing: "-0.025em",
            marginBottom: 12,
            lineHeight: 1.1,
          }}
        >
          Let's build something
          <br />
          <span style={{ color: "#a8a29e" }}>remarkable.</span>
        </h2>
        <p
          style={{
            fontSize: 14,
            color: C.muted,
            marginBottom: 48,
            lineHeight: 1.65,
          }}
        >
          Tell us about your project — we'll get back within 24 hours.
        </p>

        {sent ? (
          <div
            style={{
              background: C.white,
              border: "1px solid #a7f3d0",
              borderRadius: 20,
              padding: "52px 32px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                background: "#d1fae5",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <Mail size={22} color="#059669" />
            </div>
            <p
              style={{
                fontWeight: 800,
                color: C.ink,
                fontSize: 16,
                marginBottom: 6,
              }}
            >
              Message received!
            </p>
            <p style={{ fontSize: 14, color: C.muted }}>
              We'll reach out within one business day.
            </p>
          </div>
        ) : (
          <form
            onSubmit={submit}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: w >= 480 ? "1fr 1fr" : "1fr",
                gap: 16,
              }}
            >
              <div>
                <label style={labelStyle}>Your Name</label>
                <input
                  name="name"
                  placeholder="Alex Tan"
                  value={form.name}
                  onChange={handle}
                  onFocus={() => setFocus("name")}
                  onBlur={() => setFocus(null)}
                  style={inputStyle("name")}
                  required
                />
              </div>
              <div>
                <label style={labelStyle}>Project Name</label>
                <input
                  name="project"
                  placeholder="My Storefront"
                  value={form.project}
                  onChange={handle}
                  onFocus={() => setFocus("project")}
                  onBlur={() => setFocus(null)}
                  style={inputStyle("project")}
                  required
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Budget Range</label>
              <select
                name="budget"
                value={form.budget}
                onChange={handle}
                onFocus={() => setFocus("budget")}
                onBlur={() => setFocus(null)}
                style={inputStyle("budget")}
                required
              >
                <option value="">Select a range</option>
                <option>RM 3,000 – RM 5,000</option>
                <option>RM 5,000 – RM 10,000</option>
                <option>RM 10,000 – RM 20,000</option>
                <option>RM 20,000+</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Tell Us More</label>
              <textarea
                name="message"
                rows={5}
                placeholder="A brief description of what you're building…"
                value={form.message}
                onChange={handle}
                onFocus={() => setFocus("message")}
                onBlur={() => setFocus(null)}
                style={{ ...inputStyle("message"), resize: "none" }}
              />
            </div>

            {error && (
              <p style={{ fontSize: 13, color: "#dc2626", textAlign: "center", marginTop: 4 }}>
                {error}
              </p>
            )}
            <ContactBtn sending={sending} />
          </form>
        )}
      </div>
    </section>
  );
}

function ContactBtn({ sending }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      type="submit"
      disabled={sending}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: "100%",
        background: sending ? "#a8a29e" : hov ? C.amber : C.ink,
        color: sending ? C.cream : hov ? C.ink : C.cream,
        border: "none",
        borderRadius: 14,
        padding: "16px 24px",
        fontSize: 13,
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        cursor: sending ? "not-allowed" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        transition: "all 0.22s ease",
        marginTop: 4,
        fontFamily: "inherit",
        opacity: sending ? 0.7 : 1,
      }}
    >
      {sending ? "Sending…" : "Send Enquiry"}
      {!sending && <ArrowUpRight size={16} />}
    </button>
  );
}

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */
function Footer() {
  const w = useWidth();
  return (
    <footer
      style={{
        padding: w < 640 ? "28px 24px" : "28px 48px",
        borderTop: `1px solid ${C.border}`,
        display: "flex",
        flexDirection: w < 480 ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        background: C.cream,
      }}
    >
      <span
        style={{
          fontWeight: 900,
          fontSize: 14,
          textTransform: "uppercase",
          color: C.ink,
        }}
      >
        WEBD<span style={{ color: C.amber }}>.</span>tech
      </span>
      <p style={{ fontSize: 12, color: C.muted }}>
        © {new Date().getFullYear()} webd.tech — All rights
        reserved.
      </p>
    </footer>
  );
}

/* ─────────────────────────────────────────
   SHARED TYPOGRAPHY HELPERS
───────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <p
      style={{
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: "0.18em",
        color: C.muted,
        fontWeight: 600,
        marginBottom: 10,
      }}
    >
      {children}
    </p>
  );
}

function SectionTitle({ children, isMobile }) {
  return (
    <h2
      style={{
        fontSize: isMobile ? 32 : 42,
        fontWeight: 900,
        color: C.ink,
        letterSpacing: "-0.025em",
        marginBottom: 52,
      }}
    >
      {children}
    </h2>
  );
}

/* ─────────────────────────────────────────
   ROOT
───────────────────────────────────────── */
export default function Portfolio() {
  return (
    <div
      style={{
        background: C.cream,
        color: C.ink,
        fontFamily:
          "'DM Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700;9..40,900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { scroll-behavior: smooth; width: 100%; background: #f0f4ff; }
        body { overflow-x: hidden; margin: 0; padding: 0; }
        #root { width: 100%; max-width: 100% !important; margin: 0 !important; padding: 0 !important; }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        input::placeholder, textarea::placeholder { color: #a8a29e; }
        select { appearance: none; -webkit-appearance: none; cursor: pointer; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2378716c' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; padding-right: 40px !important; }
        a { -webkit-tap-highlight-color: transparent; }
      `}</style>
      <Nav />
      <Hero />
      <CaseStudies />
      <TechStack />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}