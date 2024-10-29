import { config } from "@/config";
import Link from "next/link";
import styles from "./nav.module.css";

const NavBar = () => {
    const navItems = {
        "/about": { name: "About" },
        "/projects": { name: "Projects" },
    };

    return <div className={ styles.nav }>
        <Link href="/" className={ styles.title }> { config.title } </Link>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
            { Object.entries(navItems).map(([path, { name }]) =>
                <Link key={ path } href={ path } className={ styles.link }> { name } </Link>
            )}
        </div>
    </div>
};

export default NavBar;