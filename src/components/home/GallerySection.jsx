import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { games } from "@/data/games";
import { merch } from "@/data/merch";
import GameCard from "./GameCard";
import MerchCard from "./MerchCard";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("games");

  return (
    <section
      id="gallery"
      className="relative py-16 md:py-24"
      style={{
        backgroundImage:
          "url(/assets/img/desktop--bg-image-7C97C025-4A3E-40C7-99FD-C8AA81F2AB80.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList>
                <TabsTrigger value="games">Games</TabsTrigger>
                <TabsTrigger value="merch">Merch</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="games">
              {/* Game spines on a shelf — horizontal layout */}
              <div className="flex flex-col items-center">
                <div className="flex items-end justify-center gap-10 md:gap-14 py-8">
                  {games.map((game) => (
                    <GameCard key={game.slug} game={game} />
                  ))}
                </div>
                {/* Shelf surface */}
                <div className="w-full max-w-2xl">
                  <div
                    className="h-[6px] rounded-sm"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #282522 15%, #3a3530 50%, #282522 85%, transparent)",
                    }}
                  />
                  <div
                    className="h-[3px] mt-[1px] rounded-sm opacity-40"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #ff8906 15%, #ff890640 50%, #ff8906 85%, transparent)",
                    }}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="merch">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground">
                  Featured Products
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {merch.map((item) => (
                  <MerchCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </ScrollReveal>
      </div>
    </section>
  );
}
