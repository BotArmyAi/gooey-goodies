import { HeartIcon } from "./icons";

const ITEMS = [
  "Baked Fresh Daily",
  "Family Owned",
  "Made in Michigan",
  "Stuffed & Gooey",
  "Gluten-Free Available",
  "Custom Event Catering",
];

export function Marquee() {
  // Duplicate the list so the -50% translate loops seamlessly.
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="relative flex overflow-hidden bg-pink py-4 text-white select-none">
      <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-display text-lg font-semibold tracking-wide whitespace-nowrap sm:text-xl">
              {item}
            </span>
            <HeartIcon className="h-4 w-4 shrink-0 text-white/70" />
          </div>
        ))}
      </div>
    </div>
  );
}
