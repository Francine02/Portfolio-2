import { Radio } from '@components/Radio/index';
import { TitleWithFlowers } from '@components/TitleSection/TitleWithFlowers';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ProjectsList } from './ProjectsList';

export function Projects() {
  const { t } = useTranslation();

  const [selected, setSelected] = useState(0);

  return (
    <section className="pt-24 container" id="projetos">
      <TitleWithFlowers
        className="dark:text-white"
        title={t('projetos.titulo')}
      />
      <div className="padding mt-2">
        <p className="mb-5 text-sm italic">Obs.: {t('projetos.obs')}</p>

        <Radio selected={selected} setSelected={setSelected} />
        <ProjectsList selected={selected} />
      </div>
    </section>
  );
}
