import br from '@assets/brasil.png';
import en from '@assets/eua.png';
import { useTranslation } from 'react-i18next';

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLanguage);
  };
  return (
    <button
      onClick={toggleLanguage}
      className="relative group cursor-pointer"
      aria-label="Mudar idioma"
    >
      <img
        src={i18n.language === 'pt' ? en : br}
        alt={
          'alterar idioma para: ' + i18n.language === 'pt'
            ? 'english'
            : 'português'
        }
        className="w-6 hover:opacity-70"
      />
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-max max-w-xs bg-black text-white text-sm rounded px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {i18n.language === 'pt' ? 'English' : 'Português'}
      </span>
    </button>
  );
}
