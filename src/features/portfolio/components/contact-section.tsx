import { FiArrowUpRight, FiGlobe, FiLinkedin, FiMail } from "react-icons/fi";
import { ActionLink } from "@/components/ui/action-link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { contact } from "../constants/contact";

export function ContactSection() {
  return (
    <Section
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-[#071b36] text-white after:pointer-events-none after:absolute after:top-[-15rem] after:right-[-8rem] after:size-[34rem] after:rounded-full after:border after:border-white/10 after:shadow-[0_0_0_3rem_rgb(255_255_255_/_2%),0_0_0_6rem_rgb(255_255_255_/_2%)] after:content-['']"
      id="contact"
      tone="navy"
    >
      <Container className="relative z-10 grid grid-cols-[minmax(0,1fr)_minmax(250px,0.52fr)] items-end gap-[clamp(2.5rem,8vw,8rem)] max-tablet:grid-cols-[minmax(0,1fr)_minmax(220px,0.7fr)] max-tablet:gap-12 max-mobile:grid-cols-1 max-mobile:gap-10">
        <div>
          <div className="grid grid-cols-[minmax(140px,0.3fr)_minmax(0,0.7fr)] items-start gap-[clamp(1rem,3vw,2.75rem)] max-mobile:grid-cols-[minmax(4.5rem,0.28fr)_minmax(0,0.72fr)] max-mobile:gap-3">
            <p className="mt-0 flex items-center gap-[0.65rem] pt-3 text-[0.72rem] font-extrabold tracking-[0.12em] text-[#8bb9ff] uppercase before:h-0.5 before:w-[1.4rem] before:bg-current before:content-[''] max-mobile:gap-1.5 max-mobile:pt-2 max-mobile:text-[0.57rem] max-mobile:tracking-[0.08em] max-mobile:before:w-3">
              Let&apos;s work together
            </p>
            <h2 className="max-w-[12ch] text-[clamp(2.8rem,5.5vw,5.2rem)] leading-[1.03] font-[780] tracking-[-0.06em] text-balance max-mobile:text-[clamp(2.75rem,11vw,4.1rem)]" id="contact-heading">
              {contact.heading}
            </h2>
          </div>
          <p className="mt-5 max-w-[64ch] text-base leading-[1.8] text-[#c7d5e6] max-mobile:text-[0.9rem]">
            {contact.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-3 max-mobile:mt-5">
            <ActionLink href={contact.emailHref} variant="contactPrimary">
              Let&apos;s talk <FiArrowUpRight aria-hidden="true" className="size-[1.05rem]" />
            </ActionLink>
            <ActionLink
              href={contact.linkedinUrl}
              rel="noreferrer"
              target="_blank"
              variant="contactSecondary"
            >
              LinkedIn <FiArrowUpRight aria-hidden="true" className="size-[1.05rem]" />
            </ActionLink>
          </div>
        </div>

        <address className="grid gap-4 border-t border-white/25 pt-5 not-italic max-mobile:gap-3">
          <a className="w-fit text-[0.93rem] font-bold text-white decoration-white/45 underline-offset-4 hover:text-[#b8d4ff]" href={contact.emailHref}>
            <FiMail className="mr-1 inline size-4" aria-hidden="true" /> {contact.email}
          </a>
          <div className="mt-1 flex flex-wrap gap-x-5 gap-y-4">
            <a className="inline-flex items-center gap-2 text-[0.83rem] font-[650] text-[#c7d5e6] hover:text-white" href={contact.linkedinUrl} rel="noreferrer" target="_blank">
              <FiLinkedin className="size-4" aria-hidden="true" /> linkedin.com/in/soylorenzo
            </a>
            <a className="inline-flex items-center gap-2 text-[0.83rem] font-[650] text-[#c7d5e6] hover:text-white" href={contact.websiteUrl} rel="noreferrer" target="_blank">
              <FiGlobe className="size-4" aria-hidden="true" /> imloreno.com
            </a>
          </div>
        </address>
      </Container>
    </Section>
  );
}
