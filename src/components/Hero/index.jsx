import avatar from '@assets/avatar-manga.png';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

import { ContactIcons } from './ContactIcons';
import { Title } from './Title';

export function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="relative h-svh w-full font-title flex flex-col justify-end items-center overflow-hidden"
    >
      <Title />

      <motion.img
        src={avatar}
        alt=""
        aria-hidden="true"
        className="max-h-[45vh] sm:max-h-[50vh] md:max-h-[60vh] z-10"
        style={{ y }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      <motion.div
        className="line-hero min-w-screen bottom-56 z-0"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        style={{ originX: 0 }}
      />

      <motion.div
        className="line-hero h-svh left-10 sm:left-15 lg:left-30 2xl:left-80 z-0"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
        style={{ originY: 0 }}
      />

      <ContactIcons />
    </motion.section>
  );
}
