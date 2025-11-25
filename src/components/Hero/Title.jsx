import { AuroraText } from '@components/Magic-UI/AuroraText';
import { WordRotate } from '@components/Magic-UI/WordRotate';
import { useTranslation } from 'react-i18next';

export function Title() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center text-center text-text-light dark:text-text-dark pb-10 md:pb-0 z-1 ">
      <h1 className="text-hero-title font-black px-4 ">
        {t('hero.apresentacao')}
        <AuroraText>Francine Cruz.</AuroraText>
      </h1>

      <div className="flex items-center gap-1.5 text-subtitle font-semibold">
        <h3>—{t('hero.titulo')}</h3>
        <WordRotate words={['Full Stack', 'Front End', 'Back End']} />
        <h3>—</h3>
      </div>
    </div>
  );
}
