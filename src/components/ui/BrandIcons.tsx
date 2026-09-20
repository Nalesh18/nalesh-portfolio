import type { SVGProps } from "react";

/**
 * Lucide v1 no longer ships brand marks, so GitHub and LinkedIn are inlined
 * here. They take the same props as a Lucide icon (sizing via className).
 */
type IconProps = SVGProps<SVGSVGElement>;

export function GithubIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M12 .5C5.73.5.9 5.52.9 11.96c0 5.06 3.29 9.35 7.86 10.87.57.11.78-.25.78-.56 0-.28-.01-1.02-.02-2-3.2.71-3.87-1.58-3.87-1.58-.53-1.37-1.29-1.74-1.29-1.74-1.05-.74.08-.73.08-.73 1.16.08 1.77 1.22 1.77 1.22 1.03 1.81 2.7 1.29 3.36.99.1-.77.4-1.29.73-1.59-2.55-.3-5.24-1.31-5.24-5.83 0-1.29.44-2.34 1.17-3.16-.12-.3-.51-1.5.11-3.12 0 0 .96-.32 3.15 1.21a10.6 10.6 0 0 1 5.74 0c2.18-1.53 3.14-1.21 3.14-1.21.63 1.62.23 2.82.12 3.12.73.82 1.17 1.87 1.17 3.16 0 4.53-2.7 5.52-5.27 5.82.42.37.78 1.09.78 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.2.68.79.56A11.1 11.1 0 0 0 23.1 11.96C23.1 5.52 18.27.5 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.9 9.75h4.16V21.5H2.9V9.75Zm6.77 0h3.99v1.6h.06c.56-1.02 1.92-2.1 3.95-2.1 4.22 0 5 2.66 5 6.12V21.5h-4.16v-5.29c0-1.26-.02-2.89-1.8-2.89-1.81 0-2.09 1.37-2.09 2.79V21.5H9.67V9.75Z" />
    </svg>
  );
}
