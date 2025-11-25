import { TECHNOLOGIES_LIST } from '@constants/technologies-list';
import { useTranslation } from 'react-i18next';

export function Technologies() {
  const { t } = useTranslation();

  return (
    <div className="grid sm:grid-cols-3 gap-4 xl:gap-10 mt-5 xl:mt-20">
      {TECHNOLOGIES_LIST.map(({ category, technologies }) => (
        <div key={category}>
          <h3 className="font-bold text-lg pb-2">
            {category === 'Ferramentas' ? t('sobre.ferramentas') : category}:
          </h3>
          <div className="flex flex-wrap gap-3">
            {technologies.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="group relative flex flex-col items-center hover:scale-110 transition"
              >
                <Icon size={30} color={color} />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max max-w-xs bg-black text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
