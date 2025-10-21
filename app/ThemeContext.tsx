"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { colorVariants, ColorVariant, LayoutTheme, layoutThemes } from './Themes/themes';

interface ThemeContextType {
  // Layout theme
  layoutTheme: LayoutTheme;
  setLayoutTheme: (layout: LayoutTheme) => void;

  // Color variant (for terminal theme)
  colorVariant: string;
  setColorVariant: (variant: string) => void;
  currentColorVariant: ColorVariant;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [layoutTheme, setLayoutThemeState] = useState<LayoutTheme>('blurple');
  const [colorVariant, setColorVariantState] = useState<string>('matrix');

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedLayout = localStorage.getItem('portfolio-layout-theme') as LayoutTheme;
    const savedColor = localStorage.getItem('portfolio-color-variant');

    if (savedLayout && layoutThemes[savedLayout]) {
      setLayoutThemeState(savedLayout);
    }
    if (savedColor && colorVariants[savedColor]) {
      setColorVariantState(savedColor);
    }
  }, []);

  useEffect(() => {
    // Apply color variant to CSS variables (only matters for terminal theme)
    const variant = colorVariants[colorVariant];
    if (variant) {
      const root = document.documentElement;
      root.style.setProperty('--terminal-bg', variant.colors.terminalBg);
      root.style.setProperty('--terminal-bg-light', variant.colors.terminalBgLight);
      root.style.setProperty('--terminal-border', variant.colors.terminalBorder);
      root.style.setProperty('--terminal-text', variant.colors.terminalText);
      root.style.setProperty('--terminal-text-dim', variant.colors.terminalTextDim);
      root.style.setProperty('--terminal-text-secondary', variant.colors.terminalTextSecondary);
      root.style.setProperty('--terminal-cursor', variant.colors.terminalCursor);
      root.style.setProperty('--terminal-shadow', variant.colors.terminalShadow);
      root.style.setProperty('--terminal-glow', variant.colors.terminalGlow);
      root.style.setProperty('--cyan-glow', variant.colors.cyanGlow);
      root.style.setProperty('--blue-glow', variant.colors.blueGlow);
    }
  }, [colorVariant]);

  const setLayoutTheme = (layout: LayoutTheme) => {
    setLayoutThemeState(layout);
    localStorage.setItem('portfolio-layout-theme', layout);
  };

  const setColorVariant = (variant: string) => {
    if (colorVariants[variant]) {
      setColorVariantState(variant);
      localStorage.setItem('portfolio-color-variant', variant);
    }
  };

  return (
    <ThemeContext.Provider value={{
      layoutTheme,
      setLayoutTheme,
      colorVariant,
      setColorVariant,
      currentColorVariant: colorVariants[colorVariant],
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
