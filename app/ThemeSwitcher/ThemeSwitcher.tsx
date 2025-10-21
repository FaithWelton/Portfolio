"use client";

import { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { layoutThemes, colorVariants } from '../Themes/themes';

export default function ThemeSwitcher() {
  const { layoutTheme, setLayoutTheme, colorVariant, setColorVariant } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  // Theme-specific styling
  const getThemeStyles = () => {
    switch (layoutTheme) {
      case 'terminal':
        return {
          button: {
            background: 'rgba(0, 0, 0, 0.8)',
            border: '2px solid var(--terminal-border)',
            color: 'var(--terminal-text)',
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: '12px',
            textShadow: '0 0 5px var(--terminal-glow)',
            boxShadow: '0 0 10px var(--terminal-shadow)',
          },
          menu: {
            background: 'rgba(0, 0, 0, 0.95)',
            border: '2px solid var(--terminal-border)',
            boxShadow: '0 0 20px var(--terminal-shadow)',
            fontFamily: "'Courier New', Courier, monospace",
          },
          menuHeader: {
            color: 'var(--terminal-text)',
            fontSize: '10px',
            borderBottom: '1px solid var(--terminal-border)',
            textShadow: '0 0 5px var(--terminal-glow)',
          },
          option: {
            border: '1px solid var(--terminal-text-dim)',
            color: 'var(--terminal-text)',
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: '12px',
          }
        };
      case 'blurple':
        return {
          button: {
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: 'white',
            fontFamily: 'system-ui, sans-serif',
            fontSize: '13px',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
          },
          menu: {
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            fontFamily: 'system-ui, sans-serif',
          },
          menuHeader: {
            color: 'white',
            fontSize: '11px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          },
          option: {
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
            fontFamily: 'system-ui, sans-serif',
            fontSize: '13px',
          }
        };
      case 'brutalist':
        return {
          button: {
            background: '#ff0',
            border: '4px solid #000',
            color: '#000',
            fontFamily: 'Arial Black, sans-serif',
            fontSize: '14px',
            textShadow: 'none',
            boxShadow: '4px 4px 0 #000',
          },
          menu: {
            background: '#fff',
            border: '4px solid #000',
            boxShadow: '8px 8px 0 #000',
            fontFamily: 'Arial Black, sans-serif',
          },
          menuHeader: {
            color: '#000',
            fontSize: '12px',
            borderBottom: '3px solid #000',
            textShadow: 'none',
          },
          option: {
            border: '3px solid #000',
            color: '#000',
            fontFamily: 'Arial Black, sans-serif',
            fontSize: '13px',
          }
        };
      case 'minimal':
        return {
          button: {
            background: 'rgba(30, 30, 40, 0.9)',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(107, 122, 153, 0.4)',
            color: '#b0b0c0',
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: '12px',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
          },
          menu: {
            background: 'rgba(20, 25, 35, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(107, 122, 153, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
            fontFamily: "'Courier New', Courier, monospace",
          },
          menuHeader: {
            color: '#6b7a99',
            fontSize: '11px',
            borderBottom: '1px solid rgba(107, 122, 153, 0.2)',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
          },
          option: {
            border: '1px solid rgba(107, 122, 153, 0.2)',
            color: '#b0b0c0',
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: '12px',
          }
        };
      default:
        return {
          button: {
            background: 'rgba(0, 0, 0, 0.8)',
            border: '2px solid var(--terminal-border)',
            color: 'var(--terminal-text)',
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: '12px',
            textShadow: '0 0 5px var(--terminal-glow)',
            boxShadow: '0 0 10px var(--terminal-shadow)',
          },
          menu: {
            background: 'rgba(0, 0, 0, 0.95)',
            border: '2px solid var(--terminal-border)',
            boxShadow: '0 0 20px var(--terminal-shadow)',
            fontFamily: "'Courier New', Courier, monospace",
          },
          menuHeader: {
            color: 'var(--terminal-text)',
            fontSize: '10px',
            borderBottom: '1px solid var(--terminal-border)',
            textShadow: '0 0 5px var(--terminal-glow)',
          },
          option: {
            border: '1px solid var(--terminal-text-dim)',
            color: 'var(--terminal-text)',
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: '12px',
          }
        };
    }
  };

  const themeStyles = getThemeStyles();

  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 10000 }}>
      <button
        style={{ ...themeStyles.button, padding: '10px 15px', cursor: 'pointer', borderRadius: '4px', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', gap: '8px' }}
        onClick={() => setShowMenu(!showMenu)}
        onMouseEnter={(e) => {
          if (layoutTheme === 'brutalist') {
            e.currentTarget.style.transform = 'translate(2px, 2px)';
            e.currentTarget.style.boxShadow = '2px 2px 0 #000';
          } else {
            e.currentTarget.style.transform = 'scale(1.05)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'none';
          if (layoutTheme === 'brutalist') {
            e.currentTarget.style.boxShadow = '4px 4px 0 #000';
          }
        }}
      >
        <span style={{ fontSize: '16px' }}>🎨</span>
        <span>{'THEME'}</span>
      </button>

      {showMenu && (
        <div style={{ ...themeStyles.menu, position: 'absolute', top: '100%', right: 0, marginTop: '10px', borderRadius: layoutTheme === 'brutalist' ? '0' : '4px', padding: '10px', minWidth: '200px' }}>
          <div style={{ ...themeStyles.menuHeader, fontWeight: 'bold', letterSpacing: '2px', marginBottom: '10px', paddingBottom: '8px' }}>
            {'SELECT THEME'}
          </div>

          {Object.entries(layoutThemes).map(([key, theme]) => (
            <button
              key={key}
              style={{
                ...themeStyles.option,
                background: layoutTheme === key
                  ? (layoutTheme === 'brutalist' ? '#0ff' : 'rgba(255, 255, 255, 0.1)')
                  : 'transparent',
                padding: '10px 15px',
                cursor: 'pointer',
                width: '100%',
                textAlign: 'left',
                marginBottom: '5px',
                borderRadius: layoutTheme === 'brutalist' ? '0' : '4px',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
              onClick={() => {
                setLayoutTheme(key as any);
                setShowMenu(false);
              }}
              onMouseEnter={(e) => {
                if (layoutTheme === 'brutalist') {
                  e.currentTarget.style.background = '#f0f';
                } else {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = layoutTheme === key
                  ? (layoutTheme === 'brutalist' ? '#0ff' : 'rgba(255, 255, 255, 0.1)')
                  : 'transparent';
              }}
            >
              <span>{theme.name}</span>
              {layoutTheme === key && (
                <span style={{ marginLeft: 'auto', fontSize: '10px' }}>{'✓'}</span>
              )}
            </button>
          ))}

          {layoutTheme === 'terminal' &&
            <>
              <div style={{ ...themeStyles.menuHeader, marginTop: '15px', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '10px', paddingBottom: '8px' }}>
                {'COLOR VARIANT'}
              </div>

              {Object.entries(colorVariants).map(([key, variant]) =>
                <button
                  key={key}
                  style={{
                    ...themeStyles.option,
                    background: colorVariant === key ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    padding: '10px 15px',
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left',
                    marginBottom: '5px',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                  onClick={() => {
                    setColorVariant(key);
                    setShowMenu(false);
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = colorVariant === key ? 'rgba(255, 255, 255, 0.1)' : 'transparent'; }}
                >
                  <div style={{ width: '12px', height: '12px', borderRadius: '2px', border: '1px solid rgba(255, 255, 255, 0.3)', backgroundColor: variant.colors.terminalText }} />
                  <span>{variant.name}</span>
                  {colorVariant === key && ( <span style={{ marginLeft: 'auto', fontSize: '10px' }}>{'✓'}</span> )}
                </button>
              )}
            </>
          }
        </div>
      )}
    </div>
  );
}
