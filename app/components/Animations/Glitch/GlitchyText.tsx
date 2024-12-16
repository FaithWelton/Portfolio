import styles from "./glitchy.module.css";
import pageStyles from "@/app/page.module.css";
import { CSSProperties } from "react";

interface Props {
    children: any;
    style?: CSSProperties;
    className?: string;
}

const GlitchyText = ({ children, style }: Props) => {
    return <div className={ `${ pageStyles.spacedText } ${ styles.content } ${ styles.layers } ${ styles.glitchy }` } style={{ ...style }} data-text={ children }>
        { children }
    </div>
};

export default GlitchyText;