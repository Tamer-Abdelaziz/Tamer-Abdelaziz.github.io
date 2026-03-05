import React from 'react';
import { GraduationCap, MapPin, ExternalLink } from 'lucide-react';
import { TeachingExperience } from '../types';

interface TeachingItemProps {
  teaching: TeachingExperience;
}

export const TeachingItem: React.FC<TeachingItemProps> = ({ teaching }) => {
  return (
    <div className="py-6 border-b border-brand-border last:border-0">
      <div className="flex items-start gap-4">
        <div className="mt-1 p-2 bg-zinc-800 rounded-lg text-brand-primary">
          <GraduationCap size={20} />
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">

            {/* Course title with optional link */}
            <h3 className="text-lg font-medium text-zinc-100 flex items-center gap-2">
              {teaching.link ? (
                <a
                  href={teaching.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-primary transition-colors flex items-center gap-1"
                >
                  {teaching.course}
                  <ExternalLink size={14} />
                </a>
              ) : (
                teaching.course
              )}
            </h3>

            <span className="text-xs font-mono text-brand-primary bg-brand-primary/10 px-2 py-1 rounded border border-brand-primary/20 self-start md:self-center">
              {teaching.period}
            </span>
          </div>

          <p className="text-sm text-zinc-300 font-medium mb-1">
            {teaching.role}
          </p>

          <div className="flex items-center text-xs text-zinc-500 mb-3">
            <MapPin size={12} className="mr-1" />
            {teaching.institution}
          </div>

          {teaching.description && (
            <p className="text-sm text-zinc-400 leading-relaxed italic">
              "{teaching.description}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
};