import catGif from '@assets/cat.gif';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { Form } from '../Form/index';
import { Links } from './Links';

export function Content() {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:gap-16">
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-text lg:text-xl mb-6 ">{t('contato.obs')}</h2>
        <Links />
      </motion.div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.img
          src={catGif}
          alt=""
          aria-hidden="true"
          className="size-16 absolute -top-11 right-3 2xl:right-32"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        />
        <Form />
      </motion.div>
    </div>
  );
}
