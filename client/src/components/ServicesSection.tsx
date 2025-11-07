import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Palette, Smartphone, Globe, Layout, Zap } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites built with modern technologies like React, Next.js, and Tailwind CSS. Responsive, fast, and optimized for performance.",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality. Creating intuitive interfaces that users love.",
      features: ["Wireframing", "Prototyping", "User Research"],
    },
    {
      icon: Layout,
      title: "Brand Identity",
      description: "Complete visual identity systems including logos, color palettes, and brand guidelines to make your business stand out.",
      features: ["Logo Design", "Brand Guidelines", "Visual Assets"],
    },
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Interactive and dynamic web applications using the latest frontend frameworks and best practices.",
      features: ["React/Next.js", "JavaScript ES6+", "API Integration"],
    },
    {
      icon: Smartphone,
      title: "Responsive Solutions",
      description: "Mobile-first designs that work seamlessly across all devices and screen sizes.",
      features: ["Mobile Optimization", "Cross-browser Testing", "Touch Interfaces"],
    },
    {
      icon: Zap,
      title: "Web Optimization",
      description: "Performance optimization, accessibility improvements, and SEO strategies to maximize your online presence.",
      features: ["Speed Optimization", "Accessibility", "SEO Strategy"],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-4 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" data-testid="text-services-title">
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-description">
            Comprehensive web development and design solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 space-y-4 h-full hover-elevate" data-testid={`card-service-${index}`}>
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
