import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import { motion } from "framer-motion";
import { memo } from "react";

export const ThemeToggle = memo(() => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden animate-float hover:animate-pulse-glow"
    >
      <motion.div
        initial={{ rotate: 0, scale: 1 }}
        animate={{ 
          rotate: theme === "dark" ? 180 : 0,
          scale: [1, 0.8, 1]
        }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        {theme === "dark" ? (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
});
