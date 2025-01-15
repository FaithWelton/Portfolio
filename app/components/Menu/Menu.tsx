"use client";

import AnimCircles from "../Animations/Circles/Circles";
import styles from "./menu.module.css";

const Menu = () => {
    const items = [
        { label: "home", route: "/" },
        { label: "about", route: "/about" },
        { label: "projects", route: "/projects" },
    ];

    return <div className={ styles.menu }>
        <AnimCircles />

        <ul className={ styles.list }>
            { items.map(item =>
                <li className={ styles.outerItem } key={ item.label }>
                    <a href={ item.route } className={ styles.innerItem }>
                        { item.label }
                    </a>
                </li>
            )}
        </ul>
    </div>
};

export default Menu;