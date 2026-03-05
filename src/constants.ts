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
  },

  {
    id: '4',
    title: 'Adversarial Stress-Testing for Analyzers',
    description: 'Mutation-based adversarial benchmark and harness for systematic stress-testing of smart-contract analyzers; provides a failure-mode taxonomy and public leaderboard.',
    link: 'projects/StressTesting2026.pdf',
    status: 'Research; benchmark and harness released'
  },

  {
    id: '5',
    title: 'EVM-FM: Semantic Foundation Model',
    description: 'EVM-native multimodal foundation model (bytecode, CFG, execution trace) for semantic vulnerability detection and exploit synthesis; datasets and checkpoints provided.',
    link: 'projects/FM2026.pdf',
    status: 'Research; models and checkpoints released'
  },

  {
    id: '6',
    title: 'Cross-Chain Contagion & Risk Simulation',
    description: 'Multi-layer temporal-graph simulator for cross-chain exploit propagation and systemic risk quantification; includes an exposure API for scenario analysis.',
    link: 'projects/CrossChain2026.pdf',
    status: 'Research; simulator and API planned'
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
    id: 't0',
    course: 'Object-Oriented Programming Using Java (Arabic) [Link](https://www.udemy.com/course/object-oriented-programming-using-java-in-arabic/)',
    role: 'Instructor',
    institution: 'Udemy',
    period: '2017',
    description: 'Recorded and published an online course covering object-oriented programming concepts using Java, including classes, inheritance, polymorphism, and practical software development examples.'
  },
  {
    id: 't1',
    course: 'Multiple undergraduate courses (Programming & Software Engineering)',
    role: 'Teaching Assistant',
    institution: 'Helwan University',
    period: 'Apr 2014 – Jul 2018',
    description: 'Supported delivery of a broad undergraduate curriculum including C, C++, Java, Python; object-oriented programming, design patterns, data structures, compilers, software engineering, and automated testing. Responsibilities included running labs, grading, tutoring, and supervising student projects.'
  },
  {
    id: 't2',
    course: 'Compiler Design; Programming Languages; Formal Verification; Blockchain Security',
    role: 'Teaching Assistant',
    institution: 'National University of Singapore (NUS)',
    period: '2019 – 2023',
    description: 'TA for graduate and undergraduate courses covering compiler construction, PL principles, and formal verification (Coq, theorem provers, K Framework), as well as blockchain security. Activities included lecturing recitations, designing assignments and exams, mentoring project teams, and holding office hours.'
  },
  {
    id: 't3',
    course: 'CS-UH 3260: Static Program Analysis',
    role: 'Teaching Assistant',
    institution: 'New York University Abu Dhabi (NYUAD)',
    period: 'Spring 2025; Spring 2026',
    description: 'Supported the Static Program Analysis course by preparing lab materials, developing practical assignments, assisting with lectures and grading, and supervising student projects focused on program analysis techniques for real-world codebases.'
  }
];

export const ACADEMIC_SERVICES: AcademicService[] = [
  {
    id: 's1',
    role: 'Artifact Reviewer',
    venue: 'ACM SIGPLAN PLDI(Conference on Programming Language Design and Implementation)',
    year: 2025,
    type: 'Artifact Review'
  },
  {
    id: 's2',
    role: 'Paper Reviewer',
    venue: 'ACM TOSEM (Transactions on Software Engineering and Methodology)',
    year: 2025,
    type: 'Reviewer'
  }
];