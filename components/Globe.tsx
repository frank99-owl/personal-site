"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

/**
 * Anthropic-inspired warm globe. Auto-rotates, drag to scrub.
 * Colors tuned to match #d97757 (orange) / #131314 (ink) / #faf9f0 (cream).
 */
export function Globe({ size = 600 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    let width = canvasRef.current.offsetWidth;
    const onResize = () => {
      if (canvasRef.current) width = canvasRef.current.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.28,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 4.6,
      baseColor: [0.11, 0.1, 0.09], // warm near-black sphere
      markerColor: [1, 0.6, 0.42], // bright warm orange
      glowColor: [1, 0.78, 0.55], // warm amber halo
      opacity: 0.98,
      markers: [
        { location: [30.2741, 120.1551], size: 0.08 }, // Hangzhou
        { location: [-37.8136, 144.9631], size: 0.08 }, // Melbourne
      ],
    });

    // Drive rotation + resize ourselves (cobe v2 has no onRender callback).
    let phi = 0;
    let rafId = 0;
    const tick = () => {
      if (pointerInteracting.current === null) phi += 0.004;
      globe.update({
        phi: phi + pointerInteractionMovement.current,
        width: width * 2,
        height: width * 2,
      });
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    // Fade-in once the first frame has been rendered.
    const canvas = canvasRef.current;
    if (canvas) {
      requestAnimationFrame(() => {
        canvas.style.opacity = "1";
      });
    }

    return () => {
      cancelAnimationFrame(rafId);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className="relative w-full aspect-square max-w-[600px] mx-auto"
      style={{ maxWidth: size }}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta / 200;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta / 100;
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 1.2s ease",
        }}
      />
    </div>
  );
}
