import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import MockHeroVisual from "./MockHeroVisual";
import DeviceFrame from "./DeviceFrame";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  palette: string[];
  frameType: "mobile" | "desktop" | "none";
  index: number;
}

export default function ProjectCard({
  id,
  title,
  description,
  tags,
  palette,
  frameType,
  index,
}: ProjectCardProps) {
  const isLarge = index % 5 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-md bg-card ${
        isLarge ? "row-span-2" : ""
      }`}
      data-testid={`card-project-${index}`}
    >
      <div className="absolute inset-0">
        <DeviceFrame type={frameType}>
          <MockHeroVisual
            projectId={id}
            tags={tags}
            palette={palette}
            className="transition-transform duration-700 group-hover:scale-105"
          />
        </DeviceFrame>
      </div>
      
      <div className="relative h-full min-h-[280px] p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white" data-testid={`text-title-${index}`}>
            {title}
          </h3>
          <p className="text-sm text-white/90 leading-relaxed" data-testid={`text-description-${index}`}>
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-white/20 text-white border-white/30 backdrop-blur-sm no-default-hover-elevate no-default-active-elevate"
                data-testid={`badge-tag-${tag.toLowerCase()}`}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
