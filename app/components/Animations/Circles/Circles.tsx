import styles from "./circles.module.css";

const AnimCircles = () => <div className={ styles.circles }>
    <div className={ `${ styles.anchor } ${ styles.circle1 }` } />
    <div className={ `${ styles.anchor } ${ styles.circle2 }` } />
    <div className={ `${ styles.anchor } ${ styles.circle3 }` } />
    <div className={ `${ styles.anchor } ${ styles.circle4 }` } />
    <div className={ `${ styles.anchor } ${ styles.circle5 }` } />
    <div className={ `${ styles.anchor } ${ styles.circle6 }` } />

    <div className={ styles.radiallines }>
        <div className={ styles.radialLine1 } />
        <div className={ styles.radialLine2 } />
        <div className={ styles.radialLine3 } />
        <div className={ styles.radialLine4 } />
    </div>
</div>

export default AnimCircles;