import Link from "next/link";
import { socials } from "@/app/util/config";
import IconMap from "@/app/util/getIcon";
import styles from "./social.module.css";
import Tooltip from "./Tooltip";
import Glitchy from "../Animations/Glitch/Glitchy";

const SocialLinks = () => <div className={ styles.container }>
    { socials.map(({ label, path }, index) =>
        <Glitchy key={ index }>
            <Link href={ path } className={ `${ styles.link } ${ styles.tooltip }` } aria-labelledby="tooltiptext">
                <Tooltip label={ label } />
                <IconMap icon={ label } size={ 20 } />
            </Link>
        </Glitchy>
    )}
</div>

export default SocialLinks;