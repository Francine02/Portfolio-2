import { useTranslation } from 'react-i18next';

import { Technologies } from './Technologies';

export function Content() {
  const { t } = useTranslation();

  return (
    <div className="pb-11 md:py-11 md:order-1 max-w-4xl">
      <div className="space-y-5 font-text">
        <p dangerouslySetInnerHTML={{ __html: t('sobre.resumo') }} />
        <p dangerouslySetInnerHTML={{ __html: t('sobre.resumo1') }} />
      </div>

      <Technologies />
    </div>
  );
}
