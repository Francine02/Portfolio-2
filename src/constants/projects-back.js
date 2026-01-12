import kandoImg from '../../public/imgs/kando.png';
import receitotecaImg from '../../public/imgs/receitoteca.png';

const receitoteca = {
  id: 6,
  name: 'Receitoteca',
  img: receitotecaImg,
  repository: 'https://github.com/Francine02/Receitoteca',
  about: 'receitoteca',
};

const kando = {
  id: 7,
  name: 'KanDo',
  img: kandoImg,
  repository: 'https://github.com/Francine02/KanDo/tree/main/backend',
  about: 'kando',
};

export const PROJECTS_BACK = [receitoteca, kando];
