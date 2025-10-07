import { cn } from '@lib/utils';
import { motion, useScroll } from 'motion/react';

export function ScrollProgress({ className, ref, ...props }) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#0070F3]',
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
}
