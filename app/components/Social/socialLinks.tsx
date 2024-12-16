import Link from "next/link";
import { socialLinks } from "@/app/util/config";
import styles from "@/app/components/Social/social.module.css";
import { capitalize } from "@/app/util/capitalize";
import IconMap from "@/app/util/getIcon";
import GlitchyText from "../Animations/Glitch/GlitchyText";

const SocialLinks = () => {
    return <div className={ styles.container }>
        { socialLinks.map(({ name, path }, index) => (
            <Link key={ index } href={ path } className={ `${ styles.link } ${ styles.tooltip }` } aria-labelledby="tooltiptext">
                <span className={ styles.tooltiptext } id="tooltiptext"> { capitalize(name) } </span>
                
                <GlitchyText>
                    <IconMap icon={ name } size={ 20 } color="#FFFFFF" />
                </GlitchyText>
            </Link>
        ))}
    </div>
};

export default SocialLinks;