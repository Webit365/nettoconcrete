"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type GalleryImage = { src: string; alt: string };

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft")
        setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, images.length]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i)}
            className="group relative block w-full overflow-hidden rounded-2xl border border-steel-100 bg-steel-100 shadow-card focus:outline-none focus-visible:ring-4 focus-visible:ring-netto-200"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              className="h-auto w-full transition duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <span className="absolute inset-0 bg-steel-950/0 transition group-hover:bg-steel-950/10" />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-steel-950/90 p-4"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            ✕
          </button>
          <div className="relative max-h-[85vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[active].src}
              alt={images[active].alt}
              width={1400}
              height={1000}
              className="max-h-[85vh] w-auto rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
