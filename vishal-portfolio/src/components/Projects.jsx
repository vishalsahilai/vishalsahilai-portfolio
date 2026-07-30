const projects = [
  {
    icon: '🎯',
    title: 'AI-Powered Lead Engagement System',
    tag: 'Production',
    desc: 'Fully automated lead nurturing pipeline integrating CRM webhooks, AI-generated personalized outreach, and follow-up scheduling — reducing manual sales effort by 60%.',
    stack: ['Python', 'LangChain', 'n8n', 'OpenAI API'],
    metric: '60% less manual sales effort',
  },
  {
    icon: '📱',
    title: 'Automated Content Pipeline',
    tag: 'Production',
    desc: 'Multi-platform content generation and publishing system that scaled social media output 5x while maintaining brand consistency through custom prompt templating.',
    stack: ['n8n', 'Make', 'OpenAI API', 'Social Media APIs'],
    metric: '5x social media output',
  },
  {
    icon: '💬',
    title: 'Centralized AI Customer Support Agent',
    tag: 'Production',
    desc: 'RAG-based AI chatbot replacing fragmented manual support workflows with knowledge base retrieval, escalation routing, and conversation memory.',
    stack: ['FastAPI', 'LangChain', 'OpenAI', 'Webhooks'],
    metric: 'Replaced full manual support flow',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6">
      <p className="font-mono text-neon text-sm tracking-widest mb-2">// portfolio</p>
      <h2 className="font-display text-3xl sm:text-4xl font-black text-white mb-12">
        FEATURED <span className="neon-text">PROJECTS</span>
      </h2>

      <div className="projects-grid grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="card p-6 flex flex-col gap-4 group">
            <div className="flex items-center justify-between">
              <span className="text-2xl">{p.icon}</span>
              <span className="font-mono text-xs px-2 py-1 rounded border border-neon/40 text-neon">{p.tag}</span>
            </div>
            <h3 className="font-display text-sm font-bold text-white leading-tight tracking-wide group-hover:text-neon transition-colors">
              {p.title}
            </h3>
            <p className="font-mono text-xs text-gray-400 leading-relaxed flex-1">{p.desc}</p>
            <div className="pt-2 border-t border-neon/10">
              <p className="font-mono text-xs text-neon mb-3">📈 {p.metric}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map(s => (
                  <span key={s} className="font-mono text-xs px-2 py-0.5 bg-neon/5 border border-neon/20 rounded text-gray-400">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub link */}
      <div style={{textAlign:'center',marginTop:40}}>
        <a href="https://github.com/vishalsahilai" target="_blank" rel="noopener noreferrer"
          className="btn-outline"
          style={{padding:'12px 32px',borderRadius:8,fontSize:14,fontWeight:600,textDecoration:'none',display:'inline-flex',alignItems:'center',gap:8}}>
          <span>⚙️</span> View All Projects on GitHub
        </a>
      </div>
    </section>
    

    
  );
}