import { useEffect, useState } from 'react';
import { Shield, Zap, Lock } from 'lucide-react';

export default function Hero() {
  const [glitchText, setGlitchText] = useState('Infect to Protect.');

  useEffect(() => {
    const glitchChars = '!<>-_\\/[]{}—=+*^?#_01';
    const originalText = 'Infect to Protect.';

    const interval = setInterval(() => {
      if (Math.random() > 0.95) {
        const glitched = originalText
          .split('')
          .map((char) =>
            Math.random() > 0.9
              ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
              : char
          )
          .join('');
        setGlitchText(glitched);
        setTimeout(() => setGlitchText(originalText), 50);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-12 relative inline-block">
          <div className="absolute inset-0 animate-pulse">
            <div className="w-48 h-48 mx-auto bg-gradient-to-r from-green-500 to-purple-600 rounded-full blur-3xl opacity-50" />
          </div>

          <div className="relative">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="absolute inset-0 border-4 border-green-500 rounded-full animate-spin-slow" style={{ animationDuration: '8s' }} />
              <div className="absolute inset-2 border-4 border-purple-600 rounded-full animate-spin-slow" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
              <div className="absolute inset-4 border-4 border-green-400 rounded-full animate-spin-slow" style={{ animationDuration: '10s' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="w-12 h-12 text-green-400 animate-pulse" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Zap className="w-6 h-6 text-purple-500 animate-bounce" />
              </div>
              <div className="absolute -bottom-2 -left-2">
                <Lock className="w-6 h-6 text-green-500 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>
          <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-purple-600 text-transparent bg-clip-text animate-gradient">
            VIRION
          </span>
          <br />
          <span className="text-white text-5xl md:text-6xl">PROTOCOL</span>
        </h1>

        <div className="text-3xl md:text-4xl font-bold text-green-400 mb-4 h-12">
          {glitchText}
        </div>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          The first benevolent cryptographic virus on{' '}
          <span className="text-purple-500 font-semibold">Solana</span>.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
            <span className="relative z-10">Join Infection</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="px-8 py-4 border-2 border-purple-600 text-purple-400 font-bold rounded-lg transition-all duration-300 hover:bg-purple-600/20 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]">
            View Whitepaper
          </button>

          <button className="px-8 py-4 border-2 border-green-500 text-green-400 font-bold rounded-lg transition-all duration-300 hover:bg-green-500/20 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            Launch dApp
          </button>
        </div>

        <div className="mt-16 flex justify-center gap-12 text-sm text-gray-500">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">$VRN</div>
            <div>Token</div>
          </div>
          <div className="w-px bg-gray-800" />
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">Solana</div>
            <div>Network</div>
          </div>
          <div className="w-px bg-gray-800" />
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">Immune</div>
            <div>System</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-500 rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mx-auto animate-pulse" />
        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
