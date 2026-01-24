import { useTranslation } from 'react-i18next';

import { Technologies } from './Technologies';

export function Content() {
  const { t } = useTranslation();

  return (
    <div className="md:py-11 md:order-1 max-w-4xl">
      <div className="space-y-5 font-text">
        <p dangerouslySetInnerHTML={{ __html: t('sobre.resumo') }} />
        <p dangerouslySetInnerHTML={{ __html: t('sobre.resumo1') }} />
      </div>

      <Technologies />

      <iframe
        src="https://jandee.vercel.app/Francine02?footer=true&weeks=false"
        title="GitHub contribution graph"
        className="w-full h-24 md:h-20 lg:h-26 xl:h-40 2xl:h-44"
      />
    </div>
  );
}
