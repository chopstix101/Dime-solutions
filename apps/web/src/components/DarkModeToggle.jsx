import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '@/contexts/DarkModeContext.jsx';
import { Button } from '@/components/ui/button';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleDarkMode}
      className="transition-all duration-300 hover:scale-110"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-400 transition-transform duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 transition-transform duration-300" />
      )}
    </Button>
  );
};

export default DarkModeToggle;