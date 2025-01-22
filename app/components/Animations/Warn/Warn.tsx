import { CSSProperties } from "react";
import { config } from "@/app/util/config";
import styles from "./warn.module.css";
import Typing from "../Typing/Typing";
import TriContainer from "./Triangle";

const Warn = ({ style }: { style?: CSSProperties }) =>  <div className={ styles.container } style={{ ...style }}>
    <TriContainer />

    <div className={ styles.decorTringle } />
    <div className={ styles.decor1 } />
    <div className={ styles.decor2 } />
    <div className={ styles.decor3 } />

    { config.warning.length > 0 && <div className={ styles.warningContainer }>
        <div className={ styles.warningInner }>
            { config.warning.map((part, index) =>
                <Typing key={ index } text={ part } elementId={ `warning_part_${ index }` } style={{ letterSpacing: 1 }} />
            )}
        </div>
    </div> }
</div>

export default Warn;