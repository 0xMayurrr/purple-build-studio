import brandingImg from "@/assets/projects/branding.jpg";
import webImg from "@/assets/projects/web.jpg";
import socialImg from "@/assets/projects/social.jpg";
import marketingImg from "@/assets/projects/marketing.jpg";
import photographyImg from "@/assets/projects/photography.jpg";
import productionImg from "@/assets/projects/production.jpg";
import { Reveal } from "./Reveal";

const skills = [
  "Social Media Management",
  "Digital Media Marketing",
  "Branding & Packaging",
  "Web Design & SEO",
  "Content Production",
  "Marketing Campaigns & Ads",
  "Photography & Videography",
];

const images = [
  brandingImg,
  webImg,
  socialImg,
  marketingImg,
  photographyImg,
  productionImg,
];

type Tile = { kind: "image"; src: string } | { kind: "text"; label: string };

function buildRow(offset: number): Tile[] {
  const tiles: Tile[] = [];
  for (let i = 0; i < images.length; i++) {
    tiles.push({ kind: "image", src: images[(i + offset) % images.length] });
    tiles.push({ kind: "text", label: skills[(i + offset) % skills.length] });
  }
  return tiles;
}

function MarqueeRow({
  tiles,
  reverse = false,
  duration,
}: {
  tiles: Tile[];
  reverse?: boolean;
  duration: number;
}) {
  const doubled = [...tiles, ...tiles];
  return (
    <div className="marquee py-2">
      <div
        className={`marquee-track ${reverse ? "reverse" : ""}`}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {doubled.map((tile, i) =>
          tile.kind === "image" ? (
            <img
              key={i}
              src={tile.src}
              alt=""
              loading="lazy"
              width={1024}
              height={1024}
              className="h-72 w-56 rounded-2xl object-cover md:h-80 md:w-64"
            />
          ) : (
            <div
              key={i}
              className="flex h-72 w-72 items-center justify-center rounded-2xl border border-border bg-card p-8 text-center font-display text-2xl uppercase leading-tight text-foreground md:h-80 md:w-80 md:text-3xl"
            >
              {tile.label}
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export function SkillsMarquee() {
  return (
    <section id="services" className="py-24 md:py-36">
      <div className="mx-auto mb-14 max-w-[1440px] px-6 md:mb-20 md:px-12">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            What We Do
          </p>
          <h2 className="mt-4 font-display text-4xl uppercase leading-none text-foreground md:text-6xl">
            Our skills cover
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-2 sm:grid-cols-2">
          {skills.map((skill, i) => (
            <Reveal key={skill} delay={i * 60}>
              <li className="group flex items-center gap-4 border-b border-border py-4">
                <span className="text-xs text-muted-foreground">0{i + 1}</span>
                <span className="text-lg font-semibold uppercase tracking-wide text-foreground transition-colors group-hover:text-primary md:text-xl">
                  {skill}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>

      <Reveal>
        <div className="space-y-1">
          <MarqueeRow tiles={buildRow(0)} duration={52} />
          <MarqueeRow tiles={buildRow(2)} reverse duration={60} />
          <MarqueeRow tiles={buildRow(4)} duration={48} />
        </div>
      </Reveal>
    </section>
  );
}
