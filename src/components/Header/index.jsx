import logo from '@assets/logo.png';
import { ScrollProgress } from '@components/Magic-UI/ScrollProgress';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

import { ContentLinks } from './ContentLinks';
import { HamburguerIcon } from './HamburguerIcon';
import { Preferences } from './Preferences';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleScrollUp = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 z-50 w-full flex justify-between py-4 items-center px-7 sm:px-12 lg:px-24 2xl:px-96 bg-white dark:bg-dark"
    >
      <motion.img
        src={logo}
        alt="logo"
        className="w-8 cursor-pointer"
        onClick={toggleScrollUp}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />

      <nav className="space-x-10 xl:space-x-16 hidden md:block">
        <ContentLinks />
      </nav>

      <div className="hidden md:block">
        <Preferences />
      </div>

      <HamburguerIcon
        isMenuOpen={isMenuOpen}
        open={() => setIsMenuOpen(!isMenuOpen)}
      />
      <ScrollProgress className="top-14" />

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-14 pb-8 left-0 w-full bg-white dark:bg-[#272727] z-50 flex flex-col items-center space-y-4 md:hidden rounded-b-2xl shadow-xs"
          >
            <ContentLinks />
            <Preferences />
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
