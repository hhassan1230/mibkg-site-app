import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Play, ExternalLink, Gamepad2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import PanoramaViewer from "./PanoramaViewer";

export default function GameDetail({ game }) {
  const [trailerOpen, setTrailerOpen] = useState(false);

  // Extract YouTube video ID from embed URL for thumbnail
  const trailerId = game.trailer?.match(/embed\/([^?]+)/)?.[1];
  const trailerThumb = trailerId
    ? `https://img.youtube.com/vi/${trailerId}/hqdefault.jpg`
    : null;

  return (
    <div className="min-h-screen">
      {/* Full-bleed hero background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: game.heroImage
            ? `url(${game.heroImage})`
            : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Back nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          to="/#gallery"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Games
        </Link>
      </div>

      {/* Game Box Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* ─── Right side banner (box spine) — on desktop, pinned right ─── */}
          <div className="order-first lg:order-last lg:w-[160px] flex-shrink-0">
            <ScrollReveal direction="right">
              <div
                className="relative mx-auto w-[120px] lg:w-[148px] rounded-md overflow-hidden"
                style={{
                  background:
                    "linear-gradient(219deg, #F3C66C 0%, #E4943A 51%, #ff8906 100%)",
                }}
              >
                {/* Game logo on spine */}
                <div className="py-6 px-3 flex flex-col items-center gap-4">
                  {game.logo ? (
                    <img
                      src={game.logo}
                      alt={game.title}
                      className="w-[88px] h-auto drop-shadow-md"
                    />
                  ) : (
                    <span className="text-sm font-black text-[#1A1925] text-center uppercase tracking-wide">
                      {game.title}
                    </span>
                  )}
                </div>

                {/* Spine info */}
                <div className="bg-background/90 px-3 py-4 space-y-3">
                  {game.platforms?.length > 0 && (
                    <div className="space-y-2">
                      {game.platforms.map((platform) => (
                        <div key={platform} className="flex items-center gap-2">
                          <span className="text-xs font-bold text-primary">
                            ●
                          </span>
                          <span className="text-xs font-medium text-foreground">
                            {platform}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0"
                      />
                    </svg>
                    <span className="text-xs font-medium text-foreground">
                      {game.players}
                    </span>
                  </div>
                </div>

                {/* Orange accent strip at bottom */}
                <div className="h-1 bg-primary" />
              </div>
            </ScrollReveal>
          </div>

          {/* ─── Main content (back of box) ─── */}
          <div className="flex-1 min-w-0">
            {/* Title block */}
            <ScrollReveal>
              <h1
                className="text-3xl md:text-5xl font-bold text-foreground mb-2"
                style={{ textShadow: "4px 0px 0px #ff8906" }}
              >
                {game.title}
              </h1>
              <div className="flex flex-wrap items-center gap-2 mb-8">
                {game.types.map((type) => (
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
                {game.platforms?.map((platform) => (
                  <Badge
                    key={platform}
                    className="bg-accent text-accent-foreground"
                  >
                    {platform}
                  </Badge>
                ))}
              </div>
            </ScrollReveal>

            {/* Media gallery — screenshots + trailer + panoramas */}
            {(game.screenshots.length > 0 ||
              game.trailer ||
              game.coverImage ||
              game.panoramas?.length > 0) && (
              <ScrollReveal delay={100}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {/* Trailer — first slot, spans full width on small grids when solo */}
                  {game.trailer && (
                    <button
                      onClick={() => setTrailerOpen(true)}
                      className={`group/trailer relative overflow-hidden rounded border-2 border-border hover:border-primary transition-colors cursor-pointer ${
                        game.screenshots.length === 0
                          ? "col-span-2 sm:col-span-2"
                          : ""
                      }`}
                    >
                      <img
                        src={
                          trailerThumb || game.screenshots[0] || game.heroImage
                        }
                        alt="Watch trailer"
                        className="w-full aspect-video object-cover brightness-50 group-hover/trailer:brightness-75 transition-all duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover/trailer:scale-110 transition-transform shadow-lg">
                          <Play className="h-6 w-6 text-primary-foreground fill-current ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-2 left-0 right-0 text-center text-xs font-semibold text-white drop-shadow-md">
                        Watch Trailer
                      </span>
                    </button>
                  )}

                  {/* Cover image — shown right after trailer when present */}
                  {game.coverImage && (
                    <div className="group/shot relative overflow-hidden rounded border-2 border-border hover:border-primary transition-colors">
                      <img
                        src={game.coverImage}
                        alt={`${game.title} cover`}
                        className="w-full aspect-video object-cover group-hover/shot:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Screenshots */}
                  {game.screenshots.map((src, i) => (
                    <div
                      key={i}
                      className="group/shot relative overflow-hidden rounded border-2 border-border hover:border-primary transition-colors"
                    >
                      <img
                        src={src}
                        alt={`${game.title} screenshot ${i + 1}`}
                        className="w-full aspect-video object-cover group-hover/shot:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}

                  {/* 360° Panoramas — span full grid width */}
                  {game.panoramas?.map((pano, i) => {
                    const panoSrc = typeof pano === "string" ? pano : pano.src;
                    const panoType =
                      typeof pano === "string"
                        ? "equirectangular"
                        : pano.type || "equirectangular";
                    return (
                      <div
                        key={`pano-${i}`}
                        className="col-span-2 sm:col-span-3"
                      >
                        <PanoramaViewer
                          src={panoSrc}
                          type={panoType}
                          alt={`${game.title} 360° view ${i + 1}`}
                        />
                      </div>
                    );
                  })}
                </div>
              </ScrollReveal>
            )}

            {/* Two-column text — like the back of a game box */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {/* Left: About the game */}
              <ScrollReveal delay={200}>
                <div className="md:col-span-3">
                  <h2
                    className="text-lg font-bold text-foreground mb-3"
                    style={{ letterSpacing: "0.5px" }}
                  >
                    About the Game
                  </h2>
                  <div className="h-[2px] w-16 bg-primary mb-4" />
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {game.description}
                  </p>
                </div>
              </ScrollReveal>

              {/* Right: Available platforms */}
              <ScrollReveal delay={300}>
                <div className="md:col-span-2">
                  <h2
                    className="text-lg font-bold text-foreground mb-3"
                    style={{ letterSpacing: "0.5px" }}
                  >
                    Choose Available Platform:
                  </h2>
                  <div className="h-[2px] w-16 bg-primary mb-4" />
                  {(() => {
                    const playStore = game.stores.find((s) =>
                      ["newgrounds"].includes(s.name.toLowerCase()),
                    );
                    return playStore ? (
                      <a
                        href={playStore.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "w-full justify-center gap-2 text-sm font-bold mb-4 bg-green-600 hover:bg-green-500 text-white border-green-600",
                          buttonVariants({ size: "sm" }),
                        )}
                      >
                        <Gamepad2 className="h-4 w-4" />
                        Play Now on {playStore.name}
                      </a>
                    ) : null;
                  })()}
                  {game.stores.length > 0 ? (
                    <div className="space-y-2">
                      {game.stores.map((store) => (
                        <a
                          key={store.name}
                          href={store.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({ variant: "outline", size: "sm" }),
                            "w-full justify-between text-sm",
                          )}
                        >
                          {store.name}
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-sm">
                      Platform links coming soon.
                    </p>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Trailer dialog */}
      <Dialog open={trailerOpen} onOpenChange={setTrailerOpen}>
        <DialogContent
          className="max-w-4xl w-full p-0 overflow-hidden"
          onClose={() => setTrailerOpen(false)}
        >
          <div className="aspect-video">
            <iframe
              src={trailerOpen ? `${game.trailer}&autoplay=1` : ""}
              title={`${game.title} Trailer`}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
