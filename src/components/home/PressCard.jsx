import { ExternalLink, Award, Newspaper, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const typeConfig = {
  award: {
    icon: Award,
    label: "Award",
    badgeClass: "bg-primary text-primary-foreground",
  },
  press: {
    icon: Newspaper,
    label: "Press",
    badgeClass: "bg-secondary text-secondary-foreground",
  },
  blog: {
    icon: BookOpen,
    label: "Blog",
    badgeClass: "bg-accent text-accent-foreground",
  },
};

export default function PressCard({ item }) {
  const config = typeConfig[item.type] || typeConfig.blog;
  const Icon = config.icon;

  return (
    <Card className="group overflow-hidden bg-card/80 border-border hover:border-primary/50 transition-colors duration-300">
      <CardContent className="p-6 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <Icon className="h-5 w-5 text-primary flex-shrink-0" />
            <Badge className={config.badgeClass}>{config.label}</Badge>
          </div>
          <span className="text-xs text-muted-foreground flex-shrink-0">
            {item.date}
          </span>
        </div>

        <h3 className="font-semibold text-foreground text-sm leading-snug">
          {item.title}
        </h3>

        <p className="text-xs text-muted-foreground">{item.source}</p>

        <p className="text-sm text-foreground/80 leading-relaxed line-clamp-3">
          {item.excerpt}
        </p>

        {item.url && item.url !== "#" && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Read more <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </CardContent>
    </Card>
  );
}
