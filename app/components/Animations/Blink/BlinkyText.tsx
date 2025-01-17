import Typing from "../Typing/Typing";
import styles from "./blinky.module.css";

type Blinky = { text: string; };

const BlinkyText = ({ text }: Blinky) => <span className={ styles.blink }>
    <Typing text={ text } elementId={ text } />
</span>

export default BlinkyText;