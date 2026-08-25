import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Phone, Printer, Send, Smartphone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/layout/PageHero";
import {
  BRANCHES,
  HEAD_OFFICE_EMAIL,
  HEAD_OFFICE_FAX,
  HEAD_OFFICE_MOBILE,
  HEAD_OFFICE_PHONES,
  HEAD_OFFICE_TEL_LINKS,
} from "@/lib/content";

export function Contact() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = String(form.get("subject") || "Website enquiry");
    const body = [
      `${t("contact.form.name")}: ${form.get("name")}`,
      `${t("contact.form.email")}: ${form.get("email")}`,
      `${t("contact.form.phone")}: ${form.get("phone")}`,
      "",
      form.get("message"),
    ].join("\n");
    window.location.href = `mailto:${HEAD_OFFICE_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <>
      <PageHero kicker={t("contact.hero.kicker")} title={t("contact.hero.title")} subtitle={t("contact.intro")} />

      <section className="py-24">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col gap-8">
            <div>
              <h2 className="font-display text-xl font-bold text-ink-900">{t("contact.headOffice")}</h2>
              <ul className="mt-5 flex flex-col gap-5 text-sm">
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <MapPin className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="pt-2 leading-relaxed text-ink-600">{t("contact.address")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Phone className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="flex flex-col gap-1 pt-2 text-ink-600">
                    <span className="text-xs font-semibold uppercase tracking-wide text-ink-400">{t("contact.phone")}</span>
                    {HEAD_OFFICE_PHONES.map((phone, i) => (
                      <a key={phone} href={HEAD_OFFICE_TEL_LINKS[i]} dir="ltr" className="hover:text-brand-600">
                        {phone}
                      </a>
                    ))}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Smartphone className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="flex flex-col gap-1 pt-2 text-ink-600">
                    <span className="text-xs font-semibold uppercase tracking-wide text-ink-400">{t("contact.mobile")}</span>
                    <a href={`tel:${HEAD_OFFICE_MOBILE.replace(/\s/g, "")}`} dir="ltr" className="hover:text-brand-600">
                      {HEAD_OFFICE_MOBILE}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Printer className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="flex flex-col gap-1 pt-2 text-ink-600">
                    <span className="text-xs font-semibold uppercase tracking-wide text-ink-400">{t("contact.fax")}</span>
                    <span dir="ltr">{HEAD_OFFICE_FAX}</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Mail className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="flex flex-col gap-1 pt-2 text-ink-600">
                    <span className="text-xs font-semibold uppercase tracking-wide text-ink-400">{t("contact.email")}</span>
                    <a href={`mailto:${HEAD_OFFICE_EMAIL}`} dir="ltr" className="hover:text-brand-600">
                      {HEAD_OFFICE_EMAIL}
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-ink-900">{t("contact.branchesTitle")}</h2>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {BRANCHES.map((branch) => {
                  const Icon = branch.icon;
                  return (
                    <li
                      key={branch.key}
                      className="flex items-center gap-3 rounded-xl border border-ink-100 px-4 py-3 text-sm font-medium text-ink-700"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-brand-500" strokeWidth={1.75} />
                      {t(`contact.branches.${branch.key}`)}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-3xl border border-ink-100 p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label={t("contact.form.name")} name="name" placeholder={t("contact.form.namePlaceholder")} required />
                <Field
                  label={t("contact.form.email")}
                  name="email"
                  type="email"
                  placeholder={t("contact.form.emailPlaceholder")}
                  required
                />
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label={t("contact.form.phone")} name="phone" placeholder={t("contact.form.phonePlaceholder")} />
                <Field label={t("contact.form.subject")} name="subject" placeholder={t("contact.form.subjectPlaceholder")} />
              </div>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-semibold text-ink-700">{t("contact.form.message")}</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={t("contact.form.messagePlaceholder")}
                  className="resize-none rounded-2xl border border-ink-200 px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                {t("contact.form.send")}
                <Send className="h-4 w-4 rtl:-scale-x-100" />
              </button>
              {sent && (
                <p className="text-sm font-medium text-brand-700">{t("contact.form.success")}</p>
              )}
            </form>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <Reveal className="overflow-hidden rounded-3xl border border-ink-100">
            <iframe
              title="NatourCo head office location"
              src="https://maps.google.com/maps?q=Shabsough%20Building%20Downtown%20Amman%20Jordan&t=m&z=15&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold text-ink-700">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="rounded-full border border-ink-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none"
      />
    </label>
  );
}
