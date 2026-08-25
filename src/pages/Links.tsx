import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/layout/PageHero";
import { USEFUL_LINKS } from "@/lib/content";

export function LinksPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero kicker={t("links.hero.kicker")} title={t("links.hero.title")} subtitle={t("links.intro")} />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {USEFUL_LINKS.map((link, i) => {
              const Icon = link.icon;
              return (
                <Reveal key={link.key} delay={i * 0.05}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-ink-100 p-5 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="flex-1 text-sm font-semibold text-ink-800">
                      {t(`links.items.${link.key}`)}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink-300 transition-colors group-hover:text-brand-600" />
                  </a>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
