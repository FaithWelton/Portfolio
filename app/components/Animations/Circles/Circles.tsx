import styles from "./circles.module.css";

const AnimCircles = () => {
    return <div className={ styles.circleContainer }>
        <div className={ `${ styles.circle } ${ styles.circle1 }` }></div>
        <div className={ `${ styles.circle } ${ styles.circle2 }` }></div>
        <div className={ `${ styles.circle } ${ styles.circle3 }` }></div>
        <div className={ `${ styles.circle } ${ styles.circle4 }` }></div>
        <div className={ `${ styles.circle } ${ styles.circle5 }` }></div>
        <div className={ `${ styles.circle } ${ styles.circle6 }` }></div>
        <div className={ `${ styles.circle } ${ styles.circle7 }` }></div>
        <div className={ `${ styles.circle } ${ styles.circle8 }` }></div>
        <div className={ `${ styles.circle } ${ styles.circle9 }` }></div>
        <div className={ `${ styles.circle } ${ styles.circle10 }` }></div>
        <div className={ `${ styles.circle } ${ styles.circleDot }` }></div>

        <div className={ styles.radiallines }>
            <div className={ styles.radialLine1 }></div>
            <div className={ styles.radialLine2 }></div>
            <div className={ styles.radialLine3 }></div>
            <div className={ styles.radialLine4 }></div>
        </div>
     </div>
};

export default AnimCircles;