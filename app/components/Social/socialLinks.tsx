import Link from "next/link";
import { socials } from "@/app/util/config";
import IconMap from "@/app/util/getIcon";
import styles from "./social.module.css";
import Tooltip from "./Tooltip";

const SocialLinks = () => <div className={ styles.container }>
    { socials.map(({ label, path }, index) =>
        <Link key={ index } href={ path } className={ `${ styles.link } ${ styles.tooltip }` } aria-labelledby="tooltiptext">
            <Tooltip label={ label } />
            <IconMap icon={ label } size={ 20 } color="#FFFFFF" />
        </Link>
    )}
</div>

export default SocialLinks;