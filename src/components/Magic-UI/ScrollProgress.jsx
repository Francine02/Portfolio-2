import { cn } from '@lib/utils';
import { motion, useScroll } from 'motion/react';

export function ScrollProgress({ className, ref, ...props }) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-purple to-pink ',
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
}
