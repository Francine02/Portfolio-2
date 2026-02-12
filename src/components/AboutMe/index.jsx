import { TitleSection } from '@components/TitleSection';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { AnimatedLayout } from './AnimatedLayout';

export function AboutMe() {
  const { t } = useTranslation();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 20%'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  const blurValue = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [8, 0, 0, 8]
  );
  const blur = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <>
      <TitleSection title={t('sobre.titulo')} id="sobre" />

      <motion.section
        ref={ref}
        style={{
          opacity,
          scale,
          filter: blur,
        }}
        className="container relative"
      >
        <div className="section-layout text-text-light dark:text-text-dark">
          <AnimatedLayout />
        </div>
      </motion.section>
    </>
  );
}
