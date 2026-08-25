import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Compass,
  HandshakeIcon,
  MapPinned,
  Newspaper,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker, SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { HOME_SERVICE_ICONS, HOME_SERVICE_KEYS } from "@/lib/content";

const WHY_ICONS = [Compass, MapPinned, HandshakeIcon, Award];
const WHY_KEYS = ["point1", "point2", "point3", "point4"];

const NEWS_ITEMS = [
  {
    date: "2024",
    titleKey: "Jordan–Turkey free trade zone partnership agreement",
  },
  {
    date: "2023",
    titleKey: "Electronic payment activated for customs data fees",
  },
  {
    date: "2023",
    titleKey: "Technical committee ruling on energy-saving air conditioners",
  },
];

export function Home() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-950">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(79,163,196,0.35), transparent 45%), radial-gradient(circle at 85% 15%, rgba(221,138,28,0.25), transparent 40%), radial-gradient(circle at 50% 100%, rgba(44,133,172,0.3), transparent 50%)",
          }}
        />
        <svg
          className="absolute inset-x-0 bottom-0 h-40 w-full text-white/[0.03]"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,120 C300,220 900,20 1200,120 L1200,200 L0,200 Z" />
        </svg>

        <Container className="relative flex flex-col gap-12 py-24 sm:py-28 lg:flex-row lg:items-center lg:py-32">
          <div className="flex flex-col gap-6 lg:w-3/5">
            <Reveal>
              <Kicker light>{t("home.hero.kicker")}</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="max-w-2xl font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                {t("home.hero.title")}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-xl text-lg leading-relaxed text-brand-100/80">
                {t("home.hero.subtitle")}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button href="/services" variant="secondary" icon={<ArrowRight className="h-4 w-4 rtl:rotate-180" />}>
                  {t("home.hero.ctaPrimary")}
                </Button>
                <Button href="/contact" variant="outline-light">
                  {t("home.hero.ctaSecondary")}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10 mt-4 max-w-lg">
                {[
                  ["45+", t("home.hero.statYears")],
                  ["5", t("home.hero.statBranches")],
                  ["8+", t("home.hero.statClearance")],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dt className="font-display text-3xl font-extrabold text-white">{value}</dt>
                    <dd className="mt-1 text-xs font-medium leading-snug text-brand-200/70">{label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="relative hidden flex-1 items-center justify-center lg:flex">
            <HeroGraphic />
          </div>
        </Container>
      </section>

      {/* About teaser */}
      <section className="py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-900 p-8">
              <div className="absolute -end-10 -top-10 h-40 w-40 rounded-full bg-gold-400/20 blur-3xl" />
              <div className="relative flex h-full flex-col justify-between text-white">
                <ShieldCheck className="h-10 w-10 text-gold-300" />
                <div>
                  <p className="font-display text-5xl font-extrabold">1981</p>
                  <p className="mt-1 text-sm font-medium text-brand-100/80">
                    {t("meta.tagline")}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-5">
            <SectionHeading kicker={t("home.about.kicker")} title={t("home.about.title")} />
            <p className="leading-relaxed text-ink-600">{t("home.about.body")}</p>
            <div>
              <Button href="/about" variant="ghost" icon={<ArrowUpRight className="h-4 w-4" />}>
                {t("home.about.cta")}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-ink-50 py-24">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading kicker={t("home.services.kicker")} title={t("home.services.title")} align="center" className="mx-auto" />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_SERVICE_KEYS.map((key, i) => {
              const Icon = HOME_SERVICE_ICONS[i];
              return (
                <Reveal key={key} delay={i * 0.08}>
                  <div className="group h-full rounded-3xl border border-ink-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-bold text-ink-900">
                      {t(`home.services.${key}`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {t(`home.services.${key}Desc`)}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal>
            <div className="flex justify-center">
              <Button href="/services" variant="primary" icon={<ArrowRight className="h-4 w-4 rtl:rotate-180" />}>
                {t("common.viewAll")}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Why us */}
      <section className="relative overflow-hidden bg-brand-950 py-24">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 50%, rgba(79,163,196,0.3), transparent 50%)",
          }}
        />
        <Container className="relative flex flex-col gap-12">
          <Reveal>
            <SectionHeading kicker={t("home.whyUs.kicker")} title={t("home.whyUs.title")} light align="center" className="mx-auto" />
          </Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_KEYS.map((key, i) => {
              const Icon = WHY_ICONS[i];
              return (
                <Reveal key={key} delay={i * 0.08} className="flex flex-col gap-4 text-center sm:text-start">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-gold-300 sm:mx-0">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-base font-bold text-white">
                    {t(`home.whyUs.${key}Title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-100/70">
                    {t(`home.whyUs.${key}Body`)}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* News */}
      <section className="py-24">
        <Container className="flex flex-col gap-12">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading kicker={t("home.news.kicker")} title={t("home.news.title")} />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {NEWS_ITEMS.map((item, i) => (
              <Reveal key={item.titleKey} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-ink-100 p-6 transition-colors hover:border-brand-200">
                  <div className="flex items-center gap-2 text-brand-500">
                    <Newspaper className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-wide">{item.date}</span>
                  </div>
                  <p className="text-sm font-semibold leading-snug text-ink-800">{item.titleKey}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-4">
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

function HeroGraphic() {
  return (
    <div className="relative h-[420px] w-[420px]">
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-8 rounded-full border border-white/10" />
      <div className="absolute inset-16 rounded-full border border-dashed border-white/15" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-sm">
          <Compass className="h-14 w-14 text-gold-300" strokeWidth={1.25} />
        </div>
      </div>
      {[
        { top: "6%", start: "48%" },
        { top: "48%", start: "94%" },
        { top: "88%", start: "48%" },
        { top: "48%", start: "2%" },
      ].map((pos, i) => (
        <span
          key={i}
          className="absolute h-3 w-3 rounded-full bg-gold-400 shadow-lg shadow-gold-400/50"
          style={{ top: pos.top, insetInlineStart: pos.start }}
        />
      ))}
    </div>
  );
}
