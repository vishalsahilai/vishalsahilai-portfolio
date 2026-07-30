export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neon/10 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-sm font-bold neon-text tracking-widest">VS.</span>
        <p className="font-mono text-xs text-gray-600 text-center">
          © 2026 Built with ⚡ by{' '}
          <span className="text-neon">Vishal Sahil (AI)</span>
        </p>
        <p className="font-mono text-xs text-neon/50">Automate. Scale. Dominate.</p>
      </div>
    </footer>
  );
}