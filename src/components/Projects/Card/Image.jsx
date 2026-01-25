import { cn } from '@lib/utils';
import { useState } from 'react';
import { FiPlayCircle } from 'react-icons/fi';

import { Video } from './Video';

export function Image({ demo, title, img }) {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => {
    if (demo) setShowVideo(true);
  };

  return (
    <>
      {demo && (
        <button
          type="button"
          aria-label={`Abrir vídeo do projeto ${title}`}
          onClick={() => setShowVideo(true)}
          className="absolute translate-x-30 translate-y-14 opacity-25 dark:text-neutral-800 w-fit hover:opacity-50 cursor-pointer"
        >
          <FiPlayCircle className="size-14" />
        </button>
      )}
      {showVideo && <Video demo={demo} onClose={() => setShowVideo(false)} />}
      <img
        onClick={openVideo}
        src={img}
        alt={title}
        className={cn(
          'rounded-lg h-40 w-full border border-gray-200 dark:border-neutral-600',
          demo && 'hover:border-gray-300 hover:border-4 cursor-pointer'
        )}
      />
    </>
  );
}
