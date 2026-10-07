"use client";

import Link from "next/link";
import { ActionLink } from "@/components/ui/action-link";
import { contactEmail, navigationItems } from "../constants/navigation";
import { usePortfolioNavigation } from "../hooks/use-portfolio-navigation";

function NavLinks({
  activeSection,
  mobile = false,
  onNavigate,
}: {
  activeSection: string | null;
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  return navigationItems.map(({ label, id }) => {
    const active = activeSection === id;
    return (
      <a
        aria-current={active ? "location" : undefined}
        className={`rounded-sm text-sm font-medium no-underline transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300 ${mobile ? "min-h-11 py-2.5 text-base" : "border-b border-transparent py-1"} ${active ? "border-sky-300 text-white" : "text-[#d8e4f4] hover:border-[#75a9ff] hover:text-white"}`}
        href={`#${id}`}
        key={id}
        onClick={onNavigate}
      >
        {label}
      </a>
    );
  });
}

export function PortfolioNav() {
  const {
    activeSection,
    isMenuOpen,
    isScrolled,
    menuToggleRef,
    setIsMenuOpen,
  } = usePortfolioNavigation();

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-navy text-white transition-shadow duration-200 motion-reduce:transition-none ${isScrolled ? "shadow-[0_12px_32px_rgb(3_18_38_/_18%)]" : ""}`}
    >
      <div className="mx-auto flex min-h-[4.5rem] max-w-7xl items-center justify-between gap-2 px-[clamp(1.25rem,5vw,5rem)] max-wide:px-[clamp(1.25rem,4vw,3.5rem)] max-mobile:min-h-[4.15rem] max-mobile:gap-2">
        <Link
          aria-label="Lorenzo Arias home"
          className="inline-flex min-w-0 shrink-0 items-center gap-2 rounded-sm no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300 max-mobile:gap-[0.55rem]"
          href="/"
        >
          <span className="inline-grid size-10 shrink-0 place-items-center rounded-[0.35rem] border border-white/20 bg-blue text-[0.88rem] font-bold tracking-[-0.06em] text-white shadow-[0_5px_14px_rgb(0_0_0_/_16%)] max-mobile:size-[2.1rem]">
            LA
          </span>
          <span className="whitespace-nowrap text-[0.72rem] font-bold tracking-[0.13em] text-white max-mobile:text-[0.63rem] max-mobile:tracking-[0.11em] max-narrow:text-[0.56rem] max-narrow:tracking-[0.08em]">
            LORENZO ARIAS
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-[clamp(1.1rem,2vw,1.85rem)] lg:flex">
          <NavLinks activeSection={activeSection} />
        </nav>

        <ActionLink className="ml-auto min-h-[2.7rem] rounded-[0.3rem] px-3 text-[0.82rem] max-mobile:min-h-[2.55rem] max-mobile:px-3 max-mobile:text-[0.75rem] max-narrow:px-2 max-narrow:text-[0.7rem]" href={contactEmail} variant="nav">
          Let&apos;s talk
          <svg aria-hidden="true" className="size-3 shrink-0 sm:size-4" fill="none" focusable="false" viewBox="0 0 20 20">
            <path d="M5.5 14.5 14 6m0 0H7m7 0v7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
          </svg>
        </ActionLink>

        <button
          aria-controls="portfolio-mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-grid size-10 shrink-0 place-items-center rounded-[0.35rem] border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky-300 motion-reduce:transition-none lg:hidden max-mobile:size-[2.55rem]"
          onClick={() => setIsMenuOpen((open) => !open)}
          ref={menuToggleRef}
          type="button"
        >
          <svg aria-hidden="true" className="size-5" fill="none" focusable="false" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`border-t border-white/10 bg-navy-raised px-4 pt-3 pb-5 sm:px-6 lg:hidden ${isMenuOpen ? "grid gap-4" : "hidden"}`}
        id="portfolio-mobile-menu"
      >
        <nav aria-label="Mobile primary navigation" className="flex flex-col gap-1">
          <NavLinks
            activeSection={activeSection}
            mobile
            onNavigate={() => {
              setIsMenuOpen(false);
              menuToggleRef.current?.focus();
            }}
          />
        </nav>
      </div>
    </header>
  );
}
