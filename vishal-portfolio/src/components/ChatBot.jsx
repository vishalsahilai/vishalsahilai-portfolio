'use client';
import { useState, useRef, useEffect } from 'react';
import { MdSmartToy, MdClose, MdSend } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const API_BASE = "https://portfolio-chatbot-production-fc66.up.railway.app;

function getSessionId() {
  let sid = localStorage.getItem("portfolio_sid");
  if (!sid) {
    sid = "user_" + Math.random().toString(36).slice(2);
    localStorage.setItem("portfolio_sid", sid);
  }
  return sid;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! 👋 I'm Vishal's AI Assistant. Ask me anything about Vishal's skills, services, or projects!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: getSessionId(),
          message: userMsg
        }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.response || data.message || data.reply || "I'm not sure about that. Please contact Vishal directly!" 
      }]);
    } catch {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Sorry, I'm having trouble connecting. Please try again!" 
      }]);
    }
    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div style={{
          position:'fixed', bottom:90, right:20, width:340, height:480,
          background:'#0a0a0a', border:'1px solid rgba(57,255,20,0.3)',
          borderRadius:16, zIndex:1000, display:'flex', flexDirection:'column',
          boxShadow:'0 0 40px rgba(57,255,20,0.15)', overflow:'hidden',
          fontFamily:'Inter,sans-serif'
        }}>
          {/* Header */}
          <div style={{
            background:'linear-gradient(135deg,#0a0a0a,#111)',
            borderBottom:'1px solid rgba(57,255,20,0.2)',
            padding:'14px 16px', display:'flex', alignItems:'center', gap:12
          }}>
            <div style={{
              width:40, height:40, borderRadius:'50%',
              background:'rgba(57,255,20,0.1)', border:'2px solid #39FF14',
              display:'flex', alignItems:'center', justifyContent:'center',
              position:'relative'
            }}>
              <MdSmartToy size={22} color='#39FF14'/>
              <span style={{
                position:'absolute', bottom:1, right:1,
                width:8, height:8, borderRadius:'50%',
                background:'#39FF14', border:'1px solid #0a0a0a'
              }}/>
            </div>
            <div style={{flex:1}}>
              <p style={{margin:0, fontSize:14, fontWeight:700, color:'#ffffff'}}>Vishal's AI</p>
              <p style={{margin:0, fontSize:11, color:'#39FF14'}}>● Online</p>
            </div>
            <a href="https://wa.me/923058377755?text=Hi%20Vishal%20Sahil!%20I%20found%20your%20number%20from%20your%20portfolio%20and%20I'm%20interested%20in%20your%20AI%20automation%20services.%20Can%20we%20talk%3F"
              target="_blank" rel="noopener noreferrer"
              style={{
                background:'#25D366', borderRadius:8, padding:'6px 8px',
                display:'flex', alignItems:'center', justifyContent:'center',
                textDecoration:'none', marginRight:4
              }}>
              <FaWhatsapp size={18} color='#fff'/>
            </a>
            <button onClick={() => setOpen(false)} style={{
              background:'none', border:'none', cursor:'pointer',
              color:'#666', padding:4
            }}>
              <MdClose size={20}/>
            </button>
          </div>

          {/* Messages */}
          <div style={{
            flex:1, overflowY:'auto', padding:'16px',
            display:'flex', flexDirection:'column', gap:12
          }}>
            {messages.map((m, i) => (
              <div key={i} style={{
                display:'flex',
                justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start'
              }}>
                <div style={{
                  maxWidth:'80%', padding:'10px 14px', borderRadius:12,
                  fontSize:13, lineHeight:1.6,
                  background: m.role === 'user' 
                    ? 'linear-gradient(135deg,#39FF14,#00cc0a)' 
                    : '#1a1a1a',
                  color: m.role === 'user' ? '#000' : '#fff',
                  borderBottomRightRadius: m.role === 'user' ? 4 : 12,
                  borderBottomLeftRadius: m.role === 'assistant' ? 4 : 12,
                  border: m.role === 'assistant' ? '1px solid rgba(57,255,20,0.1)' : 'none',
                }}>
                  {m.content
                    .split('\n')
                    .map((line, i) => {
                      // Remove ** bold markers
                      const clean = line.replace(/\*\*(.*?)\*\*/g, '$1');
                      // Numbered list items get extra spacing
                      const isNumbered = /^\d+\./.test(clean.trim());
                      return (
                        <span key={i} style={{
                          display: 'block',
                          marginTop: isNumbered ? '8px' : '2px',
                          paddingLeft: isNumbered ? '4px' : '0',
                        }}>
                          {clean}
                        </span>
                      );
                    })
                  }
                </div>
              </div>
            ))}
            {loading && (
              <div style={{display:'flex', justifyContent:'flex-start'}}>
                <div style={{
                  background:'#1a1a1a', border:'1px solid rgba(57,255,20,0.1)',
                  borderRadius:12, borderBottomLeftRadius:4,
                  padding:'10px 16px', display:'flex', gap:4, alignItems:'center'
                }}>
                  {[0,1,2].map(i => (
                    <span key={i} style={{
                      width:6, height:6, borderRadius:'50%', background:'#39FF14',
                      animation:`bounce 1s ease-in-out ${i*0.2}s infinite`
                    }}/>
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef}/>
          </div>

          {/* Input */}
          <div style={{
            padding:'12px 16px',
            borderTop:'1px solid rgba(57,255,20,0.15)',
            display:'flex', gap:8, alignItems:'center',
            background:'#0a0a0a'
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type a message..."
              style={{
                flex:1, background:'#1a1a1a',
                border:'1px solid rgba(57,255,20,0.2)',
                borderRadius:8, padding:'10px 14px',
                fontSize:13, color:'#fff', outline:'none',
                fontFamily:'Inter,sans-serif'
              }}
              onFocus={e => e.target.style.borderColor='#39FF14'}
              onBlur={e => e.target.style.borderColor='rgba(57,255,20,0.2)'}
            />
            <button onClick={sendMessage} disabled={loading || !input.trim()}
              style={{
                background: input.trim() ? '#39FF14' : '#1a1a1a',
                border:'none', borderRadius:8, padding:'10px 12px',
                cursor: input.trim() ? 'pointer' : 'default',
                display:'flex', alignItems:'center', justifyContent:'center',
                transition:'all 0.2s'
              }}>
              <MdSend size={18} color={input.trim() ? '#000' : '#555'}/>
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button onClick={() => setOpen(!open)} style={{
        position:'fixed', bottom:20, right:20, zIndex:1000,
        width:56, height:56, borderRadius:'50%',
        background: open ? '#1a1a1a' : 'linear-gradient(135deg,#39FF14,#00cc0a)',
        border: open ? '2px solid #39FF14' : 'none',
        cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center',
        boxShadow: open ? '0 0 20px rgba(57,255,20,0.3)' : '0 0 30px rgba(57,255,20,0.5)',
        transition:'all 0.3s'
      }}>
        {open 
          ? <MdClose size={24} color='#39FF14'/>
          : <MdSmartToy size={26} color='#000'/>
        }
      </button>

      <style>{`
        @keyframes bounce {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-4px)}
        }
      `}</style>
    </>
  );
}
