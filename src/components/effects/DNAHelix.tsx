"use client";

import { useEffect, useRef } from "react";

export function DNAHelix({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let phase = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const numPoints = 40;
      const helixRadius = Math.min(w, h) * 0.12;
      const verticalSpacing = h / (numPoints - 1);
      const perspective = 0.35;

      const strand1: Array<{ x: number; y: number; z: number; op: number }> = [];
      const strand2: Array<{ x: number; y: number; z: number; op: number }> = [];

      for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 5 + phase;
        const y = i * verticalSpacing;
        const cos1 = Math.cos(angle);
        const sin1 = Math.sin(angle);
        const cos2 = Math.cos(angle + Math.PI);
        const sin2 = Math.sin(angle + Math.PI);
        const d1 = 1 + sin1 * perspective;
        const d2 = 1 + sin2 * perspective;

        strand1.push({ x: w / 2 + cos1 * helixRadius * d1, y, z: sin1, op: 0.3 + (sin1 + 1) * 0.35 });
        strand2.push({ x: w / 2 + cos2 * helixRadius * d2, y, z: sin2, op: 0.3 + (sin2 + 1) * 0.35 });
      }

      // Base pairs
      for (let i = 0; i < numPoints; i += 2) {
        const p1 = strand1[i];
        const p2 = strand2[i];
        const op = Math.min(p1.op, p2.op) * 0.35;
        const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        grad.addColorStop(0, `rgba(0, 229, 160, ${op})`);
        grad.addColorStop(0.5, `rgba(0, 180, 220, ${op * 0.6})`);
        grad.addColorStop(1, `rgba(0, 150, 255, ${op})`);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Draw strands
      const drawStrand = (points: typeof strand1, color: string) => {
        ctx.beginPath();
        for (let i = 0; i < points.length; i++) {
          const p = points[i];
          if (i === 0) ctx.moveTo(p.x, p.y);
          else {
            const prev = points[i - 1];
            const cpx = (prev.x + p.x) / 2;
            const cpy = (prev.y + p.y) / 2;
            ctx.quadraticCurveTo(prev.x, prev.y, cpx, cpy);
          }
        }
        ctx.strokeStyle = color;
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.stroke();
      };

      drawStrand(strand1, "rgba(0, 229, 160, 0.7)");
      drawStrand(strand2, "rgba(0, 150, 255, 0.7)");

      // Nodes with glow
      const allPoints = [...strand1.map((p, i) => ({ ...p, idx: i, primary: true })), ...strand2.map((p, i) => ({ ...p, idx: i, primary: false }))];
      for (const p of allPoints) {
        const rgb = p.primary ? "0,229,160" : "0,150,255";
        const size = 1.5 + p.op * 2.5;
        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${p.op * 0.08})`;
        ctx.fill();
        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${p.op})`;
        ctx.fill();
      }

      phase += 0.012;
      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />;
}
