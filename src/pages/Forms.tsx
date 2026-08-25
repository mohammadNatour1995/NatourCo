import { useTranslation } from "react-i18next";
import { FileText, FileType2, Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/layout/PageHero";
import { FORMS_CATEGORIES } from "@/lib/content";

export function Forms() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero kicker={t("forms.hero.kicker")} title={t("forms.hero.title")} subtitle={t("forms.intro")} />

      <section className="py-24">
        <Container className="flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {FORMS_CATEGORIES.map((cat, i) => (
              <Reveal key={cat.key} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-6 rounded-3xl border border-ink-100 p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <FileText className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-ink-900">
                      {t(`forms.${cat.key}.title`)}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {t(`forms.${cat.key}.description`)}
                    </p>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-3 pt-2">
                    <Button href={cat.pdfHref} variant="primary" icon={<FileText className="h-4 w-4" />}>
                      {t("forms.pdf")}
                    </Button>
                    <Button href={cat.wordHref} variant="outline" icon={<FileType2 className="h-4 w-4" />}>
                      {t("forms.word")}
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="flex items-start gap-3 rounded-2xl bg-ink-50 p-6 text-sm text-ink-600">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
              <p>{t("forms.note")}</p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
