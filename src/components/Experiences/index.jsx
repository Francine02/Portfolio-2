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
        <div className="flex justify-around items-center">
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
