import { useTranslation } from 'react-i18next';

import { Form } from '../Form/index';
import { Links } from './Links';

export function Content() {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:gap-16">
      <div className="mt-6">
        <h2 className="font-text lg:text-xl mb-6 ">{t('contato.obs')}</h2>
        <Links />
      </div>

      <Form />
    </div>
  );
}
