import { clsx, type ClassValue } from "clsx";
import type { ReactNode } from "react";

/** Nagłówki sekcji — zapowiadają część strony */
export const SECTION_BADGE =
  "inline-block rounded-full border border-[#F7011E]/20 bg-[#F7011E]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#F7011E] backdrop-blur-sm";

/** Chipy wewnątrz kart / paneli — technologie, tagi */
export const ACCENT_CHIP =
  "rounded-full border border-[#F7011E]/20 bg-[#F7011E]/5 px-3 py-1 text-xs text-[#F7011E]";

export function sectionBadgeClass(...extra: ClassValue[]) {
  return clsx(SECTION_BADGE, ...extra);
}

export function accentChipClass(...extra: ClassValue[]) {
  return clsx(ACCENT_CHIP, ...extra);
}

export function SectionBadge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={sectionBadgeClass(className)}>{children}</span>;
}

export function AccentChip({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={accentChipClass(className)}>{children}</span>;
}
