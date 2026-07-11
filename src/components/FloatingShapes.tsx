"use client";

import { useEffect, useState } from "react";

interface Shape {
  id: number;
  type: "circle" | "diamond" | "hexagon";
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export default function FloatingShapes({ count = 6 }: { count?: number }) {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const generated: Shape[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      type: (["circle", "diamond", "hexagon"] as const)[
        Math.floor(Math.random() * 3)
      ],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 40,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 12,
    }));
    setShapes(generated);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute animate-float"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            animationDelay: `${shape.delay}s`,
            animationDuration: `${shape.duration}s`,
          }}
        >
          <div
            className="backdrop-blur-sm border border-accent/10"
            style={{
              width: shape.size,
              height: shape.size,
              borderRadius:
                shape.type === "circle"
                  ? "50%"
                  : shape.type === "diamond"
                  ? "4px"
                  : "30%",
              transform:
                shape.type === "diamond" ? "rotate(45deg)" : undefined,
              background: `radial-gradient(circle at 30% 30%, rgba(201,162,75,0.08), rgba(11,110,79,0.05))`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
