import { TitleWithFlowers } from '@components/TitleSection/TitleWithFlowers';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Timeline } from './Timeline';
import { Toggle } from './Toggle';

export function Experiences() {
  const { t } = useTranslation();

  const [viewMode, setViewMode] = useState(false);

  return (
    <motion.section
      id="experiencias"
      className="section-gray"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
    >
      <div className="container">
        <div className="flex flex-col items-start space-y-5 sm:space-y-0 sm:flex-row sm:justify-around sm:items-center">
          <TitleWithFlowers
            id="contact-title"
            className="dark:text-white"
            title={t('header.experiencias')}
          />
          <Toggle viewMode={viewMode} setViewMode={setViewMode} />
        </div>

        <div className="padding">
          <Timeline viewMode={viewMode} />
        </div>
      </div>
    </motion.section>
  );
}
