import { useEffect, useState } from 'react';

export default function Lore() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);

  const lines = [
    'Born from code.',
    'Forged in defense.',
    'A virus that guards the chain.',
    'Where others destroy, we protect.',
    'Every infection strengthens the whole.',
    'We are the immune system of tomorrow.'
  ];

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const fullText = lines.slice(0, currentLine + 1).join(' ');
    let currentIndex = displayedText.length;

    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else if (currentLine < lines.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, currentLine]);

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              rgba(16, 185, 129, 0.1) 0px,
              transparent 2px,
              transparent 4px,
              rgba(139, 92, 246, 0.1) 6px,
              transparent 8px,
              transparent 10px
            )
          `,
          animation: 'dnaScroll 2s linear infinite'
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-purple-600 text-transparent bg-clip-text">
            The Infection That Protects.
          </h2>
        </div>

        <div className="relative p-12 bg-black/60 backdrop-blur-sm border-2 border-green-500/30 rounded-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-purple-600 to-green-500 animate-gradient" style={{ backgroundSize: '200% 100%' }} />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-green-500 to-purple-600 animate-gradient" style={{ backgroundSize: '200% 100%' }} />

          <div className="absolute top-4 left-4 flex gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="text-center space-y-8 pt-8">
            <div className="min-h-[200px] flex items-center justify-center">
              <p className="text-2xl md:text-3xl font-bold text-green-400 leading-relaxed font-mono">
                {displayedText}
                <span className="inline-block w-1 h-8 bg-green-400 ml-1 animate-pulse" />
              </p>
            </div>
          </div>

          <div className="mt-12 relative">
            <div className="flex justify-center items-center gap-4">
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 10 50 Q 30 20, 50 50 Q 70 80, 90 50"
                    fill="none"
                    stroke="url(#dnaGradient)"
                    strokeWidth="3"
                    className="animate-pulse"
                  />
                  <path
                    d="M 10 50 Q 30 80, 50 50 Q 70 20, 90 50"
                    fill="none"
                    stroke="url(#dnaGradient)"
                    strokeWidth="3"
                    className="animate-pulse"
                    style={{ animationDelay: '0.5s' }}
                  />

                  {[...Array(5)].map((_, i) => (
                    <line
                      key={i}
                      x1={20 + i * 15}
                      y1={30 + (i % 2) * 40}
                      x2={20 + i * 15}
                      y2={70 - (i % 2) * 40}
                      stroke="url(#dnaGradient)"
                      strokeWidth="2"
                      opacity="0.5"
                    />
                  ))}
                </svg>
              </div>

              <div className="text-6xl text-green-400 animate-pulse">×</div>

              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 border-4 border-purple-600 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-2 border-4 border-green-500 rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl font-bold">
                  🛡️
                </div>
              </div>
            </div>
            <p className="text-center mt-6 text-gray-500 text-sm">
              Viral DNA merging with digital shield
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dnaScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(10px); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
