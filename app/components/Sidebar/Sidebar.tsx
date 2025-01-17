import Scrolly from "../Decoration/Scrolly/Scrolly";
import VersionUpdate from "../VersionUpdate/VersionUpdate";
import styles from "./sidebar.module.css";

const Sidebar = () => <div className={ styles.sidebar }>
    <VersionUpdate />
    <Scrolly />
</div>

export default Sidebar;