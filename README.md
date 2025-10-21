# Faith Welton - Portfolio

A multi-theme personal portfolio website built with Next.js, featuring retro terminal aesthetics, glass morphism, brutalist design, and a minimal spy-inspired theme.

## Features

- 🎨 **4 Unique Themes**: Terminal, Blurple (Glass), Brutalist, and Minimal
- 🖥️ **Terminal Theme**: Retro CRT effects, matrix rain, custom cursor
- 🌈 **Blurple Theme**: Modern glass morphism with gradients and blur effects
- 🟨 **Brutalist Theme**: Bold black/white/yellow design with heavy borders
- 🕵️ **Minimal Theme**: Sleek spy-inspired dossier aesthetic
- 📱 Fully responsive (mobile & desktop)
- ⌨️ Interactive command navigation (Terminal theme)
- 🎯 Dynamic cursor that follows sections (Terminal theme)
- 🔄 GitHub API integration for live project data
- 📊 Collapsible sections on mobile

## Tech Stack

- Next.js 15.5.4
- React 19
- TypeScript
- CSS Modules
- GitHub REST API

## Project Structure

```
app/
├── Themes/
│   ├── Terminal/       # Retro terminal theme with CRT effects
│   ├── Blurple/        # Glass morphism theme
│   ├── Brutalist/      # Bold brutalist design
│   └── Minimal/        # Spy-inspired minimal theme
├── hooks/
│   └── useGitHubRepos.ts  # GitHub API integration
├── ThemeContext.tsx    # Theme switching logic
├── ThemeSwitcher/      # Theme selector component
└── portfolio-data.ts   # Centralized portfolio content
```

## Theme Switching

Click the theme switcher button in the top-right corner to toggle between themes:
- **Terminal**: Classic green CRT terminal
- **Blurple**: Purple/blue glass morphism
- **Brutalist**: High-contrast black/yellow
- **Minimal**: Dark spy dossier aesthetic
