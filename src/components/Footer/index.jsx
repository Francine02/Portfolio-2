import logo from '@assets/logo.png';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="section-gray mt-36 font-light pt-8 pb-6 rounded-b-none">
      <div className="container padding flex justify-between">
        <img className="w-6 h-5" src={logo} alt="logo" />

        <div className="text-right space-y-1">
          <p className="text-sm">{t('footer.desenvolvido')}</p>
          <p className="text-xs">{t('footer.direitos')}</p>
        </div>
      </div>
    </footer>
  );
}
