import { TitleWithFlowers } from '@components/TitleSection/TitleWithFlowers';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { Content } from './Content/index';

export function Contact() {
  const { t } = useTranslation();

  return (
    <motion.section
      className="container pt-24"
      id="contato"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <TitleWithFlowers
        className="dark:text-white"
        title={t('header.contato')}
      />

      <motion.div
        className="padding"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Content />
      </motion.div>
    </motion.section>
  );
}
