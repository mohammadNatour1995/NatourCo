import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import clsx from "clsx";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS } from "@/lib/nav";

export function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(() => window.scrollY > 12);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur"
          : "bg-white/0",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <div key={item.href} className="group relative">
              <NavLink
                to={item.href}
                end={item.href === "/"}
                className={({ isActive }) =>
                  clsx(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    isActive
                      ? "text-brand-700"
                      : "text-ink-600 hover:text-brand-700",
                  )
                }
              >
                {t(item.labelKey)}
                {item.children && <ChevronDown className="h-3.5 w-3.5" />}
              </NavLink>

              {item.children && (
                <div className="invisible absolute start-0 top-full pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="min-w-56 rounded-2xl border border-ink-100 bg-white p-2 shadow-xl shadow-ink-900/5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-ink-600 hover:bg-brand-50 hover:text-brand-700"
                      >
                        {t(child.labelKey)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Button href="tel:+96264654120" variant="primary" icon={<Phone className="h-4 w-4" />}>
            <span dir="ltr">{t("topbar.phone")}</span>
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink-700 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-ink-100 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.href}>
                <Link
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-ink-700"
                >
                  {t(item.labelKey)}
                </Link>
                {item.children && (
                  <div className="ms-4 flex flex-col border-s border-ink-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="px-4 py-2 text-sm text-ink-500"
                      >
                        {t(child.labelKey)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3 px-3">
              <LanguageSwitcher />
              <Button href="tel:+96264654120" variant="primary" className="flex-1">
                <span dir="ltr">{t("topbar.phone")}</span>
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
