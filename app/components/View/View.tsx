import GridBackground from "../Animations/GridBackground/gridbg";
import styles from "./view.module.css";

const View = ({ children }: { children?: any }) => {
    return <div className={ `${ styles.containerBorder }` }>
        <div className={ `${ styles.container }` }>
            <GridBackground />
            
            { children }
        </div>
    </div>
};

export default View;