import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view. Uses a single IntersectionObserver
 * with a band near the top of the viewport so the active item matches what the
 * reader is looking at rather than what is merely on screen.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        }

        if (visible.size === 0) return;

        // Pick the first section in document order that is currently visible.
        const next = ids.find((id) => visible.has(id));
        if (next) setActive(next);
      },
      {
        rootMargin: "-88px 0px -55% 0px",
        threshold: [0, 0.15, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
