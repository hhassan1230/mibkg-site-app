import { ScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto md:mx-0">
          <ScrollReveal direction="left">
            <h2
              className="text-3xl md:text-5xl font-bold text-foreground mb-8"
              style={{ textShadow: "7px 0px 0px #ff8906" }}
            >
              About Us
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={200}>
            <div className="space-y-6 text-foreground/90 text-base md:text-lg leading-relaxed">
              <p>
                Made in Brooklyn Games is home to the underrepresented creators
                who have never been given a chance to show who they are or what
                they can do.
              </p>
              <p>
                We strive to further the medium of interactive experiences with
                dope content because here at Made in Brooklyn Games, we focus on
                creating rich experiences with social commentary.
              </p>
              <p>
                Come through &amp; enjoy our content &amp; stay for our deeper
                meaning.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Decorative retro controller */}
      <img
        src="/assets/img/desktop--icons8-tetris-game-console-64-copy-9974B3F3-93DE-47EF-8D57-6E999AB925E6@2x.png"
        alt=""
        className="hidden md:block absolute right-12 bottom-12 w-32 opacity-30"
      />
    </section>
  );
}
