import { useTheme } from "@/components/ThemeProvider";
import CursorEffects from "@/components/CursorEffects";

interface ThemeAwareCursorEffectsProps {
  variant?: "liquid" | "abstract" | "torch";
}

export default function ThemeAwareCursorEffects({ variant = "liquid" }: ThemeAwareCursorEffectsProps) {
  const { theme } = useTheme();
  
  // Determine if we're in dark mode
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  
  return <CursorEffects variant={variant} isDark={isDark} />;
}
