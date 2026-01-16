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
};

const quicklist = {
  name: 'Quicklist',
  img: quicklistImg,
  deploy: 'https://francine02.github.io/Quicklist-Rocketseat/',
  repository: 'https://github.com/Francine02/Quicklist-Rocketseat',
  about: 'quicklist',
};

const lectify1 = {
  name: 'Lectify - V.1',
  img: lectify1Img,
  repository: 'https://github.com/Francine02/Lectify/tree/v1',
  about: 'lectify',
};

const lectify = {
  name: 'Lectify - V.2',
  img: lectifyImg,
  deploy: 'https://lectify.vercel.app/',
  repository: 'https://github.com/Francine02/Lectify',
  about: 'lectify2',
};

export const PROJECTS_FRONT = [conver, quicklist, lectify1, lectify];
