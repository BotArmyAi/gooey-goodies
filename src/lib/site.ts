export const CONTACT = {
  phone: "248.978.6574",
  phoneHref: "tel:+12489786574",
  ordersEmail: "Orders@MyGooeyGoodies.com",
  infoEmail: "Info@MyGooeyGoodies.com",
  instagram: "gooeygoodies_",
  instagramUrl: "https://instagram.com/gooeygoodies_",
  tiktok: "gooeygoodies_",
  tiktokUrl: "https://www.tiktok.com/@gooeygoodies_",
  location: "Michigan",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/order", label: "Order" },
  { href: "/about", label: "About" },
  { href: "/flavors", label: "Cookie Flavors" },
  { href: "/contact", label: "Contact Us" },
];

export type Flavor = {
  name: string;
  stuffed?: boolean;
  emoji: string;
  blurb: string;
};

/** The original flavor line-up, straight from the menu. */
export const FLAVORS: Flavor[] = [
  {
    name: "Timeless Chocolate Chip",
    emoji: "🍪",
    blurb: "The one that started it all — gooey center, buttery edges.",
  },
  {
    name: "Naked Dough",
    emoji: "🥣",
    blurb: "All dough. No chips. For the purists among us.",
  },
  {
    name: "Dubai Chocolate",
    stuffed: true,
    emoji: "🍫",
    blurb: "Pistachio & crispy kunafa stuffed and drizzled in chocolate.",
  },
  {
    name: "Biscoff",
    stuffed: true,
    emoji: "🍯",
    blurb: "Stuffed with warm, spiced cookie butter.",
  },
  {
    name: "Nutella",
    stuffed: true,
    emoji: "🌰",
    blurb: "Molten hazelnut chocolate in every bite.",
  },
  {
    name: "Ferrero Rocher",
    stuffed: true,
    emoji: "✨",
    blurb: "Crunchy, nutty, chocolate-hazelnut decadence.",
  },
  {
    name: "S'mores",
    stuffed: true,
    emoji: "🔥",
    blurb: "Toasted marshmallow, graham & milk chocolate.",
  },
  {
    name: "Cookie Monster",
    stuffed: true,
    emoji: "💙",
    blurb: "Blue-dough, cookie-loaded, unapologetically fun.",
  },
  {
    name: "Birthday Cake",
    emoji: "🎉",
    blurb: "Funfetti sprinkles and vanilla-frosting joy.",
  },
  { name: "Oreo", emoji: "🖤", blurb: "Cookies-and-cream crunch in every bite." },
  {
    name: "Red Velvet",
    emoji: "❤️",
    blurb: "Cocoa-kissed and swirled with cream cheese.",
  },
  {
    name: "Fruity Pebbles",
    emoji: "🌈",
    blurb: "Crunchy, colorful & straight-up nostalgic.",
  },
  {
    name: "Cinnamon Toast Crunch",
    emoji: "🥄",
    blurb: "Cinnamon-sugar swirl on a breakfast-cereal classic.",
  },
  {
    name: "Circus Animal",
    emoji: "🎪",
    blurb: "Pink & white frosting with rainbow sprinkles.",
  },
  { name: "M&M's", emoji: "🔴", blurb: "Loaded with melt-in-your-mouth candy." },
  {
    name: "Reese's",
    emoji: "🥜",
    blurb: "Peanut butter cup chunks in every bite.",
  },
];

export const PRICING = [
  {
    name: "6-Pack",
    price: "$25",
    note: "perfect for a little treat!",
    highlight: false,
  },
  {
    name: "Dozen",
    price: "$45",
    note: "share the love (or keep them all, we won't judge!)",
    highlight: true,
  },
  {
    name: "2 Dozen",
    price: "$85",
    note: "enough to make everyone happy!",
    highlight: false,
  },
];

export const ALLERGENS = ["milk", "eggs", "wheat", "soybean", "peanuts", "tree nuts"];
