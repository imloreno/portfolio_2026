import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { siteConfig } from "@/config/site";

const socials = [
  { label: "GitHub", href: siteConfig.links.github, Icon: FiGithub },
  { label: "LinkedIn", href: siteConfig.links.linkedin, Icon: FiLinkedin },
  { label: "Email", href: siteConfig.links.email, Icon: FiMail },
] as const;

// Resolved once at module scope so the footer stays prerenderable.
const currentYear = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-border/60 bg-background/60"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          © {currentYear} {siteConfig.name}. All rights reserved.
        </p>

        <ul className="flex items-center gap-2">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Icon className="size-5" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
