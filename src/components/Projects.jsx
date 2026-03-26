import { useState } from 'react';
import { useScrollReveal, useScrollRevealList } from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'CRM Mobile App',
    emoji: '📱',
    type: 'React Native · iOS & Android',
    accent: '#a78bfa',
    accentBg: 'rgba(124,58,237,.1)',
    accentBorder: 'rgba(124,58,237,.35)',
    description:
      'Enterprise-grade CRM mobile application with 10,000+ active users across iOS and Android. Features a rich contact management system, activity logger, email client, calendar with agenda view, and real-time push notifications.',
    tech: ['React Native', 'TypeScript', 'Redux', 'Expo', 'REST APIs', 'Node.js'],
    achievements: [
      'Reduced app load time by 30% via lazy loading & list virtualization',
      'Integrated react-native-maps with geocoding for location-based CRM features',
      'Shipped cross-platform builds to App Store & Play Store with 99.5% crash-free rate',
      'Led calendar module with full agenda view & smart autocomplete dropdowns',
    ],
    github: 'https://github.com/akash-bagchi',
  },
  {
    title: 'CRM Web Dashboard',
    emoji: '🖥️',
    type: 'React · Node.js · Full Stack',
    accent: '#22d3ee',
    accentBg: 'rgba(6,182,212,.1)',
    accentBorder: 'rgba(6,182,212,.35)',
    description:
      'Full-stack CRM web platform powering sales pipelines, contact management, mail campaigns, and analytics dashboards. Built to scale from SMBs to enterprise teams with role-based access and workflow automation.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Cron Jobs'],
    achievements: [
      'Improved mail delivery performance by implementing queue-based attachment handling',
      'Migrated mail templates from HTTP to HTTPS ensuring security compliance',
      'Automated scheduled tasks using Node.js cron jobs — saved 15+ manual hours/week',
      'Achieved sub-300ms API response times under heavy concurrent load',
    ],
    github: 'https://github.com/akash-bagchi',
  },
  {
    title: 'Expense Tracker App',
    emoji: '💰',
    type: 'React Native · Personal Finance',
    accent: '#a78bfa',
    accentBg: 'rgba(124,58,237,.1)',
    accentBorder: 'rgba(124,58,237,.35)',
    description:
      'A mobile-first personal finance app built with React Native featuring category-based expense tracking, monthly summaries, and intuitive data visualization. Designed for offline usage with local persistence.',
    tech: ['React Native', 'JavaScript', 'AsyncStorage', 'React Navigation'],
    achievements: [
      'Category-based expense breakdown with visual charts',
      'Monthly spending summary with trend analysis',
      'Fully offline — local persistence with AsyncStorage',
      'Intuitive swipe-to-delete & edit interactions',
    ],
    github: 'https://github.com/akash-bagchi',
  },
  {
    title: 'Speech-to-Text App',
    emoji: '🎙️',
    type: 'Web App · AI / Voice',
    accent: '#22d3ee',
    accentBg: 'rgba(6,182,212,.1)',
    accentBorder: 'rgba(6,182,212,.35)',
    description:
      'A real-time browser-based voice transcription app leveraging the Web Speech API. Instantly converts spoken words to text with confidence scoring, multi-language support, and one-click clipboard copy.',
    tech: ['JavaScript', 'Web Speech API', 'HTML5', 'CSS3'],
    achievements: [
      'Real-time voice-to-text transcription with confidence scores',
      'Multi-language support with dynamic language switching',
      'One-click clipboard copy & auto-save transcript history',
      'Cross-browser compatible with graceful fallback handling',
    ],
    github: 'https://github.com/akash-bagchi',
  },
];

const reveal = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(20px)',
  transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
});

