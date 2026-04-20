import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { ExternalLink, X, Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";

const SPINE_W = 160;
const SPINE_H = 558;
const BACK_W = 420;
const BACK_H = 620;

const PLAYABLE_STORES = ["newgrounds"];

/* Platform badge config — refined palette rooted in the site's dark/orange/purple DNA */
const PLATFORM_BADGE = {
  VR: { color: "#302b63", accent: "#4f43ae", label: "VR" },
  Web: { color: "#7b3f00", accent: "#d4841a", label: "WEB" },
  PC: { color: "#1b3a5c", accent: "#3b7dd8", label: "PC" },
  Mac: { color: "#2c2c34", accent: "#5a5a6e", label: "MAC" },
  Mobile: { color: "#5c2d0e", accent: "#c2703a", label: "MOB" },
  Installation: { color: "#4a1554", accent: "#8b4f9f", label: "INST" },
};

function getPlayUrl(game) {
  const store = game.stores?.find((s) =>
    PLAYABLE_STORES.includes(s.name.toLowerCase()),
  );
  return store?.url ?? null;
}

export default function GameCard({ game }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const overlayRef = useRef(null);

  const handleClose = () => {
    setIsAnimating(false);
    setIsOpen(false);
  };

  // Animate in after portal mounts
  useEffect(() => {
    if (!isOpen) return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsAnimating(true));
    });
  }, [isOpen]);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen]);

  const backImage = game.coverImage || game.screenshots?.[0] || game.heroImage;
  const playUrl = getPlayUrl(game);

  return (
    <>
      {/* ═══ SPINE — lives in the carousel ═══ */}
      <div
        className="group relative cursor-pointer"
        style={{ width: SPINE_W, height: SPINE_H + 60 }}
        onClick={() => setIsOpen(true)}
      >
        <div
          className="relative w-full transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2"
          style={{ height: SPINE_H }}
        >
          <img
            src="/assets/img/desktop--combined-shape-CA9323FA-E70A-46FE-AE9A-8DFCB78CB813@2x.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-fill pointer-events-none"
          />

          {/* ── N64-style platform badge in the spine window ── */}
          {game.platforms?.length > 0 && (
            <div
              className="absolute z-10 flex items-center justify-center overflow-hidden"
              style={{
                /* Centered over the transparent window cutout */
                top: "6.5%",
                left: "51%",
                transform: "translateX(-50%)",
                width: "66%",
                height: "17%",
              }}
            >
              {/* Diagonal accent triangle — like the N64 box corner fold */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <polygon
                  points="0,0 100,0 100,100 0,100"
                  fill={PLATFORM_BADGE[game.platforms[0]]?.color ?? "#4f43ae"}
                />
                <polygon
                  points="100,0 100,40 60,0"
                  fill={PLATFORM_BADGE[game.platforms[0]]?.accent ?? "#877dd5"}
                  opacity="0.6"
                />
                <polygon points="0,100 40,100 0,60" fill="rgba(0,0,0,0.15)" />
              </svg>

              {/* Platform icon + label */}
              <div className="relative z-10 flex flex-col items-center gap-0.5">
                <PlatformIcon platform={game.platforms[0]} />
                <span className="text-[8px] font-black text-white tracking-widest uppercase leading-none">
                  {PLATFORM_BADGE[game.platforms[0]]?.label ??
                    game.platforms[0]}
                </span>
                {game.platforms.length > 1 && (
                  <span className="text-[6px] font-bold text-white/70 tracking-wider uppercase leading-none">
                    +{game.platforms.length - 1} more
                  </span>
                )}
              </div>
            </div>
          )}

          <div
            className="absolute inset-x-0 bottom-0 flex items-center justify-center p-2"
            style={{ top: `${game.logoOffset ?? 15}%` }}
          >
            {game.logo ? (
              <img
                src={game.logo}
                alt={game.title}
                className="max-w-[250px] object-contain drop-shadow-lg -rotate-90"
                style={{
                  maxHeight: `${game.logoHeight ?? 400}px`,
                  filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.6))",
                }}
              />
            ) : (
              <span
                className="text-white font-black text-lg uppercase tracking-wider -rotate-90 whitespace-nowrap"
                style={{
                  textShadow: "0 2px 8px rgba(0,0,0,0.6)",
                }}
              >
                {game.title}
              </span>
            )}
          </div>
          <div className="absolute -inset-2 rounded-lg bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 pointer-events-none" />
        </div>

        {/* Title + platform labels below spine */}
        <p className="absolute bottom-6 left-0 right-0 text-center text-sm font-medium text-muted-foreground group-hover:text-primary transition-all truncate max-w-[170px] mx-auto">
          {game.title}
        </p>
        {game.platforms?.length > 0 && (
          <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-1">
            {game.platforms.map((platform) => (
              <span
                key={platform}
                className="text-[10px] text-accent font-semibold tracking-wider uppercase"
              >
                {platform}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ═══ OVERLAY — portaled to body, escapes carousel overflow ═══ */}
      {isOpen &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,0,0,0.75), rgba(0,0,0,0.9))",
                opacity: isAnimating ? 1 : 0,
              }}
              onClick={handleClose}
            />

            {/* 3D flip container */}
            <div
              ref={overlayRef}
              className="relative transition-all ease-out"
              style={{
                width: BACK_W,
                maxWidth: "95vw",
                height: BACK_H,
                maxHeight: "90vh",
                perspective: 1400,
                transitionDuration: "600ms",
                transform: isAnimating ? "scale(1)" : "scale(0.5)",
                opacity: isAnimating ? 1 : 0,
              }}
            >
              {/* Rotating inner — holds spine front + N64 back */}
              <div
                className="relative w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 700ms ease-in-out",
                  transitionDelay: isAnimating ? "100ms" : "0ms",
                  transform: isAnimating ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* ── FRONT FACE — Spine ── */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div
                    className="relative"
                    style={{ width: SPINE_W, height: SPINE_H }}
                  >
                    <img
                      src="/assets/img/desktop--combined-shape-CA9323FA-E70A-46FE-AE9A-8DFCB78CB813@2x.png"
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-fill"
                    />

                    {/* Platform badge (mirrored from shelf spine) */}
                    {game.platforms?.length > 0 && (
                      <div
                        className="absolute z-10 flex items-center justify-center overflow-hidden"
                        style={{
                          top: "6.5%",
                          left: "51%",
                          transform: "translateX(-50%)",
                          width: "66%",
                          height: "17%",
                        }}
                      >
                        <svg
                          className="absolute inset-0 w-full h-full"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                        >
                          <polygon
                            points="0,0 100,0 100,100 0,100"
                            fill={
                              PLATFORM_BADGE[game.platforms[0]]?.color ??
                              "#4f43ae"
                            }
                          />
                          <polygon
                            points="100,0 100,40 60,0"
                            fill={
                              PLATFORM_BADGE[game.platforms[0]]?.accent ??
                              "#877dd5"
                            }
                            opacity="0.6"
                          />
                          <polygon
                            points="0,100 40,100 0,60"
                            fill="rgba(0,0,0,0.15)"
                          />
                        </svg>
                        <div className="relative z-10 flex flex-col items-center gap-0.5">
                          <PlatformIcon platform={game.platforms[0]} />
                          <span className="text-[8px] font-black text-white tracking-widest uppercase leading-none">
                            {PLATFORM_BADGE[game.platforms[0]]?.label ??
                              game.platforms[0]}
                          </span>
                        </div>
                      </div>
                    )}

                    <div
                      className="absolute inset-x-0 bottom-0 flex items-center justify-center p-2"
                      style={{ top: `${game.logoOffset ?? 15}%` }}
                    >
                      {game.logo ? (
                        <img
                          src={game.logo}
                          alt={game.title}
                          className="max-w-[250px] object-contain drop-shadow-lg -rotate-90"
                          style={{
                            maxHeight: `${game.logoHeight ?? 400}px`,
                            filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.6))",
                          }}
                        />
                      ) : (
                        <span
                          className="text-white font-black text-lg uppercase tracking-wider -rotate-90 whitespace-nowrap"
                          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
                        >
                          {game.title}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* ── BACK FACE — N64-style box back ── */}
                <div
                  className="absolute inset-0 rounded-lg overflow-hidden flex flex-col"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background: "#1A1925",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow:
                      "0 30px 80px -12px rgba(0,0,0,0.6), 0 0 40px rgba(255,137,6,0.25)",
                  }}
                >
                  {/* ── Orange header bar ── */}
                  <div
                    className="flex-shrink-0 px-4 py-3 flex items-center gap-3"
                    style={{
                      background:
                        "linear-gradient(135deg, #F3C66C 0%, #E4943A 40%, #ff8906 100%)",
                    }}
                  >
                    {game.logo && (
                      <img
                        src={game.logo}
                        alt=""
                        className="h-10 w-10 object-contain flex-shrink-0 drop-shadow-sm"
                      />
                    )}
                    <h3 className="text-base font-black text-[#1A1925] truncate flex-1 uppercase tracking-wide">
                      {game.title}
                    </h3>
                    <button
                      onClick={handleClose}
                      className="flex-shrink-0 w-7 h-7 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Close"
                    >
                      <X className="h-4 w-4 text-[#1A1925]" />
                    </button>
                  </div>

                  {/* ── Scrollable content ── */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
                    {backImage && (
                      <div className="rounded-md overflow-hidden border border-white/10">
                        <img
                          src={backImage}
                          alt={`${game.title} screenshot`}
                          className="w-full aspect-video object-cover"
                        />
                      </div>
                    )}

                    {game.description &&
                      !game.description.startsWith("[PLACEHOLDER") && (
                        <p className="text-xs text-foreground/80 leading-relaxed line-clamp-5">
                          {game.description}
                        </p>
                      )}

                    {game.types?.length > 0 &&
                      !game.types[0]?.startsWith("[") && (
                        <div className="flex flex-wrap gap-1.5">
                          {game.types.map((type) => (
                            <span
                              key={type}
                              className="text-[11px] px-2.5 py-0.5 rounded-full bg-secondary/60 text-secondary-foreground font-medium"
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      )}

                    <div
                      className="h-px"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,137,6,0.4), transparent)",
                      }}
                    />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {game.platforms?.map((p) => (
                          <span
                            key={p}
                            className="text-[11px] font-bold text-primary uppercase tracking-wider"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                      {game.players && !game.players.startsWith("[") && (
                        <span className="text-[11px] text-foreground/60">
                          {game.players}
                        </span>
                      )}
                    </div>

                    {game.stores?.length > 0 && (
                      <div>
                        <p className="text-[10px] text-muted-foreground mb-2 uppercase tracking-widest font-semibold">
                          Available on
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {game.stores.map((store) => (
                            <a
                              key={store.name}
                              href={store.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] px-2.5 py-1 rounded border border-white/10 text-foreground/70 hover:border-primary hover:text-primary transition-colors inline-flex items-center gap-1.5"
                            >
                              {store.name}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ── CTA footer ── */}
                  <div className="flex-shrink-0 p-3.5 border-t border-white/5 space-y-2">
                    {playUrl && (
                      <a
                        href={playUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 text-xs font-bold py-2.5 rounded bg-green-600 hover:bg-green-500 text-white transition-colors uppercase tracking-wider"
                      >
                        <Gamepad2 className="h-4 w-4" />
                        Play Now
                      </a>
                    )}
                    <Link
                      to={`/games/${game.slug}`}
                      onClick={handleClose}
                      className="block w-full text-center text-xs font-bold py-2.5 rounded bg-primary hover:bg-primary/90 text-primary-foreground transition-colors uppercase tracking-wider"
                    >
                      View Full Details →
                    </Link>
                  </div>

                  {/* Bottom accent strip */}
                  <div
                    className="h-1.5 flex-shrink-0"
                    style={{
                      background: "linear-gradient(90deg, #ff8906, #F3C66C)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

/**
 * SVG platform icons — sized for the spine window badge.
 * Each icon evokes the console/platform in a minimal style.
 */
function PlatformIcon({ platform, className }) {
  const size = "h-5 w-5";
  const c = cn(size, "text-white drop-shadow-sm", className);

  switch (platform) {
    case "VR":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={c}>
          <path
            d="M2 10a4 4 0 014-4h12a4 4 0 014 4v2a4 4 0 01-4 4h-2.5l-1.5 2h-4l-1.5-2H6a4 4 0 01-4-4v-2z"
            stroke="currentColor"
            strokeWidth="1.8"
            fill="currentColor"
            fillOpacity="0.15"
          />
          <circle
            cx="8.5"
            cy="11"
            r="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="15.5"
            cy="11"
            r="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "Web":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={c}>
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="4"
            ry="9"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M5 7h14M5 17h14"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
      );
    case "PC":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={c}>
          <rect
            x="3"
            y="3"
            width="18"
            height="13"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M7 8h10"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          />
        </svg>
      );
    case "Mac":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={c}>
          <path
            d="M17.05 11.97c-.03-2.69 2.2-3.98 2.3-4.05a4.97 4.97 0 00-3.92-2.12c-1.67-.17-3.26.98-4.1.98-.85 0-2.16-.96-3.55-.93a5.24 5.24 0 00-4.41 2.69c-1.88 3.26-.48 8.1 1.35 10.75.9 1.3 1.96 2.75 3.36 2.7 1.35-.05 1.86-.87 3.49-.87 1.63 0 2.09.87 3.52.84 1.45-.02 2.37-1.32 3.26-2.63a11.5 11.5 0 001.47-3.03 4.8 4.8 0 01-2.87-4.33z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.15"
          />
        </svg>
      );
    case "Mobile":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={c}>
          <rect
            x="6"
            y="2"
            width="12"
            height="20"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M10 18h4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6 6h12"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      );
    case "Installation":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={c}>
          <path
            d="M12 3v12m0 0l-4-4m4 4l4-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={c}>
          <rect
            x="4"
            y="6"
            width="16"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="9" cy="13" r="1.5" fill="currentColor" />
          <path
            d="M14 11h2M15 10v2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}
