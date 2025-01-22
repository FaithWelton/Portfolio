import styles from "./sidelines.module.css";

const percents: string[] = ["05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80", "85", "90", "95"];

const Sidelines = () => <div className={ styles.container }>
    <div className={ styles.sideline }>
        { percents.map(percent =>
            <div key={ percent }
                className={ percent[1] === "5" ? styles.halftick : styles.fulltick }
                style={{ top: `${ percent }%` }}
            />
        )}
    </div>
</div>

export default Sidelines;