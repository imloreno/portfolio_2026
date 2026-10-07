"use client";

import { useEffect, useRef, useState } from "react";
import { navigationItems } from "../constants/navigation";

export function usePortfolioNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 8);
    const initialFrame = window.requestAnimationFrame(updateScrollState);
    window.addEventListener("scroll", updateScrollState, { passive: true });

    const visible = new Map<string, number>();
    const sections = navigationItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = typeof IntersectionObserver === "undefined"
      ? null
      : new IntersectionObserver((entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
            else visible.delete(entry.target.id);
          }
          const current = [...visible.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
          if (current) setActiveSection(current);
        }, { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 0.75] });

    sections.forEach((section) => observer?.observe(section));
    const syncHash = () => {
      const id = window.location.hash.slice(1);
      if (navigationItems.some((item) => item.id === id)) setActiveSection(id);
    };
    window.addEventListener("hashchange", syncHash);

    return () => {
      window.cancelAnimationFrame(initialFrame);
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("hashchange", syncHash);
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
      menuToggleRef.current?.focus();
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  return {
    activeSection,
    isMenuOpen,
    isScrolled,
    menuToggleRef,
    setIsMenuOpen,
  };
}
