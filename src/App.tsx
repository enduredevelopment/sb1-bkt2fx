import React, { useState } from 'react';
import { Github, Twitter, Linkedin, Mail, Briefcase, ExternalLink, Code, ArrowLeft } from 'lucide-react';
import Portfolio from './components/Portfolio';

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  if (showPortfolio) {
    return <Portfolio onBack={() => setShowPortfolio(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
      <div className="absolute -top-[40rem] -left-[40rem] w-[80rem] h-[80rem] bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-[40rem] -right-[40rem] w-[80rem] h-[80rem] bg-blue-600/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 container mx-auto px-4 py-16 max-w-2xl">
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-purple-500/30 shadow-lg shadow-purple-500/20">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            John Developer
          </h1>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Full-stack developer passionate about creating beautiful web experiences. Specializing in React, Node.js, and modern web technologies.
          </p>
        </div>

        <div className="space-y-4">
          {[
            { icon: Github, text: "GitHub", link: "#" },
            { icon: Twitter, text: "Twitter", link: "#" },
            { icon: Linkedin, text: "LinkedIn", link: "#" },
            { icon: Mail, text: "Contact Me", link: "#" },
            { icon: Code, text: "Blog", link: "#" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group block p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-200 group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </a>
          ))}

          <button
            onClick={() => setShowPortfolio(true)}
            className="w-full p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-purple-400" />
                <span className="text-gray-200 group-hover:text-white transition-colors">
                  View Portfolio
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;