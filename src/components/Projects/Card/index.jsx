import { motion } from 'framer-motion';
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
    <motion.article
      layout
      className="bg-gray-100 dark:bg-neutral-800 rounded-lg w-80 max-w-80 p-3 mx-auto flex flex-col h-full"
      whileHover={{
        boxShadow: '0px 20px 40px rgba(0,0,0,0.15)',
      }}
      transition={{ duration: 0.3 }}
      viewport={{ amount: 0.3, once: true }}
    >
      <Header title={title} img={img} techs={techs} demo={demo} />

      <motion.p
        className="mt-2 text-sm font-light"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        {t('projetos.sobre.' + description)}
      </motion.p>

      <Footer siteUrl={siteUrl} githubUrl={githubUrl} />
    </motion.article>
  );
}
