import type { Metadata } from "next";
import { Container, Button } from "@/components/ui";
import { PageHeader } from "@/components/page-header";
import {
  PhoneIcon,
  MailIcon,
  ClockIcon,
  TruckIcon,
  HeartIcon,
  SparkleIcon,
} from "@/components/icons";
import { CONTACT, PRICING, ALLERGENS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Order",
  description:
    "Order gourmet Gooey Goodies cookies by phone, text or email. Baked to order — please allow 2 days. 6-pack $25, dozen $45, 2 dozen $85. Custom event pricing available.",
};

const MINIMUMS = [
  { label: "Online & Pick-Up", value: "6 Gooeys" },
  { label: "Special Events", value: "60 Gooeys" },
];

export default function OrderPage() {
  return (
    <>
      <PageHeader
        eyebrow="Let's get baking"
        title={
          <>
            Order your <span className="text-gradient">Gooeys</span>
          </>
        }
        subtitle="Baked to order — please allow 2 days. To place an order, just call, text or email us. We can't wait to bake for you!"
      />

      {/* Contact-to-order cards */}
      <section className="pb-6">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            <a
              href={CONTACT.phoneHref}
              className="group flex items-center gap-5 rounded-3xl border border-blush-deep/40 bg-white p-7 shadow-[0_10px_30px_-20px_rgba(58,34,51,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-pink/50"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-pink to-pink-soft text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                <PhoneIcon className="h-7 w-7" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
                  Call or Text
                </p>
                <p className="font-display text-xl font-bold text-ink">
                  {CONTACT.phone}
                </p>
              </div>
            </a>
            <a
              href={`mailto:${CONTACT.ordersEmail}`}
              className="group flex items-center gap-5 rounded-3xl border border-blush-deep/40 bg-white p-7 shadow-[0_10px_30px_-20px_rgba(58,34,51,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-pink/50"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-pink to-pink-soft text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                <MailIcon className="h-7 w-7" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
                  Email your order
                </p>
                <p className="truncate font-display text-xl font-bold text-ink">
                  {CONTACT.ordersEmail}
                </p>
              </div>
            </a>
          </div>
        </Container>
      </section>

      {/* Info strip */}
      <section className="py-6">
        <Container>
          <div className="grid gap-4 sm:grid-cols-3">
            <InfoTile
              icon={<ClockIcon className="h-6 w-6" />}
              title="Allow 2 days"
              body="Everything is baked fresh to order."
            />
            {MINIMUMS.map((m) => (
              <InfoTile
                key={m.label}
                icon={<HeartIcon className="h-6 w-6" />}
                title={m.value}
                body={`Minimum for ${m.label.toLowerCase()}.`}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="py-14">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-pink">
              Pricing
            </span>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Pick your pack
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PRICING.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-3xl border p-8 text-center transition-transform duration-300 hover:-translate-y-1.5 ${
                  tier.highlight
                    ? "border-transparent bg-gradient-to-br from-pink to-pink-soft text-white shadow-card"
                    : "border-blush-deep/40 bg-white text-ink shadow-[0_10px_30px_-20px_rgba(58,34,51,0.35)]"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sunny px-4 py-1 text-xs font-bold uppercase tracking-wide text-choco shadow">
                    Most loved
                  </span>
                )}
                <h3
                  className={`font-display text-lg font-semibold ${
                    tier.highlight ? "text-white" : "text-ink"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-3 font-display text-5xl font-bold ${
                    tier.highlight ? "text-white" : "text-pink"
                  }`}
                >
                  {tier.price}
                </p>
                <p
                  className={`mt-3 text-sm ${
                    tier.highlight ? "text-white/85" : "text-ink-soft"
                  }`}
                >
                  {tier.note}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink-soft">
            Note: prices may vary at local markets and convenience stores.
          </p>
        </Container>
      </section>

      {/* Catering */}
      <section className="py-8">
        <Container>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-12 shadow-card sm:px-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-pink/25 blur-3xl" />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-pink-soft">
                  <TruckIcon className="h-5 w-5" /> Events & catering
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                  We cater any celebration
                </h2>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-cream/80">
                  Weddings, birthdays, special events, graduations — basically
                  any celebration you can dream up! You can also grab our goodies
                  at your local market, gas station or convenience store —{" "}
                  <span className="font-semibold text-white">coming soon!</span>
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <Button href={CONTACT.phoneHref}>Call for custom pricing</Button>
                <Button
                  href={`mailto:${CONTACT.ordersEmail}`}
                  variant="secondary"
                  className="border-white/30 bg-white/5 text-white hover:border-white hover:bg-white/10 hover:text-white"
                >
                  Email us
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Allergen notice */}
      <section className="py-14">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border-2 border-dashed border-blush-deep/70 bg-blush/30 p-7 text-center">
            <span className="inline-flex items-center gap-2 font-display text-lg font-bold text-ink">
              <SparkleIcon className="h-5 w-5 text-pink" /> Food Allergy Notice
            </span>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Please be advised that our food may contain these ingredients:{" "}
              <span className="font-semibold text-ink">
                {ALLERGENS.join(", ")}
              </span>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

function InfoTile({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-3xl border border-blush-deep/40 bg-white p-6 shadow-[0_10px_30px_-20px_rgba(58,34,51,0.35)]">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blush/70 text-pink">
        {icon}
      </span>
      <div>
        <p className="font-display text-lg font-bold text-ink">{title}</p>
        <p className="text-sm text-ink-soft">{body}</p>
      </div>
    </div>
  );
}
