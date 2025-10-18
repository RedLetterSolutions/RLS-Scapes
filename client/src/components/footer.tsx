import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { SiGoogle } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "Local SEO", href: "#services" },
        { label: "Google Business Profile", href: "#services" },
        { label: "Call Tracking", href: "#services" },
        { label: "Lead Generation", href: "#services" },
        { label: "Website Design", href: "#services" },
        { label: "Analytics & Reporting", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Case Studies", href: "#portfolio" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Hardscaping SEO Guide", href: "#" },
        { label: "Lead Generation Tips", href: "#" },
        { label: "Marketing Calculator", href: "#" },
        { label: "Industry Insights", href: "#" },
        { label: "Free Audit", href: "#contact" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
                <span className="font-heading text-xl font-bold text-primary-foreground">
                  HS
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold leading-tight text-foreground">
                  Hardscape Pro
                </span>
                <span className="text-xs text-muted-foreground">
                  Digital Marketing
                </span>
              </div>
            </div>
            <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
              Specialized digital marketing solutions exclusively for hardscaping
              contractors. Grow your business with proven SEO and lead generation
              strategies.
            </p>
            <div className="flex items-center gap-4 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover-elevate"
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-trust/10 px-3 py-2 flex items-center gap-2">
                <SiGoogle className="h-4 w-4 text-trust" />
                <span className="text-xs font-semibold text-trust">
                  Google Partner
                </span>
              </div>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      data-testid={`button-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Hardscape Pro Digital Marketing. A division of{" "}
              <span className="font-semibold text-foreground">
                Red Letter Solutions
              </span>
              . All rights reserved.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => scrollToSection("#")}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                data-testid="button-privacy"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => scrollToSection("#")}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                data-testid="button-terms"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
