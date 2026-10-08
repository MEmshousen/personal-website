/**
 * ════════════════════════════════════════════════════════════════
 *  EDIT YOUR WHOLE SITE FROM THIS ONE FILE.
 *  Change text here, save, and the page updates. No other file
 *  needs to be touched for content changes.
 * ════════════════════════════════════════════════════════════════
 */

export const site = {
  // Which design visitors get: 'dossier', 'signal' or 'afterglow'.
  // While running `npm run dev` a switcher at the bottom of the page lets
  // you compare all three; any page also accepts ?design=<id> in the URL.
  design: 'afterglow',
  designs: [
    { id: 'dossier', name: 'Dossier', note: 'Light editorial case file' },
    { id: 'signal', name: 'Signal', note: 'Dark technical instrument' },
    { id: 'afterglow', name: 'Afterglow', note: 'Warm dark, soft and bold' },
  ],
};

export const profile = {
  name: 'Madison Emshousen',
  // Current job. Shown in the hero, the browser tab and search results.
  title: 'Insider Threat Investigator',
  employer: 'Allstate',
  // Longer-running disciplines, shown alongside the job title.
  disciplines: 'Data Analyst & ML Engineer',
  // Rotates one-by-one in the hero headline.
  roles: [
    'Insider Threat Investigations',
    'Data Analysis',
    'ML Engineering',
    'Security & Investigations',
    'Python + SQL',
  ],
  tagline:
    'I build machine learning pipelines that protect real assets, turning messy data into evidence, intelligence, and decisions.',
  location: 'Houston, Texas · Remote',
  links: {
    github: 'https://github.com/MEmshousen',
    linkedin: 'https://www.linkedin.com/in/madison-emshousen',
  },
  // Portrait in the hero. File lives in /public; a 4:5 crop works best.
  photo: 'madison-emshousen.jpg',
  // File lives in /public. Replace it any time you update your CV.
  resume: 'Madison-Emshousen-Resume.pdf',
};

export const about = {
  heading: 'About',
  // Each string is its own paragraph.
  paragraphs: [
    `I'm an Insider Threat Investigator at Allstate, where I follow risky activity
     across endpoint, identity, and data-loss signals to work out what actually
     happened. Before that I was a Data Analyst and ML Engineer on Meta's Global
     Security & Investigations organization, where my pipelines tracked and helped
     recover over $200M in lost and stolen hardware, and my forensic SQL work connected
     repeat offenders across separate break-in events that looked unrelated on paper.`,

    `I came to security from the engineering side. I hold a B.S. in Computer Science
     with a minor in Mathematics from the University of Houston, and I spent two years
     teaching programming one-on-one to 50+ students before moving into investigations.
     That combination of rigorous math, real engineering, and a lot of practice explaining
     hard things clearly is what I bring to every case.`,

    `As a woman in security, I care about leaving the door open behind me. I led
     CodeCoogs, and I'm now Director of Marketing and a mentor at the Computer Science
     Association at Houston City College, where I help run workshops that connect people
     early in their careers with the industry.`,
  ],
  stats: [
    { value: 200, prefix: '$', suffix: 'M+', label: 'Assets tracked & recovered' },
    { value: 50, suffix: '+', label: 'Students taught 1:1' },
    { value: 11, suffix: '', label: 'Languages shipped in' },
    { value: 1, suffix: 'st', label: 'Place, CodeRed Hackathon' },
  ],
};

