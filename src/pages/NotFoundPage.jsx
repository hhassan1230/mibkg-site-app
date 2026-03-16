import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { buttonVariants } from "@/components/ui/button";

export default function NotFoundPage() {
  useSEO({
    title: "404 — Made in Brooklyn Games",
    description: "Page not found",
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-muted-foreground text-lg">Page not found.</p>
      <Link to="/" className={buttonVariants({ variant: "default" })}>
        Go Home
      </Link>
    </div>
  );
}
