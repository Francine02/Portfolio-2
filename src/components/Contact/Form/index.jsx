import { useTranslation } from 'react-i18next';

import { Input } from './Input';

export function Form() {
  const { t } = useTranslation();

  return (
    <form className="bg-gray-100 dark:bg-neutral-800 rounded-xl p-10 w-full max-w-lg space-y-5">
      <Input />

      <Input />

      <textarea className="input" />

      <div className="flex justify-end">
        <button className="button-base px-4 py-1 mt-4" disabled>
          {t('contato.enviar')}
        </button>
      </div>
    </form>
  );
}
