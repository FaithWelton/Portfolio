import styles from "./lines.module.css";

const AnimLines = () => {
    return <div className={ styles.animation }>
        <div className={ styles.circle }>
            <div className={ styles.circleElement01 } />
        </div>

        <div className={ `${ styles.lineWrapper } ${ styles.lineWrapper01 }` }>
            <span className={ `${ styles.line } ${ styles.line01 }` }></span>
        </div>

        <div className={ styles.rotate60 }>
            <div className={ `${ styles.lineWrapper } ${ styles.lineWrapper02 }` }>
                <span className={ `${ styles.line } ${ styles.line02 }` }></span>
            </div>
        </div>

        <div className={ styles.rotate120 }>
            <div className={ `${ styles.lineWrapper } ${ styles.lineWrapper03 }` }>
                <span className={ `${ styles.line } ${ styles.line03 }` }></span>
            </div>
        </div>

        <div className={ `${ styles.lineWrapper } ${ styles.lineWrapper04 }` }>
            <span className={ `${ styles.line } ${ styles.line04 }` }></span>
        </div>

        <div className={ styles.rotate120 }>
            <div className={ `${ styles.lineWrapper } ${ styles.lineWrapper05 }` }>
                <span className={ `${ styles.line } ${ styles.line05 }` }></span>
            </div>
        </div>

        <div className={ styles.rotate60 }>
            <div className={ `${ styles.lineWrapper } ${ styles.lineWrapper06 }` }>
                <span className={ `${ styles.line } ${ styles.line06 }` }></span>
            </div>
        </div>
    </div>
};

export default AnimLines;