import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import Logo from "./Logo";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon className="w-7 h-7" role="button" onClick={() => setTheme('light')} />
      );
    } else {
      return (
        <MoonIcon className="w-7 h-7" role="button" onClick={() => setTheme('dark')} />
      );
    }
  }

  return (
    <header className="border-b border-gray-100 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-10 py-6 flex justify-between">
        <Logo />
        {renderThemeChanger()}
      </div>
    </header>
  );
};

export default Header;
