import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Large hero carousel for featured games — mirrors the reference design's
 * full-width banner with left/right arrows and "1 of N" pagination.
 */
export default function FeaturedHero({ games }) {
  const [index, setIndex] = useState(0);
  const total = games.length;

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total],
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const game = games[index];
  const bgImage =
    game.heroImage || game.screenshots?.[0] || game.coverImage || null;

  return (
    <div className="relative w-full rounded-lg overflow-hidden mb-10">
      {/* Background image */}
      <div
        className={cn(
          "relative w-full aspect-[21/9] md:aspect-[3/1] transition-opacity duration-500",
          bgImage ? "bg-cover bg-center" : "bg-card",
        )}
        style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
      >
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-start h-full p-6 md:p-10 lg:p-14 max-w-2xl">
          {game.logo ? (
            <img
              src={game.logo}
              alt={game.title}
              className="h-10 md:h-14 lg:h-18 w-auto object-contain object-left mb-4 drop-shadow-lg self-start"
            />
          ) : (
            <h3
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4"
              style={{ textShadow: "3px 0px 0px #ff8906" }}
            >
              {game.title}
            </h3>
          )}

          <div className="flex flex-wrap items-center gap-2 mb-3">
            {game.types?.map((type) => (
              <Badge
                key={type}
                className="bg-secondary text-secondary-foreground"
              >
                {type}
              </Badge>
            ))}
            {game.rating && (
              <Badge className="bg-accent text-accent-foreground">
                Rated: {game.rating}
              </Badge>
            )}
          </div>

          <p className="text-sm text-foreground/80 line-clamp-2 mb-4 hidden md:block">
            {game.description}
          </p>

          <Link
            to={`/games/${game.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors w-fit"
          >
            View Details →
          </Link>
        </div>
      </div>

      {/* Nav arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-background/60 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
        onClick={prev}
        aria-label="Previous featured game"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-background/60 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
        onClick={next}
        aria-label="Next featured game"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Pagination indicator — "1 of 4" */}
      <div className="absolute bottom-3 right-4 z-10 px-3 py-1.5 rounded-full bg-background/70 backdrop-blur-sm text-xs font-bold text-foreground">
        {index + 1} of {total}
      </div>
    </div>
  );
}
