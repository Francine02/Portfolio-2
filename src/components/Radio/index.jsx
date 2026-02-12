import { PROJECTS_OPTIONS } from '@constants/projects-options';
import { cn } from '@lib/utils';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function Radio({ selected, setSelected }) {
  const { t } = useTranslation();

  return (
    <ul className="flex flex-wrap gap-3">
      {PROJECTS_OPTIONS.map((name, index) => {
        const id = `project-option-${name}`;

        const normalizeName = name
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');

        const option =
          name === 'Todos'
            ? t(`projetos.opcoes.${normalizeName.toLowerCase()}`)
            : name;
        return (
          <li key={id} className="relative">
            <input
              type="radio"
              id={id}
              value={name}
              name="projects"
              className="sr-only peer"
              onClick={() => setSelected(index)}
              defaultChecked={selected}
            />

            <motion.label
              htmlFor={id}
              className={cn(
                selected === index
                  ? 'button-base cursor-pointer relative overflow-hidden'
                  : 'button-outlined cursor-pointer relative overflow-hidden'
              )}
              whileTap={{ scale: 0.95 }}
            >
              {selected === index && (
                <motion.div
                  layoutId="radio-pill"
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink to-purple"
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 25,
                  }}
                />
              )}

              <span className="relative z-10">{option}</span>
            </motion.label>
          </li>
        );
      })}
    </ul>
  );
}
