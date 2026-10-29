import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Who We Are
          </p>
          <h2 className="mt-4 font-display text-4xl uppercase leading-none text-foreground md:text-6xl">
            Bold ideas,
            <br />
            built to last
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            At Buildicy, every strong brand starts with a bold idea. Our team of
            designers, developers, strategists and storytellers works side by
            side to craft content and experiences that grab attention — and turn
            it into loyal customers and lasting growth.
          </p>
          <a
            href="mailto:hello@buildicy.com"
            className="btn-pill mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-9 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground"
          >
            Reach Out!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
