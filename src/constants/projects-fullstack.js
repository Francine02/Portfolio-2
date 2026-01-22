import { FaJava } from 'react-icons/fa';
import {
  SiAxios,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si';

import controleImg from '/imgs/controle.png';
import mediImg from '/imgs/medi.png';

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

export const PROJECTS_FULLSTACK = [controleDespesas, medi];
