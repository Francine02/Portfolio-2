import { IconTooltip } from '@components/IconTooltip/index';

import { Image } from './Image';

export function Header({ img, title, techs, demo }) {
  return (
    <header>
      <Image img={img} demo={demo} title={title} />
      <div className="flex flex-wrap gap-3 pt-2">
        {techs.map(({ name, icon, color }) => (
          <IconTooltip
            className="size-5"
            key={name}
            name={name}
            icon={icon}
            color={color}
          />
        ))}
      </div>
      <h1 className="text-lg font-medium mt-2">{title}</h1>
    </header>
  );
}
