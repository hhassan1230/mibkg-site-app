import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function MerchCard({ item }) {
  const hasUrl = item.url && item.url !== "#";

  return (
    <Card className="group overflow-hidden bg-card/80 border-border hover:border-primary/50 transition-colors duration-300">
      <CardContent className="p-0">
        <div className="relative aspect-square flex items-center justify-center bg-muted/10 p-4">
          <img
            src={item.image}
            alt={item.product}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
          {/* Price tag */}
          <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-sm">
            {item.price}
          </span>
        </div>
        <div className="p-4 space-y-3">
          <h3 className="font-medium text-foreground text-sm">
            {item.product}
          </h3>
          {hasUrl ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "w-full",
              )}
            >
              Buy Now
            </a>
          ) : (
            <Button variant="outline" size="sm" className="w-full" disabled>
              Coming Soon
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
