import { CSSProperties } from "react";
import styles from "./warn.module.css";
import Typing from "../Typing/Typing";
import { config } from "@/app/util/config";

const Warn = ({ style }: { style?: CSSProperties }) => {
    const exclaim = <svg className={ styles.exclaim } viewBox="0 0 32 32" version="1.1">
        <path d="M10.656 8.864q0-2.208 1.568-3.776t3.776-1.568 3.776 1.568 1.6 3.776q0 0.256-0.064 0.448l-1.76 6.944q-0.096 1.408-1.12 2.368t-2.432 0.96q-1.376 0-2.4-0.928t-1.152-2.304q-0.32-0.96-0.672-2.112t-0.736-2.784-0.384-2.592zM12.416 24.928q0-1.472 1.056-2.496t2.528-1.056 2.528 1.056 1.056 2.496q0 1.504-1.056 2.528t-2.528 1.056-2.528-1.056-1.056-2.528z" />
    </svg>

    return <div className={ styles.container } style={{ ...style }}>
        <div className={ `${ styles.tringleContainer }` }>
            { exclaim }
        </div>

        <div className={ styles.decorTringle } />

        <div className={ styles.decor1 } />
        <div className={ styles.decor2 } />
        <div className={ styles.decor3 } />

        { config.warning && <div className={ styles.warningMessage }>
            { config.warning.map((part, index) => <Typing key={ index } text={ part } elementId={ `warning_part_${ index }` } style={{ letterSpacing: 1 }} /> )}
        </div> }
    </div>
}

export default Warn;