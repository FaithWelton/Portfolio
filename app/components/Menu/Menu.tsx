import { Dispatch, Fragment, SetStateAction, useState } from "react";
import AnimLines from "../Animations/Lines/Lines";
import AnimCircles from "../Animations/Circles/Circles";
import pageStyles from "../../page.module.css";
import Dots from "./Dots";
import MenuItem from "./MenuItem";
import styles from "./menu.module.css";
import Typing from "../Animations/Typing/Typing";

interface Props {
    selection: any;
    setSelection: Dispatch<SetStateAction<any>>;
};

const Menu = ({ selection, setSelection }: Props) => {
    const items = [
        { label: "home", onclick: () => setSelection("home") },
        { label: "about", onclick: () => setSelection("about") },
        { label: "projects", onclick: () => setSelection("projects") },
    ];

    return <div className={ styles.menu }>
        <div className={ styles.circleContainer }>
            <div className={ `${ styles.circle } ${ styles.circle1 }` }></div>
            <div className={ `${ styles.circle } ${ styles.circle2 }` }></div>
            <div className={ `${ styles.circle } ${ styles.circle3 }` }></div>
            <div className={ `${ styles.circle } ${ styles.circle4 }` }></div>
            <div className={ `${ styles.circle } ${ styles.circle5 }` }></div>
            <div className={ `${ styles.circle } ${ styles.circle6 }` }></div>
            <div className={ `${ styles.circle } ${ styles.circle7 }` }></div>
            <div className={ `${ styles.circle } ${ styles.circle8 }` }></div>
            <div className={ `${ styles.circle } ${ styles.circle9 }` }></div>
            <div className={ `${ styles.circle } ${ styles.circle10 }` }></div>
            <div className={ `${ styles.circle } ${ styles.circleDot }` }></div>

            <div className={ styles.radiallines }>
                <div className={ styles.radialLine1 }></div>
                <div className={ styles.radialLine2 }></div>
                <div className={ styles.radialLine3 }></div>
                <div className={ styles.radialLine4 }></div>
            </div>
        </div>

        <ul>
            { items.map(item =>
                <li className={ styles.outerItem } key={ item.label } onClick={ item.onclick }>
                    <div className={ styles.innerItem }>
                        <Typing text={ item.label } elementId={ `menu_${ item.label }` } style={{ letterSpacing: 2, fontSize: 15 }} />
                    </div>
                </li>            
            )}
        </ul>
    </div>
};

export default Menu;