import { SiN8N, SiOpenai, SiFastapi, SiPython, SiZapier, SiMake } from 'react-icons/si';
import { MdEngineering, MdSmartToy, MdMemory, MdHub, MdChat } from 'react-icons/md';
import { BsBraces } from 'react-icons/bs';
import { SiIntegrately } from 'react-icons/si';

const skillGroups = [
  {
    icon: '🤖',
    title: 'AI & Automation',
    skills: [
      { name: 'n8n Workflow Automation', level: 95 },
      { name: 'OpenAI API & Prompt Engineering', level: 92 },
      { name: 'LangChain & RAG Systems', level: 85 },
      { name: 'AI Agents & Multi-Agent Systems', level: 88 },
      { name: 'Make (Integromat)', level: 90 },
    ],
  },
  {
    icon: '⚙️',
    title: 'Development',
    skills: [
      { name: 'Python & FastAPI', level: 82 },
      { name: 'API Integration & Webhooks', level: 90 },
      { name: 'Conversational AI & Memory', level: 85 },
      { name: 'RAG Architecture', level: 80 },
      { name: 'CI/CD & Regression Testing', level: 75 },
    ],
  },
];

const tools = [
  { icon: <SiN8N size={16} color='#ef6130'/>, name: 'n8n' },
  { icon: <SiOpenai size={16} color='#ffffff'/>, name: 'OpenAI' },
  { icon: <BsBraces size={16} color='#39FF14'/>, name: 'LangChain' },
  { icon: <SiFastapi size={16} color='#009688'/>, name: 'FastAPI' },
  { icon: <SiPython size={16} color='#3776ab'/>, name: 'Python' },
  { icon: <SiZapier size={16} color='#ff4a00'/>, name: 'Zapier' },
  { icon: <SiMake size={16} color='#6d00cc'/>, name: 'Make' },
  { icon: <MdEngineering size={16} color='#39FF14'/>, name: 'Prompt Eng' },
  { icon: <MdSmartToy size={16} color='#39FF14'/>, name: 'AI Agents' },
  { icon: <MdMemory size={16} color='#39FF14'/>, name: 'LLMs' },
  { icon: <MdHub size={16} color='#4444ff'/>, name: 'RAG' },
  { icon: <MdChat size={16} color='#39FF14'/>, name: 'Chatbots' },
];

export default function Skills() {
  return (
    <section id="skills" style={{ maxWidth: 1100, margin: '0 auto', padding: '96px 24px' }}>
      <p style={{ fontSize: 13, color: 'var(--neon)', letterSpacing: 3, marginBottom: 8, fontWeight: 500 }}>// expertise</p>
      <h2 style={{ fontFamily: 'Orbitron,sans-serif', fontWeight: 900, fontSize: 'clamp(24px,4vw,40px)', marginBottom: 56, color: 'var(--text)' }}>
        SKILLS & <span className="neon-text">TECH STACK</span>
      </h2>

      <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 40 }}>
        {skillGroups.map(group => (
          <div key={group.title} className="card" style={{ padding: 28 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--neon)', marginBottom: 24, letterSpacing: 1 }}>
              {group.icon} {group.title.toUpperCase()}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {group.skills.map(skill => (
                <div key={skill.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 13, color: 'var(--text)' }}>{skill.name}</span>
                    <span style={{ fontSize: 13, color: 'var(--neon)', fontWeight: 600 }}>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tool badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {tools.map(t => (
          <span key={t.name} className="tag"
            style={{ fontSize: 13, padding: '6px 14px', display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'default' }}>
            {t.icon}
            {t.name}
          </span>
        ))}
      </div>
    </section>
  );
}