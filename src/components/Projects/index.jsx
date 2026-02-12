import { Radio } from '@components/Radio/index';
import { TitleWithFlowers } from '@components/TitleSection/TitleWithFlowers';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ProjectsList } from './ProjectsList';

export function Projects() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(0);

  return (
    <motion.section
      className="pt-24 container"
      id="projetos"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <TitleWithFlowers
        className="dark:text-white"
        title={t('projetos.titulo')}
      />

      <motion.div
        className="padding mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p className="mb-5 text-sm italic">Obs.: {t('projetos.obs')}</p>

        <Radio selected={selected} setSelected={setSelected} />
        <ProjectsList selected={selected} />
      </motion.div>
    </motion.section>
  );
}
