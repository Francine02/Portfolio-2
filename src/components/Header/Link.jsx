export function Link({ link, text, rel, target }) {
  return (
    <a
      href={link}
      rel={rel}
      target={target}
      className="
        relative
        dark:text-white
        cursor-pointer font-title text-text-color
        before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:rounded-full
        before:scale-x-0 before:origin-left before:transition-transform before:duration-200
        before:bg-gradient-to-r before:from-pink-600 before:to-purple-600
        hover:before:scale-x-100"
    >
      {text}
    </a>
  );
}
