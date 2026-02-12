import { CONTACTS_LINKS } from '@constants/contacts-links';
import { motion } from 'motion/react';

export function ContactIcons() {
  return (
    <motion.div
      className="grid gap-5 text-2xl sm:text-3xl w-fit absolute bottom-16 right-0 pr-7 sm:pr-12 lg:pr-24 2xl:pr-96"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.6,
          },
        },
      }}
    >
      {CONTACTS_LINKS.map(({ link, icon: Icon }) => (
        <motion.a
          key={link}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible: { opacity: 1, x: 0 },
          }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Icon />
        </motion.a>
      ))}
    </motion.div>
  );
}
