import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Terminal, 
  BookOpen, 
  Code2, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  ChevronRight,
  Menu,
  X,
  GraduationCap,
  Award
} from 'lucide-react';
import { PROJECTS, PUBLICATIONS, AUDITS, TEACHING, ACADEMIC_SERVICES } from './constants';
import { ProjectCard } from './components/ProjectCard';
import { PublicationItem } from './components/PublicationItem';
import { AuditRow } from './components/AuditRow';
import { TeachingItem } from './components/TeachingItem';
import { ServiceItem } from './components/ServiceItem';
import { MarkdownRenderer } from './components/MarkdownRenderer';

const ABOUT_MD = `
# Blockchain Security Researcher
I am a **Postdoctoral Associate at New York University (NYU)**, where my research focuses on building robust tools and architectures to make blockchain ecosystems more secure and resilient against sophisticated attacks.

Specializing in **EVM security**, **smart contract auditing**, and **formal verification**, I bridge the gap between academic research and production-ready security solutions.

Currently focused on:
- Cross-chain bridge security architectures
- MEV extraction and its impact on protocol stability
- Automated vulnerability detection in Solidity
`;

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#publications' },
    { name: 'Teaching', href: '#teaching' },
    { name: 'Service', href: '#service' },
    { name: 'Audits', href: '#audits' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-brand-bg font-bold">
                <Shield size={20} />
              </div>
              <span className="text-zinc-100 font-mono font-bold tracking-tighter text-xl">
                CHAIN<span className="text-brand-primary">GUARD</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-zinc-400 hover:text-brand-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="mailto:contact@example.com"
                className="px-4 py-2 bg-brand-primary text-brand-bg text-sm font-bold rounded-lg hover:bg-brand-primary/90 transition-colors"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Nav Toggle */}
            <button 
              className="md:hidden text-zinc-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-brand-card border-b border-brand-border overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-zinc-300 hover:text-brand-primary"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="mailto:contact@example.com"
                  className="block w-full text-center px-4 py-3 bg-brand-primary text-brand-bg font-bold rounded-lg"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-900/10 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-mono mb-6">
                <Terminal size={14} />
                <span>Available for Security Audits</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-zinc-100 mb-6 leading-[1.1]">
                Securing the <span className="text-brand-primary">Decentralized</span> Future.
              </h1>
              <p className="text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
                Postdoctoral Associate at <strong>New York University</strong>. 
                Researching and building tools to make blockchain ecosystems more secure and resilient against attacks.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="px-8 py-4 bg-zinc-100 text-brand-bg font-bold rounded-xl hover:bg-zinc-200 transition-all flex items-center gap-2">
                  View Projects <ChevronRight size={18} />
                </a>
                <div className="flex items-center gap-4 px-4">
                  <a href="#" className="text-zinc-500 hover:text-zinc-100 transition-colors"><Github size={24} /></a>
                  <a href="#" className="text-zinc-500 hover:text-zinc-100 transition-colors"><Twitter size={24} /></a>
                  <a href="#" className="text-zinc-500 hover:text-zinc-100 transition-colors"><Linkedin size={24} /></a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-brand-card/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <MarkdownRenderer content={ABOUT_MD} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden border border-brand-border bg-zinc-900 flex items-center justify-center">
                  <Shield size={120} className="text-brand-primary opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="p-4 bg-brand-card/80 backdrop-blur border border-brand-border rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Live Status</span>
                      </div>
                      <p className="text-sm font-medium text-zinc-100">Currently auditing a Tier-1 L2 Bridge Protocol</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="flex items-center gap-2 text-brand-primary font-mono text-sm mb-2">
                  <Code2 size={16} />
                  <span>Tools & Research</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">Open Source Projects</h2>
              </div>
              <p className="text-zinc-400 max-w-md">
                Building tools to automate security analysis and improve the developer experience in Web3.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-24 bg-brand-card/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-center gap-2 text-brand-primary font-mono text-sm mb-2">
                <BookOpen size={16} />
                <span>Academic Contributions</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Selected Publications</h2>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-2xl px-8">
              {PUBLICATIONS.map((pub) => (
                <PublicationItem key={pub.id} publication={pub} />
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Section */}
        <section id="teaching" className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-center gap-2 text-brand-primary font-mono text-sm mb-2">
                <GraduationCap size={16} />
                <span>Education & Mentorship</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Teaching Experience</h2>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-2xl px-8">
              {TEACHING.map((item) => (
                <TeachingItem key={item.id} teaching={item} />
              ))}
            </div>
          </div>
        </section>

        {/* Academic Service Section */}
        <section id="service" className="py-24 bg-brand-card/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-center gap-2 text-brand-primary font-mono text-sm mb-2">
                <Award size={16} />
                <span>Community Engagement</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Academic Service</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ACADEMIC_SERVICES.map((service) => (
                <ServiceItem key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Audits Section */}
        <section id="audits" className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-center gap-2 text-brand-primary font-mono text-sm mb-2">
                <Shield size={16} />
                <span>Professional Services</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Security Audits</h2>
            </div>
            
            <div className="space-y-4">
              {AUDITS.map((audit) => (
                <AuditRow key={audit.id} audit={audit} />
              ))}
            </div>
            
            <div className="mt-12 p-8 border border-brand-primary/20 bg-brand-primary/5 rounded-2xl text-center">
              <h3 className="text-xl font-bold text-zinc-100 mb-2">Need a Security Review?</h3>
              <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
                I am currently accepting new audit requests for Q3 2024. 
                Specializing in DeFi, Bridges, and Governance modules.
              </p>
              <a href="mailto:contact@example.com" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-brand-bg font-bold rounded-xl hover:bg-brand-primary/90 transition-all">
                Request an Audit <Mail size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-bg border-t border-brand-border py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Shield className="text-brand-primary" size={24} />
              <span className="text-zinc-100 font-mono font-bold tracking-tighter text-lg">
                CHAIN<span className="text-brand-primary">GUARD</span>
              </span>
            </div>
            
            <div className="text-zinc-500 text-sm font-mono">
              © {new Date().getFullYear()} ChainGuard Research. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-zinc-500 hover:text-brand-primary transition-colors"><Github size={20} /></a>
              <a href="#" className="text-zinc-500 hover:text-brand-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-zinc-500 hover:text-brand-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
