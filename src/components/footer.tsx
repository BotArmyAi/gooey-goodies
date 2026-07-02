import Link from "next/link";
import Image from "next/image";
import { CONTACT, NAV_LINKS } from "@/lib/site";
import { InstagramIcon, TiktokIcon } from "./icons";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-cream">
      {/* wavy top edge */}
      <div className="absolute inset-x-0 -top-px text-cream" aria-hidden>
        <svg viewBox="0 0 1440 60" fill="currentColor" className="w-full">
          <path d="M0,32 C240,64 480,0 720,16 C960,32 1200,64 1440,24 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-10 pt-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src="/assets/logo.png"
            alt="Gooey Goodies"
            width={800}
            height={450}
            className="h-14 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            Gourmet cookies &amp; more, baked with love. A proud family-owned
            bakery in {CONTACT.location}.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-pink hover:text-white"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={CONTACT.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-pink hover:text-white"
            >
              <TiktokIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-white">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-cream/70 transition-colors hover:text-pink-soft"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-white">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
            <li>
              <a
                href={CONTACT.phoneHref}
                className="transition-colors hover:text-pink-soft"
              >
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.ordersEmail}`}
                className="break-all transition-colors hover:text-pink-soft"
              >
                {CONTACT.ordersEmail}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.infoEmail}`}
                className="break-all transition-colors hover:text-pink-soft"
              >
                {CONTACT.infoEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-cream/50 sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} Gooey Goodies. Baked fresh with love.
          </p>
          <p>Gluten-free available upon request 💕</p>
        </div>
      </div>
    </footer>
  );
}
