import './globals.css';
import ChatBot from '@/components/ChatBot';

export const metadata = {
  title: 'Vishal Sahil (AI) — AI Automation Specialist | n8n | Make | LangChain',
  description: 'I build AI systems that save founders 10+ hours every week. n8n | Make | LangChain | OpenAI | FastAPI',
  keywords: 'Vishal Sahil, AI Automation, n8n, Make, LangChain, OpenAI, Karachi, Pakistan',
  openGraph: {
    title: 'Vishal Sahil (AI) — AI Automation Specialist | n8n | Make | LangChain',
    description: 'AI Automation Engineer building intelligent workflow systems for founders & SMBs.',
    url: 'https://vishalsahil.vercel.app',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-site-verification" content="wpWU8T-87OKtXXckl0blC_5sqDoJsA0QsojXvKDuMiM" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="icon" type="image/png" href="/Vishal.png?v=3" />
        <link rel="shortcut icon" href="/Vishal.png?v=3" />
        <link rel="apple-touch-icon" href="/Vishal.png?v=3" />
      </head>
      <body>
        {children}
        <ChatBot />
      </body>
    </html>
  );
}