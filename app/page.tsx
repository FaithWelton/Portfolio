import Glow from "./components/Animations/Neon/Glow";
import styles from "./page.module.css";

export default function Home() {
  return <div className={ styles.container }>
    <div id="HEAD" className={ styles.head }>
        <Glow text="Hi I'm Faith!" color="blue" />
    </div>
  </div>
};