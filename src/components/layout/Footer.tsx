import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Mail, MapPin, MessageCircle, Phone, Send, Share2 } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { NAV_ITEMS } from "@/lib/nav";
import {
  HEAD_OFFICE_EMAIL,
  HEAD_OFFICE_FAX,
  HEAD_OFFICE_MOBILE,
  HEAD_OFFICE_PHONES,
  HEAD_OFFICE_TEL_LINKS,
} from "@/lib/content";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-ink-300">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Logo light />
          <p className="text-sm leading-relaxed text-ink-400">{t("footer.about")}</p>
          <div className="flex items-center gap-3 pt-2">
            {[Share2, MessageCircle, Send].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-colors hover:border-brand-400 hover:text-brand-300"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
            {t("footer.quickLinks")}
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="transition-colors hover:text-brand-300">
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
            {t("footer.contact")}
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span>{t("contact.address")}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span className="flex flex-col gap-1">
                {HEAD_OFFICE_PHONES.map((phone, i) => (
                  <a key={phone} href={HEAD_OFFICE_TEL_LINKS[i]} className="hover:text-brand-300" dir="ltr">
                    {phone}
                  </a>
                ))}
                <a href={`tel:${HEAD_OFFICE_MOBILE.replace(/\s/g, "")}`} className="hover:text-brand-300" dir="ltr">
                  {HEAD_OFFICE_MOBILE}
                </a>
                <span className="text-ink-500">
                  {t("contact.fax")}: <span dir="ltr">{HEAD_OFFICE_FAX}</span>
                </span>
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <a href={`mailto:${HEAD_OFFICE_EMAIL}`} className="hover:text-brand-300" dir="ltr">
                {HEAD_OFFICE_EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
            {t("footer.newsletterTitle")}
          </h3>
          <p className="text-sm text-ink-400">{t("footer.newsletterBody")}</p>
          <form
            className="flex flex-col gap-2 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder={t("footer.newsletterPlaceholder")}
              className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-ink-500 focus:border-brand-400 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
            >
              {t("footer.newsletterCta")}
            </button>
          </form>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-ink-500 sm:flex-row">
          <span>
            &copy; {year} NatourCo — {t("footer.rights")}
          </span>
          <span>{t("meta.tagline")}</span>
        </Container>
      </div>
    </footer>
  );
}
