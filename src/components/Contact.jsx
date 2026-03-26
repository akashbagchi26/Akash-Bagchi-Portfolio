import { useState } from "react";
import { useScrollReveal, useScrollRevealList } from "../hooks/useScrollReveal";

const contactItems = [
  {
    icon: "📧",
    label: "Email",
    value: "bagchiakash120@gmail.com",
    href: "mailto:bagchiakash120@gmail.com",
    accent: "#c4b5fd",
    accentBg: "rgba(124,58,237,.1)",
    accentBorder: "rgba(124,58,237,.25)",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/akash-bagchi",
    href: "https://www.linkedin.com/in/akash-bagchi",
    accent: "#22d3ee",
    accentBg: "rgba(6,182,212,.1)",
    accentBorder: "rgba(6,182,212,.25)",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/akash-bagchi",
    href: "https://github.com/akash-bagchi",
    accent: "#c4b5fd",
    accentBg: "rgba(124,58,237,.1)",
    accentBorder: "rgba(124,58,237,.25)",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Kolkata, West Bengal, India",
    href: null,
    accent: "#22d3ee",
    accentBg: "rgba(6,182,212,.1)",
    accentBorder: "rgba(6,182,212,.25)",
  },
];

const reveal = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible
    ? "translateY(0) scale(1)"
    : "translateY(20px) scale(0.96)",
  transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
});

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focused, setFocused] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const { ref: headerRef, visible: headerVisible } = useScrollReveal();
  const { ref: leftRef, visible: leftVisible } = useScrollReveal();
  const { ref: rightRef, visible: rightVisible } = useScrollReveal();
  const { ref: itemsRef, visibleItems } = useScrollRevealList(
    contactItems.length,
    100,
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputStyle = (field) => ({
    width: "100%",
    padding: "13px 18px",
    borderRadius: 12,
    border: `1.5px solid ${focused === field ? "rgba(124,58,237,.6)" : "var(--card-border)"}`,
    background: focused === field ? "rgba(124,58,237,.07)" : "var(--card)",
    color: "var(--t1)",
    fontSize: "0.92rem",
    outline: "none",
    transition: "all .25s ease",
    boxShadow: focused === field ? "0 0 0 4px rgba(124,58,237,.12)" : "none",
    fontFamily: "Inter, sans-serif",
  });

  return (
    <section
      id="contact"
      style={{ padding: "100px 24px", background: "var(--bg-alt)" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: 64,
            ...reveal(headerVisible),
          }}
        >
          <span className="section-label" style={{ color: "#22d3ee" }}>
            Get In Touch
          </span>
          <h2
            className="font-outfit text-h"
            style={{
              fontWeight: 800,
              fontSize: "clamp(2rem,4.5vw,2.8rem)",
              marginBottom: 12,
            }}
          >
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p
            style={{
              color: "var(--t5)",
              fontSize: "0.98rem",
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            Have a project in mind, an opportunity, or just want to say hi? I'd
            love to hear from you.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(320px, 1fr) 1.5fr",
            gap: 56,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: Info */}
          <div ref={leftRef} style={{ ...reveal(leftVisible) }}>
            <h3
              className="font-outfit text-h"
              style={{ fontWeight: 700, fontSize: "1.4rem", marginBottom: 14 }}
            >
              Connect with Me
            </h3>
            <p
              style={{
                color: "var(--t4)",
                fontSize: "0.94rem",
                lineHeight: 1.8,
                marginBottom: 32,
              }}
            >
              I'm always open to discussing new projects, creative ideas, or
              being part of your vision. Let's build something exceptional.
            </p>

            <div
              ref={itemsRef}
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              {contactItems.map((item, i) => (
                <div
                  key={item.label}
                  className="glass-card"
                  style={{
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    ...reveal(visibleItems[i], i * 80),
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      flexShrink: 0,
                      borderRadius: 12,
                      background: item.accentBg,
                      border: `1px solid ${item.accentBorder}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.3rem",
                      boxShadow: `0 8px 16px ${item.accent}12`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        color: "var(--t5)",
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        marginBottom: 2,
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: "var(--t2)",
                          fontSize: "0.92rem",
                          fontWeight: 600,
                          textDecoration: "none",
                          transition: "color 0.2s",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          display: "block",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#c4b5fd")}
                        onMouseLeave={(e) =>
                          (e.target.style.color = "var(--t2)")
                        }
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div
                        style={{
                          color: "var(--t2)",
                          fontSize: "0.92rem",
                          fontWeight: 600,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div ref={rightRef} style={{ ...reveal(rightVisible, 200) }}>
            <div
              className="glass-card"
              style={{ padding: 40, position: "relative", overflow: "hidden" }}
            >
              {/* Form background accent */}
              <div
                style={{
                  position: "absolute",
                  top: -100,
                  right: -100,
                  width: 300,
                  height: 300,
                  background:
                    "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {sent ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "64px 0",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div style={{ fontSize: "3.5rem", marginBottom: 20 }}>📬</div>
                  <h3
                    className="font-outfit text-h"
                    style={{
                      fontWeight: 800,
                      fontSize: "1.6rem",
                      marginBottom: 12,
                    }}
                  >
                    Message Received!
                  </h3>
                  <p
                    style={{
                      color: "var(--t4)",
                      fontSize: "1.05rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Thanks for reaching out, Akash! <br /> I'll get back to you
                    as soon as possible.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="btn-outline"
                    style={{ marginTop: 28 }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 18,
                    }}
                    className="form-name-email"
                  >
                    {[
                      {
                        id: "name",
                        type: "text",
                        placeholder: "John Doe",
                        label: "Full Name",
                      },
                      {
                        id: "email",
                        type: "email",
                        placeholder: "john@example.com",
                        label: "Email Address",
                      },
                    ].map((f) => (
                      <div key={f.id}>
                        <label
                          style={{
                            display: "block",
                            color: "var(--t5)",
                            fontSize: "0.75rem",
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "1.5px",
                            marginBottom: 8,
                          }}
                        >
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          required
                          value={form[f.id]}
                          onChange={(e) =>
                            setForm({ ...form, [f.id]: e.target.value })
                          }
                          onFocus={() => setFocused(f.id)}
                          onBlur={() => setFocused("")}
                          style={inputStyle(f.id)}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        color: "var(--t5)",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "1.5px",
                        marginBottom: 8,
                      }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Project collaboration, hiring, etc."
                      required
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      onFocus={() => setFocused("subject")}
                      onBlur={() => setFocused("")}
                      style={inputStyle("subject")}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        color: "var(--t5)",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "1.5px",
                        marginBottom: 8,
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      rows={6}
                      placeholder="How can I help you?"
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused("")}
                      style={{
                        ...inputStyle("message"),
                        resize: "vertical",
                        minHeight: 140,
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                    style={{
                      justifyContent: "center",
                      padding: "16px 28px",
                      marginTop: 8,
                      fontSize: "1rem",
                    }}
                  >
                    {loading ? (
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          border: "2px solid rgba(255,255,255,0.3)",
                          borderTopColor: "#fff",
                          borderRadius: "50%",
                          animation: "spin-slow 0.8s linear infinite",
                        }}
                      />
                    ) : (
                      <>
                        <svg
                          width="18"
                          height="18"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-name-email { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
