export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
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
    image: "./cub.png",
    tags: ["C", "Raycasting", "3D Graphics", "Game Development"],
    githubUrl: "https://github.com/otmane-zerifi/cub3"
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
    title: "Pong Game",
    description: "A full-stack web application featuring real-time multiplayer Pong game with chat, user authentication, and profile management.",
    image: "https://www.shutterstock.com/shutterstock/videos/1108728369/thumb/1.jpg?ip=x480",
    tags: ["Django", "WebSockets", "PostgreSQL", "JavaScript"],
    githubUrl: "https://github.com/otmane-zerifi/transcendence",
    liveUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7297704665062735873"
  },
  {
    id: 5,
    title: "Inception",
    description: "A comprehensive DevOps project implementing a complete web infrastructure using Docker containers. Features WordPress, MariaDB, and NGINX with custom configurations, SSL, and volume management.",
    image: "https://www.incredibuild.com/wp-content/uploads/2024/12/21.-Docker-101.png",
    tags: ["Docker", "Docker-Compose", "WordPress", "MariaDB", "NGINX", "DevOps"],
    githubUrl: "https://github.com/otmane-zerifi/inception"
  },
  {
    id: 6,
    title: "ZSeller",
    description: "A responsive e-commerce web application built using React and deployed on Vercel. The platform showcases products in a clean, mobile-friendly UI, allowing users to browse stock items efficiently. Features modern frontend architecture with dynamic routing and fast loading via modern bundling tools.",
    image: "/e-com.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Vercel"],
    liveUrl: "https://family-business-ecommerce.vercel.app"
  }
];