import styles from "./social.module.css";

const Tooltip = ({ label }: { label: string }) => <div className={ styles.tooltipText } id="tooltiptext">
    <div className={ styles.innerTooltipText }>
        { label }
    </div>
</div>

export default Tooltip;