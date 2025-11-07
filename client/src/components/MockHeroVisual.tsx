import { useMemo } from "react";

interface MockHeroVisualProps {
  projectId: string;
  tags: string[];
  palette: string[];
  className?: string;
}

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function getGradientAngle(id: string): number {
  const angles = [45, 90, 135, 180, 225];
  return angles[hashCode(id) % angles.length];
}

function getShapesByTags(tags: string[], id: string): JSX.Element[] {
  const shapes: JSX.Element[] = [];
  const seed = hashCode(id);
  
  const hasTag = (keywords: string[]) =>
    tags.some(tag => keywords.some(k => tag.toLowerCase().includes(k.toLowerCase())));

  if (hasTag(["Mobile", "iOS", "App"])) {
    shapes.push(
      <rect
        key="mobile-notch"
        x="35%"
        y="5%"
        width="30%"
        height="3%"
        rx="12"
        fill="rgba(255, 255, 255, 0.15)"
      />
    );
    shapes.push(
      <rect
        key="mobile-frame"
        x="20%"
        y="10%"
        width="60%"
        height="75%"
        rx="24"
        fill="none"
        stroke="rgba(255, 255, 255, 0.2)"
        strokeWidth="2"
      />
    );
  }

  if (hasTag(["Dashboard", "Analytics", "Data"])) {
    const barCount = 4;
    for (let i = 0; i < barCount; i++) {
      const height = 20 + ((seed + i * 17) % 40);
      shapes.push(
        <rect
          key={`bar-${i}`}
          x={`${25 + i * 15}%`}
          y={`${70 - height}%`}
          width="8%"
          height={`${height}%`}
          rx="4"
          fill="rgba(255, 255, 255, 0.15)"
        />
      );
    }
  }

  if (hasTag(["Branding", "Design", "Strategy"])) {
    shapes.push(
      <circle
        key="brand-circle-1"
        cx="30%"
        cy="35%"
        r="15%"
        fill="rgba(255, 255, 255, 0.08)"
      />
    );
    shapes.push(
      <circle
        key="brand-circle-2"
        cx="70%"
        cy="65%"
        r="20%"
        fill="rgba(255, 255, 255, 0.06)"
      />
    );
  }

  if (hasTag(["Web", "Desktop", "SaaS", "Enterprise"])) {
    shapes.push(
      <rect
        key="browser-bar"
        x="15%"
        y="20%"
        width="70%"
        height="5%"
        rx="8"
        fill="rgba(255, 255, 255, 0.12)"
      />
    );
    shapes.push(
      <rect
        key="browser-window"
        x="15%"
        y="27%"
        width="70%"
        height="50%"
        rx="4"
        fill="none"
        stroke="rgba(255, 255, 255, 0.2)"
        strokeWidth="2"
      />
    );
    for (let i = 0; i < 3; i++) {
      shapes.push(
        <circle
          key={`dot-${i}`}
          cx={`${18 + i * 3}%`}
          cy="22.5%"
          r="1%"
          fill="rgba(255, 255, 255, 0.25)"
        />
      );
    }
  }

  if (hasTag(["Typography", "UI/UX", "React"])) {
    const lineCount = 3;
    for (let i = 0; i < lineCount; i++) {
      const width = 40 + ((seed + i * 13) % 30);
      shapes.push(
        <rect
          key={`line-${i}`}
          x="25%"
          y={`${35 + i * 12}%`}
          width={`${width}%`}
          height="3%"
          rx="4"
          fill="rgba(255, 255, 255, 0.15)"
        />
      );
    }
  }

  return shapes;
}

export default function MockHeroVisual({
  projectId,
  tags,
  palette,
  className = "",
}: MockHeroVisualProps) {
  const gradientDef = useMemo(() => {
    const angle = getGradientAngle(projectId);
    
    const effectivePalette = palette.length === 1 ? [palette[0], palette[0]] : palette;
    
    const stops = effectivePalette.map((color, index) => ({
      offset: `${(index / (effectivePalette.length - 1)) * 100}%`,
      color,
    }));
    
    return { angle, stops };
  }, [projectId, palette]);

  const shapes = useMemo(() => {
    return getShapesByTags(tags, projectId);
  }, [tags, projectId]);

  const gradientId = `gradient-${projectId}`;

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient
          id={gradientId}
          gradientTransform={`rotate(${gradientDef.angle})`}
        >
          {gradientDef.stops.map((stop, idx) => (
            <stop key={idx} offset={stop.offset} stopColor={stop.color} />
          ))}
        </linearGradient>
      </defs>
      
      <rect width="100" height="100" fill={`url(#${gradientId})`} />
      
      {shapes}

      <g opacity="0.1">
        <circle cx="10%" cy="15%" r="25%" fill="white" />
        <circle cx="85%" cy="80%" r="30%" fill="white" />
      </g>
    </svg>
  );
}
