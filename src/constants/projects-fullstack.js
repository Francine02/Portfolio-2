import controleImg from '/imgs/controle.png';
import mediImg from '/imgs/medi.png';

const medi = {
  name: 'Medi',
  img: mediImg,
  deploy: 'https://medi-five-fawn.vercel.app/',
  repository: 'https://github.com/Francine02/Medi',
  about: 'medi',
};

const controleDespesas = {
  name: 'Controle de Despesas',
  img: controleImg,
  deploy: 'https://controle-de-despesas-umber.vercel.app',
  repository: 'https://github.com/Francine02/Controle-de-Despesas',
  about: 'controleDespesas',
};

export const PROJECTS_FULLSTACK = [controleDespesas, medi];
