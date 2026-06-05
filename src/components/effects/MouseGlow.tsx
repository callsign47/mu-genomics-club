"use client";

import { useEffect, useState, useRef } from "react";

export function MouseGlow() {
  const [position, setPosition] = useState({ x: -150, y: -150 });
  const [opacity, setOpacity] = useState(0);
  const targetPos = useRef({ x: -150, y: -150 });
  const currentPos = useRef({ x: -150, y: -150 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      targetPos.current = { x: ev.clientX, y: ev.clientY };
    };

    const handleMouseEnter = () => setOpacity(0.35);
    const handleMouseLeave = () => setOpacity(0);

    window.addEventListener("mousemove", updateMousePosition);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    // Dynamic animation loop for lag/spring dreamy effect
    let animationFrameId: number;
    const animate = () => {
      // Lerp logic: current = current + (target - current) * factor
      const ease = 0.06; // lower value = slower, dreamier lag
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;

      setPosition({ x: currentPos.current.x, y: currentPos.current.y });
      
      // Update global CSS variables
      document.documentElement.style.setProperty("--mouse-x", `${currentPos.current.x}px`);
      document.documentElement.style.setProperty("--mouse-y", `${currentPos.current.y}px`);

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-500"
      style={{
        opacity,
        background: `
          radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(0, 229, 160, 0.12), rgba(0, 150, 255, 0.08), transparent 80%),
          radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(0, 229, 160, 0.2), rgba(139, 92, 246, 0.15), transparent 60%)
        `,
      }}
    />
  );
}
