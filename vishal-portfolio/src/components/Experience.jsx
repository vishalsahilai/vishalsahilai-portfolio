const experiences = [
  {
    role: 'AI Automation Engineer (n8n)',
    company: 'Freelance — Independent Consultant',
    period: 'Oct 2025 – Present',
    location: 'Karachi, Pakistan',
    points: [
      'Engineered end-to-end n8n automation workflows integrating 10+ third-party APIs, reducing client onboarding time by 40%.',
      'Optimized business operations for SMB clients by identifying and automating manual bottlenecks across sales, support, and operations.',
      'Collaborated with founders to scope, deploy, and iterate AI-driven solutions within 2-week project cycles.',
      'Designed reusable workflow templates enabling clients to self-manage and scale systems post-delivery.',
    ],
  },
  {
    role: 'Prompt Engineer (OpenAI API)',
    company: 'Freelance — Independent Consultant',
    period: 'Dec 2025 – Present',
    location: 'Karachi, Pakistan',
    points: [
      'Architected advanced prompt frameworks and tool-integrated LLM agents improving task precision by 35%+.',
      'Built production-grade conversational flows with memory management, guardrails, and fallback handling.',
      'Designed regression testing pipelines evaluating prompt quality across Claude, GPT-4o, and Gemini APIs.',
      'Developed custom evaluation frameworks for data-driven prompt strategy and model selection.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6">
      <p className="font-mono text-neon text-sm tracking-widest mb-2">// career</p>
      <h2 className="font-display text-3xl sm:text-4xl font-black text-white mb-12">
        WORK <span className="neon-text">EXPERIENCE</span>
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-neon/20" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-12 md:pl-16">
              {/* Dot */}
              <div className="absolute left-2.5 md:left-4 top-2 w-3 h-3 rounded-full bg-neon shadow-[0_0_10px_#39FF14]" />

              <div className="card p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display text-sm font-bold text-white tracking-wide">{exp.role}</h3>
                    <p className="font-mono text-xs text-neon mt-1">{exp.company}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-mono text-xs text-gray-400">{exp.period}</p>
                    <p className="font-mono text-xs text-gray-600">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="font-mono text-xs text-gray-400 flex gap-2">
                      <span className="text-neon shrink-0 mt-0.5">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}