"use client";
import { usePathname } from "next/navigation";
import AnimCircles from "../Animations/Circles/Circles";
import styles from "./menu.module.css";

const Menu = () => {
    const pathname = usePathname();

    const items = [
        { label: "home", route: "/" },
        { label: "about", route: "/about" },
        { label: "projects", route: "/projects" },
    ];

    return (
        <div className={ styles.menu }>
            <AnimCircles />
            <ul className={ styles.list }>
                { items.map(item =>
                    <li key={ item.label } className={ `${ styles.outerItem } ${ pathname === item.route ? styles.active : '' }` }>
                        <a href={ item.route } className={ `${ styles.innerItem } ${ pathname === item.route ? styles.activeChild : '' }` }> { item.label } </a>
                    </li>
                )}
            </ul>
        </div>
    );
};

// const Menu = () => {
//     const pathname = usePathname();
//     const items = [
//         { label: "home", route: "/" },
//         { label: "about", route: "/about" },
//         { label: "projects", route: "/projects" },
//     ];

//     return <div className={ styles.menu }>
//         <AnimCircles />

//         <ul className={ styles.list }>
//             { items.map(item =>
//                 <li key={ item.label }
//                     className={`${ styles.outerItem } ${ pathname === item.route ? styles.active : '' }`}   
//                 >
//                     <a href={ item.route } className={ styles.innerItem }> { item.label } </a>
//                 </li>
//             )}
//         </ul>
//     </div>
// };

export default Menu;