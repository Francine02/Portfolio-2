import { PROJECTS_OPTIONS } from '@constants/projects-options';
import { cn } from '@lib/utils';
import { useTranslation } from 'react-i18next';

export function Radio({ selected, setSelected }) {
  const { t } = useTranslation();

  return (
    <ul className="flex flex-wrap gap-3">
      {PROJECTS_OPTIONS.map((name, index) => {
        const id = `project-option-${name}`;

        const normalizeName = name
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');

        const option =
          name === 'Todos'
            ? t(`projetos.opcoes.${normalizeName.toLowerCase()}`)
            : name;
        return (
          <li key={id}>
            <input
              type="radio"
              id={id}
              value={name}
              name="projects"
              className="hidden peer"
              required=""
              onClick={() => setSelected(index)}
              defaultChecked={selected}
            />
            <label
              htmlFor={id}
              className={cn(
                selected === index
                  ? 'button-base cursor-pointer'
                  : 'button-outlined cursor-pointer'
              )}
            >
              {option}
            </label>
          </li>
        );
      })}
    </ul>
  );
}
