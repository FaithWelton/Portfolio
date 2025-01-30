"use client";

import { Theme, useTheme } from "./ThemeProvider";
import styles from "./switcher.module.css";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const themes: Theme[] = ["light", "dark", "cyberpunk"];

    return <div>
        <label htmlFor="themeswitcher"> { "Theme: " } </label>
        
        <select  id="themeswitcher"
            className={ styles.selector }
            value={ theme }
            onChange={(e) => setTheme(e.target.value as Theme)}
        >
            { themes.map(switcherTheme => (
                <option key={ switcherTheme } value={ switcherTheme }>
                    { switcherTheme }
                </option>
            ))}
        </select>
    </div>
};

export default ThemeSwitcher;