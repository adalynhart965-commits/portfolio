import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  palette: string[];
  frameType: "mobile" | "desktop" | "none";
}

export default function WorkSection() {
  const breakpointColumns = {
    default: 3,
    1024: 2,
    640: 1,
  };

  return (
    <section id="work" className="py-20 lg:py-32 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" data-testid="text-work-title">
            Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl" data-testid="text-work-description">
            Showcase projects using mock hero photos generated from project tags and color palettes.
          </p>
        </motion.div>

        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-6 w-auto"
          columnClassName="pl-6 bg-clip-padding"
        >
          {(projectsData as Project[]).map((project, index) => (
            <div key={project.id} className="mb-6">
              <ProjectCard
                id={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                palette={project.palette}
                frameType={project.frameType}
                index={index}
              />
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}
