import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui";
import { PageHeader } from "@/components/page-header";
import { CtaBanner } from "../page";
import { HeartIcon, SparkleIcon, LeafIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Gooey Goodies is a proud family-owned Michigan bakery creating gourmet cookies that bring people together — made with love and a touch of creativity.",
};

const VALUES = [
  {
    icon: HeartIcon,
    title: "Family-owned",
    body: "We're a proud family-owned bakery based right here in Michigan.",
  },
  {
    icon: SparkleIcon,
    title: "A touch of creativity",
    body: "From nostalgic classics to bold, modern twists and seasonal surprises.",
  },
  {
    icon: LeafIcon,
    title: "For everyone",
    body: "Gluten-free available upon request — everyone deserves a cookie.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title={
          <>
            Welcome to <span className="text-gradient">Gooey Goodies!</span>
          </>
        }
        subtitle="Cookies with big flavor, big smiles, and that fresh-from-the-oven magic that feels just like home."
      />

      <section className="pb-8">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-3 -z-10 -rotate-3 rounded-[2.5rem] bg-gradient-to-br from-sunny/30 via-pink/15 to-blush-deep/40" />
              <div className="overflow-hidden rounded-[2.5rem] border-4 border-white shadow-card">
                <Image
                  src="/assets/cookies-hero.png"
                  alt="An assortment of gourmet stuffed cookies"
                  width={800}
                  height={533}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                Around here, cookies come with big flavor, big smiles, and that
                fresh-from-the-oven magic that feels just like home. We&apos;re
                a proud family-owned bakery based right here in Michigan,
                dedicated to creating gourmet cookies that bring people
                together.
              </p>
              <p>
                Every batch is made with love and a touch of creativity,
                featuring flavors that range from nostalgic classics to bold,
                modern twists. Indulge in favorites like{" "}
                <span className="font-semibold text-ink">Dubai Chocolate</span>,{" "}
                Biscoff, Nutella, S&apos;mores, Oreo, Red Velvet, Fruity
                Pebbles, Cinnamon Toast Crunch, and our{" "}
                <span className="font-semibold text-ink">
                  Timeless Chocolate Chip
                </span>
                — along with plenty of seasonal surprises.
              </p>
              <p>
                Whether you&apos;re sharing them around the dinner table, sending
                a gift, planning a special event, or treating yourself after a
                long day, our cookies are baked to make life a little sweeter.
                From our family to yours, welcome to Gooey Goodies.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-blush-deep/40 bg-white p-7 text-center shadow-[0_10px_30px_-20px_rgba(58,34,51,0.35)]"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-pink to-pink-soft text-white shadow-soft">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
