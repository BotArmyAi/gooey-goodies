import type { Flavor } from "@/lib/site";

export function FlavorCard({ flavor }: { flavor: Flavor }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-blush-deep/40 bg-white p-5 shadow-[0_10px_30px_-18px_rgba(58,34,51,0.3)] transition-all duration-300 hover:-translate-y-1.5 hover:border-pink/50 hover:shadow-card">
      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blush/70 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
          {flavor.emoji}
        </span>
        {flavor.stuffed && (
          <span className="rounded-full bg-pink/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-pink">
            Stuffed
          </span>
        )}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold leading-tight text-ink">
        {flavor.name}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
        {flavor.blurb}
      </p>
    </div>
  );
}
