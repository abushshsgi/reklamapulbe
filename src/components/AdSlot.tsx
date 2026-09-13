import type { ReactNode } from "react";
import { KADAM_DIRECT_LINK } from "@/lib/ads";

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
 * Standard ad containers. Default click-through uses the Kadam.net Direct Link
 * from layout meta `kadam-direct-link` (blockID=451608).
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
      data-ad-href={KADAM_DIRECT_LINK}
      aria-label={label}
      className={`relative mx-auto overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] ${sizeStyles[size]} ${className}`}
    >
      <div className="ad-shimmer absolute inset-0 pointer-events-none" />
      <a
        href={KADAM_DIRECT_LINK}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-1 px-3 text-center transition hover:bg-white/[0.04]"
      >
        {children ?? (
          <>
            <span className="text-[10px] uppercase tracking-[0.22em] text-mist/70">
              {label}
            </span>
            <span className="font-display text-sm text-sand/80">{size}</span>
            <span className="text-[11px] text-mist/50">Sponsored</span>
          </>
        )}
      </a>
    </aside>
  );
}
