import catGif from '@assets/cat.gif';
import { useTranslation } from 'react-i18next';

import { Form } from '../Form/index';
import { Links } from './Links';

export function Content() {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:gap-16 ">
      <div className="mt-6">
        <h2 className="font-text lg:text-xl mb-6 ">{t('contato.obs')}</h2>
        <Links />
      </div>

      <div className="relative">
        <img
          src={catGif}
          alt="Cat gif"
          className="size-16 absolute -top-11 right-3 2xl:right-32"
        />
        <Form />
      </div>
    </div>
  );
}
