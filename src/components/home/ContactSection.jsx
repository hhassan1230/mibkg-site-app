import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import SocialLinks from "./SocialLinks";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email";
    }
    if (!form.message.trim()) next.message = "Message is required";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // TODO: Wire to backend provider (Formspree, serverless function, etc.)
    // The form data is available in the `form` state object:
    // { name: string, email: string, message: string }
  }

  function handleChange(field) {
    return (e) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) {
        setErrors((prev) => {
          const copy = { ...prev };
          delete copy[field];
          return copy;
        });
      }
    };
  }

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24"
      style={{
        background: "linear-gradient(180deg, #1A1925 9%, #41404B 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                What&apos;s the topic?
              </h2>
              <div className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange("name")}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange("email")}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <Textarea
                    placeholder="Tell me about yourself"
                    rows={5}
                    value={form.message}
                    onChange={handleChange("message")}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>
              <Button type="submit" className="w-full md:w-auto">
                Submit
              </Button>
              <p className="text-sm text-muted-foreground">
                Sign up to upcoming news and events.
              </p>
            </form>
          </ScrollReveal>

          {/* Social + decoration */}
          <ScrollReveal delay={200}>
            <div className="flex flex-col items-center md:items-start gap-8">
              <h2
                className="text-2xl md:text-3xl font-bold text-foreground"
                style={{ textShadow: "5px 0px 0px #ff8906" }}
              >
                Get in touch
              </h2>
              <SocialLinks size="lg" />
              <img
                src="/assets/img/desktop--icons8-tetris-game-console-64-copy-9974B3F3-93DE-47EF-8D57-6E999AB925E6@2x.png"
                alt=""
                className="w-48 opacity-20 mt-auto hidden md:block"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
