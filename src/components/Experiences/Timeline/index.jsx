import { EXPERIENCES } from '@constants/experiences';
import { motion } from 'framer-motion';

import { About } from './About';
import { Time } from './Time';

export function Timeline({ viewMode }) {
  return (
    <motion.ol
      className="relative space-y-6 md:space-y-10 mt-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      <motion.span
        className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 rounded-full bg-gray-300 dark:bg-neutral-600"
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        transition={{ duration: 3, ease: 'easeOut' }}
      />

      {EXPERIENCES.map((experience, index) => (
        <motion.li
          key={experience.title}
          className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3"
          initial={{
            opacity: 0,
            x: index % 2 === 0 ? -60 : 60,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.1 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
            type: 'spring',
            stiffness: 80,
          }}
        >
          <Time experience={experience} />

          <div className="relative flex items-start gap-2 md:gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
            <span className="size-3 shrink-0 rounded-full bg-gradient-to-t from-pink to-purple" />

            <About viewMode={viewMode} experience={experience} />
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}
