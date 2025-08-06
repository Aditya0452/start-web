import { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

interface AnimatedBackgroundProps {
  variant?: "floating-shapes" | "particles" | "waves" | "geometric";
  intensity?: "low" | "medium" | "high";
  className?: string;
}

interface Shape {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  type: "circle" | "square" | "triangle";
}

export default function AnimatedBackground({ 
  variant = "floating-shapes", 
  intensity = "low",
  className = "" 
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const shapesRef = useRef<Shape[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeShapes();
    };

    const initializeShapes = () => {
      const count = intensity === "low" ? 15 : intensity === "medium" ? 25 : 40;
      shapesRef.current = [];

      for (let i = 0; i < count; i++) {
        const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
        
        shapesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 20 + 10,
          opacity: Math.random() * 0.15 + 0.05,
          color: isDark 
            ? `hsl(${224 + Math.random() * 56}, 70%, ${60 + Math.random() * 20}%)` 
            : `hsl(${224 + Math.random() * 56}, 70%, ${40 + Math.random() * 20}%)`,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          type: ["circle", "square", "triangle"][Math.floor(Math.random() * 3)] as "circle" | "square" | "triangle",
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (variant === "floating-shapes") {
        drawFloatingShapes(ctx, canvas);
      } else if (variant === "particles") {
        drawParticles(ctx, canvas);
      } else if (variant === "waves") {
        drawWaves(ctx, canvas);
      } else if (variant === "geometric") {
        drawGeometric(ctx, canvas);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, intensity, theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
    />
  );
}

function drawFloatingShapes(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  const shapes = shapesRef.current;
  const time = Date.now() * 0.001;

  shapes.forEach((shape) => {
    // Update position
    shape.x += shape.vx;
    shape.y += shape.vy;
    shape.rotation += shape.rotationSpeed;

    // Add gentle floating motion
    shape.x += Math.sin(time + shape.x * 0.001) * 0.2;
    shape.y += Math.cos(time + shape.y * 0.001) * 0.2;

    // Wrap around edges
    if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
    if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
    if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
    if (shape.y > canvas.height + shape.size) shape.y = -shape.size;

    // Draw shape
    ctx.save();
    ctx.translate(shape.x, shape.y);
    ctx.rotate(shape.rotation);
    ctx.globalAlpha = shape.opacity + Math.sin(time * 2 + shape.x * 0.01) * 0.05;
    ctx.fillStyle = shape.color;

    if (shape.type === "circle") {
      ctx.beginPath();
      ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
      ctx.fill();
    } else if (shape.type === "square") {
      ctx.fillRect(-shape.size/2, -shape.size/2, shape.size, shape.size);
    } else if (shape.type === "triangle") {
      ctx.beginPath();
      ctx.moveTo(0, -shape.size/2);
      ctx.lineTo(-shape.size/2, shape.size/2);
      ctx.lineTo(shape.size/2, shape.size/2);
      ctx.closePath();
      ctx.fill();
    }

    ctx.restore();
  });
}

function drawParticles(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  const shapes = shapesRef.current;
  const time = Date.now() * 0.002;

  shapes.forEach((shape, index) => {
    shape.x += shape.vx;
    shape.y += shape.vy;

    // Particle drift
    shape.x += Math.sin(time + index) * 0.1;
    shape.y += Math.cos(time + index * 0.7) * 0.1;

    // Wrap around
    if (shape.x < 0) shape.x = canvas.width;
    if (shape.x > canvas.width) shape.x = 0;
    if (shape.y < 0) shape.y = canvas.height;
    if (shape.y > canvas.height) shape.y = 0;

    // Draw particle
    ctx.globalAlpha = shape.opacity;
    ctx.fillStyle = shape.color;
    ctx.beginPath();
    ctx.arc(shape.x, shape.y, shape.size * 0.3, 0, Math.PI * 2);
    ctx.fill();

    // Connect nearby particles
    shapes.forEach((otherShape, otherIndex) => {
      if (index >= otherIndex) return;
      
      const dx = shape.x - otherShape.x;
      const dy = shape.y - otherShape.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        ctx.globalAlpha = (1 - distance / 100) * 0.1;
        ctx.strokeStyle = shape.color;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(shape.x, shape.y);
        ctx.lineTo(otherShape.x, otherShape.y);
        ctx.stroke();
      }
    });
  });
}

function drawWaves(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  const time = Date.now() * 0.001;
  
  for (let i = 0; i < 4; i++) {
    ctx.globalAlpha = 0.1 - i * 0.02;
    ctx.strokeStyle = `hsl(${224 + i * 15}, 70%, 60%)`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for (let x = 0; x <= canvas.width; x += 5) {
      const y = canvas.height * 0.3 + 
                Math.sin((x + time * 80) * 0.01 + i) * 40 +
                Math.sin((x + time * 40) * 0.02 + i) * 20 +
                Math.sin((x + time * 120) * 0.005 + i) * 60;
      
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();

    // Second wave set
    ctx.beginPath();
    for (let x = 0; x <= canvas.width; x += 5) {
      const y = canvas.height * 0.7 + 
                Math.sin((x + time * 60) * 0.015 + i + Math.PI) * 30 +
                Math.sin((x + time * 90) * 0.008 + i + Math.PI) * 45;
      
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  }
}

function drawGeometric(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  const shapes = shapesRef.current;
  
  shapes.forEach((shape) => {
    shape.x += shape.vx;
    shape.y += shape.vy;
    shape.rotation += shape.rotationSpeed;

    // Wrap around
    if (shape.x < -100) shape.x = canvas.width + 100;
    if (shape.x > canvas.width + 100) shape.x = -100;
    if (shape.y < -100) shape.y = canvas.height + 100;
    if (shape.y > canvas.height + 100) shape.y = -100;

    ctx.save();
    ctx.translate(shape.x, shape.y);
    ctx.rotate(shape.rotation);
    ctx.globalAlpha = shape.opacity;
    ctx.strokeStyle = shape.color;
    ctx.lineWidth = 2;

    // Draw wireframe shapes
    if (shape.type === "circle") {
      ctx.beginPath();
      ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
      ctx.stroke();
    } else if (shape.type === "square") {
      ctx.strokeRect(-shape.size/2, -shape.size/2, shape.size, shape.size);
    } else if (shape.type === "triangle") {
      ctx.beginPath();
      ctx.moveTo(0, -shape.size/2);
      ctx.lineTo(-shape.size/2, shape.size/2);
      ctx.lineTo(shape.size/2, shape.size/2);
      ctx.closePath();
      ctx.stroke();
    }

    ctx.restore();
  });
}