export const skills = {
  heading: 'Skills & Certifications',
  groups: [
    {
      name: 'Security & Investigations',
      icon: 'shield',
      items: [
        'Insider Threat', 'Digital Forensics', 'Data Loss Prevention',
        'Fraud Detection', 'Incident Response', 'OSINT', 'Chain of Custody',
        'Threat Analysis',
      ],
    },
    {
      name: 'Machine Learning / AI',
      icon: 'brain',
      items: [
        'Machine Learning', 'Large Language Models', 'Predictive Modeling',
        'Anomaly Detection', 'NLP', 'MLOps',
      ],
    },
    {
      name: 'Languages',
      icon: 'code',
      items: ['Python', 'SQL', 'KQL', 'PowerShell', 'C++', 'Java', 'JavaScript', 'C#', 'R', 'Lua', 'HTML'],
    },
    {
      name: 'Data & Analytics',
      icon: 'chart',
      items: [
        'ETL Pipelines', 'Data Engineering', 'Dashboard Development',
        'Data Visualization', 'Pandas', 'Matplotlib',
      ],
    },
    {
      name: 'Databases',
      icon: 'database',
      items: ['Advanced SQL', 'RDBMS', 'Query Optimization', 'Indexing'],
    },
    {
      name: 'Tools & Platforms',
      icon: 'tool',
      items: [
        'CrowdStrike Falcon', 'Microsoft Purview', 'Microsoft Defender',
        'Microsoft Intune', 'Microsoft Entra ID', 'Power Automate',
        'Jupyter', 'Git / GitHub', 'React.js', 'Tableau & BI', 'Agile',
      ],
    },
  ],
  /**
   * Add certifications as you earn them, e.g.
   *   { name: 'CompTIA Security+', issuer: 'CompTIA', year: '2026', url: '' }
   * For one you're still working toward, use `status` instead of `year`.
   * Leave the array empty and this block hides itself automatically.
   */
  certifications: [
    { name: 'CompTIA Security+', issuer: 'CompTIA', status: 'In progress' },
  ],
};

export const experience = {
  heading: 'Experience',
  items: [
    {
      role: 'Insider Threat Investigator',
      org: 'Allstate',
      start: 'Aug 2026',
      end: 'Present',
      current: true,
      bullets: [
        'Investigate potential insider threats, including data exfiltration, policy violations, and misuse of access, from the first alert through to documented findings.',
        'Correlate endpoint telemetry from CrowdStrike Falcon and Microsoft Defender with Microsoft Purview data-loss and insider-risk signals to reconstruct what a user did, and when.',
        'Write KQL queries to hunt across sign-in, device, and data-movement logs, and turn recurring questions into reusable detections.',
        'Use Microsoft Entra ID and Intune to confirm identity, access, and device posture during an investigation.',
        'Automate evidence collection and case triage with PowerShell and Power Automate, removing repetitive manual steps.',
        'Write up findings with a clear chain of evidence for HR, legal, and security leadership.',
      ],
      tags: ['KQL', 'PowerShell', 'CrowdStrike', 'Microsoft Purview', 'Defender', 'Entra ID', 'Intune', 'Power Automate'],
    },
    {
      role: 'Data Analyst, Investigation Enablement',
      org: 'Control Risks @ Meta',
      meta: 'Global Security & Investigations',
      start: 'Oct 2024',
      end: 'Aug 2026',
      location: 'Remote',
      bullets: [
        'Engineered end-to-end ML pipelines in Python and SQL to track and recover over $200M in lost and stolen Meta devices, enabling real-time asset recovery and reducing financial exposure at enterprise scale.',
        'Conducted forensic SQL investigations into organized retail theft, identifying repeat offenders across multiple break-in events by cross-referencing behavioral patterns and transaction records.',
        'Designed and deployed LLM-powered dashboards to surface trends and generate actionable intelligence, cutting manual analyst review time and improving investigative throughput.',
        'Automated data collection and investigative workflows with custom Python scripts, eliminating repetitive manual processes and accelerating case resolution.',
        'Partnered with legal, security operations, and engineering to ship scalable, data-driven solutions supporting global investigations.',
        'Presented findings and intelligence reports to senior stakeholders, driving decisions on asset protection strategy.',
      ],
      tags: ['Python', 'SQL', 'LLMs', 'Digital Forensics', 'ETL'],
    },
    {
      role: 'Computer Science Instructor',
      org: 'CodaKid',
      meta: '1:1 instruction, 50+ students',
      start: 'Oct 2022',
      end: 'Oct 2024',
      location: 'Remote',
      bullets: [
        'Delivered personalized 1:1 computer science instruction to 50+ students across all skill levels, specializing in game development with Python, C#, Lua, Java, HTML, and JavaScript.',
        'Designed adaptive curriculum and lesson plans tailored to individual learning styles, achieving consistent improvement in student performance metrics.',
        'Tracked progress and delivered detailed post-session reports, enabling data-driven optimization of learning outcomes.',
      ],
      tags: ['Python', 'C#', 'Java', 'Lua', 'Teaching'],
    },
    {
      role: 'B.S. Computer Science, Minor in Mathematics',
      org: 'University of Houston',
      meta: 'Class of 2024 · Houston, Texas',
      start: 'Aug 2020',
      end: 'May 2024',
      location: 'Houston, TX',
      education: true,
      bullets: [
        'Relevant coursework: Data Structures & Algorithms (C++), Digital Image Processing (Python), Data Science I & II (Python, R), Cybersecurity (Python), Databases (C#, React.js, SQL).',
        'CodeCoogs Team Lead (2024): led a student software engineering organization. Member 2022 to 2024.',
        'Cougar CS member; Freshman Interest Group Ambassador.',
      ],
      tags: ['Algorithms', 'Data Science', 'Cybersecurity', 'Mathematics'],
    },
    {
      role: 'Director of Marketing & Mentor, Computer Science Association',
      org: 'Houston City College',
      meta: 'Volunteer',
      start: 'Aug 2025',
      end: 'Present',
      location: 'Houston, TX',
      volunteer: true,
      bullets: [
        'Hosted HackHCC: CodeRunners with the association, the first hackathon in Houston City College history.',
        'Now organizing the second, HackHCC: CTRL+Z.',
        'Lead marketing for the association, promoting its events and workshops to students across campus.',
        'Mentor students in CS fundamentals and help organize workshops connecting peers with industry professionals.',
      ],
      tags: ['Hackathons', 'Marketing', 'Mentorship', 'Community'],
    },
  ],
};

