import { useEffect, useRef } from "react";

interface CursorEffectsProps {
  variant?: "liquid" | "abstract" | "torch";
  isDark?: boolean;
}

export default function CursorEffects({ variant = "liquid", isDark = false }: CursorEffectsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePositionRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mousePositionRef.current;

      if (variant === "liquid") {
        drawLiquidEffect(ctx, mouse, canvas.width, canvas.height, isDark);
      } else if (variant === "abstract") {
        drawAbstractEffect(ctx, mouse, canvas.width, canvas.height, isDark);
      } else if (variant === "torch") {
        drawTorchEffect(ctx, mouse, canvas.width, canvas.height, isDark);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    
    // Start animation
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full"
      style={{ zIndex: 1 }}
    />
  );
}

function drawLiquidEffect(
  ctx: CanvasRenderingContext2D,
  mouse: { x: number; y: number },
  width: number,
  height: number,
  isDark: boolean
) {
  const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 200);
  
  if (isDark) {
    gradient.addColorStop(0, "rgba(59, 130, 246, 0.3)");
    gradient.addColorStop(0.5, "rgba(147, 51, 234, 0.2)");
    gradient.addColorStop(1, "rgba(147, 51, 234, 0)");
  } else {
    gradient.addColorStop(0, "rgba(59, 130, 246, 0.1)");
    gradient.addColorStop(0.5, "rgba(147, 51, 234, 0.05)");
    gradient.addColorStop(1, "rgba(147, 51, 234, 0)");
  }

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 200, 0, Math.PI * 2);
  ctx.fill();

  // Liquid ripples
  for (let i = 0; i < 3; i++) {
    const rippleGradient = ctx.createRadialGradient(
      mouse.x, mouse.y, 50 + i * 30,
      mouse.x, mouse.y, 80 + i * 40
    );
    
    if (isDark) {
      rippleGradient.addColorStop(0, "rgba(59, 130, 246, 0)");
      rippleGradient.addColorStop(0.5, `rgba(147, 51, 234, ${0.1 - i * 0.03})`);
      rippleGradient.addColorStop(1, "rgba(147, 51, 234, 0)");
    } else {
      rippleGradient.addColorStop(0, "rgba(59, 130, 246, 0)");
      rippleGradient.addColorStop(0.5, `rgba(147, 51, 234, ${0.05 - i * 0.015})`);
      rippleGradient.addColorStop(1, "rgba(147, 51, 234, 0)");
    }

    ctx.fillStyle = rippleGradient;
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 80 + i * 40 + Math.sin(Date.now() * 0.003 + i) * 10, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawAbstractEffect(
  ctx: CanvasRenderingContext2D,
  mouse: { x: number; y: number },
  width: number,
  height: number,
  isDark: boolean
) {
  const time = Date.now() * 0.001;
  
  // Abstract flowing shapes
  for (let i = 0; i < 5; i++) {
    const angle = (time + i) * 0.5;
    const distance = 30 + i * 20;
    const x = mouse.x + Math.cos(angle) * distance;
    const y = mouse.y + Math.sin(angle) * distance;
    
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, 40);
    
    if (isDark) {
      gradient.addColorStop(0, `rgba(${59 + i * 20}, ${130 + i * 10}, 246, ${0.4 - i * 0.05})`);
      gradient.addColorStop(1, "rgba(147, 51, 234, 0)");
    } else {
      gradient.addColorStop(0, `rgba(${59 + i * 20}, ${130 + i * 10}, 246, ${0.2 - i * 0.03})`);
      gradient.addColorStop(1, "rgba(147, 51, 234, 0)");
    }
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, 40 - i * 5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Flowing lines
  ctx.strokeStyle = isDark ? "rgba(59, 130, 246, 0.3)" : "rgba(59, 130, 246, 0.15)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  
  for (let i = 0; i < 3; i++) {
    const startX = mouse.x + Math.cos(time + i * 2) * 50;
    const startY = mouse.y + Math.sin(time + i * 2) * 50;
    const endX = mouse.x + Math.cos(time + i * 2 + 1) * 100;
    const endY = mouse.y + Math.sin(time + i * 2 + 1) * 100;
    
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
  }
  ctx.stroke();
}

function drawTorchEffect(
  ctx: CanvasRenderingContext2D,
  mouse: { x: number; y: number },
  width: number,
  height: number,
  isDark: boolean
) {
  if (!isDark) return; // Torch effect only works in dark mode

  // Create torch light effect
  const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 300);
  gradient.addColorStop(0, "rgba(255, 255, 255, 0.1)");
  gradient.addColorStop(0.3, "rgba(59, 130, 246, 0.08)");
  gradient.addColorStop(0.6, "rgba(147, 51, 234, 0.05)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 300, 0, Math.PI * 2);
  ctx.fill();

  // Flickering center light
  const time = Date.now() * 0.01;
  const flicker = 0.8 + Math.sin(time) * 0.2 + Math.sin(time * 2.5) * 0.1;
  
  const centerGradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 80);
  centerGradient.addColorStop(0, `rgba(255, 255, 255, ${0.15 * flicker})`);
  centerGradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.1 * flicker})`);
  centerGradient.addColorStop(1, "rgba(59, 130, 246, 0)");

  ctx.fillStyle = centerGradient;
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 80, 0, Math.PI * 2);
  ctx.fill();

  // Torch rays
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2 + time * 0.1;
    const rayLength = 100 + Math.sin(time + i) * 20;
    const startX = mouse.x + Math.cos(angle) * 20;
    const startY = mouse.y + Math.sin(angle) * 20;
    const endX = mouse.x + Math.cos(angle) * rayLength;
    const endY = mouse.y + Math.sin(angle) * rayLength;

    const rayGradient = ctx.createLinearGradient(startX, startY, endX, endY);
    rayGradient.addColorStop(0, `rgba(255, 255, 255, ${0.1 * flicker})`);
    rayGradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.05 * flicker})`);
    rayGradient.addColorStop(1, "rgba(59, 130, 246, 0)");

    ctx.strokeStyle = rayGradient;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }
}
