import { CSSProperties } from "react";
import styles from "./container.module.css";

interface Props {
    id: string;
    children: any;
    style?: CSSProperties;
};

const Container = ({ id, children, style }: Props) => {
    return <div id={ id } style={{ ...style }} className={ styles.outerBox }>
        <div className={ styles.innerBox }>                
            { children }
        </div>
    </div>
};

export default Container;