export const wip = {
  heading: 'Work in progress',
  // What you're building right now. Swap this out when the next thing starts.
  title: 'All In',
  status: 'In progress',
  // File lives in /public.
  image: 'all-in-icon.png',
  summary:
    'A card-combat roguelike set in a casino. Every fight is a hand of cards against the House: draw seven, play up to five, and the order you play them in is the skill.',
  role:
    'I draw the game: card faces, boss portraits, backdrops, and the opening story frames, plus the screens that put them in front of the player.',
  meta: 'Started at HackRice 16 · Team of three · Sept 2026',
  stack: ['Rust', 'Bevy', 'Game art'],
  links: [{ label: 'View on GitHub', url: 'https://github.com/jpierre-7/all-in' }],
};

export const projects = {
  heading: 'Projects',
  blurb: 'Things I built to answer a question, win a weekend, or scratch an itch.',
  items: [
    {
      title: 'CodeRed Hackathon Winner',
      year: '2025',
      stack: ['Python', 'ML'],
      summary:
        'First place at the University of Houston CodeRed hackathon. Built and pitched a working product under a hard deadline alongside a small team.',
      links: [],
      featured: true,
    },
    {
      title: 'Online Music Database',
      year: '2024',
      stack: ['SQL', 'Java', 'React.js'],
      summary:
        'A scalable RDBMS with an optimized backend supporting music playback, playlist management, and user interaction. Applied advanced indexing and query-optimization techniques to hold performance under load.',
      links: [],
    },
    {
      title: 'Project Helios',
      year: '2023',
      stack: ['Python', 'Matplotlib', 'Data Viz'],
      summary:
        'Led a data visualization and analysis project processing solar flare datasets to uncover temporal trends, delivering interactive visual reports with actionable insights.',
      links: [],
    },
  ],
};

export const hobbies = {
  heading: 'Off the clock',
  blurb: 'What I do when the laptop is closed.',
  // `id` picks the illustration: 'music', 'crochet' or 'reading'.
  items: [
    {
      id: 'music',
      name: 'Music',
      note: 'Something is almost always playing while I work.',
    },
    {
      id: 'crochet',
      name: 'Crochet',
      note: 'Slow, repetitive, and nothing like a screen. Good for thinking a problem through.',
    },
    {
      id: 'reading',
      name: 'Reading',
      note: 'Usually a book on the go. Recommendations welcome.',
    },
  ],
  /**
   * Paste a Spotify link to show a player in the Music card, e.g.
   *   'https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M'
   * Playlist, album, artist and track links all work. Leave it empty
   * and the card shows the animated equaliser on its own.
   */
  spotify: '',
};

export const contact = {
  heading: "Let's talk",
  blurb:
    "I'm always glad to hear about security, ML, and data work, or to talk with someone early in their career who wants in.",
};
