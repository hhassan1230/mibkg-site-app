import { Link } from "react-router-dom";
import SocialLinks from "@/components/home/SocialLinks";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Games", to: "/#gallery" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src="/assets/img/desktop--logo-298CC594-2CB8-4CE1-8162-DB1279AD44D8@2x.png"
              alt="Made in Brooklyn Games"
              className="h-8"
            />
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Made in Brooklyn Games
            </p>
          </div>

          <div className="flex gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <SocialLinks />
            <div className="flex gap-4 text-xs text-muted-foreground">
              <span>Privacy Policy</span>
              <span>Terms &amp; Conditions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
