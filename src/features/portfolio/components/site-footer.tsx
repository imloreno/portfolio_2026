import { Container } from "@/components/ui/container";
import { contact, footer } from "../constants/contact";

export function SiteFooter() {
  return (
    <footer className="bg-[#04152b] text-[#d7e2f0]">
      <Container className="grid grid-cols-[1.2fr_1fr_auto] items-center gap-x-12 gap-y-6 py-6 max-tablet:grid-cols-2 max-mobile:grid-cols-1 max-mobile:gap-3 max-mobile:py-5">
        <p className="text-[0.91rem] leading-[1.5] font-[780] text-white">
          {footer.name}
          <span className="mt-0.5 block text-[0.76rem] font-medium text-[#b9c9dc]">
            {footer.title}
          </span>
        </p>
        <p className="text-[0.76rem] text-[#b9c9dc]">
          {footer.location} · Available for remote US opportunities
        </p>
        <nav aria-label="Footer links" className="flex flex-wrap justify-end gap-4 text-[0.76rem] font-[650] max-tablet:col-span-full max-tablet:justify-start max-mobile:col-span-1">
          <a className="text-[#dbe6f4]" href={contact.linkedinUrl} rel="noreferrer" target="_blank">LinkedIn</a>
          <a className="text-[#dbe6f4]" href={contact.emailHref}>Email</a>
        </nav>
        <p className="col-span-full m-0 border-t border-white/10 pt-3 text-[0.7rem] text-[#9dafc4] max-mobile:col-span-1">
          {footer.copyright}
        </p>
      </Container>
    </footer>
  );
}
