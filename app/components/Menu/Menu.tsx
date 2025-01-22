"use client";
import { menuItems } from "@/app/util/config";
import AnimCircles from "../Animations/Circles/Circles";
import styles from "./menu.module.css";
import MenuItem from "./MenuItem";

const Menu = () => <div className={ styles.menu }>
    <AnimCircles />

    <ul className={ styles.list }>
        { menuItems.map((item, index) => <MenuItem key={ index } label={ item.label } route={ item.route } /> )}
    </ul>
</div>

export default Menu;