import { TitleWithFlowers } from '@components/TitleSection/TitleWithFlowers';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Timeline } from './Timeline';
import { Toggle } from './Toggle';

export function Experiences() {
  const { t } = useTranslation();

  const [viewMode, setViewMode] = useState(false);

  return (
    <section className="section-gray" id="experiencias">
      <div className="container">
        <div className="flex flex-col items-start space-y-5 sm:space-y-0 sm:flex-row sm:justify-around sm:items-center">
          <TitleWithFlowers
            className="dark:text-white"
            title={t('header.experiencias')}
          />
          <Toggle viewMode={viewMode} setViewMode={setViewMode} />
        </div>

        <div className="padding">
          <Timeline viewMode={viewMode} />
        </div>
      </div>
    </section>
  );
}
