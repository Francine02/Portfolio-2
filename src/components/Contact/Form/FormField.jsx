import { MdError } from 'react-icons/md';

export function FormField({ error, children }) {
  return (
    <div>
      {children}

      {error && (
        <span className="text-xs flex items-center mt-1 gap-1 text-red-600">
          <MdError className="size-4" />
          {error}
        </span>
      )}
    </div>
  );
}
