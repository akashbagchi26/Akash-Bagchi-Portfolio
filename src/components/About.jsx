import { useScrollReveal, useScrollRevealList } from '../hooks/useScrollReveal';

const highlights = [
  { value: '~5', label: 'Years Experience', color: '#c4b5fd' },
  { value: 'iOS+Droid', label: 'Apps on Stores', color: '#22d3ee' },
  { value: 'Full Stack', label: 'Mobile + Web + API', color: '#c4b5fd' },
  { value: 'Open', label: 'Ready to Join', color: '#4ade80' },
];

const quickInfo = [
  { icon: '💼', label: 'Current Title', value: 'Application Developer (React Native)', href: null },
  { icon: '🎓', label: 'Education', value: 'MCA — Meghnad Saha Institute of Technology', href: null },
  { icon: '📍', label: 'Location', value: 'Kolkata, West Bengal, India', href: null },
  { icon: '📧', label: 'Email', value: 'bagchiakash120@gmail.com', href: 'mailto:bagchiakash120@gmail.com' },
  { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/akash-bagchi', href: 'https://www.linkedin.com/in/akash-bagchi' },
  { icon: '🌐', label: 'Work Mode', value: 'Remote · On-site · Hybrid', href: null },
];

const reveal = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(20px)',
  transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
});

export default function About() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();
  const { ref: ctaRef, visible: ctaVisible } = useScrollReveal();
  const { ref: bioRef, visible: bioVisible } = useScrollReveal();
  const { ref: infoRef, visibleItems: infoVisible } = useScrollRevealList(quickInfo.length, 80);
  const { ref: highlightsRef, visibleItems: hlVisible } = useScrollRevealList(highlights.length, 100);

  return (
    <section id="about" style={{ padding: '56px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: 28, ...reveal(headerVisible) }}>
          <span className="section-label" style={{ color: '#a78bfa' }}>About Me</span>
          <h2 className="font-outfit text-h" style={{ fontWeight: 800, fontSize: 'clamp(1.75rem,4vw,2.4rem)', marginBottom: 6 }}>
            Why You Should <span className="gradient-text">Hire Me</span>
          </h2>
        </div>

        {/* Two column: Bio + Quick Info */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 28 }} className="about-grid">

          {/* Bio */}
          <div ref={bioRef} style={{ ...reveal(bioVisible) }}>
            <h3 className="font-outfit text-h" style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 10 }}>About Akash</h3>
            <p className="text-s" style={{ fontSize: '0.92rem', lineHeight: 1.85, marginBottom: 10 }}>
              I'm a <strong style={{ color: '#c4b5fd' }}>Full Stack Developer</strong> with close to{' '}
              <strong style={{ color: '#22d3ee' }}>5 years of professional experience</strong> building scalable mobile
              and web CRM applications in a full product environment.
            </p>
            <p className="text-m" style={{ fontSize: '0.92rem', lineHeight: 1.85, marginBottom: 10 }}>
              I own critical mobile modules deployed on the <strong style={{ color: 'var(--t2)' }}>App Store and Play Store</strong>, specialize
              in <strong style={{ color: 'var(--t2)' }}>performance optimization</strong>, API design, and work across the full
              product lifecycle — from design to deployment.
            </p>
            <p className="text-m" style={{ fontSize: '0.92rem', lineHeight: 1.85 }}>
              Looking for a <strong style={{ color: '#c4b5fd' }}>full-time role</strong> — remote, on-site, or hybrid.
              Proficient in <strong style={{ color: '#c4b5fd' }}>React Native, TypeScript, Node.js, Redux</strong> and REST APIs.
            </p>
          </div>

          {/* Quick Info */}
          <div>
            <h3 className="font-outfit text-h" style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 10 }}>Quick Info</h3>
            <div ref={infoRef} style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {quickInfo.map((item, i) => (
                <div key={item.label} className="glass-card" style={{
                  padding: '9px 14px', display: 'flex', alignItems: 'center', gap: 10,
                  ...reveal(infoVisible[i], i * 60),
                }}>
                  <div style={{
                    width: 30, height: 30, flexShrink: 0, borderRadius: 8,
                    background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem',
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div className="text-m" style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>{item.label}</div>
                    {item.href
                      ? <a href={item.href} target="_blank" rel="noreferrer" style={{ color: '#c4b5fd', fontSize: '0.8rem', marginTop: 1, display: 'block', textDecoration: 'none', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                        onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                        onMouseLeave={e => e.target.style.textDecoration = 'none'}>
                        {item.value}
                      </a>
                      : <div className="text-b" style={{ fontSize: '0.8rem', marginTop: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights row */}
        <div ref={highlightsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }} className="highlights-grid">
          {highlights.map((h, i) => (
            <div key={h.label} className="glass-card" style={{
              padding: '16px 12px', textAlign: 'center',
              ...reveal(hlVisible[i], i * 80),
            }}>
              <div className="font-outfit" style={{
                fontWeight: 800, fontSize: h.value.length > 4 ? '1.1rem' : '1.6rem',
                lineHeight: 1.1, marginBottom: 5, color: h.color,
              }}>{h.value}</div>
              <div className="text-h" style={{ fontSize: '0.75rem', fontWeight: 600, lineHeight: 1.3 }}>{h.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid      { grid-template-columns: 1fr !important; gap: 24px !important; }
          .highlights-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
