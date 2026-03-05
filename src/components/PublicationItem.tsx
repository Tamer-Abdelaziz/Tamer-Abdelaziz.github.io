import React from 'react';
import { FileText, ExternalLink, Download } from 'lucide-react';
import { Publication } from '../types';

interface PublicationItemProps {
  publication: Publication;
}

export const PublicationItem: React.FC<PublicationItemProps> = ({ publication }) => {
  return (
    <div className="py-8 border-b border-brand-border last:border-0">
      <div className="flex items-start gap-6">
        <div className="mt-1 p-3 bg-brand-primary/5 rounded-xl text-brand-primary">
          <FileText size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-zinc-100 mb-2 leading-tight">
            {publication.title}
          </h3>
          <p className="text-zinc-400 mb-3">
            {publication.authors.join(', ')}
          </p>
          <div className="flex items-center gap-3 text-sm font-mono text-zinc-500">
            <span className="text-brand-primary font-medium">{publication.venue}</span>
            <span className="text-zinc-700">•</span>
            <span>{publication.year}</span>
          </div>
          
          <div className="flex gap-6 mt-5">
            {publication.link && (
              <a href={publication.link} className="flex items-center text-sm font-medium text-zinc-500 hover:text-brand-primary transition-colors">
                <ExternalLink size={16} className="mr-2" />
                Publisher
              </a>
            )}
            {publication.pdf && (
              <a href={publication.pdf} className="flex items-center text-sm font-medium text-zinc-500 hover:text-brand-primary transition-colors">
                <Download size={16} className="mr-2" />
                PDF
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
