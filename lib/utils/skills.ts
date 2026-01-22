
export const getTechLogoUrl = (techName: string): string => {
  const techMap: { [key: string]: string } = {
    "React JS": "https://cdn.simpleicons.org/react/white",
    "Next JS": "https://cdn.simpleicons.org/nextdotjs/white",
    "Vite JS": "https://cdn.simpleicons.org/vite/white",
    "Inertia JS": "https://inertiajs.com/images/inertia-logo.svg",
    "jQuery": "https://cdn.simpleicons.org/jquery/white",
    "Tailwind ": "https://cdn.simpleicons.org/tailwindcss/white",
    "Bootstrap": "https://cdn.simpleicons.org/bootstrap/white",
    "Laravel": "https://cdn.simpleicons.org/laravel/white",
    "Node JS": "https://cdn.simpleicons.org/nodedotjs/white",
    "Express JS": "https://cdn.simpleicons.org/express/white",
    "Nest JS": "https://cdn.simpleicons.org/nestjs/white",
    "MySQL": "https://cdn.simpleicons.org/mysql/white",
    "Oracle": "https://cdn.jsdelivr.net/gh/callback-io/allogo@main/public/logos/oracle/icon.svg",
    "PostgreSQL": "https://cdn.simpleicons.org/postgresql/white",
    "MongoDB": "https://cdn.simpleicons.org/mongodb/white",
    "Git": "https://cdn.simpleicons.org/git/white",
    "GitHub": "https://cdn.simpleicons.org/github/white",
    "Postman": "https://cdn.simpleicons.org/postman/white",
    "Laragon": "https://cdn.simpleicons.org/laragon/white",
  };


  const simpleIconName = techName.toLowerCase().replace(/\s+/g, "").replace("js", "");
  return techMap[techName] || `https://cdn.simpleicons.org/${simpleIconName}/white`;
};

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  color: string;
  description?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Modern UI/UX development",
    skills: [
      { name: "React JS", level: 90 },
      { name: "Next JS", level: 85 },
      { name: "Vite JS", level: 80 },
      { name: "Inertia JS", level: 75 },
      { name: "jQuery", level: 70 },
      { name: "Tailwind ", level: 95 },
      { name: "Bootstrap", level: 85 },
    ],
    color: "from-white/5 to-white/10",
  },
  {
    title: "Backend",
    description: "Server-side development",
    skills: [
      { name: "Laravel", level: 90 },
      { name: "Node JS", level: 85 },
      { name: "Express JS", level: 80 },
      { name: "Nest JS", level: 75 },
    ],
    color: "from-white/5 to-white/10",
  },
  {
    title: "Database",
    description: "Data management systems",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "Oracle", level: 75 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 70 },
    ],
    color: "from-white/5 to-white/10",
  },
  {
    title: "Tools",
    description: "Development & collaboration",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 95 },
      { name: "Postman", level: 85 },
      { name: "Laragon", level: 80 },
    ],
    color: "from-white/5 to-white/10",
  },
];

