import { AboutSection } from "./about-section";
import { ContactSection } from "./contact-section";
import { EducationSection } from "./education-section";
import { ExperienceSection } from "./experience-section";
import { ExpertiseSection } from "./expertise-section";
import { HeroSection } from "./hero-section";
import { HowIWorkSection } from "./how-i-work-section";
import { ImpactSection } from "./impact-section";
import { MotionEffects } from "./motion-effects";
import { PortfolioNav } from "./portfolio-nav";
import { RemoteCollaborationSection } from "./remote-collaboration-section";
import { SelectedWorkSection } from "./selected-work-section";
import { SiteFooter } from "./site-footer";
import { ValuePropositionsSection } from "./value-propositions-section";

export function PortfolioPage() {
  return (
    <>
      <a
        className="fixed top-3 left-3 z-[100] -translate-y-[180%] rounded-md bg-navy px-4 py-2.5 font-bold text-white focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>
      <PortfolioNav />
      <main id="main-content">
        <HeroSection />
        <ValuePropositionsSection />
        <ImpactSection />
        <SelectedWorkSection />
        <ExperienceSection />
        <ExpertiseSection />
        <HowIWorkSection />
        <RemoteCollaborationSection />
        <AboutSection />
        <EducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <MotionEffects />
    </>
  );
}
