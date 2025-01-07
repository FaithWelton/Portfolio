import GridBackground from "../Animations/GridBackground/gridbg";
import styles from "./view.module.css";
import Warn from "../Animations/Warn/Warn";

const View = ({ children }: { children?: any }) => {
    return <div className={ `${ styles.containerBorder }` }>
        <div className={ `${ styles.container }` }>
            <GridBackground />
            
            { children }

            {/* DECOR / EXTRAS: */}
            
            
 
            {/* <div className={ styles.decor2 }> </div> */}

            {/* <div id="TOP_RIGHT" className={ styles.decor1 }>
                <BlinkyText>
                    <div className={ styles.decor1Arrow1 } />
                </BlinkyText>

                <BlinkyText>
                    <div className={ styles.decor1Arrow2 } />
                </BlinkyText>

                <BlinkyText>
                    <div className={ styles.decor1Arrow3 } />
                </BlinkyText>
            </div> */}

            {/* <div id="BOTTOM_RIGHT" className={ styles.decor3 }></div> */}
        </div>
    </div>
};

export default View;