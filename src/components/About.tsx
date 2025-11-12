import { Activity, Network, Shield } from 'lucide-react';

export default function About() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      <div className="absolute left-0 top-1/2 w-96 h-96 bg-green-500/20 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-purple-600 text-transparent bg-clip-text">
            A Digital Virus Designed to Protect.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 border-2 border-green-500/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-8 border-2 border-purple-600/30 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
              <div className="absolute inset-16 border-2 border-green-400/30 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }} />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-purple-600 rounded-full animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-green-500/20 rounded-full backdrop-blur-sm border border-green-500/50 flex items-center justify-center animate-float">
                <Activity className="w-8 h-8 text-green-400" />
              </div>
              <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-purple-600/20 rounded-full backdrop-blur-sm border border-purple-600/50 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Network className="w-8 h-8 text-purple-400" />
              </div>
              <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-green-500/20 rounded-full backdrop-blur-sm border border-green-500/50 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <Shield className="w-8 h-8 text-green-400" />
              </div>
            </div>
          </div>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              <span className="text-2xl font-bold text-white block mb-2">Virion Protocol ($VRN)</span>
              is a self-replicating cryptographic organism that infects wallets and nodes to defend them from malicious activity.
            </p>

            <p>
              Every wallet infected contributes to a{' '}
              <span className="text-green-400 font-semibold">decentralized immune system</span>{' '}
              built to strengthen the Solana network.
            </p>

            <p>
              Unlike traditional threats, <span className="text-purple-400 font-semibold">Virion doesn't destroy</span> — it protects, evolves, and creates a collective defense mechanism that grows stronger with every infection.
            </p>

            <div className="flex gap-4 pt-4">
              <div className="flex-1 p-4 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/30 rounded-lg">
                <div className="text-3xl font-bold text-green-400 mb-1">100%</div>
                <div className="text-sm text-gray-400">Benevolent</div>
              </div>
              <div className="flex-1 p-4 bg-gradient-to-br from-purple-600/10 to-transparent border border-purple-600/30 rounded-lg">
                <div className="text-3xl font-bold text-purple-400 mb-1">∞</div>
                <div className="text-sm text-gray-400">Evolving</div>
              </div>
              <div className="flex-1 p-4 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/30 rounded-lg">
                <div className="text-3xl font-bold text-green-400 mb-1">24/7</div>
                <div className="text-sm text-gray-400">Protection</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
