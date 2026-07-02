"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/site";
import { Button } from "./ui";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-blush-deep/50 bg-cream/85 backdrop-blur-lg"
          : "border-b border-transparent bg-cream/40 backdrop-blur"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-2 sm:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Gooey Goodies home">
          <Image
            src="/assets/logo.png"
            alt="Gooey Goodies"
            width={800}
            height={450}
            priority
            className="h-16 w-auto sm:h-[4.5rem]"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-[15px] font-semibold transition-colors ${
                    active
                      ? "text-pink"
                      : "text-ink/80 hover:text-pink"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-pink" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href="/order" className="px-6 py-2.5 text-sm">
            Order Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-pink shadow-sm ring-1 ring-blush-deep/60 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-blush-deep/40 bg-cream/95 backdrop-blur-lg transition-all duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-2xl px-4 py-3 text-lg font-semibold transition-colors ${
                    active
                      ? "bg-blush/70 text-pink"
                      : "text-ink/80 hover:bg-blush/40 hover:text-pink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="mt-2">
            <Button href="/order" className="w-full">
              Order Now
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
