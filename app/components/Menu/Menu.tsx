import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";
import AnimLines from "../Animations/Lines/Lines";
import AnimCircles from "../Animations/Circles/Circles";
import pageStyles from "../../page.module.css";
import Dots from "./Dots";
import MenuItem from "./MenuItem";
import styles from "./menu.module.css";

interface Props {
    selection: any;
    setSelection: Dispatch<SetStateAction<any>>;
};

const Menu = ({ selection, setSelection }: Props) => {
    const MainMenuItems = [
        { label: "home", onclick: () => handleMenuDisplay("HOME") },
        { label: "", onclick: () => console.log("go secret 2") },
        { label: "projects", onclick: () => handleMenuDisplay("PROJECTS") },
        { label: "about", onclick: () => setSelection("ABOUT") },
    ];

    const ProjectMenuItems = [
        { label: "littlestTaskBot", onclick: () => setSelection("PROJECTS_littlestTaskBot") },
        { label: "goTorrent", onclick: () => setSelection("PROJECTS_goTorrent") },
        { label: "back", onclick: () => handleMenuDisplay("HOME") },
        { label: "portfolio", onclick: () => setSelection("PROJECTS_portfolio") },
    ];

    const [displayItems, setDisplayItems] = useState(MainMenuItems);

    const handleMenuDisplay = (menuToDisplay: "HOME" | "PROJECTS") => {
        switch (menuToDisplay) {
            case "HOME":
                setDisplayItems(MainMenuItems);
                setSelection("HOME");
                break;
            case "PROJECTS":
                setDisplayItems(ProjectMenuItems);
                setSelection("PROJECTS");
                break;
            default:
                break;
        };
    };

    return <div className={`${ styles.radMenu } ${ styles.size } ${ styles.delay } ${ styles.speed }`} title="menu">
        <div className={`${ styles.radMiddle }`}>
            <span className={ `${ pageStyles.spacedText } ${ styles.label }` }>
                { !selection.includes("PROJECTS_") && selection }
            </span>

            <AnimCircles />
            <AnimLines />
        </div>

        <ul className={`${ styles.radList } ${ styles.position } ${ styles.radius }`} aria-label="main menu items">
            { displayItems.map((item, index) =>
                <Fragment key={ index }>
                    <MenuItem label={ item.label } onClick={ item.onclick } />
                    <Dots />
                </Fragment>
            )}
        </ul>
    </div>
};

export default Menu;