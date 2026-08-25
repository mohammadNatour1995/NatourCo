import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import clsx from "clsx";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0">
      <span
        className={clsx(
          "flex h-10 w-10 items-center justify-center rounded-xl",
          light ? "bg-white text-brand-700" : "bg-brand-600 text-white",
        )}
      >
        <Compass className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={clsx(
            "font-display text-lg font-extrabold tracking-tight",
            light ? "text-white" : "text-ink-900",
          )}
        >
          Natour<span className="text-brand-500">Co</span>
        </span>
        <span
          className={clsx(
            "text-[10px] font-semibold uppercase tracking-[0.18em]",
            light ? "text-white/60" : "text-ink-400",
          )}
        >
          Est. 1981
        </span>
      </span>
    </Link>
  );
}
