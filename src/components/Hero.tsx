import React from 'react';
import { ArrowRight, Rocket, Copy, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

const Hero = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText('curl -sSL https://reamstack.com/install.sh | sh');
    toast.success('Command copied to clipboard!');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* Gradient and heartbeat animation background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-teal-800/20 to-[#020617] opacity-80"></div>
        <div className="absolute inset-0">
          <div className="stars absolute inset-0 animate-twinkle"></div>
          <div className="shooting-stars absolute inset-0"></div>
        </div>
        {/* Heartbeat line animation */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 transform -translate-y-1/2">
          <div className="heartbeat-line"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#020617]/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Announcement Banner */}
        <a 
          href="https://reamstack.com"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 hover:bg-white/20 transition-colors mb-8"
        >
          <Rocket className="w-4 h-4" />
          <span>Introducing ReamStack Cloud-Hosted</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Deploy in <span className="text-emerald-400">Minutes</span>, Add Services
          <br />
          Effortlessly with <span className="relative">
            <span className="text-emerald-400">One Click</span>
            <span className="absolute bottom-2 left-0 w-full h-1 bg-emerald-500/50"></span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          ReamStack is an <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">open-source</span> monitoring platform offering real-time insights into server and service health, incident management, and operational transparency.
        </p>

        {/* Demo Section */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <p className="text-xl text-gray-300">Want to see it in action?</p>
          <a 
            href="https://reamstack.com/demo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
          >
            Try Live Demo
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Command Box */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="flex items-center gap-2 bg-emerald-950/50 backdrop-blur-sm px-6 py-3 rounded-lg cursor-pointer border border-emerald-800/30" onClick={handleCopy}>
              <code className="text-white">curl -sSL https://reamstack.com/install.sh | sh</code>
              <Copy className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://github.com/ReamStack-Lab/reamstack" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-500/10 backdrop-blur-sm text-white hover:bg-emerald-500/20 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Github
          </a>
          <a 
            href="https://discord.gg/xs9gbubGwX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[#5865F2]/80 backdrop-blur-sm text-white hover:bg-[#5865F2] transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Discord
          </a>
          <a 
            href="https://reamstack.com/docs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-500/10 backdrop-blur-sm text-white hover:bg-emerald-500/20 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            Documentation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;