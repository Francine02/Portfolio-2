import { AnimatedThemeToggler } from '@components/Magic-UI/AnimatedThemeToggler';

import { LanguageToggle } from './LanguageToggle';

export function Preferences() {
  return (
    <div className="gap-8 md:gap-6 flex">
      <LanguageToggle />
      <AnimatedThemeToggler className="cursor-pointer hover:opacity-70"/>
    </div>
  );
}
