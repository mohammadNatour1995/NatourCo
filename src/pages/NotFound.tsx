import { useTranslation } from "react-i18next";
import { Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function NotFound() {
  const { t } = useTranslation();

  return (
    <section className="flex min-h-[70vh] items-center py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
          <Compass className="h-8 w-8" />
        </div>
        <h1 className="font-display text-3xl font-bold text-ink-900">{t("notFound.title")}</h1>
        <p className="max-w-sm text-ink-500">{t("notFound.body")}</p>
        <Button href="/" variant="primary">
          {t("notFound.cta")}
        </Button>
      </Container>
    </section>
  );
}
