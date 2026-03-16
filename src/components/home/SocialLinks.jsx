import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { socialLinks } from "@/data/social";
import { cn } from "@/lib/utils";

const iconMap = {
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Facebook: Facebook,
  Instagram: Instagram,
};

export default function SocialLinks({ className, size = "default" }) {
  const iconSize = size === "lg" ? "h-6 w-6" : "h-5 w-5";

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.name];
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={link.name}
          >
            <Icon className={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
