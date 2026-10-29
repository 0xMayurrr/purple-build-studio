import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12">
        <a
          href="#top"
          className="font-display text-2xl uppercase tracking-wide text-foreground"
        >
          Build<span className="text-primary">icy</span>
        </a>
        <ul className="flex items-center gap-6 text-sm font-semibold md:gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
