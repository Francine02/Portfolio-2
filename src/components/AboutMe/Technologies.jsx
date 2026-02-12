import { IconTooltip } from '@components/IconTooltip/index';
import { TECHNOLOGIES_LIST } from '@constants/technologies-list';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function Technologies() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="grid sm:grid-cols-3 gap-4 xl:gap-10 my-4 xl:my-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      {TECHNOLOGIES_LIST.map(({ category, technologies }) => (
        <motion.div
          key={category}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-bold text-lg pb-2">
            {category === 'Ferramentas' ? t('sobre.ferramentas') : category}:
          </h3>

          <div className="flex flex-wrap gap-3">
            {technologies.map(({ name, icon, color }) => (
              <IconTooltip key={name} name={name} icon={icon} color={color} />
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
