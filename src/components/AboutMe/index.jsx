import avatar from '@assets/avatar.png';
import { TitleSection } from '@components/TitleSection/index';
import { useTranslation } from 'react-i18next';

import { Content } from './Content';

export function AboutMe() {
  const { t } = useTranslation();
  return (
    <>
      <TitleSection title={t('sobre.titulo')} id="sobre" />

      <section className="container">
        <div className="section-layout text-text-light dark:text-text-dark">
          <div className=" md:flex md:justify-around md:flex-row flex flex-col md:gap-5 items-center md:items-start">
            <img
              src={avatar}
              alt="Foto de perfil"
              className="md:order-2 w-40 sm:w-52 lg:w-52 2xl:w-60 h-auto md:pb-1 mx-auto md:mx-0 object-contain"
            />

            <Content />
          </div>
        </div>
      </section>
    </>
  );
}
