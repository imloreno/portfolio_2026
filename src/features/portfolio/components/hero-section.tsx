import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { ActionLink } from "@/components/ui/action-link";
import { Container } from "@/components/ui/container";
import { portfolioProfile, profileSettings } from "../constants/profile";

const facts = [
  { title: "Santa Cruz, Bolivia", detail: "Based in LATAM" },
  { title: "UTC−4", detail: "Strong US time-zone overlap" },
  { title: "English C1", detail: "Professional working proficiency" },
  { title: "US teams", detail: "Experience with US-based companies" },
] as const;

function HeroFacts() {
  return (
    <div
      aria-label="Location, timezone, language and US experience"
      className="z-10 col-span-full mt-1 grid grid-cols-4 border-t border-[#c8d9ee] pt-[1.05rem] pb-[1.35rem] max-mobile:order-3 max-mobile:mt-0 max-mobile:grid-cols-2 max-mobile:pt-[0.65rem] max-mobile:pb-[1.05rem]"
    >
      {facts.map((fact) => (
        <div
          className={`flex min-h-11 flex-col justify-center gap-px border-r border-[#c8d9ee] px-[1.15rem] first:pl-0 last:border-r-0 max-mobile:min-h-[3.35rem] max-mobile:border-r-0 max-mobile:px-3 max-mobile:py-2 max-mobile:nth-[2n+1]:border-r max-mobile:nth-[-n+2]:border-b max-mobile:nth-[2n+1]:pl-0`}
          key={fact.title}
        >
          <strong className="text-[0.92rem] font-[780] text-navy max-mobile:text-[0.86rem]">
            {fact.title}
          </strong>
          <span className="text-[0.76rem] leading-[1.4] text-[#53667c] max-mobile:text-[0.7rem]">
            {fact.detail}
          </span>
        </div>
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-blue-pale before:absolute before:inset-y-0 before:left-0 before:w-[58%] before:bg-[#f4f8fe] before:content-[''] max-mobile:before:h-[57%] max-mobile:before:w-full"
      id="top"
    >
      <Container
        className="relative grid min-h-[clamp(650px,calc(100svh-4.5rem),790px)] grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)] grid-rows-[minmax(0,1fr)_auto] items-center gap-x-[clamp(1.5rem,4vw,4.75rem)] py-[clamp(3.5rem,7vh,6rem)] pb-8 max-wide:grid-cols-[minmax(0,1fr)_minmax(300px,0.85fr)] max-wide:gap-x-5 max-wide:[&_h1]:text-[clamp(3.15rem,6vw,4.7rem)] max-tablet:min-h-0 max-tablet:grid-cols-[minmax(0,1fr)_minmax(270px,0.8fr)] max-tablet:pt-8 max-tablet:gap-x-5 max-tablet:[&_h1]:text-[clamp(3rem,6vw,4.2rem)] max-mobile:flex max-mobile:flex-col max-mobile:items-stretch max-mobile:gap-0 max-mobile:py-2 max-mobile:pb-3"
      >
        <div className="relative z-[2] self-center pt-10 pb-12 max-tablet:py-10 max-mobile:order-1 max-mobile:py-12 max-mobile:pb-5">
          <h1
            className="m-0 text-[clamp(3.2rem,6vw,5.35rem)] leading-[1.02] font-[780] tracking-[-0.055em] text-balance max-mobile:text-[clamp(2.6rem,10vw,3.6rem)]"
            id="hero-heading"
          >
            Building products.
            <span className="block text-blue-deep">Solving real problems.</span>
          </h1>
          <p className="mt-[1.35rem] text-[clamp(0.95rem,1.2vw,1.08rem)] font-[750] tracking-[-0.025em] text-ink-soft max-mobile:mt-[1.1rem] max-mobile:text-[0.9rem]">
            {portfolioProfile.title}
          </p>
          <p className="mt-3 max-w-[58ch] text-[clamp(1rem,1.25vw,1.13rem)] leading-[1.8] text-[#465a70] max-mobile:mt-2 max-mobile:text-[0.95rem] max-mobile:leading-[1.7]">
            I build and ship scalable web platforms and AI-powered products using
            Node.js, Python, TypeScript, React, AWS, and modern LLM technologies.
            Based in Bolivia, working remotely with US teams.
          </p>
          <div className="mt-[1.8rem] flex flex-wrap items-center gap-3 max-mobile:mt-[1.35rem] max-mobile:gap-2">
            <ActionLink className="max-narrow:w-full" href="#work">
              View my work <FiArrowUpRight aria-hidden="true" className="size-[1.05rem]" />
            </ActionLink>
            <ActionLink
              className="max-narrow:w-full"
              href="mailto:work@imloreno.com"
              variant="secondary"
            >
              Let&apos;s talk
            </ActionLink>
          </div>
          <p className="mt-6 inline-flex items-center gap-2.5 text-[0.88rem] font-bold text-[#183b2d] max-mobile:mt-4 max-mobile:text-[0.81rem]">
            <span className="relative size-[0.56rem] shrink-0 rounded-full bg-[#16864f] shadow-[0_0_0_4px_rgb(22_134_79_/_13%)]" />
            Open to US-based remote opportunities
          </p>
        </div>

        <div className="relative isolate flex h-full min-h-[470px] items-end justify-center self-end max-tablet:min-h-[440px] max-mobile:order-2 max-mobile:mx-[-0.55rem] max-mobile:h-[min(100vw,400px)] max-mobile:min-h-0">
          <div className="absolute right-[1%] bottom-0 -z-[1] h-[87%] w-[92%] rounded-t-[46%] bg-[#dceaff] max-mobile:right-[6%] max-mobile:h-[90%] max-mobile:w-[88%] max-mobile:rounded-t-[48%]" />
          <Image
            alt="Lorenzo Arias, a Senior Full-Stack Engineer based in Bolivia"
            className="h-auto max-h-[660px] w-[min(100%,630px)] object-contain object-bottom drop-shadow-[0_16px_18px_rgb(7_27_54_/_9%)] max-mobile:h-full max-mobile:max-h-[400px] max-mobile:w-auto max-mobile:max-w-full"
            height={1254}
            preload
            sizes="(max-width: 680px) 100vw, (max-width: 1100px) 45vw, 620px"
            src={profileSettings.portraitUrl}
            width={1254}
          />
        </div>
        <HeroFacts />
      </Container>
    </section>
  );
}
