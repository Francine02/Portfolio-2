import { IconTooltip } from '@components/IconTooltip/index';
import { TECHNOLOGIES_LIST } from '@constants/technologies-list';
import { useTranslation } from 'react-i18next';

export function Technologies() {
  const { t } = useTranslation();

  return (
    <div className="grid sm:grid-cols-3 gap-4 xl:gap-10 my-4 xl:my-6">
      {TECHNOLOGIES_LIST.map(({ category, technologies }) => (
        <div key={category}>
          <h3 className="font-bold text-lg pb-2">
            {category === 'Ferramentas' ? t('sobre.ferramentas') : category}:
          </h3>
          <div className="flex flex-wrap gap-3">
            {technologies.map(({ name, icon, color }) => (
              <IconTooltip key={name} name={name} icon={icon} color={color} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
