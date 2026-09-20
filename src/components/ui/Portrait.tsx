import { useState } from "react";
import { personal } from "../../data/personal";
import { cn } from "../../lib/cn";

const { photo, name } = personal;

/** "Nalesh Kumar B" -> "NB" */
const monogram = name
  .split(/\s+/)
  .filter((part) => part.length > 1)
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

type PortraitProps = {
  /** Rendered size hint passed to the browser, in CSS pixels. */
  size: number;
  className?: string;
  imageClassName?: string;
};

/**
 * Shows the profile photo, falling back to a monogram if the file is missing
 * or fails to load — so the layout never shows a broken image.
 */
export function Portrait({ size, className, imageClassName }: PortraitProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(photo.src) && !failed;

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-bg-elevated",
        className,
      )}
    >
      {showImage ? (
        <img
          src={photo.src as string}
          alt={photo.alt}
          width={size}
          height={size}
          decoding="async"
          loading="lazy"
          onError={() => setFailed(true)}
          style={{
            objectPosition: photo.framing.objectPosition,
            transform: `scale(${photo.framing.zoom})`,
            transformOrigin: "50% 0%",
          }}
          className={cn("size-full object-cover", imageClassName)}
        />
      ) : (
        <span
          role="img"
          aria-label={photo.alt}
          className="grid size-full place-items-center font-mono font-medium tracking-tight text-text-dim"
          style={{ fontSize: Math.max(12, Math.round(size * 0.32)) }}
        >
          {monogram}
        </span>
      )}
    </div>
  );
}
