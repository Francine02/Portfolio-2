import { TitleWithFlowers } from './TitleWithFlowers';

export function TitleSection({ title }) {
  return (
    <div className="w-full bg-purple-100 py-10 border border-purple-200 dark:border-black absolute z-0">
      <TitleWithFlowers title={title} />
    </div>
  );
}
