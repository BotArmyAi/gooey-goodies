"use client";

import { useRef, useState } from "react";

type Props = {
  src: string;
  poster: string;
  label: string;
};

export function VideoCard({ src, poster, label }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <button
      onClick={toggle}
      className="group relative aspect-9/16 w-full overflow-hidden rounded-[2rem] border-4 border-white bg-ink shadow-card outline-none focus-visible:ring-4 focus-visible:ring-pink/40"
      aria-label={playing ? `Pause ${label}` : `Play ${label}`}
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Play overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-ink/25 transition-opacity duration-300 ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-pink shadow-lg transition-transform duration-300 group-hover:scale-110">
          <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>
      <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-ink/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
        {label}
      </span>
    </button>
  );
}
