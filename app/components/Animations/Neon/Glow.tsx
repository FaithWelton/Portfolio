import { CSSProperties } from "react";
import styles from "./glow.module.css";

interface Props {
    text: string;
    color?: "blue" | "yellow" | "pink";
    style?: CSSProperties;
};

const Glow = ({ text, color, style }: Props) => {
    let colorClass = styles.blue;
    if (color === "yellow") colorClass = styles.yellow;
    if (color === "pink") colorClass = styles.pink; 

    return <span style={{ ...style }} className={`${ styles.glow } ${ colorClass }`}> { text } </span>
};

export default Glow;