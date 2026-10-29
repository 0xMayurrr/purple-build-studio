import { useRef, useState, type MouseEvent } from "react";

import brandingImg from "@/assets/projects/branding.jpg";
import webImg from "@/assets/projects/web.jpg";
import socialImg from "@/assets/projects/social.jpg";
import marketingImg from "@/assets/projects/marketing.jpg";
import photographyImg from "@/assets/projects/photography.jpg";
import productionImg from "@/assets/projects/production.jpg";
import { Reveal } from "./Reveal";

const projects = [
  { name: "Branding", tag: "Identity & Packaging", image: brandingImg },
  { name: "Web Design", tag: "UI/UX & Development", image: webImg },
  { name: "Social Media", tag: "Campaigns & Content", image: socialImg },
  { name: "Digital Marketing", tag: "Ads & Growth", image: marketingImg },
  { name: "Photography", tag: "Product & Editorial", image: photographyImg },
  { name: "Content Production", tag: "Photo & Video", image: productionImg },
];

export function FeaturedProjects() {
  const [active, setActive] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const el = previewRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${e.clientX - 152}px, ${e.clientY - 192}px, 0)`;
  };

  return (
    <section id="work" className="px-6 pb-8 pt-10 md:px-12">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mb-10 flex items-end justify-between md:mb-16">
            <h2 className="font-display text-4xl uppercase leading-none text-foreground md:text-6xl">
              Featured
              <br />
              Projects
            </h2>
            <p className="hidden text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground md:block">
              2024 — 2026
            </p>
          </div>
        </Reveal>

        <div onMouseMove={handleMove} onMouseLeave={() => setActive(null)}>
          <div
            ref={previewRef}
            className="project-preview hidden md:block"
            data-active={active !== null}
            aria-hidden="true"
          >
            {projects.map((project, i) => (
              <img
                key={project.name}
                src={project.image}
                alt=""
                className={active === i ? "is-current" : ""}
              />
            ))}
          </div>

          <ul>
            {projects.map((project, i) => (
              <Reveal key={project.name} delay={i * 60}>
                <li
                  className="project-row group border-b border-border"
                  onMouseEnter={() => setActive(i)}
                >
                  <a
                    href="#work"
                    className="flex items-center justify-between gap-6 py-7 md:py-9"
                  >
                    <div className="flex items-baseline gap-5 md:gap-10">
                      <span className="text-xs font-semibold text-muted-foreground md:text-sm">
                        0{i + 1}
                      </span>
                      <span className="row-title font-display text-3xl uppercase text-foreground sm:text-4xl md:text-6xl">
                        {project.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-5">
                      <img
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        width={1024}
                        height={1024}
                        className="h-14 w-20 rounded-lg object-cover md:hidden"
                      />
                      <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:block">
                        {project.tag}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </div>
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
