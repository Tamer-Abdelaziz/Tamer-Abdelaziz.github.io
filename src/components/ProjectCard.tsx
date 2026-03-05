import React from 'react';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import { Project } from '../types';
import { cn } from '../lib/utils';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Safe defaults
  const tags = project.tags ?? [];

  const getStatusClasses = (status?: string) => {
    if (!status) {
      return 'px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-zinc-800 text-zinc-400 rounded border border-zinc-700';
    }
    const s = status.toLowerCase();
    if (s.includes('released') || s.includes('research') || s.includes('published')) {
      return 'px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-emerald-900 text-emerald-300 rounded border border-emerald-700';
    }
    if (s.includes('pilot') || s.includes('prototype') || s.includes('ongoing')) {
      return 'px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-amber-900 text-amber-300 rounded border border-amber-700';
    }
    if (s.includes('archiv') || s.includes('deprecated') || s.includes('completed')) {
      return 'px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-rose-900 text-rose-300 rounded border border-rose-700';
    }
    return 'px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-zinc-800 text-zinc-400 rounded border border-zinc-700';
  };

  return (
    <div className="group relative bg-brand-card border border-brand-border rounded-xl p-6 transition-all duration-300 hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/5">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-bold text-zinc-100 group-hover:text-brand-primary transition-colors">
          {project.title}
        </h3>
        <div className="flex gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-brand-primary transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-brand-primary transition-colors" aria-label="External link">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
        {project.description}
      </p>

      {/* Tags: only render when non-empty */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider bg-zinc-800 text-zinc-400 rounded border border-zinc-700">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between text-[11px] text-zinc-500 font-mono">
        {/* Date: render if present */}
        <div className="flex items-center">
          {project.date && (
            <>
              <Calendar size={12} className="mr-1.5" />
              <span>{project.date}</span>
            </>
          )}
          {/* Optionally show nothing or a placeholder when date is missing */}
        </div>

        {/* Status: render only when provided */}
        {project.status ? (
          <div
            role="status"
            aria-label={`Status: ${project.status}`}
            className={cn(getStatusClasses(project.status))}
            title={project.status}
          >
            {project.status}
          </div>
        ) : null}
      </div>
    </div>
  );
};