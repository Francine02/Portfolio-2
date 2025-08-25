import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';

export function Preferences() {
  return (
    <div className="gap-8 md:gap-6 flex">
      <LanguageToggle />
      <ThemeToggle />
    </div>
  );
}
