import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/layout/PageHero";
import { INCOTERM_KEYS } from "@/lib/content";

export function CommercialTerms() {
  const { t } = useTranslation();
  const [openKey, setOpenKey] = useState<string | null>(INCOTERM_KEYS[0]);

  return (
    <>
      <PageHero
        kicker={t("commercialTerms.hero.kicker")}
        title={t("commercialTerms.hero.title")}
        subtitle={t("commercialTerms.intro")}
      />

      <section className="py-24">
        <Container className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-3">
            {INCOTERM_KEYS.map((key, i) => {
              const isOpen = openKey === key;
              return (
                <Reveal key={key} delay={i * 0.03}>
                  <div className="overflow-hidden rounded-2xl border border-ink-100">
                    <button
                      type="button"
                      onClick={() => setOpenKey(isOpen ? null : key)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
                    >
                      <span className="font-display font-bold text-ink-900">
                        {t(`commercialTerms.items.${key}.term`)}
                      </span>
                      <ChevronDown
                        className={clsx(
                          "h-5 w-5 shrink-0 text-brand-500 transition-transform duration-300",
                          isOpen && "rotate-180",
                        )}
                      />
                    </button>
                    <div
                      className={clsx(
                        "grid transition-all duration-300 ease-in-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 leading-relaxed text-ink-600">
                          {t(`commercialTerms.items.${key}.description`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
