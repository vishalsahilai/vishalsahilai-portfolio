'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const roles = ['AI Automation Specialist','AI Agents Builder','n8n Workflow Engineer','Prompt Engineer'];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [typing, setTyping] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef(null);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Typing effect
  useEffect(() => {
    const word = roles[idx];
    let i = typing ? 0 : word.length;
    const t = setInterval(() => {
      if (typing) { setText(word.slice(0,++i)); if(i===word.length){clearInterval(t);setTimeout(()=>setTyping(false),1600);} }
      else { setText(word.slice(0,--i)); if(i===0){clearInterval(t);setIdx(p=>(p+1)%roles.length);setTyping(true);} }
    }, typing?65:40);
    return ()=>clearInterval(t);
  }, [idx,typing]);

  // Particle network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const COUNT = 70;
    const particles = Array.from({length:COUNT}, () => ({
      x: Math.random()*W, y: Math.random()*H,
      vx: (Math.random()-0.5)*0.5, vy: (Math.random()-0.5)*0.5,
      r: Math.random()*2+1,
    }));

    const draw = () => {
      ctx.clearRect(0,0,W,H);
      const NEON = document.documentElement.classList.contains('light') ? '#14a005' : '#39FF14';
      for (let i=0;i<COUNT;i++) {
        for (let j=i+1;j<COUNT;j++) {
          const dx=particles[i].x-particles[j].x;
          const dy=particles[i].y-particles[j].y;
          const dist=Math.sqrt(dx*dx+dy*dy);
          if (dist<140) {
            ctx.beginPath();
            ctx.strokeStyle=NEON;
            ctx.globalAlpha=(1-dist/140)*0.15;
            ctx.lineWidth=0.8;
            ctx.moveTo(particles[i].x,particles[i].y);
            ctx.lineTo(particles[j].x,particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha=1;
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=NEON;
        ctx.globalAlpha=0.5;
        ctx.fill();
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>W) p.vx*=-1;
        if(p.y<0||p.y>H) p.vy*=-1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
  }, []);

  const stats = [
    {val:'20+',label:'Hrs Saved/Week'},
    {val:'15+',label:'AI Agents Built'},
    {val:'2+',label:'Years Experience'},
  ];

  // Photo component reused in both layouts
  const PhotoSection = () => (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative'}}>
      <div style={{position:'relative',width: isMobile ? 260 : 340,height: isMobile ? 260 : 340}}>
        <div style={{position:'absolute',inset:-6,borderRadius:'50%',
          background:'conic-gradient(var(--neon), transparent, var(--neon))',
          opacity:0.5,zIndex:0,animation:'spin 6s linear infinite'}}/>
        <div style={{position:'relative',zIndex:1,borderRadius:'50%',overflow:'hidden',
          width:'100%',height:'100%',
          border:'3px solid var(--neon)',
          boxShadow:'0 0 40px rgba(57,255,20,0.6), 0 0 80px rgba(57,255,20,0.3)'}}>
          <Image src="/Vishal.png" alt="Vishal Sahil" fill style={{objectFit:'cover',objectPosition:'top center'}} priority/>
        </div>
        {!isMobile && (
          <div style={{position:'absolute',top:16,right:-50,background:'var(--bg2)',
            border:'1px solid var(--border)',borderRadius:12,padding:'10px 16px',
            display:'flex',alignItems:'center',gap:10,zIndex:2,
            boxShadow:'0 8px 32px rgba(0,0,0,0.4)',minWidth:160}}>
            <span style={{fontSize:20}}>🏆</span>
            <div>
              <p style={{fontSize:12,fontWeight:700,color:'var(--text)',margin:0}}>Top Rated</p>
              <p style={{fontSize:11,color:'var(--subtext)',margin:0}}>AI Automation Dev</p>
            </div>
          </div>
        )}
        <div style={{position:'absolute',bottom: isMobile ? -36 : -50,left:'50%',transform:'translateX(-50%)',
          display:'flex',gap:8,zIndex:2,whiteSpace:'nowrap'}}>
          {['n8n Expert','OpenAI','LangChain'].map(t=>(
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="hero" style={{minHeight:'100vh',display:'flex',alignItems:'center',position:'relative',overflow:'hidden',padding:'80px 24px 40px'}}>

      {/* Particle canvas */}
      <canvas ref={canvasRef} style={{position:'fixed',inset:0,zIndex:0,pointerEvents:'none'}}/>

      {/* MOBILE LAYOUT */}
      {isMobile ? (
        <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',gap:0,position:'relative',zIndex:1,textAlign:'center'}}>

          {/* 1. Available badge */}
          <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'var(--bg2)',border:'1px solid var(--border)',
            borderRadius:999,padding:'6px 16px',marginBottom:16,fontSize:13,color:'var(--subtext)'}}>
            <span style={{width:8,height:8,borderRadius:'50%',background:'var(--neon)',boxShadow:'0 0 8px var(--neon)',display:'inline-block'}}/>
            Available for projects
          </div>

          {/* 2. Heading */}
          <h1 style={{fontFamily:'Orbitron,sans-serif',fontWeight:900,fontSize:'clamp(26px,7vw,42px)',lineHeight:1.2,marginBottom:12,letterSpacing:1}}>
            Hi, I'm <span className="neon-glow">Vishal Sahil</span>
          </h1>

          {/* 3. Typing animation */}
          <p style={{fontSize:'clamp(13px,4vw,16px)',color:'var(--subtext)',marginBottom:32,minHeight:24}}>
            <span className="neon-text">› </span>{text}<span className="neon-text" style={{animation:'blink 1s step-end infinite'}}>_</span>
          </p>

          {/* 4. Circle Photo */}
          <div style={{marginBottom:60}}>
            <PhotoSection />
          </div>

          {/* 5. Description */}
          <p style={{fontSize:14,color:'var(--subtext)',marginBottom:28,lineHeight:1.8,maxWidth:340,padding:'0 8px'}}>
            I'm a student & freelancer building AI automation systems for founders and SMBs who want measurable results. The systems I build consistently free up{' '}
            <strong style={{color:'var(--neon)'}}>20+ hours every week.</strong>
          </p>

          {/* 6. Stats */}
          <div style={{display:'flex',justifyContent:'center',gap:'16px 24px',marginBottom:28,flexWrap:'wrap'}}>
            {stats.map(s=>(
              <div key={s.label} style={{textAlign:'center'}}>
                <div style={{fontFamily:'Orbitron,sans-serif',fontSize:22,fontWeight:900,color:'var(--neon)'}}>{s.val}</div>
                <div style={{fontSize:10,color:'var(--subtext)',marginTop:2,letterSpacing:1}}>{s.label.toUpperCase()}</div>
              </div>
            ))}
          </div>

          {/* 7. Buttons */}
          <div style={{display:'flex',flexDirection:'column',gap:12,marginBottom:24,width:'100%',maxWidth:320}}>
            <button onClick={()=>document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}
              className="btn-solid" style={{padding:'12px 28px',borderRadius:8,fontSize:14,border:'none',cursor:'pointer',width:'100%'}}>
              View My Work
            </button>
            <button onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
              className="btn-outline" style={{padding:'12px 28px',borderRadius:8,fontSize:14,cursor:'pointer',background:'transparent',color:'var(--neon)',border:'1.5px solid var(--neon)',width:'100%'}}>
              DM 'AUDIT' for Free Review
            </button>
          </div>

          {/* 8. Tool pills */}
          <div style={{display:'flex',flexWrap:'wrap',gap:8,justifyContent:'center'}}>
            {['n8n','Make','OpenAI','LangChain','FastAPI','Python'].map(t=>(
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

      ) : (

        /* DESKTOP LAYOUT */
        <div style={{maxWidth:1100,margin:'0 auto',width:'100%',display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center',position:'relative',zIndex:1}}>

          {/* LEFT — Text */}
          <div style={{paddingTop:20}}>
            <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'var(--bg2)',border:'1px solid var(--border)',
              borderRadius:999,padding:'6px 16px',marginBottom:24,fontSize:13,color:'var(--subtext)'}}>
              <span style={{width:8,height:8,borderRadius:'50%',background:'var(--neon)',boxShadow:'0 0 8px var(--neon)',display:'inline-block'}}/>
              Available for projects
            </div>

            <h1 style={{fontFamily:'Orbitron,sans-serif',fontWeight:900,fontSize:'clamp(28px,4vw,52px)',lineHeight:1.2,marginBottom:16,letterSpacing:1}}>
              Hi, I'm <span className="neon-glow">Vishal Sahil</span>
            </h1>

            <p style={{fontSize:'clamp(14px,2vw,18px)',color:'var(--subtext)',marginBottom:20,minHeight:28}}>
              <span className="neon-text">› </span>{text}<span className="neon-text" style={{animation:'blink 1s step-end infinite'}}>_</span>
            </p>

            <p style={{fontSize:15,color:'var(--subtext)',marginBottom:32,lineHeight:1.8,maxWidth:460}}>
              I'm a student & freelancer building AI automation systems for founders and SMBs who want measurable results. The systems I build consistently free up{' '}
              <strong style={{color:'var(--neon)'}}>20+ hours every week.</strong>
            </p>

            <div style={{display:'flex',flexWrap:'wrap',gap:'12px 28px',marginBottom:32}}>
              {stats.map(s=>(
                <div key={s.label}>
                  <div style={{fontFamily:'Orbitron,sans-serif',fontSize:24,fontWeight:900,color:'var(--neon)'}}>{s.val}</div>
                  <div style={{fontSize:11,color:'var(--subtext)',marginTop:2,letterSpacing:1}}>{s.label.toUpperCase()}</div>
                </div>
              ))}
            </div>

            <div style={{display:'flex',flexWrap:'wrap',gap:12,marginBottom:28}}>
              <button onClick={()=>document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}
                className="btn-solid" style={{padding:'12px 28px',borderRadius:8,fontSize:14,border:'none',cursor:'pointer'}}>
                View My Work
              </button>
              <button onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
                className="btn-outline" style={{padding:'12px 28px',borderRadius:8,fontSize:14,cursor:'pointer',background:'transparent',color:'var(--neon)',border:'1.5px solid var(--neon)'}}>
                DM 'AUDIT' for Free Review
              </button>
            </div>

            <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
              {['n8n','Make','OpenAI','LangChain','FastAPI','Python'].map(t=>(
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* RIGHT — Photo */}
          <PhotoSection />
        </div>
      )}
    </section>
  );
}