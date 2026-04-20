import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { buttonVariants } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export default function LegalPage() {
  useSEO({
    title: "Legal — Made in Brooklyn Games",
    description: "Legal information for Made in Brooklyn Games.",
  });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <ScrollReveal>
        <h1
          className="text-3xl md:text-4xl font-bold text-foreground mb-8"
          style={{ textShadow: "4px 0px 0px #ff8906" }}
        >
          Legal
        </h1>
        <div className="space-y-6 text-foreground/80 text-sm leading-relaxed">
          <p>
            &copy; {new Date().getFullYear()} Made in Brooklyn Games. All rights
            reserved.
          </p>
          <h2 className="text-lg font-semibold text-foreground">Trademarks</h2>
          <p>
            Made in Brooklyn Games, Museum Multiverse, Don&apos;t Look Away, and
            all related logos and marks are trademarks of Made in Brooklyn
            Games. All other trademarks referenced herein are the property of
            their respective owners.
          </p>
          <h2 className="text-lg font-semibold text-foreground">
            Copyright Notice
          </h2>
          <p>
            All game assets, artwork, music, and code are the intellectual
            property of Made in Brooklyn Games unless otherwise noted. Use
            without authorization is prohibited.
          </p>
          <h2 className="text-lg font-semibold text-foreground">
            DMCA / Takedown Requests
          </h2>
          <p>
            If you believe content on this site infringes your copyright, please
            contact us through the contact form with a detailed description of
            the alleged infringement.
          </p>
        </div>
        <div className="mt-10">
          <Link to="/" className={buttonVariants({ variant: "outline" })}>
            ← Back to Home
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
