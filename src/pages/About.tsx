import { useTranslation } from "react-i18next";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/layout/PageHero";
import { BRANCHES } from "@/lib/content";
import consultingImg from "@/assets/images/consulting.jpg";

export function About() {
  const { t } = useTranslation();
  const branchTextKeys = ["branch1", "branch2", "branch3", "branch4", "branch5"];

  return (
    <>
      <PageHero kicker={t("about.hero.kicker")} title={t("about.hero.title")} />

      <Container className="-mt-10 sm:-mt-14">
        <Reveal className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl shadow-xl shadow-ink-900/10">
          <img src={consultingImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-ink-950/0 to-transparent" />
        </Reveal>
      </Container>

      <section id="profile" className="scroll-mt-24 py-24">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="flex flex-col gap-5">
            <Kicker>{t("about.profile.kicker")}</Kicker>
            <h2 className="font-display text-3xl font-bold text-ink-900">{t("about.profile.title")}</h2>
            <p className="leading-relaxed text-ink-600">{t("about.profile.p1")}</p>
            <p className="leading-relaxed text-ink-600">{t("about.profile.p2")}</p>
            <p className="leading-relaxed text-ink-600">{t("about.profile.p3")}</p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4 rounded-3xl bg-ink-50 p-8">
            <h3 className="font-display text-lg font-bold text-ink-900">
              {t("about.profile.branchesTitle")}
            </h3>
            <ul className="flex flex-col gap-5">
              {branchTextKeys.map((key, i) => {
                const Icon = BRANCHES[i]?.icon;
                return (
                  <li key={key} className="flex items-start gap-3">
                    {Icon && (
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                    )}
                    <span className="text-sm leading-relaxed text-ink-600">
                      {t(`about.profile.${key}`)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section id="gm" className="scroll-mt-24 bg-ink-50 py-24">
        <Container className="flex flex-col gap-10">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <Kicker>{t("about.gm.kicker")}</Kicker>
            <h2 className="max-w-2xl font-display text-3xl font-bold text-ink-900">
              {t("about.gm.title")}
            </h2>
            <p className="max-w-2xl text-ink-500">{t("about.gm.subtitle")}</p>
          </Reveal>

          <Reveal delay={0.1} className="relative mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl shadow-ink-900/5">
            <Quote className="h-10 w-10 text-brand-200" />
            <div className="mt-4 flex flex-col gap-5 text-ink-600">
              <p className="leading-relaxed">{t("about.gm.p1")}</p>
              <p className="leading-relaxed">{t("about.gm.p2")}</p>
              <p className="leading-relaxed">{t("about.gm.p3")}</p>
              <p className="leading-relaxed">{t("about.gm.p4")}</p>
            </div>
            <div className="mt-8 border-t border-ink-100 pt-6">
              <p className="font-display font-bold text-ink-900">
                {t("nav.gmSpeech")}
              </p>
              <p className="text-sm text-ink-400">NatourCo</p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
