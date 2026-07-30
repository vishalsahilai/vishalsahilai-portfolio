import Image from 'next/image';

export default function About() {
  const info = [
    {label:'Location', value:'Karachi, Pakistan'},
    {label:'Focus', value:'AI Automation'},
  ];

  return (
    <section id="about" style={{maxWidth:1100,margin:'0 auto',padding:'96px 24px'}}>
      <p style={{fontSize:13,color:'var(--neon)',letterSpacing:3,marginBottom:8,fontWeight:500}}>// about me</p>
      <h2 style={{fontFamily:'Orbitron,sans-serif',fontWeight:900,fontSize:'clamp(24px,4vw,40px)',marginBottom:56,color:'var(--text)'}}>
        FROM CURIOSITY TO <span className="neon-text">SYSTEMS</span>
      </h2>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center'}} className="about-grid">

        {/* LEFT — Photo */}
        <div style={{display:'flex',justifyContent:'center'}}>
          <div style={{position:'relative',width:360,height:400}}>
            <div style={{position:'absolute',inset:-2,borderRadius:20,background:'linear-gradient(135deg,var(--neon),transparent)',opacity:0.25,zIndex:0}}/>
            <div style={{position:'relative',zIndex:1,borderRadius:20,overflow:'hidden',width:'100%',height:'100%',border:'1px solid var(--border)'}}>
              <Image src="/Vishal.png" alt="Vishal Sahil" fill style={{objectFit:'cover',objectPosition:'top'}} />
            </div>
            {/* Cert tags */}
            <div style={{position:'absolute',bottom:20,left:16,display:'flex',gap:8,zIndex:2,flexWrap:'wrap'}}>
              {['n8n Expert','OpenAI','LangChain Dev'].map(t=>(
                <span key={t} className="tag" style={{backdropFilter:'blur(8px)',background:'rgba(10,10,10,0.8)'}}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Text */}
        <div>
          <p style={{color:'var(--subtext)',lineHeight:1.9,marginBottom:16,fontSize:15}}>
            I watched my parents lose hours every day to work that never had to be manual —{' '}
            <strong style={{color:'var(--text)'}}>and I made sure that stops with me.</strong>
          </p>
          <p style={{color:'var(--subtext)',lineHeight:1.9,marginBottom:16,fontSize:15}}>
            I came from a web development background, which gave me the technical foundation to actually build what I was imagining. One system at a time,{' '}
            <strong style={{color:'var(--neon)'}}>I started turning repetitive, draining work into automated workflows that just run.</strong>
          </p>
          <p style={{color:'var(--subtext)',lineHeight:1.9,marginBottom:32,fontSize:15}}>
            Most founders and SMBs aren't struggling because they lack effort —{' '}
            <strong style={{color:'var(--text)'}}>they're struggling because their time is stuck in processes that shouldn't need them anymore.</strong>{' '}
            That's the problem I solve.
          </p>

          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginBottom:28}}>
            {info.map(i=>(
              <div key={i.label} className="card" style={{padding:'14px 16px'}}>
                <p style={{fontSize:11,color:'var(--neon)',marginBottom:4,fontWeight:600,letterSpacing:1}}>{i.label.toUpperCase()}</p>
                <p style={{fontSize:13,color:'var(--text)',fontWeight:500}}>{i.value}</p>
              </div>
            ))}
          </div>

          <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
            <a href="https://linkedin.com/in/vishal-sahil-ai" target="_blank" rel="noopener noreferrer"
              className="btn-outline" style={{padding:'10px 20px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',display:'inline-flex',alignItems:'center',gap:6}}>
              LinkedIn Profile
            </a>
            <a href="/vishal_sahil_resume_.pdf" download
              className="btn-solid" style={{padding:'10px 20px',borderRadius:8,fontSize:13,border:'none',cursor:'pointer',textDecoration:'none',display:'inline-flex',alignItems:'center',gap:6}}>
              ↓ Download CV
            </a>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}