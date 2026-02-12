import { AuroraText } from '@components/Magic-UI/AuroraText';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function Title() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="flex flex-col items-center text-center text-text-light dark:text-text-dark pb-10 md:pb-0 z-10"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      <h1 className="text-hero-title font-black px-4">
        {t('hero.apresentacao')}
        <AuroraText>Francine Cruz.</AuroraText>
      </h1>

      <motion.div
        className="flex items-center gap-1.5 text-subtitle font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3>—{t('hero.titulo')} FullStack—</h3>
      </motion.div>
    </motion.div>
  );
}
