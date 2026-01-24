import { HEADER_LINKS } from '@constants/header-links';
import { useTranslation } from 'react-i18next';

import { Link } from './Link';

export function ContentLinks() {
  const { t, i18n } = useTranslation();

  return (
    <>
      {HEADER_LINKS(i18n.language).map(
        ({ textKey, text, link, target, rel }) => (
          <Link
            key={textKey}
            text={textKey ? t(textKey) : text}
            link={link}
            target={target}
            rel={rel}
          />
        )
      )}
    </>
  );
}
