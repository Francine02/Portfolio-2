import { FaJava } from 'react-icons/fa';
import {
  SiAxios,
  SiDocker,
  SiExpress,
  SiGit,
  SiInertia,
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiZod
} from 'react-icons/si';

import bancoDeHorasImg from '/imgs/banco-de-horas.png';
import controleImg from '/imgs/controle.png';
import mediImg from '/imgs/medi.png';
import sitemarkImg from '/imgs/sitemark.png';

const timeOff = {
  name: 'Banco de Horas e Férias',
  img: bancoDeHorasImg,
  about: 'bancoDeHoras',
  demo: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7495609367325749248',
  techs: [
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
    { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Inertia.js', icon: SiInertia, color: '#9553E9' },
    { name: 'Vite', icon: SiVite, color: '#646CFF' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Zod', icon: SiZod, color: '#3E67B1' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
  ],
};

const sitemark = {
  name: 'Sitemark',
  img: sitemarkImg,
  repository: 'https://github.com/Francine02/Sitemark',
  about: 'sitemark',
  demo: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7462973785990848513',
  techs: [
    { name: 'PHP', icon: SiPhp, color: '#777BB4' },
    { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
    { name: 'Blade', icon: SiLaravel, color: '#FF2D20' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  ],
};

const medi = {
  name: 'Medi',
  img: mediImg,
  deploy: 'https://medi-five-fawn.vercel.app/',
  repository: 'https://github.com/Francine02/Medi',
  about: 'medi',
  demo: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7251701291750449153?collapsed=1',
  techs: [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Vite', icon: SiVite, color: '#7952B3' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#00B9FF' },
    { name: 'Axios', icon: SiAxios, color: '#00B9FF' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Docker', icon: SiDocker, color: '#0088ff' },
  ],
};

const controleDespesas = {
  name: 'Controle de Despesas',
  img: controleImg,
  deploy: 'https://controle-de-despesas-umber.vercel.app',
  repository: 'https://github.com/Francine02/Controle-de-Despesas',
  about: 'controleDespesas',
  demo: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7231757276162715648?collapsed=1',
  techs: [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Vite', icon: SiVite, color: '#7952B3' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#00B9FF' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  ],
};

export const PROJECTS_FULLSTACK = [timeOff, sitemark, controleDespesas, medi];
