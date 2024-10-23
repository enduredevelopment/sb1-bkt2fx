import React from 'react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Project Alpha",
    description: "A modern e-commerce platform built with Next.js and Stripe",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    tags: ["Next.js", "Stripe", "Tailwind"],
    github: "#",
    demo: "#"
  },
  {
    title: "Project Beta",
    description: "Real-time chat application using Socket.io and React",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop",
    tags: ["React", "Socket.io", "Express"],
    github: "#",
    demo: "#"
  },
  {
    title: "Project Gamma",
    description: "AI-powered content management system",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
    tags: ["Python", "TensorFlow", "React"],
    github: "#",
    demo: "#"
  }
];

interface PortfolioProps {
  onBack: () => void;
}

function Portfolio({ onBack }: PortfolioProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
      <div className="absolute -top-[40rem] -left-[40rem] w-[80rem] h-[80rem] bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-[40rem] -right-[40rem] w-[80rem] h-[80rem] bg-blue-600/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Links
        </button>

        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Portfolio
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;