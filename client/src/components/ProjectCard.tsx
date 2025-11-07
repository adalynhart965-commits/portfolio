import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  palette: string[];
  image?: string;
  index: number;
}

function generateGradient(colors: string[]): string {
  if (colors.length === 1) return colors[0];
  if (colors.length === 2) {
    return `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`;
  }
  return `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`;
}

export default function ProjectCard({
  title,
  description,
  tags,
  palette,
  image,
  index,
}: ProjectCardProps) {
  const gradient = generateGradient(palette);
  const isLarge = index % 5 === 0;

  let imageUrl: string | undefined;
  if (image) {
    try {
      imageUrl = new URL(`../../attached_assets/${image}`, import.meta.url).href;
    } catch (e) {
      console.error("Failed to load image:", image, e);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-md ${
        isLarge ? "row-span-2" : ""
      }`}
      data-testid={`card-project-${index}`}
    >
      {imageUrl ? (
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      ) : (
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
          style={{ background: gradient }}
        />
      )}
      
      <div className="relative h-full min-h-[280px] p-6 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent">
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
