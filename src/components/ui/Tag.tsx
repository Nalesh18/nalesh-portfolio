import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

export function Tag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xs border border-line bg-bg-raised px-2.5 py-1",
        "font-mono text-[11px] tracking-wide text-text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
