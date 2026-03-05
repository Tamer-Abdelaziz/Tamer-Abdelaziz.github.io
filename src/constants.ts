import { Project, Publication, SecurityAudit, TeachingExperience, AcademicService } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'DeFi Vulnerability Scanner',
    description: 'A static analysis tool for detecting common reentrancy and logic flaws in Solidity smart contracts.',
    tags: ['Solidity', 'Static Analysis', 'Security'],
    github: 'https://github.com/example/defi-scanner',
    date: '2023-10'
  },
  {
    id: '2',
    title: 'Flash Loan Attack Simulator',
    description: 'A tool to simulate complex flash loan attacks on local mainnet forks to test protocol resilience.',
    tags: ['EVM', 'Foundry', 'DeFi'],
    github: 'https://github.com/example/flash-simulator',
    date: '2023-05'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: 'Formal Verification of Cross-Chain Bridge Protocols',
    authors: ['John Doe', 'Jane Smith'],
    venue: 'IEEE Symposium on Security and Privacy',
    year: 2024,
    link: '#',
    pdf: '#'
  },
  {
    id: 'p2',
    title: 'Analyzing MEV Extraction Strategies in L2 Rollups',
    authors: ['John Doe'],
    venue: 'Blockchain Security Conference',
    year: 2023,
    link: '#'
  }
];

export const AUDITS: SecurityAudit[] = [
  {
    id: 'a1',
    project: 'LiquidStaking Protocol',
    date: '2024-01',
    reportUrl: '#',
    severity: 'High'
  },
  {
    id: 'a2',
    project: 'DEX Aggregator V3',
    date: '2023-11',
    reportUrl: '#',
    severity: 'Medium'
  }
];

export const TEACHING: TeachingExperience[] = [
  {
    id: 't1',
    course: 'CS-GY 9223: Blockchain and Cryptocurrencies',
    role: 'Guest Lecturer',
    institution: 'NYU Tandon School of Engineering',
    period: 'Spring 2024',
    description: 'Lectured on smart contract security patterns and common EVM vulnerabilities.'
  },
  {
    id: 't2',
    course: 'Introduction to Cybersecurity',
    role: 'Teaching Assistant',
    institution: 'New York University',
    period: 'Fall 2023'
  }
];

export const ACADEMIC_SERVICES: AcademicService[] = [
  {
    id: 's1',
    role: 'Program Committee Member',
    venue: 'IEEE S&P (Oakland) Shadow PC',
    year: 2024,
    type: 'Program Committee'
  },
  {
    id: 's2',
    role: 'External Reviewer',
    venue: 'USENIX Security Symposium',
    year: 2023,
    type: 'Reviewer'
  },
  {
    id: 's3',
    role: 'Reviewer',
    venue: 'ACM Conference on Computer and Communications Security (CCS)',
    year: 2023,
    type: 'Reviewer'
  }
];
