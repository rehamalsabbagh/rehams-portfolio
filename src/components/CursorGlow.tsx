import React, { useEffect, useRef } from "react";

export const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (glowRef.current) {
        // Smooth interpolation (0.15 is snappy but smooth)
        currentPos.current.x +=
          (mousePos.current.x - currentPos.current.x) * 0.15;
        currentPos.current.y +=
          (mousePos.current.y - currentPos.current.y) * 0.15;

        // Centering math: (Current Position - half of width/height)
        glowRef.current.style.transform = `translate3d(${currentPos.current.x - 200}px, ${currentPos.current.y - 200}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: -1,
        // The Secret to Merged Edges:
        // 1. Solid white in the dead center
        // 2. Fading to 0% opacity by the 60% mark
        // 3. A heavy blur to smear the remaining 40% into the background
        background:
          "radial-gradient(circle, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 0%, rgba(255,255,255,0.05) 30%, transparent 60%)",
        filter: "blur(30px)",
        willChange: "transform",
      }}
    />
  );
};
