import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export function DaddyKitchenLogo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 160 120"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-40 h-30", className)}
      {...props}
    >
      <g>
        <path
          d="M40 50 C10 60, 10 90, 40 100 Q80 120, 120 100 C150 90, 150 60, 120 50 Q80 30, 40 50 Z"
          fill="#d42c2c"
        />
        <text
          x="80"
          y="60"
          fontFamily="Alegreya, serif"
          fontSize="20"
          fill="white"
          textAnchor="middle"
          dominantBaseline="middle"
          fontWeight="bold"
        >
          Daddy's Kitchen
        </text>
        <text
          x="80"
          y="85"
          fontFamily="Alegreya, serif"
          fontSize="15"
          fill="white"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Masala
        </text>
      </g>
      <path
        d="M30 95 C 10 110, 50 130, 80 110 C 110 130, 150 110, 130 95 C 100 105, 60 105, 30 95"
        fill="#6b4423"
        stroke="#6b4423"
        strokeWidth="2"
      />
      <text
        x="80"
        y="118"
        fontFamily="Alegreya, serif"
        fontSize="7"
        fill="#d42c2c"
        textAnchor="middle"
        style={{ fontStyle: 'italic' }}
      >
        NATURAL SPICES
      </text>
    </svg>
  );
}
