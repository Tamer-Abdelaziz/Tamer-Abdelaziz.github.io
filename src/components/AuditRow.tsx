import React from 'react';
import { Shield } from 'lucide-react';
import { SecurityAudit } from '../types';
import { cn } from '../lib/utils';

interface AuditRowProps {
  audit: SecurityAudit;
}

export const AuditRow: React.FC<AuditRowProps> = ({ audit }) => {
  const getSeverityStyles = (severity: SecurityAudit['severity']) => {
    switch (severity) {
      case 'Critical': return 'text-red-500 bg-red-500/10 border-red-500/20';
      case 'High': return 'text-orange-500 bg-orange-500/10 border-orange-500/20';
      case 'Medium': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      case 'Low': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      default: return 'text-zinc-500 bg-zinc-500/10 border-zinc-500/20';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-brand-border rounded-lg items-center hover:bg-zinc-900/50 transition-colors">
      <div className="flex items-center gap-3">
        <Shield className="text-brand-primary" size={18} />
        <span className="font-medium text-zinc-100">{audit.project}</span>
      </div>
      <div className="text-sm text-zinc-500 font-mono">
        {audit.date}
      </div>
      <div>
        <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold uppercase border", getSeverityStyles(audit.severity))}>
          {audit.severity} Risk
        </span>
      </div>
      <div className="md:text-right">
        <a 
          href={audit.reportUrl} 
          className="text-xs text-brand-primary hover:underline font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Report →
        </a>
      </div>
    </div>
  );
};
