import { usePathname } from "next/navigation";
import styles from "./menu.module.css";

interface Props {
    label: string;
    route: string;
};

const MenuItem = ({ label, route }: Props) => {
    const pathname = usePathname();

    return <li key={ label } className={ `${ styles.outerItem } ${ pathname === route ? styles.active : '' }` }>
        <a href={ route } className={ `${ styles.innerItem } ${ pathname === route ? styles.activeChild : '' }` }> { label } </a>
    </li>
};

export default MenuItem;