import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { ActionLink } from "@/components/ui/action-link";
import { Container } from "@/components/ui/container";
import { portfolioProfile, profileSettings } from "../constants/profile";

const facts = [
  { title: "US timezone", detail: "Strong US time-zone overlap (UTC-4)" },
  { title: "English C1", detail: "Professional working proficiency" },
  { title: "US teams", detail: "Experience with US-based companies" },
  { title: "Remote, Bolivia", detail: "Based in LATAM working remotely" },
] as const;

function HeroFacts() {
  return (
    <div
      aria-label="Location, timezone, language and US experience"
      className="z-10 col-span-full grid grid-cols-4 gap-[0.7rem] pt-[1.05rem] pb-[1.35rem] max-tablet:order-3 max-tablet:grid-cols-2 max-mobile:mt-0 max-mobile:gap-[0.6rem] max-mobile:pt-[0.65rem] max-mobile:pb-[1.05rem]"
    >
      {facts.map((fact) => (
        <div
          className="flex min-h-11 flex-col justify-center gap-px rounded-[0.45rem] border border-[#d3e1f2] bg-white/80 px-4 py-2.5 shadow-[0_2px_12px_rgb(7_27_54_/_5%)] backdrop-blur-sm max-mobile:min-h-[3.35rem] max-mobile:px-3 max-mobile:py-2"
          key={fact.title}
        >
          <strong className="text-[0.92rem] font-[780] text-blue-deep max-mobile:text-[0.86rem]">
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
      className="relative overflow-hidden bg-blue-pale"
      id="top"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          alt=""
          className="object-cover object-center blur-[5px]"
          fill
          preload
          sizes="100vw"
          src="/bg2.webp"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#f4f8fe] via-[#eaf3ff]/90 to-[#eaf3ff]/45 max-mobile:bg-gradient-to-b max-mobile:from-[#f4f8fe] max-mobile:via-[#eaf3ff]/90 max-mobile:to-[#eaf3ff]/60"
      />
      <Container
        className="relative grid min-h-[clamp(650px,calc(100svh-4.5rem),790px)] grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)] grid-rows-[minmax(0,1fr)_auto] items-center gap-x-[clamp(1.5rem,4vw,4.75rem)] py-[clamp(3.5rem,7vh,6rem)] pb-8 max-wide:grid-cols-[minmax(0,1fr)_minmax(300px,0.85fr)] max-wide:gap-x-0 max-wide:[&_h1]:text-[clamp(3.15rem,6vw,4.7rem)] max-tablet:flex max-tablet:flex-col max-tablet:items-stretch max-tablet:gap-0 max-tablet:min-h-0 max-tablet:pt-8 max-tablet:[&_h1]:text-[clamp(3rem,6vw,4.2rem)] max-mobile:py-2 max-mobile:pb-3"
      >
        <div className="relative z-[2] self-center pt-10 pb-12 max-tablet:order-1 max-tablet:self-stretch max-tablet:py-10 max-mobile:py-12 max-mobile:pb-5">
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

        <div className="relative isolate flex h-full min-h-[470px] items-end justify-center self-end max-tablet:order-2 max-tablet:items-center max-tablet:self-stretch max-tablet:h-auto max-tablet:min-h-0 max-mobile:mx-[-0.55rem] max-mobile:h-[min(100vw,400px)] max-mobile:min-h-0">
          <Image
            alt="Lorenzo Arias, a Senior Full-Stack Engineer based in Bolivia"
            className="h-auto max-h-[660px] w-[min(100%,630px)] object-contain object-bottom drop-shadow-[0_16px_18px_rgb(7_27_54_/_9%)] tablet:w-[min(120%,630px)] tablet:max-w-none tablet:shrink-0 max-tablet:w-[min(100%,460px)] max-tablet:h-auto max-tablet:max-h-[480px] max-tablet:max-w-full max-mobile:h-full max-mobile:max-h-[400px] max-mobile:w-auto max-mobile:max-w-full"
            height={1254}
            preload
            sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 640px"
            src={profileSettings.portraitUrl}
            width={1254}
          />
        </div>
        <HeroFacts />
      </Container>
    </section>
  );
}
