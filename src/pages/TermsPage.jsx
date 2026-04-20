import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { buttonVariants } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export default function TermsPage() {
  useSEO({
    title: "Terms & Conditions — Made in Brooklyn Games",
    description: "Terms and Conditions for Made in Brooklyn Games.",
  });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <ScrollReveal>
        <h1
          className="text-3xl md:text-4xl font-bold text-foreground mb-8"
          style={{ textShadow: "4px 0px 0px #ff8906" }}
        >
          Terms &amp; Conditions
        </h1>
        <div className="space-y-6 text-foreground/80 text-sm leading-relaxed">
          <p>
            By accessing and using the Made in Brooklyn Games website and
            products, you agree to comply with and be bound by the following
            terms and conditions.
          </p>
          <h2 className="text-lg font-semibold text-foreground">
            Use of Content
          </h2>
          <p>
            All content on this site, including text, images, logos, and
            software, is the property of Made in Brooklyn Games and is protected
            by copyright laws. You may not reproduce, distribute, or create
            derivative works without prior written consent.
          </p>
          <h2 className="text-lg font-semibold text-foreground">
            Third-Party Links
          </h2>
          <p>
            Our site may contain links to third-party platforms (e.g., Meta,
            Viveport, Newgrounds). We are not responsible for the content or
            privacy practices of those sites.
          </p>
          <h2 className="text-lg font-semibold text-foreground">
            Limitation of Liability
          </h2>
          <p>
            Made in Brooklyn Games shall not be liable for any damages arising
            from the use of this website or our products, to the fullest extent
            permitted by law.
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
