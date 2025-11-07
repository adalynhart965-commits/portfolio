import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Palette, Server, Shield, MessageSquare, Target } from "lucide-react";

export default function SkillsSection() {
  const technicalSkills = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS", "Next.js"],
    },
    {
      icon: Server,
      title: "Backend Development (Learning)",
      skills: ["Node.js", "Express.js", "MongoDB", "APIs"],
    },
    {
      icon: Palette,
      title: "Design Tools",
      skills: ["Figma", "Adobe Photoshop", "Illustrator", "Canva"],
    },
    {
      icon: Code,
      title: "Web Technologies",
      skills: ["Responsive Design", "REST APIs", "Git/GitHub", "SEO basics"],
    },
    {
      icon: Palette,
      title: "UI/UX Principles",
      skills: ["Wireframing", "Prototyping", "Typography", "Color Theory"],
    },
    {
      icon: Shield,
      title: "Future Focus",
      skills: ["Cybersecurity Fundamentals", "Web Vulnerability Testing"],
    },
  ];

  const softSkills = [
    { icon: MessageSquare, title: "Strong communication & collaboration" },
    { icon: Target, title: "Attention to detail & creative problem-solving" },
    { icon: Target, title: "Time management & adaptability" },
    { icon: Code, title: "Continuous learner with a growth mindset" },
    { icon: MessageSquare, title: "Client relationship & inbound sales understanding" },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-4 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" data-testid="text-skills-title">
            Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-skills-description">
            A comprehensive toolkit for building modern digital experiences
          </p>
        </motion.div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6" data-testid="text-technical-skills">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 space-y-4 h-full hover-elevate" data-testid={`card-skill-${index}`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-primary/10">
                        <category.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold">{category.title}</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {category.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6" data-testid="text-soft-skills">
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover-elevate" data-testid={`card-soft-skill-${index}`}>
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <p className="text-sm">{skill.title}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
