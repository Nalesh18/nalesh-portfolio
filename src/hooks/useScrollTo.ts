import { useCallback } from "react";
import { prefersReducedMotion } from "../lib/motion";

/**
 * Scrolls to a section and moves keyboard focus there, so the smooth scroll
 * does not leave screen-reader and keyboard users behind.
 */
export function useScrollTo() {
  return useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });

    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }, []);
}
