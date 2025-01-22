import Typing from "../Animations/Typing/Typing";
import styles from "./social.module.css";

const Tooltip = ({ label }: { label: string }) => <div className={ styles.tooltipText } id="tooltiptext">
    <div className={ styles.innerTooltipText }>
        <Typing text={ label } elementId={ `socials_${ label }` } style={{ letterSpacing: 2, fontSize: 15 }} />
    </div>
</div>

export default Tooltip;