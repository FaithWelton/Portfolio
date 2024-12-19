import pageStyles from "../../page.module.css";
import styles from "./menu.module.css";

export interface MenuItemProps {
    label: string;
    onClick: any;
};

const MenuItem = ({ label, onClick }: MenuItemProps) => <li className={ `${ pageStyles.spacedText } ${ styles.menuItem }` } onClick={ onClick }>
    <a> { label } </a>
</li>

export default MenuItem;