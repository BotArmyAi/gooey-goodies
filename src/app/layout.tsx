import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const fredoka = Fredoka({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const SITE_URL = "https://mygooeygoodies.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gooey Goodies — Gourmet Cookies Baked With Love",
    template: "%s · Gooey Goodies",
  },
  description:
    "Family-owned Michigan bakery serving gourmet stuffed cookies baked fresh with love. Dubai Chocolate, Biscoff, Nutella, S'mores, Oreo & more. Gluten-free available.",
  keywords: [
    "gourmet cookies",
    "stuffed cookies",
    "Michigan bakery",
    "Dubai chocolate cookie",
    "custom cookies",
    "cookie catering",
  ],
  openGraph: {
    title: "Gooey Goodies — Gourmet Cookies Baked With Love",
    description:
      "Family-owned Michigan bakery serving gourmet stuffed cookies baked fresh with love.",
    url: SITE_URL,
    siteName: "Gooey Goodies",
    images: [{ url: "/assets/cookies-hero.png", width: 800, height: 533 }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
