import { useScrollReveal, useScrollRevealList } from '../hooks/useScrollReveal';

const experiences = [
  {
    role: 'Application Developer',
    companyFull: 'ClarityCX Solutions & Services Pvt. Ltd. (Claritysoft LLC)',
    period: 'Aug 2022 – Present', duration: '~3 yrs', type: 'Full Time',
    accent: '#a78bfa', accentBg: 'rgba(124,58,237,.1)', accentBorder: 'rgba(124,58,237,.35)',
    dot: '#7c3aed', icon: '🚀',
    highlights: [
      { category: 'Mobile CRM', items: [
        'Led development of key modules: notifications, mail, calendar with agenda view & autocomplete dropdowns',
        'Optimized app load time by 30% through list virtualization and efficient asset management',
        'Implemented core mobile features using react-native-maps, geocoding & document picker',
        'Deployed & maintained cross-platform apps on App Store & Play Store with high crash-free rates',
        'Leveraged AI-assisted coding (ChatGPT, GitHub Copilot) to accelerate feature delivery by 40%',
      ]},
      { category: 'Web CRM & Backend', items: [
        'Migrated critical mail infrastructure from HTTP to HTTPS ensuring total security compliance',
        'Architected queue-based attachment handling, significantly boosting mail processing speeds',
        'Automated enterprise-wide scheduled tasks using Node.js cron jobs',
      ]},
    ],
    tags: ['React Native','React.js','Node.js','TypeScript','REST APIs','Expo','Redux','App Store','Play Store'],
  },
  {
    role: 'Junior Software Developer',
    companyFull: 'Oaksol Technologies Pvt. Ltd.',
    period: 'Nov 2021 – May 2022', duration: '7 mos', type: 'Full Time',
    accent: '#22d3ee', accentBg: 'rgba(6,182,212,.1)', accentBorder: 'rgba(6,182,212,.35)',
    dot: '#06b6d4', icon: '💻',
    highlights: [
      { category: null, items: [
        'Developed and maintained React.js components within a robust microservices architecture',
        'Implemented Redux for enterprise-level state management and e-commerce data flow',
        'Integrated secure payment gateways and large-scale product catalogs via RESTful APIs',
        'Contributed to high-velocity Agile sprints with a focus on clean, reusable code',
      ]},
    ],
    tags: ['React.js','Redux','REST APIs','Microservices','Agile','Tailwind CSS'],
  },
  {
    role: 'Junior Software Developer',
    companyFull: 'Sikharthy Infotech Pvt. Ltd.',
    period: 'Aug 2021 – Dec 2021', duration: '5 mos', type: 'Full Time',
    accent: '#a78bfa', accentBg: 'rgba(124,58,237,.1)', accentBorder: 'rgba(124,58,237,.35)',
    dot: '#7c3aed', icon: '🖥️',
    highlights: [
      { category: null, items: [
        'Built modern web application frontends using React and JavaScript best practices',
        'Collaborated with cross-functional teams to resolve complex UI/UX bugs and improve performance',
      ]},
    ],
    tags: ['JavaScript','React.js','HTML5','CSS','Git'],
  },
];

const education = [
  { short:'MCA', degree:'Master of Computer Applications', field:'Information Technology', institute:'Meghnad Saha Institute of Technology', period:'2021 – 2023', accent:'#a78bfa', accentBg:'rgba(124,58,237,.1)', accentBorder:'rgba(124,58,237,.35)' },
  { short:'BCA', degree:'Bachelor of Computer Applications', field:'Information Technology', institute:'Meghnad Saha Institute of Technology', period:'2017 – 2020', accent:'#22d3ee', accentBg:'rgba(6,182,212,.1)', accentBorder:'rgba(6,182,212,.35)' },
];

const reveal = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.96)',
  transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
});

