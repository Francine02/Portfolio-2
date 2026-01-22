import { cn } from '@lib/utils';

export function IconTooltip({ name, color, icon: Icon, className }) {
  return (
    <div className="group relative flex flex-col items-center hover:scale-110 transition">
      <Icon className={cn('size-6', className)} color={color} />
      <span
        role="tooltip"
        className="absolute z-0 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max max-w-xs bg-black text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      >
        {name}
      </span>
    </div>
  );
}
