import { Twitter, MessageCircle, Send, Wallet } from 'lucide-react';

export default function Community() {
  const socials = [
    {
      icon: Twitter,
      name: 'X (Twitter)',
      handle: '@VirionProtocol',
      description: 'Latest updates and announcements',
      gradient: 'from-green-500 to-emerald-600',
      link: '#'
    },
    {
      icon: MessageCircle,
      name: 'Discord',
      handle: 'Join Server',
      description: 'Community hub and support',
      gradient: 'from-purple-600 to-violet-600',
      link: '#'
    },
    {
      icon: Send,
      name: 'Telegram',
      handle: '@VirionOfficial',
      description: 'Real-time discussions',
      gradient: 'from-green-400 to-green-600',
      link: '#'
    }
  ];

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-purple-600 text-transparent bg-clip-text">
              Join the Infection
            </span>
          </h2>
          <p className="text-2xl text-gray-400 mb-4">
            Become a carrier. Strengthen the network.
          </p>
        </div>

        <div className="mb-16">
          <div className="relative p-12 bg-gradient-to-br from-green-500/10 via-purple-600/5 to-green-500/10 border-2 border-green-500/30 rounded-3xl backdrop-blur-sm overflow-hidden group hover:border-green-500/60 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="relative text-center">
              <div className="inline-block mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500 blur-2xl opacity-50 animate-pulse" />
                  <Wallet className="relative w-20 h-20 text-green-400 mx-auto" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                Connect Your Wallet
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Begin your infection and join thousands protecting the Solana network.
                Early carriers receive enhanced protocol benefits and governance rights.
              </p>

              <button className="group/btn relative px-12 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(16,185,129,0.6)]">
                <span className="relative z-10 flex items-center gap-3">
                  <Wallet className="w-6 h-6" />
                  Connect Wallet
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </button>

              <div className="mt-8 flex justify-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <span>Fast</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <span>Protected</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="group relative p-6 bg-black/60 backdrop-blur-sm border-2 border-green-500/30 rounded-2xl transition-all duration-500 hover:border-green-500/60 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />

              <div className="relative">
                <div className="mb-4">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${social.gradient} rounded-xl`}>
                    <social.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">
                  {social.name}
                </h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${social.gradient} text-transparent bg-clip-text mb-3`}>
                  {social.handle}
                </p>
                <p className="text-gray-400 text-sm">
                  {social.description}
                </p>

                <div className="mt-4 flex items-center text-green-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Join now</span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600/10 border border-purple-600/30 rounded-full">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-purple-600 border-2 border-black"
                />
              ))}
            </div>
            <span className="text-gray-400 text-sm">
              Join <span className="text-green-400 font-bold">10,000+</span> carriers protecting the network
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
