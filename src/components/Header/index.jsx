import logo from '@assets/logo.png';
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
    <header className="fixed top-0 left-0 z-50 w-full flex justify-between py-4 2xl:py-8 items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-56 bg-white dark:bg-[#272727] shadow-xs">
      <img
        src={logo}
        alt="Logo do portfólio"
        className="w-8 cursor-pointer"
        onClick={toggleScrollUp}
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

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="absolute top-16 pb-8 left-0 w-full bg-white dark:bg-[#272727] z-50 flex flex-col items-center space-y-4 md:hidden rounded-b-2xl shadow-xs"
        >
          <ContentLinks />
          <Preferences />
        </nav>
      )}
    </header>
  );
}
