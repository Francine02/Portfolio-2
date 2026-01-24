import avatar from '@assets/avatar-manga.png';

import { ContactIcons } from './ContactIcons';
import { Title } from './Title';

export function Hero() {
  return (
    <section className="relative h-svh w-full font-title flex flex-col justify-end items-center [@media(max-height:500px)]:scale-80 [@media(max-height:500px)]:mt-10">
      <Title />
      <img
        src={avatar}
        alt="Imagem em estilo de manhwa da Francine"
        className="max-h-[45vh] sm:max-h-[50vh] md:max-h-[60vh] z-1"
        id="avatar"
      />
      <div className="line-hero min-w-screen bottom-56 z-0" />
      <div className="line-hero h-svh left-10 sm:left-15 lg:left-30 2xl:left-80 z-0" />
      <ContactIcons />
    </section>
  );
}
