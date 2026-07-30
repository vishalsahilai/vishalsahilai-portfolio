'use client';
import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const links = ['About','Skills','Experience','Projects','Certifications','Contact'];

export default function Navbar({ light, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0, zIndex:50,
      background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(57,255,20,0.1)' : 'none',
      transition: 'all 0.3s',
    }}>
      <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px', height:64, display:'flex', alignItems:'center', justifyContent:'space-between' }}>

        {/* Logo */}
        <span onClick={() => window.scrollTo({top:0,behavior:'smooth'})}
          style={{ fontFamily:'Orbitron,sans-serif', fontWeight:900, cursor:'pointer', letterSpacing:2, transition:'all 0.3s' }}>
          {scrolled ? (
            <span style={{fontSize:18, color:'var(--neon)'}}>VS<span style={{color:'var(--text)'}}>.</span><span style={{fontSize:12,color:'var(--text)'}}>AI</span></span>
          ) : (
            <span style={{fontSize:15, color:'var(--neon)'}}>VISHAL SAHIL <span style={{color:'var(--text)', fontSize:12}}>AI</span></span>
          )}
        </span>

        {/* Desktop nav */}
        <ul style={{ display:'flex', gap:28, listStyle:'none', alignItems:'center' }} className="hidden md:flex">
          {links.map(l => (
            <li key={l}>
              <button onClick={() => go(l)}
                style={{ background:'none', border:'none', cursor:'pointer', fontSize:13, 
                color:'var(--subtext)', fontFamily:'Inter,sans-serif', fontWeight:500, 
                transition:'color 0.2s', position:'relative', padding:'4px 0' }}
                className="nav-link">
                {l}
              </button>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <button onClick={toggleTheme}
            style={{ background:'var(--bg3)', border:'1px solid var(--border)', borderRadius:8, padding:'6px 10px', cursor:'pointer', fontSize:16 }}>
            {light ? <FiMoon size={16} color='var(--neon)'/> : <FiSun size={16} color='var(--neon)'/>}
          </button>
          <button onClick={() => go('Contact')}
            className="btn-solid hidden sm:block"
            style={{ padding:'8px 20px', borderRadius:8, fontSize:13, fontWeight:700, border:'none', cursor:'pointer', letterSpacing:0.5 }}>
            Hire Me
          </button>
          <button className="md:hidden" onClick={() => setOpen(!open)}
            style={{ background:'none', border:'none', cursor:'pointer', color:'var(--neon)', fontSize:22 }}>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
       <div style={{ background: document.documentElement.classList.contains('light') ? 'rgba(245,245,245,0.92)' : 'rgba(10,10,10,0.85)', backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)', borderTop:'1px solid rgba(57,255,20,0.1)', padding:'16px 24px', display:'flex', flexDirection:'column', gap:16, position:'fixed', top:64, left:0, right:0, zIndex:49 }}>
          {links.map(l => (
            <button key={l} onClick={() => go(l)}
              className="mobile-nav-link"
              style={{ background:'none', border:'none', cursor:'pointer', textAlign:'left', fontSize:14, color:'var(--text)', fontFamily:'Inter,sans-serif', transition:'all 0.2s', padding:'4px 0' }}>
              {l}
            </button>
          ))}
          <button onClick={() => go('Contact')} className="btn-solid"
            style={{ padding:'10px 18px', borderRadius:8, fontSize:13, fontWeight:700, border:'none', cursor:'pointer', textAlign:'center' }}>
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
}