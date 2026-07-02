import type { Metadata } from "next";
import { Container, Button } from "@/components/ui";
import { PageHeader } from "@/components/page-header";
import {
  PhoneIcon,
  MailIcon,
  InstagramIcon,
  TiktokIcon,
  SparkleIcon,
} from "@/components/icons";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Gooey Goodies. Call or text 248.978.6574, email us, or follow @gooeygoodies_ on Instagram & TikTok for upcoming events and farmers markets.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Say hello"
        title={
          <>
            Let&apos;s make it <span className="text-gradient">sweeter</span>
          </>
        }
        subtitle="Have a special event or a question? Call, text or email us anytime — and follow along for all upcoming events and farmers markets."
      />

      <section className="pb-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Contact methods */}
            <div className="space-y-5">
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
                    Orders
                  </p>
                  <p className="truncate font-display text-xl font-bold text-ink">
                    {CONTACT.ordersEmail}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT.infoEmail}`}
                className="group flex items-center gap-5 rounded-3xl border border-blush-deep/40 bg-white p-7 shadow-[0_10px_30px_-20px_rgba(58,34,51,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-pink/50"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-pink to-pink-soft text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                  <MailIcon className="h-7 w-7" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
                    General info
                  </p>
                  <p className="truncate font-display text-xl font-bold text-ink">
                    {CONTACT.infoEmail}
                  </p>
                </div>
              </a>
            </div>

            {/* Social / events card */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pink to-pink-soft p-8 text-white shadow-card sm:p-10">
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
              <SparkleIcon className="h-8 w-8 text-white/90" />
              <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                Find us at markets &amp; events
              </h2>
              <p className="mt-3 text-white/85">
                Visit our Instagram &amp; TikTok for all upcoming events and
                farmers markets!
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-white/15 p-4 backdrop-blur transition-colors hover:bg-white/25"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/90 text-pink">
                    <InstagramIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                      Instagram
                    </p>
                    <p className="font-display text-lg font-bold">
                      @{CONTACT.instagram}
                    </p>
                  </div>
                </a>
                <a
                  href={CONTACT.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-white/15 p-4 backdrop-blur transition-colors hover:bg-white/25"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/90 text-pink">
                    <TiktokIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                      TikTok
                    </p>
                    <p className="font-display text-lg font-bold">
                      @{CONTACT.tiktok}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Special event CTA */}
          <div className="mt-10 rounded-3xl border border-blush-deep/40 bg-white p-8 text-center shadow-[0_10px_30px_-20px_rgba(58,34,51,0.35)] sm:p-10">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Have a special event? Let us make it sweeter!
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-soft">
              For questions or orders, call, text or email us — we&apos;d love to
              be part of your celebration.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={CONTACT.phoneHref}>Call {CONTACT.phone}</Button>
              <Button href="/order" variant="secondary">
                Start an order
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
