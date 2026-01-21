import { FaJava } from 'react-icons/fa';
import {
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiInsomnia,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export const TECHNOLOGIES_LIST = [
  {
    category: 'Front-end',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#606060' },
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', icon: SiCss3, color: '#1572B6' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'TailwindCSS', icon: SiTailwindcss, color: '#00B9FF' },
    ],
  },
  {
    category: 'Back-end',
    technologies: [
      { name: 'Java', icon: FaJava, color: '#007396' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Docker', icon: SiDocker, color: '#0088ff' },
    ],
  },
  {
    category: 'Ferramentas',
    technologies: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#606060' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Insomnia', icon: SiInsomnia, color: '#4000BF' },
      { name: 'Swagger', icon: SiSwagger, color: '#85EA2D' },
    ],
  },
];
