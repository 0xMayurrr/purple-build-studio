const LETTERS = "BUILDICY".split("");

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-28 pt-32"
    >
      <div className="hero-glow" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <h1
          aria-label="Buildicy"
          className="hero-wordmark flex justify-center text-center text-foreground"
        >
          {LETTERS.map((letter, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="hero-letter"
              style={{ animationDelay: `${0.3 + i * 0.055}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>

        <div className="mt-10 text-center md:mt-14">
          <p
            className="fade-up text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground md:text-sm"
            style={{ animationDelay: "1s" }}
          >
            We are a creative studio crafting brands, digital experiences and
            growth.
          </p>
          <p
            className="fade-up mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground md:text-sm"
            style={{ animationDelay: "1.15s" }}
          >
            Our work lives where design meets technology.
          </p>
          <p
            className="fade-up mt-8 text-base text-foreground/90 md:text-lg"
            style={{ animationDelay: "1.35s" }}
          >
            We build ideas that build brands!
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 flex items-end justify-between px-6 md:px-12">
        <a
          href="#work"
          className="scroll-cue fade-up flex items-center gap-3 text-sm font-semibold text-foreground"
          style={{ animationDelay: "1.6s" }}
        >
          Scroll to Explore
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
        <p
          className="fade-up hidden text-sm font-semibold uppercase tracking-widest text-muted-foreground sm:block"
          style={{ animationDelay: "1.6s" }}
        >
          Featured Projects
        </p>
      </div>
    </section>
  );
}
