"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    const order = ["light", "dark", "system"] as const;
    const nextIndex = (order.indexOf((theme as typeof order[number]) ?? "system") + 1) % order.length;
    setTheme(order[nextIndex]);
  };

  const renderIcon = () => {
    if (theme === "system") {
      return <LaptopIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200" />;
    }

    if (resolvedTheme === "dark") {
      return <MoonIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200" />;
    }

    return <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200" />;
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      aria-label="Toggle theme"
      onClick={handleToggle}
    >
      {renderIcon()}
    </Button>
  );
}
