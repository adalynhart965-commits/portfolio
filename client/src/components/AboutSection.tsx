import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight" data-testid="text-hero-title">
            Creative Designer &<br />Developer
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-description">
            I craft beautiful digital experiences that blend aesthetics with
            functionality. Specializing in UI/UX design, web development, and
            brand identity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center pt-4"
        >
          <div className="text-center">
            <div className="text-3xl font-bold" data-testid="text-stat-projects">50+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center">
            <div className="text-3xl font-bold" data-testid="text-stat-clients">30+</div>
            <div className="text-sm text-muted-foreground">Clients</div>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center">
            <div className="text-3xl font-bold" data-testid="text-stat-years">5+</div>
            <div className="text-sm text-muted-foreground">Years</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
