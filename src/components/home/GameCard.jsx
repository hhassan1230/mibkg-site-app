import { Link } from "react-router-dom";

export default function GameCard({ game }) {
  return (
    <Link to={`/games/${game.slug}`} className="group relative block">
      {/* Game box spine — tall narrow case like a game on a store shelf */}
      <div className="relative w-[160px] h-[558px] mx-auto transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
        {/* Box spine shape */}
        <img
          src="/assets/img/desktop--combined-shape-CA9323FA-E70A-46FE-AE9A-8DFCB78CB813@2x.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-fill pointer-events-none"
        />

        {/* Game logo overlaid on the spine, rotated 90° like a box on a shelf */}
        <div
          className="absolute inset-x-0 bottom-0 flex items-center justify-center p-2"
          style={{ top: `${game.logoOffset ?? 15}%` }}
        >
          <img
            src={game.logo}
            alt={game.title}
            className="max-w-[250px] object-contain drop-shadow-lg -rotate-90"
            style={{
              maxHeight: `${game.logoHeight ?? 400}px`,
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.6))",
            }}
          />
        </div>

        {/* Glow effect on hover */}
        <div className="absolute -inset-2 rounded-lg bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 pointer-events-none" />
      </div>

      {/* Title below the spine */}
      <p className="mt-3 text-center text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors truncate max-w-[170px] mx-auto">
        {game.title}
      </p>
      {game.platforms?.length > 0 && (
        <div className="flex justify-center gap-1 mt-1">
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
    </Link>
  );
}
