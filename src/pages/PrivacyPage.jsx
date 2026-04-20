import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { buttonVariants } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export default function PrivacyPage() {
  useSEO({
    title: "Privacy Policy — Made in Brooklyn Games",
    description: "Privacy Policy for Made in Brooklyn Games.",
  });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <ScrollReveal>
        <h1
          className="text-3xl md:text-4xl font-bold text-foreground mb-8"
          style={{ textShadow: "4px 0px 0px #ff8906" }}
        >
          Privacy Policy
        </h1>
        <div className="space-y-6 text-foreground/80 text-sm leading-relaxed">
          <p>
            Made in Brooklyn Games (&quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;) is committed to protecting your privacy. This
            Privacy Policy outlines how we collect, use, and safeguard your
            information when you visit our website or use our products.
          </p>
          <h2 className="text-lg font-semibold text-foreground">
            Information We Collect
          </h2>
          <p>
            We may collect personal information you voluntarily provide, such as
            your name and email address when you use our contact form. We do not
            sell or share your personal information with third parties.
          </p>
          <h2 className="text-lg font-semibold text-foreground">
            How We Use Your Information
          </h2>
          <p>
            Information collected is used solely to respond to inquiries,
            improve our services, and communicate updates about Made in Brooklyn
            Games products and events.
          </p>
          <h2 className="text-lg font-semibold text-foreground">Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please reach out
            through our contact form.
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
