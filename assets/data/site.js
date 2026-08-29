/* =====================================================================
   SITE CONTENT — edit this file only.
   Everything on the page is generated from the objects below.
   No build step: save, commit, push.
   ===================================================================== */

const SITE = {

  /* ---------------------------------------------------------------- */
  profile: {
    name: "Tamer Abdelaziz",
    suffix: "Ph.D.",
    role: "Postdoctoral Associate",
    affiliation: "New York University Abu Dhabi",
    doctorate: "Ph.D., National University of Singapore",
    location: "Abu Dhabi, United Arab Emirates",
    tagline: "I work on blockchain security: screening contracts before they ship, judging transactions on the live network, and blocking attacks at the moment they execute.",
    // Drop a square photo at assets/img/profile.jpg. Until then a monogram shows.
    photo: "assets/img/profile.jpg",
    bio: [
      "I am a Postdoctoral Associate in the <a href='https://sanadlab.org/'>SANAD Lab</a> at New York University Abu Dhabi, where I work with Prof. Karim Ali on blockchain and smart contract security.",
      "My research focuses on using machine learning and program analysis to detect and prevent security threats in blockchain systems.",
      "<strong>Education.</strong> I hold a Ph.D. in Computer Science from the National University of Singapore, advised by Prof. Aquinas Hobor and Prof. Siau-Cheng Khoo, and B.Sc. and M.Sc. degrees in Computer Science from Helwan University, Egypt."
    ],
    links: [
      { label: "Email",   href: "mailto:tamer.m@nyu.edu",                                        icon: "mail"     },
      { label: "Scholar", href: "https://scholar.google.com/citations?user=BqqwRlgAAAAJ",        icon: "scholar"  },
      { label: "LinkedIn",href: "https://linkedin.com/in/dr-tamer-abdelaziz",                     icon: "linkedin" }
    ]
  },

  /* ---------------------------------------------------------------- */
  news: [
    { date: "Sep 2026",    html: "Two manuscripts under review: <strong>TxSentinel</strong>, a protocol-agnostic exploit detector, and the <strong>Security Authorization Framework</strong>, which turns detection into on-chain prevention." },
    { date: "Aug 2026",        html: "Serving as an internal reviewer for <strong>ICSE 2027</strong>." },
    { date: "June 2026",        html: "<strong>TxLens</strong> published at <strong>IEEE ICBC 2026</strong> — <a href='https://ieeexplore.ieee.org/document/11575464/'>real-time detection of malicious Ethereum transactions</a>." },
    { date: "Apr 2026",    html: "<strong>“Where Do Smart Contract Security Analyzers Fall Short?”</strong> presented at <strong>MSR 2026</strong> in Rio de Janeiro, and published in the <a href='https://dl.acm.org/doi/10.1145/3793302.3793338'>ACM Digital Library</a>." },
    { date: "Spring 2026", html: "Teaching assistant for <strong>CS-UH 3260 Static Program Analysis</strong> at NYU Abu Dhabi (also Spring 2025)." },
    { date: "Nov 2025",        html: "Artifact Reviewer for <strong>ACM SIGPLAN PLDI 2025</strong>; paper reviewer for <strong>ACM TOSEM</strong>." },
    { date: "Oct 2025",        html: "Presented <em>Proactive Defense: Real-Time Detection of Malicious Ethereum Transactions</em> at NYUAD Research Institute Day." }
  ],

  /* ---------------------------------------------------------------- */

  researchStatement: {
  vision: "Blockchains hold software-controlled assets at a scale where a single malicious transaction can drain a protocol, with no authority able to reverse it. Detection alone is not enough: it can raise the alarm only after an attack is already underway, and private relays or faster execution can leave no time to respond. My research moves the security decision earlier. Before a sensitive call executes, the transaction should be analyzed and explicitly authorized, making security a requirement for execution rather than a race to stop an attack. The same authorization point can also enforce rules for tokenized real-world assets, including custody, transfer restrictions, and investor eligibility, directly at the time of transfer.",

  principles: [
  { h: "Prevention over Detection", b: "Instead of reporting an attack after it begins, I build systems that decide whether a transaction should execute at all." },
  { h: "Learning at Chain Scale", b: "Precise analysis is often too expensive for the scale of public blockchains, so I use machine learning to reproduce security judgments where traditional analysis cannot keep up." },
  { h: "Protocol-Agnostic Defense", b: "A defense should not depend on contract history, known attack classes, or hand-built protocol models to protect newly deployed and previously unseen systems." },
  { h: "Security and Regulation at One Gate", b: "The same authorization mechanism that blocks malicious transactions can enforce custody, transfer, and eligibility rules for tokenized real-world assets." },
  { h: "Evaluation on Unseen Incidents", b: "Security results are meaningful only when models are tested on genuinely unseen incidents, so I build carefully curated benchmarks that remain disjoint from training and model selection." }
  ]
  },


  /* Six stages of one research program; each tied to a real output.        */
  arc: [
    { label: "Detect",     blurb: "Screen vulnerable code before it ever reaches the chain.", ref: "USENIX Security 2023", state: "published" },
    { label: "Measure",    blurb: "Map the gap between the bugs analyzers catch and the ones attackers use.",         ref: "MSR 2026",            state: "published" },
    { label: "Monitor",    blurb: "Move the perimeter onto the live network, at mempool latency.", ref: "IEEE ICBC 2026", state: "published" },
    { label: "Generalize", blurb: "Judge a transaction with no prior knowledge of the contract.", ref: "TxSentinel",      state: "review" },
    { label: "Prevent",    blurb: "Make the contract refuse the attack at execution.",        ref: "SAF",                 state: "review" },
    { label: "Govern",     blurb: "Enforce regulation on tokenized assets, continuously.",    ref: "In progress",         state: "ongoing" }
  ],

  themes: [
    { title: "Runtime security for programmable finance",
      body: "A general layer that decides what a transaction is about to do and enforces that decision before irreversible state changes occur." },
    { title: "Machine learning on execution semantics",
      body: "Representations built from execution traces, bytecode, and control flow, so models generalize on program behavior instead of surface statistics." },
    { title: "Cryptographic enforcement",
      body: "Authorization protocols that certify a safety verdict about the call itself, deployable with the cryptography Ethereum already runs." },
    { title: "Adversarial robustness",
      body: "The moment a model decides whether a transaction runs, fooling it becomes worth an attacker's time. Robustness stops being a number in a table and turns into a deployment requirement." },
    { title: "Automated repair with guarantees",
      body: "Reporting a flaw leaves the actual work to someone else, and an unchecked patch is only a second guess. What interests me is what a repair should have to prove about itself before anyone deploys it." },
    { title: "Compliance by construction",
      body: "Regulators usually learn about a violation only once it has settled. Written so a machine can read them, the same rules could be checked while the transaction is still deciding whether to run." }
  ],

  /* ---------------------------------------------------------------- */
  opportunities: {
    intro: "I am interested in working with students and collaborators on blockchain and smart contract security, program analysis, and machine learning applied to security problems. Most of my projects sit where a learned model has to produce something a system can act on.",
    directions: [
      "Runtime detection and prevention of malicious transactions on EVM chains.",
      "Automated repair of vulnerable contracts, with the patch verified rather than assumed.",
      "Adversarial robustness for models that gate execution, and machine-checkable regulatory compliance."
    ],
    fit: "Students who do well on these projects tend to be comfortable reading code that was not written for them, careful about evaluation, and willing to reproduce an attack before trying to stop it. Experience with program analysis, deep learning, or Solidity helps, but I have supervised people who arrived with none of the three.",
    cta: "Discuss research"
  },

  /* ---------------------------------------------------------------- */
  projects: [
    { name: "Provable Smart-Contract Repair", status: "Prototype", tags: ["Repair", "Formal methods"],
      body: "Patches synthesized automatically and then checked with an SMT solver, so a fix is known to keep the contract's intended behavior and not to blow up its gas cost. Evaluated against what human developers actually wrote." },
    { name: "Adversarially Robust Detection for Blockchain ML", status: "In progress", tags: ["Robustness", "Machine learning"],
      body: "Certified-robust embeddings paired with adversarially regularized temporal graph networks, evaluated against evasion rather than assumed to withstand it. The models ship with an adversarial benchmark so other groups can attack them too." },
    { name: "Cross-Chain Contagion and Risk Simulation", status: "In progress", tags: ["Simulation", "Systemic risk"],
      body: "A temporal-graph simulator quantifying how exploits propagate across chains and the systemic risk they create, which is the measurement layer regulators and institutions currently lack." },
    { name: "RWA Tokenization: Security and Regulation Enforcement", status: "In progress", tags: ["Governance", "Compliance"],
      body: "Custody limits, transfer restrictions, and investor eligibility encoded as policy the SAF Gateway can evaluate, so a non-compliant transfer is refused on the same path that refuses an exploit. Aimed at the virtual-asset regimes now forming across the Gulf." }
  ],

  /* ---------------------------------------------------------------- */
  /* type: conference | journal | review | preprint | thesis           */
  publications: [
    {
      type: "review", year: 2026, selected: true,
      title: "Contract-Enforced Security Authorization: Stopping DeFi Exploits Before They Execute",
      authors: ["Tamer Abdelaziz", "Karim Ali"],
      venue: "Under review", venueShort: "Under review",
      note: "Introduces Security Authorization, realized as the Security Authorization Framework (SAF). Before a sensitive function will run, the caller must present proof that a trusted analyzer looked at this exact call and approved it. An off-chain Authorization Service issues that proof as a short-lived Execution Permit; an on-chain Authorization Gateway checks it. A call without one reverts, whichever route it took to the chain.",
      links: [], bibtex:
`@unpublished{abdelaziz2026saf,
  author = {Tamer Abdelaziz and Karim Ali},
  title  = {Contract-Enforced Security Authorization: Stopping DeFi Exploits Before They Execute},
  year   = {2026},
  note   = {Under review}
}`
    },
    {
      type: "review", year: 2026, selected: true,
      title: "TxSentinel: Protocol-Agnostic Exploit Detection on EVM Blockchains",
      authors: ["Tamer Abdelaziz", "Karim Ali"],
      venue: "Under review", venueShort: "Under review",
      note: "Judges a transaction from the trace of that transaction alone. Nothing has to be known about the contract in advance, and no catalogue of attack types is assumed, so a contract deployed yesterday is as readable as an established one. It also transfers across EVM chains.",
      links: [], bibtex:
`@unpublished{abdelaziz2026txsentinel,
  author = {Tamer Abdelaziz and Karim Ali},
  title  = {TxSentinel: Protocol-Agnostic Exploit Detection on {EVM} Blockchains},
  year   = {2026},
  note   = {Under review}
}`
    },
    {
      type: "conference", year: 2026, selected: true,
      title: "Where Do Smart Contract Security Analyzers Fall Short?",
      authors: ["Tamer Abdelaziz", "Salma Alsaghir", "Karim Ali"],
      venue: "23rd International Conference on Mining Software Repositories (MSR 2026)",
      note: "An empirical study of how the widely used analyzers behave on real incidents, and of the gap between the bugs they are built to catch and the ones attackers actually use.",
      venueShort: "MSR 2026",
      links: [
        { label: "ACM DL", href: "https://dl.acm.org/doi/10.1145/3793302.3793338" },
        { label: "arXiv",  href: "https://arxiv.org/abs/2603.00890" },
        { label: "Conference", href: "https://2026.msrconf.org/details/msr-2026-technical-papers/5/Where-Do-Smart-Contract-Security-Analyzers-Fall-Short-" }
      ],
      bibtex:
`@inproceedings{abdelaziz2026analyzers,
  author    = {Tamer Abdelaziz and Salma Alsaghir and Karim Ali},
  title     = {Where Do Smart Contract Security Analyzers Fall Short?},
  booktitle = {23rd International Conference on Mining Software Repositories (MSR)},
  year      = {2026}
}`
    },
    {
      type: "conference", year: 2026, selected: true,
      title: "TxLens: Scalable Real-Time Detection of Malicious Ethereum Transactions",
      authors: ["Tamer Abdelaziz", "Karim Ali"],
      venue: "8th IEEE International Conference on Blockchain and Cryptocurrency (ICBC 2026)",
      note: "Reads a pending Ethereum transaction while it is still in the mempool, simulates it, and classifies the resulting trace against exploit patterns taken from past incidents.",
      venueShort: "IEEE ICBC 2026",
      links: [{ label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/document/11575464/" }],
      bibtex:
`@inproceedings{abdelaziz2026txlens,
  author    = {Tamer Abdelaziz and Karim Ali},
  title     = {TxLens: Scalable Real-Time Detection of Malicious {Ethereum} Transactions},
  booktitle = {8th IEEE International Conference on Blockchain and Cryptocurrency (ICBC)},
  year      = {2026}
}`
    },
    {
      type: "preprint", year: 2026, selected: true,
      title: "Smart Contract Security Beyond Detection",
      authors: ["Tamer Abdelaziz"],
      venue: "arXiv:2605.09124", venueShort: "arXiv",
      note: "Solo-authored research agenda: foundation-model semantics, repair with formal guarantees, adversarial robustness, and real-time exploit detection.",
      links: [
        { label: "arXiv", href: "https://arxiv.org/abs/2605.09124" },
        { label: "PDF",   href: "https://arxiv.org/pdf/2605.09124" }
      ],
      bibtex:
`@misc{abdelaziz2026beyond,
  author = {Tamer Abdelaziz},
  title  = {Smart Contract Security Beyond Detection},
  year   = {2026},
  note   = {arXiv:2605.09124}
}`
    },
    {
      type: "conference", year: 2023, selected: true,
      title: "Smart Learning to Find Dumb Contracts",
      authors: ["Tamer Abdelaziz", "Aquinas Hobor"],
      venue: "32nd USENIX Security Symposium, pp. 1775–1792",
      venueShort: "USENIX Security 2023",
      note: "Trains neural networks using rigorous program analyzers as teachers, so the models reproduce analyzer judgments directly from EVM bytecode and answer orders of magnitude faster. Datasets and benchmarks released publicly.",
      links: [
        { label: "USENIX",   href: "https://www.usenix.org/conference/usenixsecurity23/presentation/abdelaziz" },
        { label: "PDF",      href: "https://www.usenix.org/system/files/usenixsecurity23-abdelaziz.pdf" },
        { label: "Artifact appendix", href: "https://www.usenix.org/system/files/usenixsecurity23-appendix-abdelaziz.pdf" },
        { label: "Extended version",  href: "https://doi.org/10.48550/arXiv.2304.10726" }
      ],
      bibtex:
`@inproceedings{abdelaziz2023dlva,
  author    = {Tamer Abdelaziz and Aquinas Hobor},
  title     = {Smart Learning to Find Dumb Contracts},
  booktitle = {32nd USENIX Security Symposium},
  pages     = {1775--1792},
  year      = {2023}
}`
    },
    {
      type: "preprint", year: 2023,
      title: "Smart Learning to Find Dumb Contracts (Extended Version)",
      authors: ["Tamer Abdelaziz", "Aquinas Hobor"],
      venue: "arXiv:2304.10726", venueShort: "arXiv",
      note: "Extended version of the USENIX Security 2023 paper, with the full evaluation and additional analysis.",
      links: [
        { label: "arXiv", href: "https://arxiv.org/abs/2304.10726" },
        { label: "PDF",   href: "https://arxiv.org/pdf/2304.10726" }
      ],
      bibtex:
`@misc{abdelaziz2023dlvaextended,
  author = {Tamer Abdelaziz and Aquinas Hobor},
  title  = {Smart Learning to Find Dumb Contracts (Extended Version)},
  year   = {2023},
  note   = {arXiv:2304.10726}
}`
    },
    {
      type: "artifact", year: 2023,
      title: "USENIX Security 2023 Artifact Appendix: Smart Learning to Find Dumb Contracts",
      authors: ["Tamer Abdelaziz", "Aquinas Hobor"],
      venue: "Published with the proceedings of the 32nd USENIX Security Symposium",
      venueShort: "USENIX Artifact",
      note: "The artifact accompanying the USENIX Security 2023 paper: submitted, evaluated, and badged by the artifact evaluation committee.",
      links: [{ label: "Artifact appendix", href: "https://www.usenix.org/system/files/usenixsecurity23-appendix-abdelaziz.pdf" }],
      bibtex: ""
    },
    {
      type: "conference", year: 2023,
      title: "Schooling to Exploit Foolish Contracts",
      authors: ["Tamer Abdelaziz", "Aquinas Hobor"],
      venue: "5th International Conference on Blockchain Computing and Applications (BCCA 2023), IEEE, pp. 388–395",
      venueShort: "BCCA 2023",
      note: "Shifts the target from vulnerability to exploitability, since a flaw nobody can reach costs nothing and one that can be reached costs everything.",
      links: [{ label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/document/10338924" }],
      bibtex:
`@inproceedings{abdelaziz2023schooling,
  author    = {Tamer Abdelaziz and Aquinas Hobor},
  title     = {Schooling to Exploit Foolish Contracts},
  booktitle = {5th International Conference on Blockchain Computing and Applications (BCCA)},
  pages     = {388--395},
  year      = {2023}
}`
    },
    {
      type: "thesis", year: 2023,
      title: "Towards Secure Smart Contracts: A Deep Learning Approach for Detecting Security Threats",
      authors: ["Tamer Abdelaziz"],
      venue: "Ph.D. Thesis, National University of Singapore · ScholarBank@NUS: 10635/247301", venueShort: "Ph.D. Thesis",
      note: "Consolidates the deep-learning approach to detecting smart contract security threats that I developed during the doctorate.",
      links: [{ label: "ScholarBank", href: "https://scholarbank.nus.edu.sg/handle/10635/247301" }],
      bibtex:
`@phdthesis{abdelaziz2023thesis,
  author = {Tamer Abdelaziz},
  title  = {Towards Secure Smart Contracts: A Deep Learning Approach for Detecting Security Threats},
  school = {National University of Singapore},
  year   = {2023}
}`
    },
    {
      type: "journal", year: 2019,
      title: "Identification and Assessment of Software Design Pattern Violations",
      authors: ["Tamer Abdelaziz", "Aya Sedky Adly", "Bruno Rossi", "Mostafa-Sami M. Mostafa"],
      venue: "FCAI Informatics Bulletin, 1(2):6–13", venueShort: "Informatics Bulletin",
      note: "Automated identification and assessment of software design pattern violations, from my M.Sc. work at Helwan University.",
      links: [{ label: "Journal", href: "https://fcihib.journals.ekb.eg/article_107517.html?lang=en" }],
      bibtex:
`@article{abdelaziz2019patterns,
  author  = {Tamer Abdelaziz and Aya Sedky Adly and Bruno Rossi and Mostafa-Sami M. Mostafa},
  title   = {Identification and Assessment of Software Design Pattern Violations},
  journal = {FCAI Informatics Bulletin},
  volume  = {1}, number = {2}, pages = {6--13}, year = {2019}
}`
    }
  ],

  /* ---------------------------------------------------------------- */
  /* ---------------------------------------------------------------- */
  experience: [
    { role: "Postdoctoral Associate", org: "SANAD Lab, New York University Abu Dhabi", where: "Abu Dhabi, UAE", when: "2024 – Present",
      points: [
        "Research on the security of blockchain ecosystems, with Prof. Karim Ali.",
        "Built TxLens (IEEE ICBC 2026) and TxSentinel; introduced Security Authorization and the SAF framework.",
        "Supervise three undergraduate research assistants; secondary advisor on three to four capstone and graduation projects each year."
      ] },
    { role: "Research Scholar", org: "School of Computing, National University of Singapore", where: "Singapore", when: "2019 – 2023",
      points: ["Thesis work on detecting vulnerabilities in deployed smart contracts, advised by Prof. Aquinas Hobor and Prof. Siau-Cheng Khoo. The core results appeared at USENIX Security 2023."] },
    { role: "Teaching Assistant", org: "Department of Computer Science, Helwan University", where: "Cairo, Egypt", when: "2014 – 2018",
      points: ["Labs, tutorials, and assessment across the undergraduate curriculum; supervised graduation projects."] }
  ],

  education: [
    { degree: "Ph.D. in Computer Science", org: "National University of Singapore", when: "2019 – 2023",
      points: ["Advisors: Prof. Aquinas Hobor and Prof. Siau-Cheng Khoo.", "Core thesis work published at USENIX Security 2023."] },
    { degree: "M.Sc. in Computer Science", org: "Helwan University, Cairo, Egypt", when: "2015 – 2018",
      points: ["Supervisor: Prof. Mostafa-Sami M. Mostafa."] },
    { degree: "Visiting Researcher (Erasmus+)", org: "Faculty of Informatics, Masaryk University, Czech Republic", when: "2017",
      points: ["Advisor: Prof. Bruno Rossi."] },
    { degree: "B.Sc. in Computer Science", org: "Helwan University, Cairo, Egypt", when: "2009 – 2013", points: [] }
  ],

  /* ---------------------------------------------------------------- */
  teaching: [
    { course: "CS-UH 3260 — Static Program Analysis", org: "NYU Abu Dhabi", when: "Spring 2025, Spring 2026", role: "Teaching Assistant",
      body: "Lab materials and assignments; supervised course projects analyzing real-world codebases." },
    { course: "Compiler Design · Programming Languages · Formal Verification · Blockchain Security", org: "National University of Singapore", when: "2019 – 2023", role: "Teaching Assistant",
      body: "Lectured recitations, designed assignments and exams, mentored graduate and undergraduate project teams." },
    { course: "Undergraduate CS curriculum", org: "Helwan University", when: "2014 – 2018", role: "Teaching Assistant",
      body: "C, C++, Java, Python, OOP, design patterns, data structures, compilers, software engineering, automated testing." }
  ],

  awards: [
    { year: "2018", title: "Singapore International Graduate Award (SINGA) Scholarship", org: "National University of Singapore" },
    { year: "2017", title: "Erasmus+ Programme Scholarship", org: "Masaryk University, Czech Republic" },
    { year: "2016", title: "Top Graduate Student Award", org: "Helwan University" },
    { year: "2013", title: "Top Undergraduate Student Award", org: "Helwan University" }
  ],

  service: [
    "Internal Reviewer, International Conference on Software Engineering (ICSE 2027)",
    "Artifact Reviewer, ACM SIGPLAN PLDI 2025",
    "Paper Reviewer, ACM Transactions on Software Engineering and Methodology (TOSEM), 2025",
    "Member, IEEE and ACM",
    "Open science: every paper I publish ships with its datasets, benchmarks, or code, and the USENIX Security 2023 artifact was formally evaluated"
  ],

  contact: {
    email: "tamer.m@nyu.edu",
    emailSubject: "Research inquiry",
    office: "SANAD Lab, Computer Science, New York University Abu Dhabi",
    city: "Saadiyat Island, Abu Dhabi, United Arab Emirates",
    blurb: "Student inquiries, collaborations, and protocols you would like a second pair of eyes on are all welcome. I read everything that arrives."
  }
};
