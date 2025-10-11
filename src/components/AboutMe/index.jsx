import avatar from '@assets/avatar.png';
import { TitleSection } from '@components/TitleSection/index';
import { useTranslation } from 'react-i18next';

import { Technologies } from './Technologies';

export function AboutMe() {
  const { t } = useTranslation();
  return (
    <div className="py-0 section-layout text-text-light dark:text-text-dark">
      <div className="md:flex md:justify-between md:flex-row flex flex-col md:gap-5 items-start 2x1:items-center">
        <img
          src={avatar}
          alt="Foto de perfil"
          className="md:order-2 w-52 lg:w-64 2xl:w-72 md:pb-1 mx-auto md:mx-0"
        />

        <div className="pb-11 md:py-11 md:order-1 space-y-5 max-w-5xl">
          <TitleSection title={t('sobre.titulo')} />

          <div className="space-y-5 font-text">
            <p dangerouslySetInnerHTML={{ __html: t('sobre.resumo') }} />
            <p dangerouslySetInnerHTML={{ __html: t('sobre.resumo1') }} />
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <Technologies />
          </div>
        </div>
      </div>
    </div>
  );
}
