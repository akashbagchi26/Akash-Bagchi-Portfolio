import { useTheme } from '../context/ThemeContext';
import { useScrollReveal, useScrollRevealList } from '../hooks/useScrollReveal';

const categories = [
  {
    title: 'Frontend & Mobile',
    emoji: '📱',
    accent: '#a78bfa',
    bg: 'rgba(124,58,237,0.1)',
    border: 'rgba(124,58,237,0.3)',
    skills: [
      { name: 'React Native', slug: 'react' },
      { name: 'React.js', slug: 'react' },
      { name: 'Next.js', slug: 'nextjs' },
      { name: 'TypeScript', slug: 'ts' },
      { name: 'JavaScript', slug: 'js' },
      { name: 'Redux', slug: 'redux' },
      { name: 'Expo', slug: 'expo' },
      { name: 'Tailwind CSS', slug: 'tailwind' },
    ],
  },
  {
    title: 'Backend & APIs',
    emoji: '⚙️',
    accent: '#22d3ee',
    bg: 'rgba(6,182,212,0.1)',
    border: 'rgba(6,182,212,0.3)',
    skills: [
      { name: 'Node.js', slug: 'nodejs' },
      { name: 'Express.js', slug: 'express' },
      { name: 'MongoDB', slug: 'mongodb' },
      { name: 'REST APIs', slug: null, emoji: '🔌' },
      { name: 'SQL', slug: null, emoji: '🗄️' },
      { name: 'Mongoose', slug: null, emoji: '🍃' },
      { name: 'Cron Jobs', slug: null, emoji: '⏱️' },
    ],
  },
  {
    title: 'Tools & Dev',
    emoji: '🛠️',
    accent: '#a78bfa',
    bg: 'rgba(124,58,237,0.1)',
    border: 'rgba(124,58,237,0.3)',
    skills: [
      { name: 'Git', slug: 'git' },
      { name: 'GitHub', slug: 'github' },
      { name: 'VS Code', slug: 'vscode' },
      { name: 'HTML5', slug: 'html' },
      { name: 'CSS3', slug: 'css' },
      { name: 'Microservices', slug: null, emoji: '🔄' },
      { name: 'AI Copilot', slug: null, emoji: '🤖' },
    ],
  },
];

const reveal = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(24px)',
  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
});

const chipReveal = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.92)',
  transition: `opacity 0.45s ease ${delay}ms, transform 0.45s ease ${delay}ms`,
});

function SkillChip({ name, slug, emoji, theme, visible, delay }) {
  const iconUrl = slug ? `https://skillicons.dev/icons?i=${slug}&theme=${theme}` : null;
  return (
    <div className="skill-chip" style={{ ...chipReveal(visible, delay) }}>
      {iconUrl
        ? <img src={iconUrl} alt={name} width={40} height={40} loading="lazy"
            onError={e => { e.target.style.display = 'none'; }} />
        : <span className="chip-emoji">{emoji}</span>
      }
      <span>{name}</span>
    </div>
  );
}

function CategoryBlock({ cat, theme, catVisible, index }) {
  const { ref, visibleItems } = useScrollRevealList(cat.skills.length, 60);

  return (
    <div style={{ ...reveal(catVisible, index * 80) }}>
      <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'center' }}>
        <span className="cat-label font-outfit" style={{ background: cat.bg, border: `1px solid ${cat.border}`, color: cat.accent }}>
          <span>{cat.emoji}</span>
          {cat.title}
        </span>
      </div>

      <div ref={ref} style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
        {cat.skills.map((skill, si) => (
          <SkillChip key={`${cat.title}-${skill.name}`} {...skill} theme={theme}
            visible={visibleItems[si]} delay={si * 55} />
        ))}
      </div>

      <div style={{ marginTop: 28, height: 1, background: 'var(--card-border)' }} />
    </div>
  );
}

export default function Skills() {
  const { theme } = useTheme();
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();
  const { ref: catsRef, visibleItems: catVisible } = useScrollRevealList(categories.length, 150);

  return (
    <section id="skills" style={{ padding: '80px 24px', background: 'var(--bg-alt)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: 36, ...reveal(headerVisible) }}>
          <span className="section-label" style={{ color: '#22d3ee' }}>Technical Skills</span>
          <h2 className="font-outfit text-h" style={{ fontWeight: 800, fontSize: 'clamp(1.75rem,4vw,2.4rem)', marginBottom: 8 }}>
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-m" style={{ fontSize: '0.9rem' }}>
            Tools and technologies I use to build production-grade applications
          </p>
        </div>

        {/* Categories */}
        <div ref={catsRef} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {categories.map((cat, i) => (
            <CategoryBlock key={cat.title} cat={cat} theme={theme}
              catVisible={catVisible[i]} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <div style={{
          marginTop: 48, padding: '18px 24px', borderRadius: 14,
          border: '1px dashed rgba(124,58,237,0.25)',
          background: 'rgba(124,58,237,0.04)', textAlign: 'center',
        }}>
          <p className="text-g" style={{ fontSize: '0.85rem' }}>
            🚀 Also experienced with{' '}
            <strong style={{ color: '#c4b5fd' }}>ChatGPT</strong> &amp;{' '}
            <strong style={{ color: '#c4b5fd' }}>GitHub Copilot</strong> for AI-assisted development
          </p>
        </div>
      </div>
    </section>
  );
}
