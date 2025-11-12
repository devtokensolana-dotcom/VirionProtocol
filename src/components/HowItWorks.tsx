import { Droplet, Dna, Shield } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Droplet,
      title: 'Infect',
      description: 'The token attaches to your wallet, symbolizing protection and creating a secure perimeter.',
      gradient: 'from-green-500 to-emerald-600',
      borderColor: 'border-green-500/50',
      glowColor: 'group-hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]'
    },
    {
      icon: Dna,
      title: 'Mutate',
      description: 'The protocol evolves through upgrades, adapting to new threats and strengthening defenses.',
      gradient: 'from-purple-600 to-violet-600',
      borderColor: 'border-purple-600/50',
      glowColor: 'group-hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]'
    },
    {
      icon: Shield,
      title: 'Defend',
      description: 'Each infection increases collective security, forming an impenetrable network defense system.',
      gradient: 'from-green-400 to-green-600',
      borderColor: 'border-green-400/50',
      glowColor: 'group-hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]'
    }
  ];

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/5 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-purple-600 text-transparent bg-clip-text">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Three phases of protection through benevolent infection
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-5 rounded-2xl blur-xl transition-all duration-500 ${step.glowColor}`} />

              <div className={`relative h-full p-8 bg-black/40 backdrop-blur-sm border-2 ${step.borderColor} rounded-2xl transition-all duration-500 hover:border-opacity-100 hover:scale-105`}>
                <div className="mb-6 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                  <div className={`relative w-20 h-20 mx-auto bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-4 text-white text-center">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-center leading-relaxed">
                  {step.description}
                </p>

                <div className="mt-6 flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.gradient} animate-pulse`}
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-500 to-purple-600 transform -translate-y-1/2">
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-purple-600 rounded-full transform -translate-y-1/2 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 relative">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
            <div className="flex justify-around">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-green-400 rounded-full animate-ping"
                  style={{ animationDelay: `${i * 0.3}s`, animationDuration: '2s' }}
                />
              ))}
            </div>
          </div>
          <p className="text-center mt-6 text-gray-500 text-sm">
            Network particles linking across infected wallets
          </p>
        </div>
      </div>
    </section>
  );
}
