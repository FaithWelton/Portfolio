import GridBackground from "../Animations/GridBackground/gridbg";
import styles from "./view.module.css";

const View = ({ children }: { children?: any; }) => {
    return <div className={ styles.container }>
        { children }
    </div>
};

export default View;