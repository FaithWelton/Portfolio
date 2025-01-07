import Typing from "../Animations/Typing/Typing";
import styles from "./container.module.css";

const Container = ({ title, extra, children }: { title?: string; extra?: any; children?: any; }) => {
    return <div style={{ width: "400px", height: "200px" }}>
        <div className={ `${ styles.container }` }>
            <div className={ `${ styles.containerInside }` }>
                { title && <div className={ styles.title }>
                    <Typing text={ title } elementId="container_title" style={{ letterSpacing: 5 }}/>
                </div> }

                <div style={{ height: "55%", width: "35%", position: "absolute", bottom: 10, left: 10 }}>
                    { extra }
                </div>

                <div style={{ height: "80%", width: "60%", position: "absolute", right: 10, top: 10 }}>
                    { children }
                </div>
            </div>
        </div>
    </div>
};

export default Container;