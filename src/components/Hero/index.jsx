import avatar from '@assets/avatar-manga.png';

import { ContactIcons } from './ContactIcons';
import { Title } from './Title';

export function Hero() {
  return (
    <section className="relative h-svh w-full font-title flex flex-col justify-end items-center">
      <Title />

      <img
        src={avatar}
        alt="Imagem em estilo de manhwa da Francine"
        className="max-h-[50vh] sm:max-h-[64vh] 2xl:max-h-[74vh] z-1"
        id="avatar"
      />
      <div className="border-1 absolute border-gray-100 dark:border-black dark:opacity-15 w-screen bottom-56 z-0" />
      <div className="border-1 absolute border-gray-100 dark:border-black dark:opacity-15 h-svh left-10 sm:left-15 lg:left-30 2xl:left-80 z-0" />

      <ContactIcons />
    </section>
  );
}
