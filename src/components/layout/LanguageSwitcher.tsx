import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { Languages } from "lucide-react";

export function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage ?? i18n.language;
  const next = current === "ar" ? "en" : "ar";

  return (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(next)}
      className={clsx(
        "flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors",
        light
          ? "border-white/30 text-white hover:bg-white/10"
          : "border-ink-200 text-ink-600 hover:border-brand-300 hover:text-brand-700",
      )}
      aria-label="Switch language"
    >
      <Languages className="h-3.5 w-3.5" />
      {next === "ar" ? "العربية" : "English"}
    </button>
  );
}
