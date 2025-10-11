import flowerPink from '@assets/flower-pink.png';
import flowerPurple from '@assets/flower-purple.png';

export function TitleSection({ title }) {
  return (
    <div className="relative flex w-fit ">
      <img
        src={flowerPink}
        alt="Flor rosa"
        className="absolute left-0 -translate-x-[1.2rem] translate-y-2 lg:translate-y-4 size-10 opacity-90"
      />

      <img
        src={flowerPurple}
        alt="Flor roxa"
        className="absolute right-0 translate-x-[1.2rem] -translate-y-1 lg:translate-y-[-0.1rem] size-10 opacity-90"
      />

      <h2 className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-title font-black text-text-light dark:text-text-dark select-none">
        {title}
      </h2>
    </div>
  );
}
