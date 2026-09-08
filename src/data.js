// Content derived from Vedant's resume. Edit this one file to update
// anything on the site — every section reads from here.

export const profile = {
  name: 'Vedant Bulbule',
  role: 'Software Engineer | AI/ML & Full-Stack Developer',
  location: 'Pune, India',
  tagline:
    "I build agentic AI systems and the full-stack products around them — from RAG pipelines and LangGraph workflows to the React interfaces and FastAPI backends that ship them.",
  summary:
    'Results-driven Computer Science undergraduate with hands-on experience in AI/ML development, agentic AI systems, and full-stack engineering. Proficient in FastAPI, LangChain, LangGraph, and Python backend development, with a strong DSA foundation (450+ problems solved on LeetCode). Maintains a 9.45 CGPA while leading AI/ML initiatives and building production-style, end-to-end applications.',
  email: 'bulbulevedant05@gmail.com',
  phone: '+91-9130912390',
  links: {
    github: 'https://github.com/Vedantbulbule1223',
    linkedin: 'https://www.linkedin.com/in/vedant-bulbule-aiml/',
    leetcode: 'https://leetcode.com/',
  },
  availability: 'Open for freelance & contract work',
}

export const education = [
  {
    school: 'Padmabhooshan Vasantdada Patil Institute of Technology (PVPIT), Pune',
    degree: 'B.E, Computer Engineering — CGPA 9.45 / 10',
    period: 'Jul 2022 – Jun 2026',
  },
  {
    school: 'MJP College, Sambhajinagar',
    degree: 'HSC — 90%',
    period: 'Aug 2021 – Jul 2022',
  },
  {
    school: 'LWES School, Sambhajinagar (CBSE)',
    degree: '10th — 85.80%',
    period: 'Completed Jul 2020',
  },
]

export const skillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'C++', 'Java', 'JavaScript'],
  },
  {
    label: 'AI / Agentic AI',
    items: [
      'Agentic AI',
      'LangChain',
      'LangGraph',
      'FastAPI',
      'RAG',
      'FAISS',
      'Qdrant',
      'SentenceTransformers',
      'Google Gemini',
      'TensorFlow',
      'Transformers',
      'Generative AI',
      'vLLM',
      'llama.cpp',
    ],
  },
  {
    label: 'Data Science',
    items: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Streamlit',
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
    ],
  },
  {
    label: 'Web Development',
    items: ['React.js', 'FastAPI', 'REST APIs', 'HTML5', 'CSS3', 'MySQL', 'MongoDB', 'Firebase'],
  },
  {
    label: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Postman', 'SQLite', 'VS Code', 'Antigravity', 'AWS'],
  },
]

export const experience = [
  {
    role: 'Software Developer Intern',
    org: 'Prerelix Research LLP',
    period: 'Aug 2026 – Present',
    points: [
      'Working on GenAI feature implementation and end-to-end application development, including testing, as part of the core product engineering team.',
      'Participate in brainstorming sessions to design and implement AI orchestration workflows spanning multiple agentic components.',
      'Contributing to data privacy model development to secure sensitive data across AI pipelines.',
    ],
  },
  {
    role: 'Technical & AI/ML Lead',
    org: 'Call of Code Coding Club',
    period: 'Sep 2023 – Jun 2026',
    points: [
      'Architected AI-powered full-stack apps integrating LangChain LLM pipelines with FastAPI for real-time query processing; built LangGraph agentic workflows that cut manual intervention by 40%.',
      'Built and integrated secure, scalable REST APIs across a microservices architecture; applied graph traversal, DP and optimized search to improve performance.',
      'Led a team of 5 in hackathons including Smart India Hackathon (SIH), guiding solution development from ideation to implementation; built ML/data pipelines and React.js frontends.',
    ],
  },
]

export const projects = [
  {
    id: 'argo-float',
    name: 'ARGO Float Data Visualization & AI Chat System',
    coords: '19.07°N 72.87°E',
    summary:
      'AI-powered ocean data analytics platform using Google Gemini + LangChain for natural-language querying over large-scale scientific ARGO float datasets.',
    details: [
      'Semantic search with SentenceTransformer embeddings over a Qdrant vector database, with date-range filtering for context-aware retrieval.',
      'FastAPI backend exposing RESTful endpoints with a SQLite caching layer.',
      'Streamlit geospatial dashboard visualizing depth-wise salinity and temperature trends with Pandas and NumPy.',
    ],
    tech: ['Python', 'FastAPI', 'LangChain', 'Streamlit', 'Qdrant', 'SentenceTransformers', 'Gemini', 'SQLite', 'Pandas', 'NumPy'],
    repo: 'https://github.com/Vedantbulbule1223/agro-float',
    status: 'shipped',
  },
  {
    id: 'healthcare-system',
    name: 'Healthcare Management System',
    coords: '18.52°N 73.85°E',
    summary:
      'Full-stack healthcare platform for patient data management, appointment scheduling and emergency hospital location — built with a 4-person team.',
    details: [
      'Secure, authenticated REST API architecture using FastAPI, with MongoDB data models for patient records.',
      'Firebase for real-time updates across the app.',
      'Real-time hospital locator using geolocation APIs to find the nearest facility during emergencies.',
    ],
    tech: ['React.js', 'FastAPI', 'MongoDB', 'Firebase', 'REST APIs'],
    repo: 'https://github.com/Vedantbulbule1223/summer-project',
    status: 'shipped',
  },
  {
    id: 'ai-research-agent',
    name: 'AI Agent Research',
    coords: '00.00° 00.00°',
    summary:
      'Autonomous AI agent architectures exploring agentic reasoning, planning and tool-use for complex task automation.',
    details: [
      'Multi-step agent workflows leveraging LLM-driven decision-making, memory and iterative tool invocation.',
      'Benchmarked agent orchestration frameworks and reasoning strategies for task decomposition and autonomous execution.',
    ],
    tech: ['Python', 'LangChain', 'LangGraph', 'LLM Agents', 'Agentic AI'],
    repo: 'https://github.com/Vedantbulbule1223/AI_research_agent',
    status: 'research',
  },
  {
    id: 'ai-checker',
    name: 'AI Checker',
    coords: '—',
    summary: 'A TypeScript utility for detecting AI-generated content.',
    details: ['Actively maintained — see the repository for current scope and usage.'],
    tech: ['TypeScript'],
    repo: 'https://github.com/Vedantbulbule1223/ai-checker',
    status: 'active',
  },
]

export const certifications = [
  'Agentic AI Certified Foundations Associate',
  'LangChain Academy Certificate',
  'Advanced Course in Emerging Technologies — ML, Deep Learning, Computer Vision (SAP & Edunet Foundation, Code Unnati)',
  'The Ultimate Job Ready Data Science Course — Data Analysis, ML, Real-World Problem Solving',
  'Python for Absolute Beginners — Core Python Programming & Scripting',
]

export const coreCompetencies = [
  'Team Collaboration',
  'Analytical Problem Solving',
  'Communication',
  'Adaptability',
  'Agile Development',
  'Leadership',
]

export const dsa = {
  count: 450,
  label: 'problems solved on LeetCode',
  topics: ['Arrays', 'Strings', 'Linked Lists', 'Trees', 'Graphs', 'Dynamic Programming', 'Sorting & Searching'],
}
