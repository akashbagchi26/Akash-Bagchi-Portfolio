import { useState } from "react";
import { useScrollReveal, useScrollRevealList } from "../hooks/useScrollReveal";

const projects = [
  {
    title: "Loan Tracker App",
    emoji: "📊",
    type: "Full Stack · Finance Tracker",
    accent: "#22d3ee",
    accentBg: "rgba(6,182,212,.1)",
    accentBorder: "rgba(6,182,212,.35)",
    description:
      "A full-stack loan management application to track lent and borrowed money with transaction history and real-time balance calculation.",
    tech: ["React Native", "Node.js", "Express", "MongoDB"],
    achievements: [
      "Track lent & borrowed money with real-time balance updates",
      "Designed scalable REST APIs with MongoDB",
      "Clean UI for managing multiple users & transactions",
    ],
    github: "https://github.com/akashbagchi26/Loan-Tracker",
  },
  {
    title: "Expense Tracker Web",
    emoji: "💰",
    type: "Frontend · Finance",
    accent: "#a78bfa",
    accentBg: "rgba(124,58,237,.1)",
    accentBorder: "rgba(124,58,237,.35)",
    description:
      "A responsive expense tracking web app with category insights and monthly analytics.",
    tech: ["React.js", "JavaScript", "Chart.js"],
    achievements: [
      "Category-wise expense tracking with charts",
      "Monthly analytics dashboard",
      "Responsive UI for all devices",
    ],
    github: "https://github.com/akashbagchi26/Expense-Tracker-Web",
  },
  {
    title: "User Management App",
    emoji: "⚙️",
    type: "Full Stack · Admin Dashboard",
    accent: "#22d3ee",
    accentBg: "rgba(6,182,212,.1)",
    accentBorder: "rgba(6,182,212,.35)",
    description:
      "A full-stack user management application with authentication, role-based access, and complete CRUD operations through an intuitive admin interface.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
    achievements: [
      "Built complete authentication system using JWT",
      "Admin dashboard for managing users with CRUD operations",
      "Role-based access control for secure operations",
      "Structured full-stack architecture (frontend + backend)",
    ],
    github: "https://github.com/akashbagchi26/Basic-User-Management",
  },
  {
    title: "Speech-to-Text App",
    emoji: "🎙️",
    type: "Web App · Voice AI",
    accent: "#a78bfa",
    accentBg: "rgba(124,58,237,.1)",
    accentBorder: "rgba(124,58,237,.35)",
    description:
      "Browser-based real-time speech-to-text app using Web Speech API.",
    tech: ["JavaScript", "Web Speech API", "HTML", "CSS"],
    achievements: [
      "Real-time voice transcription",
      "Multi-language support",
      "Clipboard & history feature",
    ],
    github: "https://github.com/akashbagchi26/speechToText_native",
  },
];

const reveal = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(20px)",
  transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
});

function ProjectCard({ p, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="glass-card"
      style={{
        ...reveal(visible),
        position: "relative",
        padding: 32,
        overflow: "hidden",
        cursor: "default",
        background: hovered ? p.accentBg : "var(--card)",
        borderColor: hovered ? p.accentBorder : "var(--card-border)",
        boxShadow: hovered ? `0 20px 60px ${p.accent}18` : "none",
        zIndex: hovered ? 10 : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "200px",
          height: "200px",
          background: `radial-gradient(circle, ${p.accent}15 0%, transparent 70%)`,
          borderRadius: "50%",
          pointerEvents: "none",
          opacity: hovered ? 1 : 0.4,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Header Section */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 20,
          marginBottom: 20,
        }}
      >
        <div
          style={{
            width: 58,
            height: 58,
            borderRadius: 16,
            background: p.accentBg,
            border: `1px solid ${p.accentBorder}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.75rem",
            flexShrink: 0,
            boxShadow: hovered ? `0 0 20px ${p.accent}30` : "none",
            transition: "all 0.3s ease",
            transform: hovered ? "scale(1.05) rotate(5deg)" : "none",
          }}
        >
          {p.emoji}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3
            className="font-outfit"
            style={{
              fontWeight: 700,
              fontSize: "1.2rem",
              color: "var(--t1)",
              marginBottom: 4,
              lineHeight: 1.2,
            }}
          >
            {p.title}
          </h3>
          <span
            style={{
              display: "inline-block",
              color: p.accent,
              fontSize: "0.7rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            {p.type}
          </span>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          color: "var(--t3)",
          fontSize: "0.92rem",
          lineHeight: 1.7,
          marginBottom: 20,
        }}
      >
        {p.description}
      </p>

      {/* Highlights */}
      <div style={{ marginBottom: 24 }}>
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "var(--t5)",
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: 12,
          }}
        >
          Key Highlights
        </p>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {p.achievements.map((a, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
                color: "var(--t2)",
                fontSize: "0.88rem",
                lineHeight: 1.5,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: p.accent,
                  marginTop: 8,
                  flexShrink: 0,
                  opacity: 0.8,
                }}
              />
              {a}
            </li>
          ))}
        </ul>
      </div>

      {/* Technology Bar */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 24,
        }}
      >
        {p.tech.map((t) => (
          <span
            key={t}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--card-border)",
              color: "var(--t4)",
              padding: "4px 10px",
              borderRadius: 8,
              fontSize: "0.75rem",
              fontWeight: 500,
              transition: "all 0.2s ease",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Card Action */}
      <div
        style={{
          paddingTop: 16,
          borderTop: "1px solid var(--card-border)",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          className="proj-link-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "var(--t2)",
            fontSize: "0.85rem",
            fontWeight: 600,
            textDecoration: "none",
            padding: "8px 16px",
            borderRadius: 10,
            border: "1px solid var(--card-border)",
            background: "rgba(255,255,255,0.02)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          View Source
        </a>
      </div>

      <style>{`
        .proj-link-btn:hover {
          color: ${p.accent} !important;
          border-color: ${p.accent} !important;
          background: ${p.accentBg} !important;
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
}

export default function Projects() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();
  const { ref: gridRef, visibleItems } = useScrollRevealList(
    projects.length,
    130,
  );
  const { ref: ctaRef, visible: ctaVisible } = useScrollReveal();

  return (
    <section id="projects" style={{ background: "var(--bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: 60,
            ...reveal(headerVisible),
          }}
        >
          <span className="section-label" style={{ color: "#22d3ee" }}>
            My Portfolio
          </span>
          <h2
            className="font-outfit text-h"
            style={{
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3rem)",
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p
            style={{
              color: "var(--t4)",
              fontSize: "1rem",
              maxWidth: 540,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            A selection of my recent work involving full-stack development, mobile apps, and interactive web experiences.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 24,
          }}
          className="proj-grid"
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} visible={visibleItems[i]} />
          ))}
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          style={{
            textAlign: "center",
            marginTop: 80,
            ...reveal(ctaVisible),
          }}
        >
          <p
            style={{ color: "var(--t4)", fontSize: "0.95rem", marginBottom: 24 }}
          >
            Want to see my full collection including small hacks?
          </p>
          <a
            href="https://github.com/akashbagchi26"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ padding: "14px 32px" }}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Explore My GitHub
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proj-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .glass-card { padding: 24px !important; }
        }
      `}</style>
    </section>
  );
}
