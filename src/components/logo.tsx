import { Spice } from 'lucide-react';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2" aria-label="Spice Paradise homepage">
      <div className="rounded-full bg-primary/10 p-2 text-primary">
        <Spice className="h-6 w-6" />
      </div>
      <span className="font-headline text-2xl font-bold text-primary">
        Spice Paradise
      </span>
    </a>
  );
}
