import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { FeaturedProjects } from "@/components/landing/FeaturedProjects";
import { About } from "@/components/landing/About";
import { SkillsMarquee } from "@/components/landing/SkillsMarquee";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Buildicy — Creative Agency" },
      {
        name: "description",
        content:
          "Buildicy is a creative agency crafting bold brands, websites and campaigns where design meets technology.",
      },
      { property: "og:title", content: "Buildicy — Creative Agency" },
      {
        property: "og:description",
        content:
          "We build ideas that build brands — strategy, design, digital marketing and content production.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />
      <Hero />
      <FeaturedProjects />
      <About />
      <SkillsMarquee />
      <Footer />
    </main>
  );
}
