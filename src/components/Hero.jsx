import { useEffect, useState } from "react";

const roles = [
  "React Native Developer",
  "Full Stack Developer",
  "Mobile App Engineer",
  "Node.js Expert",
];

const reveal = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible
    ? "translateY(0) scale(1)"
    : "translateY(20px) scale(0.97)",
  transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
});

export default function Hero() {
  const [ridx, setRidx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const cur = roles[ridx];
    let t;

    if (!deleting && displayed.length < cur.length) {
      t = setTimeout(() => {
        setDisplayed(cur.slice(0, displayed.length + 1));
      }, 72);
    } else if (!deleting && displayed.length === cur.length) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 36);
    } else {
      t = setTimeout(() => {
        setDeleting(false);
        setRidx((prev) => (prev + 1) % roles.length);
      }, 200);
    }

    return () => clearTimeout(t);
  }, [displayed, deleting, ridx]);

  return (
    <section
      className="grid-bg"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "88px 20px 64px",
      }}
    >
      {/* Ambient blobs */}
      <div
        className="animate-pulse-glow"
        style={{
          position: "absolute",
          top: "8%",
          left: "3%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(124,58,237,.2) 0%,transparent 68%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="animate-pulse-glow delay-300"
        style={{
          position: "absolute",
          bottom: "8%",
          right: "3%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(6,182,212,.15) 0%,transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 64,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left: text */}
          <div>
            {/* Status badge */}
            <div style={{ ...reveal(mounted, 0) }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(34,197,94,.10)",
                  border: "1px solid rgba(34,197,94,.4)",
                  borderRadius: 100,
                  padding: "6px 16px",
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 8px #22c55e",
                    display: "inline-block",
                  }}
                  className="animate-pulse-glow"
                />
                <span
                  style={{
                    color: "#4ade80",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                  }}
                >
                  Open to opportunities
                </span>
              </div>
            </div>

            {/* Name */}
            <div style={{ ...reveal(mounted, 80) }}>
              <h1
                className="font-outfit text-h"
                style={{
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "-1.5px",
                  marginBottom: 12,
                  fontSize: "clamp(2.4rem,5.5vw,3.9rem)",
                }}
              >
                Hi, I'm <span className="gradient-text">Akash Bagchi</span>
              </h1>
            </div>

            {/* Typewriter */}
            <div style={{ ...reveal(mounted, 160) }}>
              <div
                className="font-outfit text-s"
                style={{
                  fontWeight: 700,
                  marginBottom: 10,
                  fontSize: "clamp(1.1rem,2.8vw,1.55rem)",
                  display: "flex",
                  alignItems: "center",
                  minHeight: "2.2rem",
                }}
              >
                <span>{displayed}</span>
                <span className="cursor-blink" />
              </div>
            </div>

            {/* Tagline */}
            <div style={{ ...reveal(mounted, 240) }}>
              <p
                style={{
                  color: "var(--t4)",
                  fontSize: "0.88rem",
                  fontStyle: "italic",
                  borderLeft: "2px solid rgba(124,58,237,.5)",
                  paddingLeft: 12,
                  marginBottom: 20,
                  lineHeight: 1.6,
                }}
              >
                Building scalable mobile &amp; web apps that millions of users
                rely on
              </p>
            </div>

            {/* Bio */}
            <div style={{ ...reveal(mounted, 320) }}>
              <p
                style={{
                  color: "var(--t4)",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  maxWidth: 560,
                  marginBottom: 36,
                }}
              >
                Full Stack Developer with{" "}
                <span style={{ color: "#c4b5fd", fontWeight: 600 }}>
                  ~5 years
                </span>{" "}
                of experience building enterprise{" "}
                <span style={{ color: "#c4b5fd" }}>CRM applications</span>,
                cross-platform
                <span style={{ color: "#22d3ee" }}> mobile apps</span>, and
                high-performance
                <span style={{ color: "#c4b5fd" }}> Node.js APIs</span>.
                Experienced in optimizing application performance, integrating
                REST APIs, and deploying apps to production (Play Store & App
                Store). Based in{" "}
                <strong style={{ color: "var(--t2)", fontWeight: 600 }}>
                  Kolkata, India
                </strong>
                .
              </p>
            </div>

            {/* CTAs */}
            <div style={{ ...reveal(mounted, 400) }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 14,
                  marginBottom: 36,
                }}
              >
                <button
                  className="btn-primary"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 7h7a2 2 0 012 2v12M3 7V5a2 2 0 012-2h2M21 7h-7a2 2 0 00-2 2v0M21 7V5a2 2 0 00-2-2h-2m-6 16h6" />
                  </svg>
                  View Projects
                </button>
                <button
                  className="btn-outline"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Me
                </button>
              </div>
            </div>

            {/* Social icons */}
            <div style={{ ...reveal(mounted, 460) }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                {[
                  {
                    label: "GitHub",
                    href: "https://github.com/akash-bagchi",
                    d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                  },
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/akash-bagchi",
                    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      background: "rgba(124,58,237,.1)",
                      border: "1px solid rgba(124,58,237,.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--t3)",
                      transition: "all .25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(124,58,237,.2)";
                      e.currentTarget.style.borderColor = "#a78bfa";
                      e.currentTarget.style.color = "#c4b5fd";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(124,58,237,.1)";
                      e.currentTarget.style.borderColor = "rgba(124,58,237,.3)";
                      e.currentTarget.style.color = "var(--t3)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={s.d} />
                    </svg>
                  </a>
                ))}
                <span
                  style={{
                    color: "var(--t6)",
                    fontSize: "0.78rem",
                    marginLeft: 4,
                  }}
                >
                  · Kolkata, India
                </span>
              </div>
            </div>
          </div>

          {/* Right: avatar */}
          <div
            className="hero-avatar"
            style={{ position: "relative", ...reveal(mounted, 200) }}
          >
            <div
              className="animate-pulse-glow"
              style={{
                position: "absolute",
                inset: -24,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle,rgba(124,58,237,.3) 0%,transparent 68%)",
                pointerEvents: "none",
              }}
            />
            <div
              className="animate-spin-slow"
              style={{
                position: "absolute",
                inset: -12,
                borderRadius: "50%",
                border: "1px dashed rgba(167,139,250,.3)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "8%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#7c3aed",
                  boxShadow: "0 0 14px #7c3aed",
                }}
              />
            </div>
            <img
              src="/avatar.png"
              alt="Akash Bagchi"
              className="animate-float"
              style={{
                width: 272,
                height: 272,
                borderRadius: "50%",
                objectFit: "cover",
                position: "relative",
                zIndex: 1,
                border: "3px solid rgba(124,58,237,.5)",
                boxShadow:
                  "0 0 64px rgba(124,58,237,.35),0 24px 64px rgba(0,0,0,.6)",
              }}
            />
            {/* Badges */}
            <div
              className="glass-card"
              style={{
                position: "absolute",
                bottom: 16,
                right: -28,
                zIndex: 2,
                padding: "10px 16px",
                borderRadius: 14,
                borderColor: "rgba(124,58,237,.4)",
              }}
            >
              <div
                className="font-outfit gradient-text"
                style={{ fontWeight: 800, fontSize: "1.4rem", lineHeight: 1 }}
              >
                5+
              </div>
              <div
                style={{
                  color: "var(--t5)",
                  fontSize: "0.72rem",
                  marginTop: 3,
                }}
              >
                Yrs Exp
              </div>
            </div>
            <div
              className="glass-card"
              style={{
                position: "absolute",
                top: 16,
                left: -28,
                zIndex: 2,
                padding: "10px 16px",
                borderRadius: 14,
                borderColor: "rgba(6,182,212,.35)",
              }}
            >
              <div
                className="font-outfit gradient-text-cyan"
                style={{ fontWeight: 800, fontSize: "1.1rem", lineHeight: 1 }}
              >
                iOS &
              </div>
              <div
                className="font-outfit gradient-text-cyan"
                style={{ fontWeight: 800, fontSize: "1.1rem", lineHeight: 1.2 }}
              >
                Android
              </div>
              <div
                style={{
                  color: "var(--t5)",
                  fontSize: "0.65rem",
                  marginTop: 3,
                }}
              >
                Apps Deployed
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="animate-fade-in-up delay-1000"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        style={{
          opacity: 0,
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "var(--t6)",
          fontSize: "0.72rem",
        }}
      >
        <span>Scroll</span>
        <div
          style={{
            width: 22,
            height: 38,
            border: "2px solid var(--card-border)",
            borderRadius: 11,
            display: "flex",
            justifyContent: "center",
            paddingTop: 5,
          }}
        >
          <div
            className="animate-float"
            style={{
              width: 3,
              height: 7,
              background: "#a78bfa",
              borderRadius: 2,
            }}
          />
        </div>
      </button>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-avatar { display: none !important; }
        }
      `}</style>
    </section>
  );
}
