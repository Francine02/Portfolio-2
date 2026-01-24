import { useTranslation } from 'react-i18next';

export function Time({ experience }) {
  const { t } = useTranslation();

  return (
    <time className="text-xs cursor-text hover:brightness-100 group-odd:col-start-2 group-odd:text-left group-even:col-start-1 group-even:text-right mx-2 md:mx-4.5 -mb-3.5">
      <span className="gradient w-fit px-2 py-1 rounded-full font-semibold text-white">
        {t('experiencias.' + experience.title + '.data')}
      </span>
    </time>
  );
}
