import flowerPink from '@assets/flower-pink.png';
import flowerPurple from '@assets/flower-purple.png';
import { cn } from '@lib/utils';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function TitleWithFlowers({ title, className }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'end 40%'],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.4],
    ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']
  );

  const leftX = useTransform(scrollYProgress, [0, 1], [-40, 0]);
  const rightX = useTransform(scrollYProgress, [0, 1], [40, 0]);

  const rotateLeft = useTransform(scrollYProgress, [0, 0.6, 1], [-220, 20, 0]);
  const rotateRight = useTransform(scrollYProgress, [0, 0.6, 1], [220, -20, 0]);

  return (
    <div ref={ref} className="pl-7 sm:pl-14 lg:pl-28 container">
      <div className="relative flex w-fit items-center">
        <motion.img
          src={flowerPink}
          alt=""
          aria-hidden="true"
          style={{ x: leftX, rotate: rotateLeft }}
          className="absolute left-0 -translate-x-[1.2rem] translate-y-2 lg:translate-y-4 size-10 opacity-90"
        />

        <motion.img
          src={flowerPurple}
          alt=""
          aria-hidden="true"
          style={{ x: rightX, rotate: rotateRight }}
          className="absolute right-0 translate-x-[1.2rem] -translate-y-1 lg:translate-y-[-0.1rem] size-10 opacity-90"
        />

        <motion.h2
          style={{ clipPath }}
          className={cn(
            'relative z-10 text-3xl sm:text-4xl lg:text-5xl font-title font-black text-text-light select-none',
            className
          )}
        >
          {title}
        </motion.h2>
      </div>
    </div>
  );
}
