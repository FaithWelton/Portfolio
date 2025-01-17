import styles from "./bouncy.module.css";

const Bouncy1 = () => <div style={{ height: "100%", width: "2px" }}>
    <div className={ styles.bouncingLine } style={{ background: "#ff00ae" }} />
</div>

const Bouncy2 = () => <div style={{ height: "100%", width: "2px" }}>
    <div className={ styles.bouncingLine } style={{ background: "#f6ff00", animationDelay: "3s" }} />
</div>

export { Bouncy1, Bouncy2 }