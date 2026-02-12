import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function About({ experience, viewMode }) {
  const { t } = useTranslation();

  const baseKey = `experiencias.${experience.title}`;

  return (
    <motion.div layout className="-mt-2.5">
      <h1 className="text-lg font-bold text-gray-900 dark:text-white">
        {t(`${baseKey}.title`)}
      </h1>
      <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">
        {t(`${baseKey}.empresa`)} · {t(`${baseKey}.modalidade`)}
      </p>

      <AnimatePresence>
        {viewMode && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden mt-0.5 md:mt-2 text-sm text-gray-600 dark:text-gray-300"
          >
            {t(`${baseKey}.descricao`)}
          </motion.p>
        )}
      </AnimatePresence>

      {experience.stacks && (
        <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5 md:mt-2">
          <span className="font-semibold">Stacks: </span>
          {experience.stacks}
        </p>
      )}
    </motion.div>
  );
}
