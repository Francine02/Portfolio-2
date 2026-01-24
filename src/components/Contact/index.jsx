import { TitleWithFlowers } from '@components/TitleSection/TitleWithFlowers';
import { useTranslation } from 'react-i18next';

import { Content } from './Content/index';

export function Contact() {
  const { t } = useTranslation();

  return (
    <section className="container pt-24" id="contato">
      <div className="flex justify-around items-center">
        <TitleWithFlowers
          className="dark:text-white"
          title={t('header.contato')}
        />
      </div>

      <div className="padding">
        <Content />
      </div>
    </section>
  );
}
