import ProjectCard from "../ProjectCard";

export default function ProjectCardExample() {
  return (
    <div className="p-8 bg-background">
      <div className="max-w-md">
        <ProjectCard
          title="E-Commerce Platform"
          description="Modern online shopping experience with seamless checkout"
          tags={["UI/UX", "React", "Commerce"]}
          palette={["#FF6B6B", "#4ECDC4", "#45B7D1"]}
          index={0}
        />
      </div>
    </div>
  );
}
