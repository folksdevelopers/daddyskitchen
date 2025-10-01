import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export function CollectionArc({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full", className)}
      {...props}
    >
      <circle cx="100" cy="100" r="90" fill="hsl(var(--primary)/0.05)" />
      <path
        d="M 20 100 A 80 80 0 0 1 180 100"
        stroke="hsl(var(--accent))"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
       <path
        d="M 50 40 A 70 70 0 0 1 160 70"
        stroke="hsl(var(--foreground))"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        transform="rotate(10 100 100)"
      />
    </svg>
  );
}
