import avatar from '@assets/avatar.png';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

import { Content } from './Content';

export function AnimatedLayout() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <div
      ref={ref}
      className="md:flex md:justify-around md:flex-row flex flex-col md:gap-5 items-center md:items-start"
    >
      <motion.img
        src={avatar}
        alt="Imagem da Francine"
        className="md:order-2 w-40 sm:w-52 lg:w-52 2xl:w-60 h-auto pb-4 md:pb-1 mx-auto md:mx-0 object-contain"
      />

      <motion.div style={{ y: textY }} className="md:order-1 max-w-4xl">
        <Content />
      </motion.div>
    </div>
  );
}