function ExperienceCard({ exp, visible, index }) {
  return (
    <div style={{ position: 'relative', ...reveal(visible, index * 100) }}>
      {/* Dot */}
      <div style={{
        position: 'absolute', left: -33, top: 20,
        width: 12, height: 12, borderRadius: '50%',
        background: exp.dot, border: '3px solid var(--bg)',
        boxShadow: `0 0 12px ${exp.dot}88`, zIndex: 2,
      }} />      <div className="glass-card" style={{ padding: 22, overflow: 'hidden' }}>
        {/* Ambient Glow */}
        <div style={{
          position: 'absolute', top: -30, right: -30, width: 140, height: 140,
          background: `radial-gradient(circle, ${exp.accent}12 0%, transparent 70%)`,
          pointerEvents: 'none'
        }} />

        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 18, position: 'relative', zIndex: 1 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
              <span style={{ fontSize: '1.4rem' }}>{exp.icon}</span>
              <h3 className="font-outfit" style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--t1)' }}>{exp.role}</h3>
            </div>
            <div style={{ color: exp.accent, fontSize: '0.9rem', fontWeight: 600, paddingLeft: 2 }}>{exp.companyFull}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{
              display: 'inline-block', background: exp.accentBg, border: `1px solid ${exp.accentBorder}`,
              color: exp.accent, padding: '3px 12px', borderRadius: 100, fontSize: '0.7rem',
              fontWeight: 700, letterSpacing: '0.5px', marginBottom: 4
            }}>{exp.type}</span>
            <div style={{ color: 'var(--t5)', fontSize: '0.78rem' }}>{exp.period} · {exp.duration}</div>
          </div>
        </div>

        {/* Bullets */}
        {exp.highlights.map((h, hi) => (
          <div key={hi} style={{ marginBottom: 12, position: 'relative', zIndex: 1 }}>
            {h.category && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, color: 'var(--t5)', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>
                <span style={{ width: 18, height: 1, background: 'var(--card-border)', display: 'inline-block' }} />
                {h.category}
              </div>
            )}
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {h.items.map((item, ii) => (
                <li key={ii} style={{ display: 'flex', gap: 11, alignItems: 'flex-start', color: 'var(--t3)', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  <span style={{ color: exp.accent, fontSize: '0.5rem', marginTop: 8, flexShrink: 0 }}>▶</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, paddingTop: 16, marginTop: 6, borderTop: '1px solid var(--card-border)', position: 'relative', zIndex: 1 }}>
          {exp.tags.map(t => (
            <span key={t} style={{
              background: exp.accentBg, border: `1px solid ${exp.accentBorder}`,
              color: exp.accent, padding: '3px 11px', borderRadius: 100,
              fontSize: '0.73rem', fontWeight: 500
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();
  const { ref: listRef, visibleItems: expVisible } = useScrollRevealList(experiences.length, 180);
  const { ref: eduHeaderRef, visible: eduHeaderVisible } = useScrollReveal();
  const { ref: eduRef, visibleItems: eduVisible } = useScrollRevealList(education.length, 120);

  return (
    <section id="experience" style={{ padding: '100px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>

        {/* Header */}
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: 56, ...reveal(headerVisible) }}>
          <span className="section-label" style={{ color: '#c4b5fd' }}>Career Journey</span>
          <h2 className="font-outfit text-h" style={{ fontWeight: 800, fontSize: 'clamp(1.75rem,4vw,2.5rem)', marginBottom: 8 }}>
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p style={{ color: 'var(--t5)', fontSize: '0.95rem' }}>Helping companies build scalable products with clean code</p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          <div className="timeline-line" style={{ left: 28 }} />
          <div ref={listRef} style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingLeft: 56 }} className="timeline-cards">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} visible={expVisible[idx]} index={idx} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div style={{ marginTop: 88 }}>
          <div ref={eduHeaderRef} style={{ textAlign: 'center', marginBottom: 32, ...reveal(eduHeaderVisible) }}>
            <h3 className="font-outfit text-h" style={{ fontWeight: 700, fontSize: '1.4rem', marginBottom: 8 }}>🎓 Education</h3>
            <div style={{ width: 40, height: 3, background: 'linear-gradient(90deg, #7c3aed, #22d3ee)', margin: '0 auto', borderRadius: 2 }} />
          </div>
          
          <div ref={eduRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18 }} className="edu-grid">
            {education.map((edu, i) => (
              <div key={edu.short} className="glass-card" style={{
                 padding: 24, display: 'flex', gap: 20, alignItems: 'center',
                 ...reveal(eduVisible[i], i * 100)
              }}>
                <div style={{
                  width: 58, height: 58, borderRadius: 16, background: edu.accentBg,
                  border: `1px solid ${edu.accentBorder}`, display: 'flex',
                  alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  boxShadow: `0 8px 16px ${edu.accent}15`
                }}>
                  <span className="font-outfit" style={{ fontWeight: 800, fontSize: '1rem', color: edu.accent }}>{edu.short}</span>
                </div>
                <div>
                  <div style={{ color: 'var(--t2)', fontWeight: 700, fontSize: '0.95rem', marginBottom: 3 }}>{edu.degree}</div>
                  <div style={{ color: 'var(--t5)', fontSize: '0.82rem', marginBottom: 4, lineHeight: 1.4 }}>{edu.field} <br/> {edu.institute}</div>
                  <div style={{ color: edu.accent, fontSize: '0.8rem', fontWeight: 700 }}>{edu.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr !important; }
          .timeline-cards { padding-left: 36px !important; }
          .timeline-line { left: 16px !important; top: 16px !important; }
          .timeline-cards > div > div:first-child { left: -25px !important; }
        }
      `}</style>
    </section>
  );
}
