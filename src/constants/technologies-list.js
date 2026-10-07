import { FaPhp } from 'react-icons/fa';
import {
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiInertia,
  SiInsomnia,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiZod
} from 'react-icons/si';

export const TECHNOLOGIES_LIST = [
  {
    category: 'Front-end',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Inertia.js', icon: SiInertia, color: '#9553E9' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', icon: SiCss3, color: '#1572B6' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'TailwindCSS', icon: SiTailwindcss, color: '#00B9FF' },
    ],
  },
  {
    category: 'Back-end',
    technologies: [
      { name: 'PHP', icon: FaPhp, color: '#777BB4' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#000000' },
      { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    ],
  },
  {
    category: 'Ferramentas',
    technologies: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Insomnia', icon: SiInsomnia, color: '#4000BF' },
      { name: 'Swagger', icon: SiSwagger, color: '#85EA2D' },
      { name: 'Zod', icon: SiZod, color: '#3E67B1' },
    ],
  },
];