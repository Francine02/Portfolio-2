import {
  SiAxios,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

import converImg from '/imgs/conver.png';
import lectifyImg from '/imgs/lectify.png';
import lectify1Img from '/imgs/lectify1.png';
import quicklistImg from '/imgs/quicklist.png';

const conver = {
  name: 'Conver',
  img: converImg,
  deploy: 'https://conver-taupe.vercel.app/',
  repository: 'https://github.com/Francine02/Conver',
  about: 'conver',
  demo: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7257427737840078850?collapsed=1',
  techs: [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Vite', icon: SiVite, color: '#7952B3' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#00B9FF' },
  ],
};

const quicklist = {
  name: 'Quicklist',
  img: quicklistImg,
  deploy: 'https://francine02.github.io/Quicklist-Rocketseat/',
  repository: 'https://github.com/Francine02/Quicklist-Rocketseat',
  about: 'quicklist',
  demo: '/videos/quicklist.mp4',
  techs: [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: SiCss3, color: '#1572B6' },
  ],
};

const lectify1 = {
  name: 'Lectify - V.1',
  img: lectify1Img,
  repository: 'https://github.com/Francine02/Lectify/tree/v1',
  about: 'lectify',
  demo: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7312509759415377921?collapsed=1',
  techs: [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next', icon: SiNextdotjs, color: '#606060' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#00B9FF' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Axios', icon: SiAxios, color: '#00B9FF' },
  ],
};

const lectify = {
  name: 'Lectify - V.2',
  img: lectifyImg,
  deploy: 'https://lectify.vercel.app/',
  repository: 'https://github.com/Francine02/Lectify',
  about: 'lectify2',
  techs: [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next', icon: SiNextdotjs, color: '#606060' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#00B9FF' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Axios', icon: SiAxios, color: '#00B9FF' },
  ],
};

export const PROJECTS_FRONT = [conver, quicklist, lectify1, lectify];
