import type { ReactNode } from "react";

type AdSize = "728x90" | "300x250" | "320x50";

const sizeStyles: Record<AdSize, string> = {
  "728x90": "w-full max-w-[728px] h-[90px]",
  "300x250": "w-[300px] h-[250px]",
  "320x50": "w-[320px] max-w-full h-[50px]",
};

interface AdSlotProps {
  size: AdSize;
  label?: string;
  className?: string;
  id?: string;
  children?: ReactNode;
}

/**
 * Standard ad placeholder containers.
 * Inject scripts later via layout <head> / Script tags targeting these IDs.
 */
export function AdSlot({
  size,
  label = "Advertisement",
  className = "",
  id,
  children,
}: AdSlotProps) {
  return (
    <aside
      id={id}
      data-ad-slot
      data-ad-size={size}
      aria-label={label}
      className={`relative mx-auto overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] ${sizeStyles[size]} ${className}`}
    >
      <div className="ad-shimmer absolute inset-0 pointer-events-none" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-1 px-3 text-center">
        {children ?? (
          <>
            <span className="text-[10px] uppercase tracking-[0.22em] text-mist/70">
              {label}
            </span>
            <span className="font-display text-sm text-sand/80">{size}</span>
            <span className="text-[11px] text-mist/50">
              Ready for script injection
            </span>
          </>
        )}
      </div>
    </aside>
  );
}
