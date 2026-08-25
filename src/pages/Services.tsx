import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/layout/PageHero";
import { SERVICE_ICONS, SERVICE_IMAGES } from "@/lib/content";

const SERVICE_KEYS = ["sea", "land", "air", "transport", "consulting"];

export function Services() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        kicker={t("services.hero.kicker")}
        title={t("services.hero.title")}
        subtitle={t("services.intro")}
      />

      <section className="py-24">
        <Container className="flex flex-col gap-6">
          {SERVICE_KEYS.map((key, i) => {
            const Icon = SERVICE_ICONS[key];
            const reversed = i % 2 === 1;
            return (
              <Reveal key={key} delay={i * 0.06}>
                <div
                  className={`flex flex-col gap-8 rounded-3xl border border-ink-100 p-8 sm:p-10 lg:flex-row lg:items-center ${
                    reversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="relative shrink-0 pb-5 lg:w-64 lg:pb-0">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem]">
                      <img src={SERVICE_IMAGES[key]} alt="" className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 to-transparent" />
                    </div>
                    <div className="absolute -bottom-2 start-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-lg shadow-ink-900/10">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="font-display text-sm font-bold text-brand-500">
                      0{i + 1}
                    </span>
                    <h2 className="font-display text-2xl font-bold text-ink-900">
                      {t(`services.items.${key}.title`)}
                    </h2>
                    <p className="leading-relaxed text-ink-600">
                      {t(`services.items.${key}.description`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <Reveal className="flex flex-col items-center gap-6 rounded-[2.5rem] bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center sm:px-16">
            <h2 className="max-w-xl font-display text-3xl font-extrabold text-white sm:text-4xl">
              {t("home.cta.title")}
            </h2>
            <p className="max-w-md text-brand-100/80">{t("home.cta.subtitle")}</p>
            <Button href="/contact" variant="secondary" icon={<ArrowRight className="h-4 w-4 rtl:rotate-180" />}>
              {t("home.cta.button")}
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
