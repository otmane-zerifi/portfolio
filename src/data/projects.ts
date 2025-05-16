export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Vendor Risk Dashboard",
    description: "An interactive dashboard to monitor and manage vendor risk assessment, featuring comprehensive analytics, charts, and visual risk scoring.",
    image: "/dashboard.png",
    tags: ["React", "Tailwind CSS", "Recharts", "TypeScript"],
    githubUrl: "https://github.com/otmane-zerifi/SecureGuard",
    liveUrl: "https://secure-guard-two.vercel.app/"
  },
  {
    id: 2,
    title: "Cub3D",
    description: "A real-time 3D raycaster implemented in C, inspired by Wolfenstein 3D. Features texture mapping, sprite rendering, and collision detection.",
    image: "https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["C", "Raycasting", "3D Graphics", "Game Development"],
    githubUrl: "https://github.com/otmanezrifi/cub3d"
  },
  {
    id: 3,
    title: "IRC Server",
    description: "A multi-client IRC server implementation in C using epoll for efficient I/O multiplexing. Supports channels, private messaging, and user commands.",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["C", "Networking", "epoll", "Socket Programming"],
    githubUrl: "https://github.com/otmane-zerifi/irc"
  },
  {
    id: 4,
    title: "Transcendence",
    description: "A full-stack web application featuring real-time multiplayer Pong game with chat, user authentication, and profile management.",
    image: "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Django", "WebSockets", "PostgreSQL", "JavaScript"],
    githubUrl: "https://github.com/otmanezrifi/transcendence",
    liveUrl: "https://transcendence-pong.vercel.app"
  }
];