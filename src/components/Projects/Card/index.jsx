import { useTranslation } from 'react-i18next';

import { Footer } from './Footer';
import { Header } from './Header';

export function Card({
  siteUrl,
  githubUrl,
  description,
  title,
  img,
  techs,
  demo,
}) {
  const { t } = useTranslation();

  return (
    <article className="bg-gray-100 dark:bg-neutral-800 rounded-lg w-80 max-w-80 p-3 mx-auto flex flex-col">
      <Header title={title} img={img} techs={techs} demo={demo} />
      <p className="mt-2 text-sm font-light">
        {t('projetos.sobre.' + description)}
      </p>

      <Footer siteUrl={siteUrl} githubUrl={githubUrl} />
    </article>
  );
}
