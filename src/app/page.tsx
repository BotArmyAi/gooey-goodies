import Image from "next/image";
import Link from "next/link";
import { Button, Container, Pill } from "@/components/ui";
import { FlavorCard } from "@/components/flavor-card";
import { Marquee } from "@/components/marquee";
import { VideoCard } from "@/components/video-card";
import {
  HeartIcon,
  LeafIcon,
  SparkleIcon,
  TruckIcon,
  ArrowIcon,
} from "@/components/icons";
import { FLAVORS, PRICING } from "@/lib/site";

const FEATURES = [
  {
    icon: HeartIcon,
    title: "Baked With Love",
    body: "Every batch is made from scratch by our family, the way cookies should be.",
  },
  {
    icon: SparkleIcon,
    title: "Stuffed & Gooey",
    body: "Molten centers of Dubai chocolate, Biscoff, Nutella, S'mores & more.",
  },
  {
    icon: LeafIcon,
    title: "Gluten-Free Available",
    body: "Because everyone deserves cookies — just ask when you order.",
  },
  {
    icon: TruckIcon,
    title: "Events & Catering",
    body: "Weddings, birthdays, graduations — any celebration you can dream up.",
  },
];

export default function HomePage() {
  const preview = FLAVORS.slice(0, 8);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* soft decorative blobs */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blush-deep/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-32 h-64 w-64 rounded-full bg-sunny/30 blur-3xl" />
        <div className="absolute inset-0 -z-10 bg-dots opacity-60" />

        <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-24">
          <div className="text-center lg:text-left">
            <Pill className="mx-auto lg:mx-0">
              <HeartIcon className="h-4 w-4" /> Family-owned Michigan bakery
            </Pill>

            <div className="mt-6 flex justify-center lg:justify-start">
              <Image
                src="/assets/logo.png"
                alt="Gooey Goodies"
                width={800}
                height={450}
                priority
                className="h-auto w-[min(420px,90%)] animate-float-slow drop-shadow-[0_18px_30px_rgba(241,33,181,0.25)]"
              />
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              Gourmet Cookies &amp; More,{" "}
              <span className="text-gradient">Baked With Love!</span>
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-ink-soft lg:mx-0">
              Big flavor, big smiles, and that fresh-from-the-oven magic that
              feels just like home. Stuffed, gooey &amp; unforgettable.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Button href="/order">
                Order Your Gooeys <ArrowIcon className="h-5 w-5" />
              </Button>
              <Button href="/flavors" variant="secondary">
                See All Flavors
              </Button>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute -inset-3 -z-10 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-pink/20 via-sunny/20 to-blush-deep/40" />
            <div className="overflow-hidden rounded-[2.5rem] border-4 border-white shadow-card">
              <Image
                src="/assets/cookies-hero.png"
                alt="A box of six gourmet stuffed cookies from Gooey Goodies"
                width={800}
                height={533}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            {/* floating price badge */}
            <div className="absolute -bottom-5 -left-4 rotate-[-6deg] animate-float rounded-2xl bg-white px-5 py-3 shadow-card ring-1 ring-blush-deep/50 sm:-left-6">
              <p className="font-display text-sm font-semibold text-ink-soft">
                6-Pack from
              </p>
              <p className="font-display text-2xl font-bold text-pink">$25</p>
            </div>
          </div>
        </Container>
      </section>

      <Marquee />

      {/* ================= FEATURES ================= */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-pink">
              Why you&apos;ll love us
            </span>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Not your average cookie
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-3xl border border-blush-deep/40 bg-white p-7 text-center shadow-[0_10px_30px_-20px_rgba(58,34,51,0.35)] transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-pink to-pink-soft text-white shadow-soft">
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= FLAVORS PREVIEW ================= */}
      <section className="relative overflow-hidden bg-blush/40 py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div>
              <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-pink">
                Original flavors
              </span>
              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
                Pick your gooey obsession
              </h2>
            </div>
            <Button href="/flavors" variant="secondary">
              View all 16 flavors <ArrowIcon className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {preview.map((flavor) => (
              <FlavorCard key={flavor.name} flavor={flavor} />
            ))}
          </div>
        </Container>
      </section>

      {/* ================= VIDEO REEL ================= */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-pink">
                Straight from the oven
              </span>
              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
                See the gooey in action
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">
                Tap to watch our cookies get stuffed, drizzled and boxed up.
                Follow along for new flavors, farmers&apos; markets and pop-up
                events near you.
              </p>
              <div className="mt-7">
                <Button href="/contact">Follow our journey</Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 sm:gap-6">
              <div className="pt-8">
                <VideoCard
                  src="/videos/video-1.mp4"
                  poster="/assets/video-1-poster.jpg"
                  label="Fresh batch"
                />
              </div>
              <div>
                <VideoCard
                  src="/videos/video-2.mp4"
                  poster="/assets/video-2-poster.jpg"
                  label="Stuffed & drizzled"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= PRICING TEASER ================= */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-50" />
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-pink">
              Simple pricing
            </span>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Treat yourself (or the whole party)
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
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
            Planning a special event?{" "}
            <Link
              href="/order"
              className="font-semibold text-pink underline-offset-4 hover:underline"
            >
              Contact us for custom pricing
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* ================= CTA ================= */}
      <CtaBanner />
    </>
  );
}

export function CtaBanner() {
  return (
    <section className="pb-4">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-14 text-center shadow-card sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-pink/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -right-8 h-56 w-56 rounded-full bg-sunny/20 blur-3xl" />
          <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            Ready for cookies that feel like home?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-cream/80">
            Baked to order — please allow 2 days. Minimum 6 Gooeys for pick-up.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/order">
              Place an Order <ArrowIcon className="h-5 w-5" />
            </Button>
            <Button
              href="/flavors"
              variant="secondary"
              className="border-white/30 bg-white/5 text-white hover:border-white hover:bg-white/10 hover:text-white"
            >
              Browse Flavors
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
