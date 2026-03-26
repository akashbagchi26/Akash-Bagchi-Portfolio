import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

function SunIcon() {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navItems.map((i) => i.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive("#" + sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    document
      .getElementById(href.slice(1))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.35s ease",
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--nav-border)"
          : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
          }}
        >
          <span
            className="font-outfit gradient-text"
            style={{ fontWeight: 800, fontSize: "1.35rem" }}
          >
            AB
          </span>
          <span style={{ color: "var(--card-border)", margin: "0 2px" }}>
            |
          </span>
          <span
            style={{ color: "var(--t4)", fontSize: "0.82rem", fontWeight: 500 }}
          >
            Portfolio
          </span>
        </a>

        <nav
          style={{ display: "flex", alignItems: "center", gap: 28 }}
          className="desktop-nav"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link${active === item.href ? " active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            title={theme === "dark" ? "Switch to Light" : "Switch to Dark"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href="#contact"
            className="btn-primary"
            style={{ padding: "9px 20px", fontSize: "0.83rem" }}
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
          >
            Hire Me
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: 5,
            padding: 8,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#a78bfa",
                borderRadius: 2,
                transition: "all 0.3s",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(5px,5px)"
                    : menuOpen && i === 2
                      ? "rotate(-45deg) translate(5px,-5px)"
                      : menuOpen && i === 1
                        ? "scaleX(0)"
                        : "none",
              }}
            />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            background: "var(--nav-bg)",
            borderTop: "1px solid var(--nav-border)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link${active === item.href ? " active" : ""}`}
              style={{ fontSize: "1rem" }}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            style={{ alignSelf: "flex-start" }}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      )}

      <style>{`
        @media (max-width:768px){.desktop-nav{display:none!important}.mobile-menu-btn{display:flex!important}}
      `}</style>
    </header>
  );
}
