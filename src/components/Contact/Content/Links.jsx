import { ALL_CONTACTS } from '@constants/all-contacts';
import { cn } from '@lib/utils';

export function Links() {
  return (
    <>
      {ALL_CONTACTS.map(({ icon: Icon, text, link }) => (
        <a
          key={text}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'flex items-center gap-2 mb-3.5 w-fit',
            link && 'hover:opacity-80'
          )}
        >
          <Icon className="text-2xl" />
          <span>{text}</span>
        </a>
      ))}
    </>
  );
}
