import styles from "./view.module.css";

const View = ({ children }: { children?: any; }) => <div className={ styles.view }>
    <div style={{ height: "100%", width: "92%", padding: "10px" }}>
        { children }
    </div>
</div>

export default View;