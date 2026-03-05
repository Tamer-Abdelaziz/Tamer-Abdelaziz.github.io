import { Project, Publication, SecurityAudit, TeachingExperience, AcademicService } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Provable Smart-Contract Repair',
    description: 'Automated synthesis + SMT-based verification to produce gas-aware, semantically-preserving smart-contract patches. Includes a repair pipeline, verified-patch corpus, and evaluation vs. human repairs.',
    link: 'projects/RepairSC2026.pdf',
    status: 'Prototype — seeking collaborators'
  },

  {
    id: '2',
    title: 'Real-Time Mempool Exploit Detection',
    description: 'Two-stage streaming detector (sketch filters + temporal GNN/transformer) for multi-transaction exploits at mempool scale, prioritizing adversarial robustness and low-latency deployment.',
    link: 'projects/RealTimeTX2026.pdf',
    status: 'Pilot — red-team evaluation ongoing'
  },

  {
    id: '3',
    title: 'Adversarial-Robust Detection for Blockchain ML',
    description: 'Unified framework combining certified-robust embeddings and adversarially-regularized temporal GNNs, with model checkpoints, an adversarial benchmark, and deployment tooling.',
    link: 'projects/AdversarialML2026.pdf',
    status: 'Research — models & benchmark released'
  }
];


export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: 'Where Do Smart Contract Security Analyzers Fall Short?',
    authors: ['Tamer Abdelaziz', 'Salma Alsaghir', 'Karim Ali'],
    venue: '23rd International Mining Software Repositories Conference (MSR 2026)',
    year: 2026,
    link: 'https://2026.msrconf.org/details/msr-2026-technical-papers/5/Where-Do-Smart-Contract-Security-Analyzers-Fall-Short-',
    pdf: 'papers/TamerMSR2026.pdf'
  },
  {
    id: 'p2',
    title: 'Proactive Defense: Real-Time Detection of Malicious Ethereum Transactions',
    authors: ['Tamer Abdelaziz', 'Karim Ali'],
    venue: 'Research Institute Day (Poster), New York University Abu Dhabi (NYUAD)',
    year: 2025,
    link: 'papers/ProactiveDefense:Real-TimeDetectionofMaliciousEthereumTransactions.pdf',
    pdf: 'papers/ProactiveDefense:Real-TimeDetectionofMaliciousEthereumTransactions.pdf'
  },
  {
    id: 'p3',
    title: 'Towards Secure Smart Contracts: A Deep Learning Approach for Detecting Security Threats',
    authors: ['Tamer Abdelaziz'],
    venue: 'Ph.D. Thesis, National University of Singapore (ScholarBank@NUS)',
    year: 2023,
    link: 'https://scholarbank.nus.edu.sg/handle/10635/247301',
    pdf: 'papers/Tamer_Abdelaziz___Thesis.pdf'
  },
  {
    id: 'p4',
    title: 'Smart Learning to Find Dumb Contracts',
    authors: ['Tamer Abdelaziz', 'Aquinas Hobor'],
    venue: '32nd USENIX Security Symposium (USENIX Security 2023)',
    year: 2023,
    link: 'https://www.usenix.org/conference/usenixsecurity23/presentation/abdelaziz',
    pdf: 'papers/DLVA_Paper_Ref_3.pdf'
  },
  {
    id: 'p5',
    title: 'Smart Learning to Find Dumb Contracts (Extended Version)',
    authors: ['Tamer Abdelaziz', 'Aquinas Hobor'],
    venue: 'arXiv preprint arXiv:2304.10726 (extended version)',
    year: 2023,
    link: 'https://doi.org/10.48550/arXiv.2304.10726',
    pdf: 'papers/DLVA_Paper_Ref_4.pdf'
  },
  {
    id: 'p6',
    title: 'Schooling to Exploit Foolish Contracts',
    authors: ['Tamer Abdelaziz', 'Aquinas Hobor'],
    venue: '2023 Fifth International Conference on Blockchain Computing and Applications (BCCA)',
    year: 2023,
    link: 'https://ieeexplore.ieee.org/document/10338924',
    pdf: 'https://doi.org/10.48550/arXiv.2304.10737'
  },
  {
    id: 'p7',
    title: 'Identification and Assessment of Software Design Pattern Violations',
    authors: ['Tamer Abdelaziz', 'Aya Sedky Adly', 'Bruno Rossi', 'Mostafa-Sami M. Mostafa'],
    venue: 'FCAI Informatics Bulletin Journal, Vol. 1, Issue 2',
    year: 2019,
    link: 'https://fcihib.journals.ekb.eg/article_107517.html?lang=en',
    pdf: 'https://fcihib.journals.ekb.eg/article_107517_62d89752f7d871844b0e5dd1601da4f5.pdf'
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
