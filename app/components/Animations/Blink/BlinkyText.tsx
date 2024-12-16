import styles from "./blinky.module.css";
import pageStyles from "@/app/page.module.css";

interface Props {
    children: any;
}

const BlinkyText = ({ children }: Props) => {
    return <span className={ `${ pageStyles.spacedText } ${ styles.blink }` }> { children } </span>
};

export default BlinkyText;