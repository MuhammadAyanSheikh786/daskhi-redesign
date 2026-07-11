"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  slides: { content: React.ReactNode }[];
  className?: string;
  autoplay?: boolean;
  autoplayInterval?: number;
}

export default function Carousel({
  slides,
  className = "",
  autoplay = true,
  autoplayInterval = 4000,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    autoplay ? [Autoplay({ delay: autoplayInterval, stopOnInteraction: true })] : [],
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const showNav = slides.length > 3;

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 first:pl-0"
            >
              {slide.content}
            </div>
          ))}
        </div>
      </div>

      {showNav && (
        <>
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="absolute -left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-ink shadow-md flex items-center justify-center text-primary-dark dark:text-cream hover:bg-primary hover:text-cream dark:hover:bg-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className="absolute -right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-ink shadow-md flex items-center justify-center text-primary-dark dark:text-cream hover:bg-primary hover:text-cream dark:hover:bg-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? "bg-accent w-6 h-2"
                    : "bg-primary/20 dark:bg-cream/20 hover:bg-primary/40 dark:hover:bg-cream/40 w-2 h-2"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
