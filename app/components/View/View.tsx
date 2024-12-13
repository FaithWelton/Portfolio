import styles from "./view.module.css";

const View = ({ children }: { children: any }) => {
    return <div className={ `${ styles.container }` }>
        <div style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", paddingLeft: 10, paddingRight: 10 }}>
            { children }
        </div>
    </div>
};

export default View;