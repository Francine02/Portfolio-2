import { FaJava } from 'react-icons/fa';
import {
  SiFlyway,
  SiPostgresql,
  SiSpringboot,
  SiSwagger,
} from 'react-icons/si';

import kandoImg from '/imgs/kando.png';
import receitotecaImg from '/imgs/receitoteca.png';

const receitoteca = {
  name: 'Receitoteca',
  img: receitotecaImg,
  repository: 'https://github.com/Francine02/Receitoteca',
  about: 'receitoteca',
  techs: [
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Swagger', icon: SiSwagger, color: '#85EA2D' },
  ],
};

const kando = {
  name: 'KanDo',
  img: kandoImg,
  repository: 'https://github.com/Francine02/KanDo/tree/main/backend',
  about: 'kando',
  techs: [
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Swagger', icon: SiSwagger, color: '#85EA2D' },
    { name: 'Flyway', icon: SiFlyway, color: '#FF0000' },
  ],
};

export const PROJECTS_BACK = [receitoteca, kando];
