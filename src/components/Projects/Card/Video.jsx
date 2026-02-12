import { AnimatePresence, motion } from 'framer-motion';

export function Video({ demo, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Vídeo de demonstração do projeto"
        onClick={onClose}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 padding"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.iframe
          src={demo}
          title="Publicação incorporada"
          onClick={(e) => e.stopPropagation()}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="rounded-xl w-full h-full max-h-96 lg:max-h-[35rem] z-1 max-w-3xl shadow-2xl border-2 border-gray-100 dark:border-neutral-600"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.6, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200 }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
