import { CSSProperties } from "react";
import styles from "./glitchy.module.css";

type Props = {
    children: JSX.Element | JSX.Element[];
    style?: CSSProperties;
    toggleOff?: boolean;
};

const Glitchy = ({ children, style, toggleOff }: Props) => <div
    style={{ ...style }}
    className={ `${ styles.content } ${ !toggleOff && styles.glitchy }` }
    data-text={ typeof(children) === "string" ? children : "" }
>
    { children }
</div>

export default Glitchy;