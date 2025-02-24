import { CSSProperties } from "react";
import styles from "./glitchy.module.css";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

type Props = {
    children: any;
    style?: CSSProperties;
    toggleOff?: boolean;
    enabledThemes?: Array<"dark" | "light" | "system" | "cyberpunk">;
};

const Glitchy = ({ children, style, toggleOff, enabledThemes = ["cyberpunk"] }: Props) => {
    const { theme } = useTheme();
    toggleOff = enabledThemes.includes(theme as any) === false;
     
    return <div
        style={{ ...style }}
        className={ `${ styles.content } ${ !toggleOff && styles.glitchy }` }
        data-text={ typeof(children) === "string" ? children : "" }
    >
        { children }
    </div>
};

export default Glitchy;