import { useParams, Navigate } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { getGameBySlug } from "@/data/games";
import GameDetail from "@/components/games/GameDetail";

export default function GamePage() {
  const { slug } = useParams();
  const game = getGameBySlug(slug);

  useSEO({
    title: game ? `${game.title} — Made in Brooklyn Games` : "Not Found",
    description: game?.metaDescription ?? "",
  });

  if (!game) return <Navigate to="/" replace />;

  return <GameDetail game={game} />;
}
