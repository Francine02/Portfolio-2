import { useTranslation } from 'react-i18next';

import { Label } from './Label';

export function Toggle({ setViewMode, viewMode }) {
  const { t } = useTranslation();

  return (
    <div className="inline-flex items-center gap-1 md:gap-2 padding">
      <Label text={t('experiencias.visualizar.resumo')} />

      <div className="relative inline-block w-10 h-4">
        <input
          id="switch-component-on"
          type="checkbox"
          onChange={(e) => setViewMode(e.target.checked)}
          checked={viewMode}
          className="peer appearance-none w-10 h-4 bg-slate-300 dark:bg-neutral-500 rounded-full checked:bg-slate-900 dark:checked:bg-neutral-900 cursor-pointer transition-colors duration-300"
        />
        <label
          htmlFor="switch-component-on"
          className="absolute top-0.5 left-0 size-3.5 sm:size-4 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
        ></label>
      </div>
      <Label text={t('experiencias.visualizar.detalhes')} />
    </div>
  );
}
