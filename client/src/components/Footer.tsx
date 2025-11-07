import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" data-testid="text-footer-brand">
              Shinabella
            </h3>
            <p className="text-sm text-muted-foreground">
              Graphics Designer & Computer Scientist crafting beautiful digital experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover-elevate px-2 py-1 rounded-md transition-colors inline-block"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-md border border-border hover-elevate active-elevate-2 transition-colors"
                  aria-label={label}
                  data-testid={`link-footer-social-${label.toLowerCase()}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <a
              href="mailto:hello@shinabella.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover-elevate px-2 py-1 rounded-md transition-colors inline-block"
              data-testid="link-footer-email"
            >
              <Mail className="w-4 h-4" />
              hello@shinabella.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground" data-testid="text-footer-copyright">
          <p>© {currentYear} Shinabella. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
