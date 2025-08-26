import { CONTACTS_LINKS } from '@constants/contacts-links';

export function ContactIcons() {
  return (
    <div className="grid gap-5 text-2xl sm:text-3xl w-fit absolute bottom-16 right-0">
      {CONTACTS_LINKS.map(({ link, icon: Icon }) => (
        <a
          key={link}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
