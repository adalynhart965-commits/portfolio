import { motion } from "framer-motion";
import profileImage from "@assets/SHH_1762537291962.jpg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight" data-testid="text-hero-title">
              Shinabella
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground" data-testid="text-hero-subtitle">
              Graphics Designer & Computer Scientist
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight" data-testid="text-about-title">
                About Me
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed" data-testid="text-about-content">
                <p>
                  Hi, I'm Shinabella a graphics designer and a computer scientist passionate about creating digital experiences that merge creativity with functionality.
                </p>
                <p>
                  I'm currently studying Web Development and exploring how design, code, and user psychology intersect to shape impactful web products. My goal is to become a Full-Stack Developer and later specialize in Cybersecurity, building safe, modern, and efficient web solutions.
                </p>
                <p>
                  Beyond development, I bring a designer's eye to every project — ensuring that interfaces are not only functional but also visually appealing and intuitive. I enjoy crafting clean, minimalist layouts, working with modern technologies, and constantly learning new tools to stay on the cutting edge of design and development.
                </p>
                <p>
                  When I'm not coding or designing, I spend time learning about AI systems, inbound sales, and creative marketing, which help me understand how technology connects people and businesses in meaningful ways.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-80 flex-shrink-0"
            >
              <div className="relative rounded-md overflow-hidden border border-border" data-testid="img-profile">
                <img
                  src={profileImage}
                  alt="Shinabella - Graphics Designer & Computer Scientist"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
