import { Droplet, Flame, Dna, Globe } from 'lucide-react';

export default function Roadmap() {
  const phases = [
    {
      icon: Droplet,
      title: 'Incubation',
      subtitle: 'Q1 2025',
      status: 'In Progress',
      items: [
        'Token launch on Solana',
        'Core protocol development',
        'Initial infection mechanism',
        'Community genesis'
      ],
      gradient: 'from-green-500 to-emerald-600',
      statusColor: 'bg-green-500'
    },
    {
      icon: Flame,
      title: 'Contagion',
      subtitle: 'Q2 2025',
      status: 'Upcoming',
      items: [
        'Wallet defense deployment',
        'Partnership integrations',
        'Viral marketing campaign',
        'First 10K infections'
      ],
      gradient: 'from-emerald-500 to-green-600',
      statusColor: 'bg-emerald-500'
    },
    {
      icon: Dna,
      title: 'Mutation',
      subtitle: 'Q3 2025',
      status: 'Upcoming',
      items: [
        'Protocol v2.0 upgrade',
        'Advanced threat detection',
        'Cross-chain evolution',
        'DAO governance launch'
      ],
      gradient: 'from-purple-600 to-violet-600',
      statusColor: 'bg-purple-600'
    },
    {
      icon: Globe,
      title: 'Global Spread',
      subtitle: 'Q4 2025',
      status: 'Future',
      items: [
        'Multi-chain deployment',
        'Enterprise partnerships',
        'Global immune network',
        '1M+ protected wallets'
      ],
      gradient: 'from-green-400 to-purple-600',
      statusColor: 'bg-gradient-to-r from-green-400 to-purple-600'
    }
  ];

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/5 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-purple-600 text-transparent bg-clip-text">
              Mutation Cycle
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            The evolution of benevolent infection
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 md:left-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-purple-600 to-green-400 transform md:-translate-x-1/2" />

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1" />

                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-black border-4 border-green-500 rounded-full transform md:-translate-x-1/2 z-10">
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
                </div>

                <div className="flex-1 group">
                  <div className={`relative p-8 bg-black/60 backdrop-blur-sm border-2 border-green-500/30 rounded-2xl transition-all duration-500 hover:border-green-500/60 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} opacity-5 rounded-2xl`} />

                    <div className="relative">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${phase.gradient} rounded-xl flex items-center justify-center`}>
                            <phase.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-white mb-1">
                              {phase.title}
                            </h3>
                            <p className="text-gray-400">{phase.subtitle}</p>
                          </div>
                        </div>
                        <div className={`px-4 py-2 ${phase.statusColor} rounded-full text-xs font-bold text-white`}>
                          {phase.status}
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-300">
                            <div className={`w-2 h-2 bg-gradient-to-r ${phase.gradient} rounded-full`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex gap-2">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`flex-1 h-1 bg-gradient-to-r ${phase.gradient} rounded-full`}
                            style={{
                              opacity: phase.status === 'In Progress' ? (i < 2 ? 1 : 0.3) : 0.3
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-green-500/10 to-purple-600/10 border border-green-500/30 rounded-2xl">
            <p className="text-xl text-gray-300 mb-2">
              Join the evolution at{' '}
              <span className="font-bold text-green-400">Phase 1: Incubation</span>
            </p>
            <p className="text-sm text-gray-500">
              Early carriers receive enhanced protocol benefits
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
