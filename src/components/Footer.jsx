import { useScrollReveal } from "../hooks/useScrollReveal";

const socialLinks = [
  { icon: "🐙", label: "GitHub", href: "https://github.com/akashbagchi26" },
  {
    icon: "💼",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akash-bagchi",
  },
  { icon: "📧", label: "Email", href: "mailto:bagchiakash120@gmail.com" },
];

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const reveal = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(16px)",
  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
});

export default function Footer() {
  const { ref, visible } = useScrollReveal();

  return (
    <footer
      ref={ref}
      style={{
        padding: "72px 24px 36px",
        background: "var(--bg)",
        borderTop: "1px solid var(--card-border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decor */}
      <div
        style={{
          position: "absolute",
          bottom: -100,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 400,
          background:
            "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          ...reveal(visible),
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr",
            gap: 48,
            marginBottom: 56,
          }}
          className="footer-grid"
        >
          {/* Brand Column */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <span
                className="font-outfit gradient-text"
                style={{ fontWeight: 800, fontSize: "1.6rem" }}
              >
                AB
              </span>
              <span
                style={{
                  width: 1,
                  height: 28,
                  background: "var(--card-border)",
                }}
              />
              <span
                style={{
                  color: "var(--t4)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              >
                Portfolio 2026
              </span>
            </div>
            <p
              style={{
                color: "var(--t5)",
                fontSize: "0.94rem",
                lineHeight: 1.7,
                maxWidth: 320,
                marginBottom: 24,
              }}
            >
              Full Stack Developer specializing in React Native and Node.js.
              Always building, always learning.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    border: "1px solid var(--card-border)",
                    background: "var(--card)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--t4)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#7c3aed";
                    e.currentTarget.style.color = "#c4b5fd";
                    e.currentTarget.style.background = "rgba(124,58,237,0.08)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--card-border)";
                    e.currentTarget.style.color = "var(--t4)";
                    e.currentTarget.style.background = "var(--card)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <span style={{ fontSize: "1.15rem" }}>{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4
              className="font-outfit text-h"
              style={{
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: 24,
              }}
            >
              Sitemap
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 12,
              }}
            >
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: "var(--t5)",
                    fontSize: "0.92rem",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#c4b5fd")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--t5)")}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(link.href.slice(1))
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Col */}
          <div style={{ textAlign: "right" }} className="footer-right">
            <h4
              className="font-outfit text-h"
              style={{
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: 24,
              }}
            >
              Contact
            </h4>
            <a
              href="mailto:bagchiakash120@gmail.com"
              style={{
                color: "var(--t3)",
                fontSize: "1rem",
                fontWeight: 600,
                display: "block",
                marginBottom: 10,
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#c4b5fd")}
              onMouseLeave={(e) => (e.target.style.color = "var(--t3)")}
            >
              bagchiakash120@gmail.com
            </a>
            <div style={{ color: "var(--t5)", fontSize: "0.88rem" }}>
              Kolkata, West Bengal, India
            </div>
            <div
              style={{ marginTop: 24, fontSize: "0.8rem", color: "var(--t6)" }}
            >
              UTC+05:30 (IST)
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div
          style={{
            paddingTop: 32,
            borderTop: "1px solid var(--card-border)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div style={{ color: "var(--t6)", fontSize: "0.85rem" }}>
            © {new Date().getFullYear()} Akash Bagchi. All rights reserved.
          </div>
          <div
            style={{
              color: "var(--t6)",
              fontSize: "0.85rem",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            Built with <span style={{ color: "#22d3ee" }}>⚡ React</span> &{" "}
            <span style={{ color: "#7c3aed" }}>Modern CSS</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: left !important; }
          .footer-right { text-align: left !important; }
          footer { padding: 48px 24px 32px !important; }
        }
      `}</style>
    </footer>
  );
}
