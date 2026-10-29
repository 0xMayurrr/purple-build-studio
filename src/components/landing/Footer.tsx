export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden px-6 pb-10 pt-24 md:px-12 md:pt-36">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(55% 60% at 50% 110%, color-mix(in oklab, var(--primary) 20%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px]">
        <h2 className="reveal-cta font-display text-[clamp(2.75rem,9vw,10rem)] uppercase leading-[0.92] text-foreground">
          Let&apos;s build
          <br />
          <span className="text-primary">something great</span>
        </h2>

        <div className="mt-14 flex flex-col gap-10 border-t border-border pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Say hello
            </p>
            <a
              href="mailto:hello@buildicy.com"
              className="link-underline mt-2 block text-2xl font-semibold text-foreground md:text-3xl"
            >
              hello@buildicy.com
            </a>
          </div>

          <ul className="flex items-center gap-8 text-sm font-semibold text-muted-foreground">
            {["Instagram", "LinkedIn", "Behance"].map((item) => (
              <li key={item}>
                <a
                  href="#contact"
                  className="link-underline transition-colors hover:text-foreground"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Buildicy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
