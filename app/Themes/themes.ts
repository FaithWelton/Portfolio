// Color variants for Terminal theme (secret easter egg)
export interface ColorVariant {
  name: string;
  colors: {
    terminalBg: string;
    terminalBgLight: string;
    terminalBorder: string;
    terminalText: string;
    terminalTextDim: string;
    terminalTextSecondary: string;
    terminalCursor: string;
    terminalShadow: string;
    terminalGlow: string;
    cyanGlow: string;
    blueGlow: string;
  };
}

export const colorVariants: Record<string, ColorVariant> = {
  matrix: {
    name: 'Matrix',
    colors: {
      terminalBg: '#000000',
      terminalBgLight: '#0a0f14',
      terminalBorder: '#00ff41',
      terminalText: '#00ff41',
      terminalTextDim: '#00cc33',
      terminalTextSecondary: '#33ff77',
      terminalCursor: '#00ff41',
      terminalShadow: 'rgba(0, 255, 65, 0.3)',
      terminalGlow: 'rgba(0, 255, 65, 0.4)',
      cyanGlow: 'rgba(0, 255, 255, 0.3)',
      blueGlow: 'rgba(0, 150, 255, 0.2)',
    },
  },
  cyberpunk: {
    name: 'Cyberpunk',
    colors: {
      terminalBg: '#0a0a0a',
      terminalBgLight: '#1a0a1f',
      terminalBorder: '#ff00ff',
      terminalText: '#ff00ff',
      terminalTextDim: '#cc00cc',
      terminalTextSecondary: '#ff77ff',
      terminalCursor: '#ff00ff',
      terminalShadow: 'rgba(255, 0, 255, 0.3)',
      terminalGlow: 'rgba(255, 0, 255, 0.4)',
      cyanGlow: 'rgba(0, 255, 255, 0.3)',
      blueGlow: 'rgba(255, 0, 255, 0.2)',
    },
  },
  ocean: {
    name: 'Ocean',
    colors: {
      terminalBg: '#001a2e',
      terminalBgLight: '#002b4d',
      terminalBorder: '#00d9ff',
      terminalText: '#00d9ff',
      terminalTextDim: '#00a8cc',
      terminalTextSecondary: '#66e5ff',
      terminalCursor: '#00d9ff',
      terminalShadow: 'rgba(0, 217, 255, 0.3)',
      terminalGlow: 'rgba(0, 217, 255, 0.4)',
      cyanGlow: 'rgba(0, 217, 255, 0.3)',
      blueGlow: 'rgba(0, 150, 255, 0.2)',
    },
  },
  amber: {
    name: 'Amber',
    colors: {
      terminalBg: '#1a0f00',
      terminalBgLight: '#2a1a00',
      terminalBorder: '#ffaa00',
      terminalText: '#ffaa00',
      terminalTextDim: '#cc8800',
      terminalTextSecondary: '#ffcc66',
      terminalCursor: '#ffaa00',
      terminalShadow: 'rgba(255, 170, 0, 0.3)',
      terminalGlow: 'rgba(255, 170, 0, 0.4)',
      cyanGlow: 'rgba(255, 170, 0, 0.3)',
      blueGlow: 'rgba(255, 140, 0, 0.2)',
    },
  },
  blood: {
    name: 'Blood',
    colors: {
      terminalBg: '#0f0000',
      terminalBgLight: '#1a0505',
      terminalBorder: '#ff0000',
      terminalText: '#ff0000',
      terminalTextDim: '#cc0000',
      terminalTextSecondary: '#ff6666',
      terminalCursor: '#ff0000',
      terminalShadow: 'rgba(255, 0, 0, 0.3)',
      terminalGlow: 'rgba(255, 0, 0, 0.4)',
      cyanGlow: 'rgba(255, 0, 0, 0.3)',
      blueGlow: 'rgba(200, 0, 0, 0.2)',
    },
  },
};

// Layout themes
export type LayoutTheme = 'terminal' | 'blurple' | 'brutalist' | 'minimal';

export interface ThemeConfig {
  layout: LayoutTheme;
  name: string;
  description: string;
}

export const layoutThemes: Record<LayoutTheme, ThemeConfig> = {
  terminal: {
    layout: 'terminal',
    name: 'Terminal Glow',
    description: 'Sci-fi terminal with CRT effects',
  },
  blurple: {
    layout: 'blurple',
    name: 'Blurple',
    description: 'Frosted blue-purple thing',
  },
  brutalist: {
    layout: 'brutalist',
    name: 'Brutalist',
    description: 'Bold, raw, and unapologetic',
  },
  minimal: {
    layout: 'minimal',
    name: 'Minimal',
    description: 'Clean and understated',
  },
};
