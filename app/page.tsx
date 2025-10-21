"use client";

import { useEffect } from 'react';
import { useTheme } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import TerminalTheme from './Themes/Terminal/TerminalTheme';
import BlurpleTheme from './Themes/Blurple/BlurpleTheme';
import BrutalistTheme from './Themes/Brutalist/BrutalistTheme';
import MinimalTheme from './Themes/Minimal/MinimalTheme';

export default function Home() {
  const { layoutTheme } = useTheme();

  useEffect(() => {
    // Apply overflow hidden only for terminal theme
    if (layoutTheme === 'terminal') {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }

    // Apply theme-specific body class for scrollbar styling
    document.body.className = `theme-${layoutTheme}`;
  }, [layoutTheme]);

  const renderTheme = () => {
    switch (layoutTheme) {
      case 'terminal':
        return <TerminalTheme />;
      case 'blurple':
        return <BlurpleTheme />;
      case 'brutalist':
        return <BrutalistTheme />;
      case 'minimal':
        return <MinimalTheme />;
      default:
        return <TerminalTheme />;
    }
  };

  return (
    <>
      <ThemeSwitcher />
      {renderTheme()}
    </>
  );
}
