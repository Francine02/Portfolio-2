export function Label({ text }) {
  return (
    <label
      htmlFor="switch-component-on"
      className="text-gray-900 dark:text-white text-xs md:text-sm cursor-pointer"
    >
      {text}
    </label>
  );
}
