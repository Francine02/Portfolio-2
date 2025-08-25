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
        ? '/CV - Francine Cruz-pt.pdf'
        : '/CV - Francine Cruz-en.pdf',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];
