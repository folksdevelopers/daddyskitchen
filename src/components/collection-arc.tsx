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
      <circle cx="100" cy="100" r="95" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1" />
      <path
        d="M 30 70 A 80 80 0 0 1 170 70"
        stroke="hsl(var(--accent))"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
