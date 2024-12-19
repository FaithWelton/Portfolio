import styles from "./container.module.css";

const Container = ({ children }: { children?: any }) => {
    return <div style={{ width: "400px", height: "200px" }}>
        <div className={ `${ styles.container }` }>
            <div className={ `${ styles.containerInside }` }>
                <div style={{ height: "90%", width: "70%" }}>
                    { children }
                </div>
            </div>
        </div>
    </div>
};

export default Container;