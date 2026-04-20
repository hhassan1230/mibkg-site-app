import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const CarouselContext = createContext(null);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context)
    throw new Error("useCarousel must be used within a <Carousel />");
  return context;
}

const Carousel = forwardRef(
  (
    {
      orientation = "horizontal",
      opts,
      plugins,
      setApi,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
      { axis: orientation === "horizontal" ? "x" : "y", ...opts },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback((api) => {
      if (!api) return;
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const handleKeyDown = useCallback(
      (e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          scrollPrev();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    useEffect(() => {
      if (!emblaApi) return;
      onSelect(emblaApi);
      emblaApi.on("reInit", onSelect);
      emblaApi.on("select", onSelect);
      return () => {
        emblaApi.off("select", onSelect);
        emblaApi.off("reInit", onSelect);
      };
    }, [emblaApi, onSelect]);

    useEffect(() => {
      if (setApi && emblaApi) setApi(emblaApi);
    }, [emblaApi, setApi]);

    return (
      <CarouselContext.Provider
        value={{
          emblaRef,
          emblaApi,
          opts,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = forwardRef(({ className, ...props }, ref) => {
  const { emblaRef, orientation } = useCarousel();
  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { scrollPrev, canScrollPrev } = useCarousel();
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-10 w-10 rounded-full transition-all",
          !canScrollPrev && "opacity-0 pointer-events-none",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        aria-label="Previous slide"
        {...props}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { scrollNext, canScrollNext } = useCarousel();
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-10 w-10 rounded-full transition-all",
          !canScrollNext && "opacity-0 pointer-events-none",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        aria-label="Next slide"
        {...props}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarousel,
};
