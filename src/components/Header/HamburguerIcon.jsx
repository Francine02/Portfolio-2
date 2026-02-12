import { motion } from 'motion/react';

export function HamburguerIcon({ open, isMenuOpen }) {
  return (
    <motion.button
      onClick={open}
      className="focus:outline-none md:hidden"
      aria-expanded={isMenuOpen}
      aria-controls="mobile-menu"
      aria-label="Abrir menu de navegação"
      whileTap={{ scale: 0.9 }}
    >
      <motion.svg
        className="w-6 h-6 text-black dark:text-white cursor-pointer"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        animate={{ rotate: isMenuOpen ? 90 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
        />
      </motion.svg>
    </motion.button>
  );
}
