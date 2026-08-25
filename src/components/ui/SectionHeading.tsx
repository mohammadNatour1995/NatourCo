import clsx from "clsx";

export function Kicker({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]",
        light ? "text-brand-200" : "text-brand-600",
      )}
    >
      <span className={clsx("h-px w-6", light ? "bg-brand-200" : "bg-brand-600")} />
      {children}
    </span>
  );
}

export function SectionHeading({
  kicker,
  title,
  align = "left",
  light = false,
  className,
}: {
  kicker: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Kicker light={light}>{kicker}</Kicker>
      <h2
        className={clsx(
          "max-w-2xl text-3xl font-bold leading-tight sm:text-4xl",
          light ? "text-white" : "text-ink-900",
        )}
      >
        {title}
      </h2>
    </div>
  );
}
