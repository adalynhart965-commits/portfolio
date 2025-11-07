import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" data-testid="text-contact-title">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-contact-description">
            Have a project in mind or want to collaborate? I'm always open to
            discussing new opportunities and creative ideas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <a
              href="mailto:hello@portfolio.com"
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-semibold hover-elevate px-4 py-2 rounded-md transition-colors"
              data-testid="link-email"
            >
              <Mail className="w-8 h-8" />
              hello@portfolio.com
            </a>
          </div>

          <div className="flex justify-center gap-4">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <Button
                key={label}
                variant="outline"
                size="icon"
                asChild
                data-testid={`link-social-${label.toLowerCase()}`}
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-12 text-sm text-muted-foreground"
          data-testid="text-footer"
        >
          <p>© 2024 Portfolio. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
