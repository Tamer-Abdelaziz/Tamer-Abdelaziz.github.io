import React from 'react';
import { Award, CheckCircle2, Users, Settings } from 'lucide-react';
import { AcademicService } from '../types';
import { cn } from '../lib/utils';

interface ServiceItemProps {
  service: AcademicService;
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
  const getIcon = () => {
    switch (service.type) {
      case 'Program Committee': return <Users size={16} />;
      case 'Reviewer': return <CheckCircle2 size={16} />;
      case 'Organization': return <Settings size={16} />;
      default: return <Award size={16} />;
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-brand-card border border-brand-border rounded-xl hover:border-brand-primary/30 transition-colors">
      <div className="flex items-center gap-4">
        <div className={cn(
          "p-2 rounded-lg",
          service.type === 'Program Committee' ? "bg-indigo-500/10 text-indigo-400" : "bg-brand-primary/10 text-brand-primary"
        )}>
          {getIcon()}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-zinc-100">{service.role}</h4>
          <p className="text-xs text-zinc-500">{service.venue}</p>
        </div>
      </div>
      <div className="text-xs font-mono text-zinc-500">
        {service.year}
      </div>
    </div>
  );
};
