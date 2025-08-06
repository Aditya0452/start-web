import { useEffect, useRef } from "react";

interface AbstractBackgroundProps {
  variant?: "dots" | "waves" | "geometric" | "particles";
  intensity?: "low" | "medium" | "high";
  className?: string;
}

export default function AbstractBackground({ 
  variant = "particles", 
  intensity = "medium",
  className = "" 
}: AbstractBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeElements();
    };

    const initializeElements = () => {
      const count = intensity === "low" ? 30 : intensity === "medium" ? 50 : 80;
      particlesRef.current = [];

      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: `hsl(${224 + Math.random() * 56}, 70%, ${50 + Math.random() * 30}%)`,
          angle: Math.random() * Math.PI * 2,
          angleSpeed: (Math.random() - 0.5) * 0.02,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (variant === "particles") {
        drawParticles(ctx, canvas);
      } else if (variant === "waves") {
        drawWaves(ctx, canvas);
      } else if (variant === "geometric") {
        drawGeometric(ctx, canvas);
      } else if (variant === "dots") {
        drawDots(ctx, canvas);
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
  }, [variant, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
    />
  );
}

function drawParticles(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  const particles = particlesRef.current;
  const time = Date.now() * 0.001;

  particles.forEach((particle, index) => {
    // Update position
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.angle += particle.angleSpeed;

    // Wrap around edges
    if (particle.x < 0) particle.x = canvas.width;
    if (particle.x > canvas.width) particle.x = 0;
    if (particle.y < 0) particle.y = canvas.height;
    if (particle.y > canvas.height) particle.y = 0;

    // Pulsing effect
    const pulse = Math.sin(time + index * 0.1) * 0.2 + 0.8;
    const currentSize = particle.size * pulse;

    // Draw particle
    ctx.globalAlpha = particle.opacity;
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
    ctx.fill();

    // Connect nearby particles
    particles.forEach((otherParticle, otherIndex) => {
      if (index === otherIndex) return;
      
      const dx = particle.x - otherParticle.x;
      const dy = particle.y - otherParticle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) {
        ctx.globalAlpha = (1 - distance / 150) * 0.1;
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(otherParticle.x, otherParticle.y);
        ctx.stroke();
      }
    });
  });
}

function drawWaves(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  const time = Date.now() * 0.002;
  
  for (let i = 0; i < 3; i++) {
    ctx.globalAlpha = 0.1 - i * 0.03;
    ctx.strokeStyle = `hsl(${224 + i * 20}, 70%, 60%)`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for (let x = 0; x <= canvas.width; x += 10) {
      const y = canvas.height / 2 + 
                Math.sin((x + time * 100) * 0.01 + i) * 50 +
                Math.sin((x + time * 50) * 0.02 + i) * 25;
      
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
  const time = Date.now() * 0.001;
  const shapes = particlesRef.current;

  shapes.forEach((shape, index) => {
    shape.x += shape.vx;
    shape.y += shape.vy;
    shape.angle += shape.angleSpeed;

    // Wrap around
    if (shape.x < -50) shape.x = canvas.width + 50;
    if (shape.x > canvas.width + 50) shape.x = -50;
    if (shape.y < -50) shape.y = canvas.height + 50;
    if (shape.y > canvas.height + 50) shape.y = -50;

    ctx.save();
    ctx.translate(shape.x, shape.y);
    ctx.rotate(shape.angle);
    ctx.globalAlpha = shape.opacity;
    ctx.strokeStyle = shape.color;
    ctx.lineWidth = 1;

    // Draw different shapes
    if (index % 3 === 0) {
      // Triangle
      ctx.beginPath();
      ctx.moveTo(0, -shape.size);
      ctx.lineTo(-shape.size, shape.size);
      ctx.lineTo(shape.size, shape.size);
      ctx.closePath();
      ctx.stroke();
    } else if (index % 3 === 1) {
      // Square
      ctx.strokeRect(-shape.size/2, -shape.size/2, shape.size, shape.size);
    } else {
      // Circle
      ctx.beginPath();
      ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.restore();
  });
}

function drawDots(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  const time = Date.now() * 0.003;
  const spacing = 50;
  
  for (let x = 0; x < canvas.width; x += spacing) {
    for (let y = 0; y < canvas.height; y += spacing) {
      const wave = Math.sin(time + x * 0.01 + y * 0.01) * 0.5 + 0.5;
      const size = wave * 3 + 1;
      const opacity = wave * 0.3 + 0.1;
      
      ctx.globalAlpha = opacity;
      ctx.fillStyle = `hsl(${224 + wave * 56}, 70%, 60%)`;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}
