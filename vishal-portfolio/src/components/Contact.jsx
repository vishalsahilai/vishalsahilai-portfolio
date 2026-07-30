'use client';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


const socials = [
  {icon:<FaLinkedin size={32} color='#0077b5'/>, label:'LinkedIn', handle:'@vishal-sahil-ai', desc:'Connect professionally', href:'https://linkedin.com/in/vishal-sahil-ai'},
  {icon:<FaGithub size={32} color='#6e40c9'/>, label:'GitHub', handle:'@vishalsahilai', desc:'View my projects', href:'https://github.com/vishalsahilai'},
  {icon:<FaFacebook size={32} color='#1877f2'/>, label:'Facebook', handle:'@vishalsahilai', desc:'Follow for updates', href:'https://www.facebook.com/vishalsahilai'},
  {icon:<FaInstagram size={32} color='#e1306c'/>, label:'Instagram', handle:'@vishal.sahil.ai', desc:'Follow for AI insights', href:'https://www.instagram.com/vishal.sahil.ai/'},
  {icon:<FaTiktok size={32} color='#ff0050'/>, label:'TikTok', handle:'@vishalsahilai', desc:'AI content & tips', href:'https://www.tiktok.com/@vishalsahilai'},
  {icon:<FaYoutube size={32} color='#ff0000'/>, label:'YouTube', handle:'@VishalSahilAIOfficial', desc:'Watch AI tutorials', href:'https://www.youtube.com/@VishalSahilAIOfficial'},
];

export default function Contact() {
  const [form, setForm] = useState({name:'',email:'',subject:'',message:''});
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    const res = await fetch('https://formspree.io/f/xykoavoo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setSent(true);
      setForm({name:'',email:'',subject:'',message:''});
      setTimeout(()=>setSent(false),3000);
    }
  };

  return (
    <section id="contact" style={{maxWidth:1100,margin:'0 auto',padding:'96px 24px'}}>
      <p style={{fontSize:13,color:'var(--neon)',letterSpacing:3,marginBottom:8,fontWeight:500}}>// get in touch</p>
      <h2 style={{fontFamily:'Orbitron,sans-serif',fontWeight:900,fontSize:'clamp(24px,4vw,40px)',marginBottom:8,color:'var(--text)'}}>
        LET'S BUILD SOMETHING <span className="neon-text">EXTRAORDINARY</span>
      </h2>
      <p style={{fontSize:15,color:'var(--subtext)',marginBottom:56,maxWidth:520,lineHeight:1.7}}>
        Ready to automate your business? DM me <strong style={{color:'var(--neon)'}}>'AUDIT'</strong> for a free 15-minute workflow breakdown.
      </p>

      {/* Email card */}
      <div className="card" style={{padding:32,marginBottom:24,textAlign:'center'}}>
        <div style={{display:'flex',justifyContent:'center',marginBottom:12}}>
          <MdEmail size={40} color='var(--neon)'/>
        </div>
        <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:8}}>Email Me Directly</h3>
        <p style={{fontSize:13,color:'var(--subtext)',marginBottom:20}}>For project inquiries, automation audits, and collaborations</p>
        <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
          <a href="mailto:vishalsahilofficial@gmail.com" className="btn-solid"
            style={{padding:'10px 24px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'none',cursor:'pointer'}}>
            VISHALSAHILOFFICIAL@GMAIL.COM
          </a>
          <a href="https://wa.me/923366874263?text=Hi%20Vishal%20Sahil!%20I%20found%20your%20number%20from%20your%20portfolio%20and%20I'm%20interested%20in%20your%20AI%20automation%20services.%20Can%20we%20talk%3F"  className="btn-solid"
            style={{padding:'10px 24px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none', border:'none',cursor:'pointer'}}>
            💬 WhatsApp
          </a>
            
        
        </div>
      </div>

      {/* Contact form */}
      <div className="card" style={{padding:32,marginBottom:48}}>
        <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:4}}>Send Me a Message</h3>
        <p style={{fontSize:13,color:'var(--subtext)',marginBottom:24}}>Fill in the form and I'll get back to you within 24 hours</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:16}} className="form-grid">
          {['name','email'].map(f=>(
            <div key={f}>
              <input type={f==='email'?'email':'text'} placeholder={f==='name'?'Your Name':'Your Email'}
                value={form[f]} onChange={e=>setForm({...form,[f]:e.target.value})}
                style={{width:'100%',background:'var(--bg3)',border:'1px solid var(--border)',borderRadius:8,
                  padding:'12px 16px',fontSize:14,color:'var(--text)',outline:'none',fontFamily:'Inter,sans-serif'}}
                onFocus={e=>e.target.style.borderColor='var(--neon)'}
                onBlur={e=>e.target.style.borderColor='var(--border)'}/>
            </div>
          ))}
        </div>
        <input type="text" placeholder="Subject" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})}
          style={{width:'100%',background:'var(--bg3)',border:'1px solid var(--border)',borderRadius:8,
            padding:'12px 16px',fontSize:14,color:'var(--text)',outline:'none',marginBottom:16,fontFamily:'Inter,sans-serif'}}
          onFocus={e=>e.target.style.borderColor='var(--neon)'}
          onBlur={e=>e.target.style.borderColor='var(--border)'}/>
        <textarea rows={5} placeholder="Tell me about your project or automation needs..."
          value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
          style={{width:'100%',background:'var(--bg3)',border:'1px solid var(--border)',borderRadius:8,
            padding:'12px 16px',fontSize:14,color:'var(--text)',outline:'none',resize:'none',marginBottom:16,fontFamily:'Inter,sans-serif'}}
          onFocus={e=>e.target.style.borderColor='var(--neon)'}
          onBlur={e=>e.target.style.borderColor='var(--border)'}/>
        <button onClick={handleSubmit} className="btn-solid"
          style={{width:'100%',padding:'14px',borderRadius:8,fontSize:15,fontWeight:700,border:'none',cursor:'pointer'}}>
          {sent ? '✅ Message Sent!' : 'Send Message ⚡'}
        </button>
      </div>

      {/* Socials */}
      <div className="socials-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:16}}>
        {socials.map(s=>(
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
            className="card" style={{padding:20,textDecoration:'none',textAlign:'center',
              transition:'transform 0.3s',display:'flex',flexDirection:'column',alignItems:'center',gap:8}}
            onMouseEnter={e=>e.currentTarget.style.transform='translateY(-4px)'}
            onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',
              width:56,height:56,borderRadius:12,background:'var(--bg3)'}}>
              {s.icon}
            </div>
            <p style={{fontSize:13,fontWeight:700,color:'var(--text)',margin:0}}>{s.label}</p>
            <p style={{fontSize:11,color:'var(--neon)',margin:0}}>{s.handle}</p>
            <p style={{fontSize:11,color:'var(--subtext)',margin:0}}>{s.desc}</p>
          </a>
        ))}
      </div>

      <style>{`@media(max-width:600px){.form-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}