"use client";

import { useEffect, useState } from "react";

export function MouseGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      // Update state for the main background glow
      setPosition({ x: ev.clientX, y: ev.clientY });
      
      // Update global CSS variables on the root for components to do spotlight effects
      document.documentElement.style.setProperty("--mouse-x", `${ev.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${ev.clientY}px`);
    };

    const handleMouseEnter = () => setOpacity(0.15);
    const handleMouseLeave = () => setOpacity(0);

    window.addEventListener("mousemove", updateMousePosition);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
      style={{
        opacity,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 229, 160, 0.08), rgba(0, 150, 255, 0.05), transparent 80%)`,
      }}
    />
  );
}
