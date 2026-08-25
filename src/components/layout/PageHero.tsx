import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/SectionHeading";

export function PageHero({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-20 sm:py-24">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(79,163,196,0.3), transparent 45%), radial-gradient(circle at 80% 70%, rgba(221,138,28,0.2), transparent 45%)",
        }}
      />
      <Container className="relative flex flex-col gap-4">
        <Kicker light>{kicker}</Kicker>
        <h1 className="max-w-2xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="max-w-xl text-brand-100/80">{subtitle}</p>}
      </Container>
    </section>
  );
}
