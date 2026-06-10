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

I am a **Postdoctoral Associate at New York University (NYU)** in the SANAD (Software Analytics and Developer Support) Lab, where I conduct research on developing robust tools, methodologies, and system architectures to enhance the **security and resilience of blockchain ecosystems** against sophisticated attacks.

I received my **Ph.D. in Computer Science from the National University of Singapore (NUS)**. During my doctoral studies, I also served as an **Instructor and Teaching Assistant**, teaching courses related to **software engineering and computer security**.

My research focuses on **Ethereum Virtual Machine (EVM) security**, **smart contract auditing and automated vulnerability repair**, **blockchain attack detection and prevention**, and **formal verification techniques for decentralized systems**. My work aims to bridge the gap between **academic research and practical security solutions**, enabling the development of safer and more reliable decentralized applications and blockchain infrastructures.
`;

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Publications', href: '#publications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Teaching', href: '#teaching' },
    { name: 'Service', href: '#service' },
    {/* { name: 'Audits', href: '#audits' }, */}
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
                Tamer Abdelaziz<span className="text-brand-primary">, Ph.D.</span>
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
                href="mailto:tamer.m@nyu.edu"
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
                  href="mailto:tamer.m@nyu.edu"
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
                <div className="aspect-square rounded-3xl overflow-hidden border border-brand-border bg-zinc-900 relative">
                  <img
                    src="/profile.jpg"
                    alt="Tamer Abdelaziz"
                    className="w-full h-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div
                      className="flex items-center gap-4 p-4 bg-brand-card/80 backdrop-blur border border-brand-border rounded-xl
                                flex-nowrap overflow-x-auto"
                    >
                      {/* Google Scholar */}
                      <a
                        href="https://scholar.google.com/citations?user=BqqwRlgAAAAJ&hl=en&oi=ao"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all whitespace-nowrap"
                        title="Google Scholar"
                      >
                        <GraduationCap size={20} />
                        <span className="text-sm font-medium">Google Scholar</span>
                      </a>

                      {/* Twitter */}
                      {/*
                      <a
                        href="https://x.com/Tamer_Abelaziz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all whitespace-nowrap"
                        title="Twitter"
                      >
                        <Twitter size={20} />
                        <span className="text-sm font-medium">Twitter</span>
                      </a>
                      */}

                      {/* LinkedIn */}
                      <a
                        href="https://linkedin.com/in/dr-tamer-abdelaziz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all whitespace-nowrap"
                        title="LinkedIn"
                      >
                        <Linkedin size={20} />
                        <span className="text-sm font-medium">LinkedIn</span>
                      </a>
                      

                      {/* Email */}
                      <a
                        href="mailto:tamer.m@nyu.com"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all whitespace-nowrap"
                        title="Email"
                      >
                        <Mail size={20} />
                        <span className="text-sm font-medium">Email</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
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

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="flex items-center gap-2 text-brand-primary font-mono text-sm mb-2">
                  <Code2 size={16} />
                  <span>Tools & Research</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">Open Research Projects</h2>
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
        {/*
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
                Now accepting smart contract audit and monitoring requests.

                Independent security analysis using research-driven tools.
                Specializing in DeFi protocols, cross-chain bridges, and governance modules.
              </p>
              <a href="mailto:tamer.m@nyu.edu" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-brand-bg font-bold rounded-xl hover:bg-brand-primary/90 transition-all">
                Request an Audit <Mail size={18} />
              </a>
            </div>
          </div>
        </section>
        */}
      </main>

      {/* Footer */}
      <footer className="bg-brand-bg border-t border-brand-border py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Shield className="text-brand-primary" size={24} />
              <span className="text-zinc-100 font-mono font-bold tracking-tighter text-lg">
                Tamer Abdelaziz<span className="text-brand-primary">, Ph.D.</span>
              </span>
            </div>
            
            <div className="text-zinc-500 text-sm font-mono">
              © {new Date().getFullYear()} All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              {/* Google Scholar */}
                      <a
                        href="https://scholar.google.com/citations?user=BqqwRlgAAAAJ&hl=en&oi=ao"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all whitespace-nowrap"
                        title="Google Scholar"
                      >
                        <GraduationCap size={20} />
                        <span className="text-sm font-medium">Google Scholar</span>
                      </a>

                     
                      {/* Email */}
                      <a
                        href="mailto:tamer.m@nyu.com"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all whitespace-nowrap"
                        title="Email"
                      >
                        <Mail size={20} />
                        <span className="text-sm font-medium">Email</span>
                      </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
