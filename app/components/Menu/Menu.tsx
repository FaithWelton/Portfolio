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
    const MainMenuItems = [
        { label: "home", onclick: () => console.log("MENU ITEM SELECTED: HOME") },
        { label: "", onclick: () => console.log("go secret 2") },
        { label: "projects", onclick: () => console.log("MENU ITEM SELECTED: PROJECTS") },
        { label: "about", onclick: () => setSelection("ABOUT") },
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
            <li><Typing text={ "home" } elementId={ "menu_home" } style={{ letterSpacing: 0, fontSize: 20 }} /></li>
            <li><Typing text={ "about" } elementId={ "menu_about" } style={{ letterSpacing: 0, fontSize: 20 }} /></li>
            <li><Typing text={ "projects" } elementId={ "menu_projects" } style={{ letterSpacing: 0, fontSize: 20 }} /></li>
        </ul>
    </div>
};

// const Menu = ({ selection, setSelection }: Props) => {
//     const MainMenuItems = [
//         { label: "home", onclick: () => handleMenuDisplay("HOME") },
//         { label: "", onclick: () => console.log("go secret 2") },
//         { label: "projects", onclick: () => handleMenuDisplay("PROJECTS") },
//         { label: "about", onclick: () => setSelection("ABOUT") },
//     ];

//     // const ProjectMenuItems = [
//     //     { label: "littlestTaskBot", onclick: () => setSelection("PROJECTS_littlestTaskBot") },
//     //     { label: "goTorrent", onclick: () => setSelection("PROJECTS_goTorrent") },
//     //     { label: "back", onclick: () => handleMenuDisplay("HOME") },
//     //     { label: "portfolio", onclick: () => setSelection("PROJECTS_portfolio") },
//     // ];

//     const [displayItems, setDisplayItems] = useState(MainMenuItems);

//     const handleMenuDisplay = (menuToDisplay: "HOME" | "PROJECTS") => {
//         switch (menuToDisplay) {
//             case "HOME":
//                 setDisplayItems(MainMenuItems);
//                 setSelection("HOME");
//                 break;
//             case "PROJECTS":
//                 setSelection("PROJECTS");
//                 break;
//             default:
//                 break;
//         };
//     };

//     return <div className={`${ styles.radMenu } ${ styles.size } ${ styles.delay } ${ styles.speed }`} title="menu">
//         <div className={`${ styles.radMiddle }`}>
//             <span className={ `${ pageStyles.spacedText } ${ styles.label }` }>
//                 { selection }
//             </span>

//             <AnimCircles />
//             <AnimLines />
//         </div>

//         <ul className={`${ styles.radList } ${ styles.position } ${ styles.radius }`} aria-label="main menu items">
//             { displayItems.map((item, index) =>
//                 <Fragment key={ index }>
//                     <MenuItem label={ item.label } onClick={ item.onclick } />
//                     <Dots />
//                 </Fragment>
//             )}
//         </ul>
//     </div>
// };

export default Menu;