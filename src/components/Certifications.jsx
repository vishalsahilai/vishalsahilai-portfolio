const certs = [
  {icon:'⚡', type:'Certification', title:'AI Automation Fundamentals', org:'n8n Academy'},
  {icon:'🧠', type:'Certification', title:'OpenAI API Fundamentals', org:'OpenAI'},
  {icon:'🔗', type:'Course', title:'LangChain for LLM Application Dev', org:'DeepLearning.AI'},
];

const awards = [
  {
    icon:'🏆',
    title:'3rd Prize — Geekathon 2025',
    org:'MITE University Hackathon',
    desc:'Awarded 3rd prize among competing teams for building an AI-powered solution under time-constrained hackathon conditions, demonstrating rapid prototyping and problem-solving skills.',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" style={{maxWidth:1100,margin:'0 auto',padding:'96px 24px'}}>
      <p style={{fontSize:13,color:'var(--neon)',letterSpacing:3,marginBottom:8,fontWeight:500}}>// credentials</p>
      <h2 style={{fontFamily:'Orbitron,sans-serif',fontWeight:900,fontSize:'clamp(24px,4vw,40px)',marginBottom:56,color:'var(--text)'}}>
        CERTIFICATIONS & <span className="neon-text">ACHIEVEMENTS</span>
      </h2>

      {/* Certifications */}
      <p style={{fontSize:13,color:'var(--subtext)',letterSpacing:2,marginBottom:20,fontWeight:600}}>CERTIFICATIONS</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:20,marginBottom:56}}>
        {certs.map((c,i) => (
          <div key={i} className="card" style={{padding:24,display:'flex',flexDirection:'column',gap:12,transition:'transform 0.3s'}}
            onMouseEnter={e=>e.currentTarget.style.transform='translateY(-4px)'}
            onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}>
            <span style={{fontSize:28}}>{c.icon}</span>
            <span className="tag" style={{width:'fit-content'}}>{c.type}</span>
            <h3 style={{fontSize:14,fontWeight:700,color:'var(--text)',lineHeight:1.4}}>{c.title}</h3>
            <p style={{fontSize:12,color:'var(--subtext)'}}>{c.org}</p>
          </div>
        ))}
      </div>

      {/* Awards */}
      <p style={{fontSize:13,color:'var(--subtext)',letterSpacing:2,marginBottom:20,fontWeight:600}}>AWARDS</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:20}}>
        {awards.map((a,i) => (
          <div key={i} className="card" style={{padding:24,display:'flex',gap:20,alignItems:'flex-start'}}>
            <span style={{fontSize:36,flexShrink:0}}>{a.icon}</span>
            <div>
              <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:4}}>{a.title}</h3>
              <p style={{fontSize:12,color:'var(--neon)',marginBottom:8,fontWeight:600}}>{a.org}</p>
              <p style={{fontSize:13,color:'var(--subtext)',lineHeight:1.7}}>{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}