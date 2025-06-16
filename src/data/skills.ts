export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "C", icon: "SiC" },
      { name: "C++", icon: "SiCplusplus" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Python", icon: "SiPython" },
      { name: "Bash", icon: "SiBash" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "SiReact" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "HTML5", icon: "SiHtml5" },
      { name: "CSS3", icon: "SiCss3" },
    ],
  },
  {
    title: "Backend & Frameworks",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Django", icon: "SiDjango" },
      { name: "Express", icon: "SiExpress" },
    ],
  },
  {
    title: "Design",
    skills: [
      { name: "Figma", icon: "SiFigma" },
      { name: "UI/UX Design", icon: "SiFramer" },
      { name: "Responsive Design", icon: "SiMaterialdesign" },
      { name: "Wireframing", icon: "SiSketch" },
      { name: "Prototyping", icon: "SiInvision" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "Docker", icon: "SiDocker" },
      { name: "GDB", icon: "SiGnu" },
      { name: "Vite", icon: "SiVite" },
      { name: "Makefile", icon: "SiGnumake" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "REST APIs", icon: "SiPostman" },
      { name: "WebSockets", icon: "SiSocketdotio" },
      { name: "Authentication", icon: "SiAuth0" },
      { name: "CI/CD", icon: "SiGithubactions" },
    ],
  },
];