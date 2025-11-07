import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("about")}
            className="text-lg font-semibold tracking-tight hover-elevate px-3 py-1 rounded-md transition-colors"
            data-testid="link-logo"
          >
            Portfolio
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm hover-elevate px-3 py-1 rounded-md transition-colors"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-sm hover-elevate px-3 py-1 rounded-md transition-colors"
              data-testid="link-work"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm hover-elevate px-3 py-1 rounded-md transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
