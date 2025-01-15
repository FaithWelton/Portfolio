import Link from "next/link";
import { socialLinks } from "@/app/util/config";
import { capitalize } from "@/app/util/capitalize";
import IconMap from "@/app/util/getIcon";
import Glitchy from "../Animations/Glitch/Glitchy";
import styles from "./social.module.css";
import Typing from "../Animations/Typing/Typing";

const SocialLinks = () => {
    return <div className={ styles.container }>
        { socialLinks.map(({ name, path }, index) => (
            <Link key={ index } href={ path } className={ `${ styles.link } ${ styles.tooltip }` } aria-labelledby="tooltiptext">
                <div className={ styles.tooltipText } id="tooltiptext">
                    <div className={ styles.innerTooltipText }>
                        <Typing text={ capitalize(name) } elementId={ `socials_${ name }` } style={{ letterSpacing: 2, fontSize: 15 }} />
                    </div>
                </div>
                
                <Glitchy>
                    <IconMap icon={ name } size={ 20 } color="#FFFFFF" />
                </Glitchy>
            </Link>
        ))}
    </div>
};

export default SocialLinks;