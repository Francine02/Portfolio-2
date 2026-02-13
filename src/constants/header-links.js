export const HEADER_LINKS = (language) => [
  { textKey: 'header.sobre', link: '#sobre' },
  { textKey: 'header.projetos', link: '#projetos' },
  { textKey: 'header.experiencias', link: '#experiencias' },
  { textKey: 'header.contato', link: '#contato' },
  {
    textKey: null,
    text: 'CV',
    link:
      language === 'pt'
        ? 'https://drive.google.com/file/d/17LYd4mqcplzEJboUBfEsu8p_3bDhkRQE/view?usp=sharing'
        : 'https://drive.google.com/file/d/1-aFHhkLRazmB0PRQQzv6rGc_-TeS-8F3/view?usp=sharing',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];
