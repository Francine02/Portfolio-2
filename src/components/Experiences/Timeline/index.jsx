import { EXPERIENCES } from '@constants/experiences';

import { About } from './About';
import { Time } from './Time';

export function Timeline({ viewMode }) {
  return (
    <ol className="relative space-y-6 md:space-y-10 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-300 dark:before:bg-neutral-600 mt-6">
      {EXPERIENCES.map((experience) => (
        <li
          key={experience.title}
          className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3"
        >
          <Time experience={experience} />

          <div className="relative flex items-start gap-2 md:gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
            <span className="size-3 shrink-0 rounded-full bg-gradient-to-t from-pink to-purple" />

            <About viewMode={viewMode} experience={experience} />
          </div>
        </li>
      ))}
    </ol>
  );
}
