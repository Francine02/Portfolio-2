import converImg from '../../public/imgs/conver.png';
import lectifyImg from '../../public/imgs/lectify.png';
import quicklistImg from '../../public/imgs/quicklist.png';

const conver = {
  id: 3,
  name: 'Conver',
  img: converImg,
  deploy: 'https://conver-taupe.vercel.app/',
  repository: 'https://github.com/Francine02/Conver',
  about: 'conver',
};

const quicklist = {
  id: 4,
  name: 'Quicklist',
  img: quicklistImg,
  deploy: 'https://francine02.github.io/Quicklist-Rocketseat/',
  repository: 'https://github.com/Francine02/Quicklist-Rocketseat',
  about: 'quicklist',
};

const lectify = {
  id: 5,
  name: 'Lectify',
  img: lectifyImg,
  deploy: 'https://lectify.vercel.app/',
  repository: 'https://github.com/Francine02/Lectify',
  about: 'lectify',
};

export const PROJECTS_FRONT = [conver, quicklist, lectify];
