import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import CursorEffects from "@/components/CursorEffects";

interface ThemeAwareCursorEffectsProps {
  variant?: "liquid" | "abstract" | "torch";
}

export default function ThemeAwareCursorEffects({ variant = "liquid" }: ThemeAwareCursorEffectsProps) {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    // Determine if we're in dark mode
    const checkDarkMode = () => {
      if (theme === "dark") {
        setIsDark(true);
      } else if (theme === "light") {
        setIsDark(false);
      } else if (theme === "system") {
        setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    };

    checkDarkMode();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        setIsDark(mediaQuery.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme]);
  
  return <CursorEffects variant={variant} isDark={isDark} />;
}
