import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHeader } from "@/components/page-header";
import { FlavorCard } from "@/components/flavor-card";
import { CtaBanner } from "../page";
import { LeafIcon, SparkleIcon, HeartIcon } from "@/components/icons";
import { FLAVORS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Flavors",
  description:
    "Our full gourmet cookie line-up — from Timeless Chocolate Chip to stuffed Dubai Chocolate, Biscoff, Nutella, S'mores and more. Gluten-free available.",
};

export default function FlavorsPage() {
  return (
    <>
      <PageHeader
        pill={
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-semibold text-pink shadow-sm ring-1 ring-blush-deep/60 backdrop-blur">
            <SparkleIcon className="h-4 w-4" /> 16 original flavors
          </span>
        }
        title={
          <>
            Our gooey <span className="text-gradient">flavor menu</span>
          </>
        }
        subtitle="Nostalgic classics and bold, modern twists — each one baked fresh and stuffed with love. New seasonal surprises drop all the time."
      />

      <section className="pb-8">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {FLAVORS.map((flavor) => (
              <FlavorCard key={flavor.name} flavor={flavor} />
            ))}
          </div>
        </Container>
      </section>

      {/* Flavor of the month */}
      <section className="py-16">
        <Container>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pink to-pink-soft px-8 py-12 text-center text-white shadow-card sm:px-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
            <SparkleIcon className="mx-auto h-8 w-8 text-white/90" />
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              Flavor of the Month
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-white/85">
              We rotate a special limited-edition flavor every month. Follow us
              on Instagram &amp; TikTok{" "}
              <span className="font-semibold">@gooeygoodies_</span> to see
              what&rsquo;s baking right now.
            </p>
          </div>
        </Container>
      </section>

      {/* Notes */}
      <section className="pb-16">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-3xl border border-blush-deep/40 bg-white p-6 shadow-[0_10px_30px_-20px_rgba(58,34,51,0.35)]">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blush/70 text-pink">
                <LeafIcon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  Gluten-Free Available
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  Available upon request — because everyone deserves cookies.
                  Just let us know when you order.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-3xl border border-blush-deep/40 bg-white p-6 shadow-[0_10px_30px_-20px_rgba(58,34,51,0.35)]">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blush/70 text-pink">
                <HeartIcon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  Made Fresh to Order
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  Every Gooey is baked when you order it. Please allow 2 days so
                  it arrives fresh and, well… gooey.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
