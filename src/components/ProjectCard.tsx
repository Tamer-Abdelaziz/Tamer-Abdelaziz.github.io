import React from 'react';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import { Project } from '../types';
import { cn } from '../lib/utils';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-brand-card border border-brand-border rounded-xl p-6 transition-all duration-300 hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/5">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-bold text-zinc-100 group-hover:text-brand-primary transition-colors">
          {project.title}
        </h3>
        <div className="flex gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-brand-primary transition-colors">
              <Github size={18} />
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-brand-primary transition-colors">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      
      <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider bg-zinc-800 text-zinc-400 rounded border border-zinc-700">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center text-[11px] text-zinc-500 font-mono">
        <Calendar size={12} className="mr-1.5" />
        {project.date}
      </div>
    </div>
  );
};
