import styles from "./circles.module.css";

const AnimCircles = () => {
    return <div className={ styles.animation }>
        <div className={ styles.circle }>
            <div className={ styles.circleElement01 }></div>
        </div>

        <div className={ styles.circle }>
            <div className={ styles.circleElement02 }></div>
        </div>
        
        <div className={ styles.circle }>
            <div className={ styles.circleElement03 }></div>
        </div>
    </div>
};

export default AnimCircles;