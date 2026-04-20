import { useState, useMemo } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { games } from "@/data/games";
import { merch } from "@/data/merch";
import { press } from "@/data/press";
import GameCard from "./GameCard";
import MerchCard from "./MerchCard";
import PressCard from "./PressCard";
import FeaturedHero from "./FeaturedHero";
import { ScrollReveal } from "@/hooks/useScrollReveal";

/* Derive unique platforms from game data for filter pills */
const allPlatforms = [...new Set(games.flatMap((g) => g.platforms))];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("games");
  const [platform, setPlatform] = useState("All");
  const [sort, setSort] = useState("newest");

  /* Featured games — flagged in data */
  const featuredGames = useMemo(() => games.filter((g) => g.featured), []);

  /* Filter + sort logic */
  const filteredGames = useMemo(() => {
    let list =
      platform === "All"
        ? [...games]
        : games.filter((g) => g.platforms.includes(platform));

    if (sort === "newest") list.reverse();
    // "all" keeps original order

    return list;
  }, [platform, sort]);

  return (
    <section
      id="gallery"
      className="relative py-16 md:py-24"
      style={{
        backgroundImage:
          "url(/assets/img/desktop--bg-image-7C97C025-4A3E-40C7-99FD-C8AA81F2AB80.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList>
                <TabsTrigger value="games">Games</TabsTrigger>
                <TabsTrigger value="merch">Merch</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
            </div>

            {/* ═══ GAMES TAB ═══ */}
            <TabsContent value="games">
              {/* Featured hero carousel */}
              {featuredGames.length > 0 && (
                <FeaturedHero games={featuredGames} />
              )}

              {/* Sort / Filter bar — matches reference "Platform Sort | All | Newest" */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mr-2">
                  Platform
                </span>
                <Button
                  variant={platform === "All" ? "default" : "outline"}
                  size="sm"
                  className="h-7 text-xs"
                  onClick={() => setPlatform("All")}
                >
                  All
                </Button>
                {allPlatforms.map((p) => (
                  <Button
                    key={p}
                    variant={platform === p ? "default" : "outline"}
                    size="sm"
                    className="h-7 text-xs"
                    onClick={() => setPlatform(p)}
                  >
                    {p}
                  </Button>
                ))}

                <div className="h-5 w-px bg-border mx-2 hidden sm:block" />

                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mr-2">
                  Sort
                </span>
                {[
                  { key: "all", label: "All" },
                  { key: "newest", label: "Newest" },
                ].map((opt) => (
                  <Button
                    key={opt.key}
                    variant={sort === opt.key ? "default" : "outline"}
                    size="sm"
                    className="h-7 text-xs"
                    onClick={() => setSort(opt.key)}
                  >
                    {opt.label}
                  </Button>
                ))}
              </div>

              <div className="flex flex-col items-center">
                {/* Carousel of game spines */}
                <Carousel
                  opts={{
                    align: "center",
                    loop: true,
                    dragFree: true,
                    containScroll: false,
                  }}
                  className="w-full max-w-5xl"
                >
                  <CarouselContent className="-ml-6 md:-ml-10 items-end py-8">
                    {filteredGames.map((game) => (
                      <CarouselItem
                        key={game.slug}
                        className="pl-6 md:pl-10 basis-auto"
                      >
                        <GameCard game={game} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  {/* Nav arrows — branded orange, positioned at shelf level */}
                  <CarouselPrevious className="left-0 md:-left-12 top-1/2 -translate-y-1/2 border-primary/30 bg-background/80 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary" />
                  <CarouselNext className="right-0 md:-right-12 top-1/2 -translate-y-1/2 border-primary/30 bg-background/80 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary" />
                </Carousel>

                {/* Shelf surface */}
                <div className="w-full max-w-5xl">
                  <div
                    className="h-[6px] rounded-sm"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #282522 15%, #3a3530 50%, #282522 85%, transparent)",
                    }}
                  />
                  <div
                    className="h-[3px] mt-[1px] rounded-sm opacity-40"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #ff8906 15%, #ff890640 50%, #ff8906 85%, transparent)",
                    }}
                  />
                </div>

                {/* Filtered count */}
                {platform !== "All" && (
                  <p className="text-xs text-muted-foreground mt-4">
                    Showing {filteredGames.length} of {games.length} games
                  </p>
                )}
              </div>
            </TabsContent>

            {/* ═══ MERCH TAB ═══ */}
            <TabsContent value="merch">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground">
                  Featured Products
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {merch.map((item) => (
                  <MerchCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            {/* ═══ OTHER TAB — Press, Awards & Shout-outs ═══ */}
            <TabsContent value="other">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground">
                  Press, Awards &amp; Shout-outs
                </h2>
                <p className="text-sm text-muted-foreground mt-2">
                  Recognition and coverage of Made in Brooklyn Games
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {press.map((item) => (
                  <PressCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </ScrollReveal>
      </div>
    </section>
  );
}