function ProjectCard({ p, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...reveal(visible),
        position: 'relative',
        background: hovered ? p.accentBg : 'var(--card)',
        border: `1px solid ${hovered ? p.accentBorder : 'var(--card-border)'}`,
        borderRadius: 20,
        backdropFilter: 'blur(12px)',
        padding: 28,
        overflow: 'hidden',
        cursor: 'default',
        transition: 'all 0.35s ease',
        transform: visible ? (hovered ? 'translateY(-6px)' : 'translateY(0)') : 'translateY(20px)',
        boxShadow: hovered ? `0 20px 60px ${p.accent}28` : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: -60, right: -60, width: 200, height: 200,
        borderRadius: '50%',
        background: `radial-gradient(circle,${p.accent}18 0%,transparent 70%)`,
        pointerEvents: 'none',
        opacity: hovered ? 1 : 0.5,
        transition: 'opacity 0.35s ease',
      }} />

      {/* Top row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 18 }}>
        <div style={{
          width: 54, height: 54, borderRadius: 16,
          background: p.accentBg, border: `1px solid ${p.accentBorder}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.6rem', flexShrink: 0,
          boxShadow: hovered ? `0 8px 24px ${p.accent}30` : 'none',
          transition: 'box-shadow 0.3s ease',
        }}>
          {p.emoji}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3 className="font-outfit" style={{
            fontWeight: 700, fontSize: '1.12rem', color: 'var(--t1)',
            marginBottom: 5, lineHeight: 1.3,
          }}>{p.title}</h3>
          <span style={{
            background: p.accentBg, color: p.accent,
            border: `1px solid ${p.accentBorder}`,
            padding: '2px 10px', borderRadius: 6,
            fontSize: '0.68rem', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.5px',
          }}>{p.type}</span>
        </div>
      </div>

      {/* Description */}
      <p style={{ color: 'var(--t4)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: 16 }}>
        {p.description}
      </p>

      {/* Achievements */}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 20 }}>
        {p.achievements.map(a => (
          <li key={a} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', color: 'var(--t3)', fontSize: '0.86rem', lineHeight: 1.6 }}>
            <span style={{ color: p.accent, fontSize: '0.5em', marginTop: 7, flexShrink: 0 }}>▶</span>
            {a}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div style={{
        paddingTop: 16, borderTop: '1px solid var(--card-border)',
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
        alignItems: 'center', gap: 10,
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {p.tech.map(t => (
            <span key={t} style={{
              background: p.accentBg, border: `1px solid ${p.accentBorder}`,
              color: p.accent, padding: '3px 11px', borderRadius: 100,
              fontSize: '0.72rem', fontWeight: 500,
            }}>{t}</span>
          ))}
        </div>
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            color: 'var(--t4)', fontSize: '0.8rem', fontWeight: 600,
            textDecoration: 'none', whiteSpace: 'nowrap',
            padding: '5px 12px', borderRadius: 8,
            border: '1px solid var(--card-border)',
            background: 'transparent',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = p.accent; e.currentTarget.style.borderColor = p.accent; e.currentTarget.style.background = p.accentBg; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--t4)'; e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.background = 'transparent'; }}
        >
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();
  const { ref: gridRef, visibleItems } = useScrollRevealList(projects.length, 130);
  const { ref: ctaRef, visible: ctaVisible } = useScrollReveal();

  return (
    <section id="projects" style={{ padding: '80px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div ref={headerRef} style={{
          textAlign: 'center', marginBottom: 48,
          ...reveal(headerVisible),
        }}>
          <span className="section-label" style={{ color: '#22d3ee' }}>Featured Work</span>
          <h2 className="font-outfit text-h" style={{
            fontWeight: 800, fontSize: 'clamp(1.75rem,4vw,2.5rem)', marginBottom: 8,
          }}>
            Real-World <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: 'var(--t5)', fontSize: '0.95rem', maxWidth: 480, margin: '0 auto' }}>
            Production applications serving real users — from enterprise CRM to personal tools
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 22 }}
          className="proj-grid"
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} visible={visibleItems[i]} />
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} style={{
          textAlign: 'center', marginTop: 52,
          ...reveal(ctaVisible),
        }}>
          <p style={{ color: 'var(--t6)', fontSize: '0.9rem', marginBottom: 18 }}>
            More projects and contributions on GitHub 🚀
          </p>
          <a
            href="https://github.com/akash-bagchi"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .proj-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
