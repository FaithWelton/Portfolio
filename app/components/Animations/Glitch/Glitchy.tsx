import styles from "./glitchy.module.css";
import pageStyles from "@/app/page.module.css";
import { CSSProperties } from "react";

interface Props {
    children: any;
    style?: CSSProperties;
    className?: string;
}

const Glitchy = ({ children, style }: Props) => {
    return <div style={{ ...style }} className={ `${ pageStyles.spacedText } ${ styles.content } ${ styles.layers } ${ styles.glitchy }` } data-text={ children }>
        { children }
    </div>
};

export default Glitchy;