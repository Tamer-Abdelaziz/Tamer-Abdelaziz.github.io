export interface Project {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
  github?: string;
  date?: string;
  status: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  link?: string;
  pdf?: string;
  abstract?: string;
}

export interface SecurityAudit {
  id: string;
  project: string;
  date: string;
  reportUrl: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
}

export interface TeachingExperience {
  id: string;
  course: string;
  role: string;
  institution: string;
  period: string;
  description?: string;
}

export interface AcademicService {
  id: string;
  role: string;
  venue: string;
  year: string | number;
  type: 'Program Committee' | 'Reviewer' | 'Organization' | 'Other';
}
