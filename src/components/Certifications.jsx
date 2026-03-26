import { useScrollReveal, useScrollRevealList } from '../hooks/useScrollReveal';

const certs = [
  {
    emoji:'🧩', issuer:'freeCodeCamp', date:'Sep 2021',
    accent:'#a78bfa', accentBg:'rgba(124,58,237,.1)', accentBorder:'rgba(124,58,237,.35)',
    title:'JavaScript Algorithms and Data Structures',
    description:'In-depth coverage of core JavaScript algorithms, complex data structures, and ES6+ modern features.',
    credentialId: null,
  },
  {
    emoji:'⚡', issuer:'HackerRank', date:'Mar 2022',
    accent:'#22d3ee', accentBg:'rgba(6,182,212,.1)', accentBorder:'rgba(6,182,212,.35)',
    title:'JavaScript (Basic) Implementation',
    description:'Verified skill in JavaScript fundamentals — functions, closures, scoping, and modern array methods.',
    credentialId:'B96EF3433092',
  },
  {
    emoji:'🎨', issuer:'Coursera', date:'May 2022',
    accent:'#a78bfa', accentBg:'rgba(124,58,237,.1)', accentBorder:'rgba(124,58,237,.35)',
    title:'Front-End Web UI Frameworks: Bootstrap 4',
    description:'Advanced responsive design techniques with focus on grid systems, custom components and SaaS interfaces.',
    credentialId:'QGK4LVBL47ZU',
  },
];

const reveal = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.96)',
  transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
});

export default function Certifications() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();
  const { ref: gridRef, visibleItems } = useScrollRevealList(certs.length, 120);

  return (
    <section id="certifications" style={{ padding: '100px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: 56, ...reveal(headerVisible) }}>
          <span className="section-label" style={{ color: '#c4b5fd' }}>Achievements</span>
          <h2 className="font-outfit text-h" style={{ fontWeight: 800, fontSize: 'clamp(1.75rem,4vw,2.4rem)', marginBottom: 12 }}>
            Certifications &amp; <span className="gradient-text">Credentials</span>
          </h2>
          <p style={{ color: 'var(--t5)', fontSize: '0.95rem' }}>Verified technical proficiency and industry-standard credentials</p>
        </div>

        {/* Grid */}
        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }} className="cert-grid">
          {certs.map((c, i) => (
            <div key={c.title} className="glass-card" style={{
               padding: 28, textAlign: 'center', position: 'relative', overflow: 'hidden',
               ...reveal(visibleItems[i], i * 100),
               height: '100%',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'space-between'
            }}>
              {/* Background ambient glow */}
              <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: 220, height: 220, borderRadius: '50%', background: `radial-gradient(circle, ${c.accent}12 0%, transparent 70%)`, pointerEvents: 'none' }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Icon Circle */}
                <div style={{
                  width: 58, height: 58, borderRadius: '50%', background: c.accentBg,
                  border: `2px solid ${c.accentBorder}`, display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem',
                  margin: '0 auto 18px', boxShadow: `0 8px 18px ${c.accent}18`
                }}>
                  {c.emoji}
                </div>

                {/* Issuer & Date Badges */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <span style={{
                    background: c.accentBg, border: `1px solid ${c.accentBorder}`,
                    color: c.accent, padding: '4px 14px', borderRadius: 100,
                    fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px'
                  }}>{c.issuer}</span>
                  <span style={{ color: 'var(--t5)', fontSize: '0.78rem', fontWeight: 500 }}>{c.date}</span>
                </div>

                {/* Title and Description */}
                <h3 className="font-outfit text-h" style={{ fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.4, marginBottom: 12 }}>{c.title}</h3>
                <p style={{ color: 'var(--t5)', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: 20 }}>{c.description}</p>
              </div>

              {/* ID and Verification Footnote */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                {c.credentialId && (
                  <div style={{ color: 'var(--t6)', fontSize: '0.72rem', marginBottom: 16, borderTop: '1px solid var(--card-border)', paddingTop: 16 }}>
                    Credential ID: <span style={{ fontFamily: 'monospace', color: 'var(--t3)', fontWeight: 600 }}>{c.credentialId}</span>
                  </div>
                )}
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, color: '#4ade80', fontSize: '0.75rem', fontWeight: 700 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Verified Skill Badge</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .cert-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; } }
        @media (max-width: 768px) { .cert-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
