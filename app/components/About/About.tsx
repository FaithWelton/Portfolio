import styles from "./about.module.css";

const About = () => {
    return <div className={ styles.container }>
        { "About Me" }
    </div>


    // return <div className={ styles.wrapper }>
    //     <div className={ styles.decorSidebar } />
    //     <div className={ styles.decorBox } />
    //     <div className={ styles.container }>
    //         { "This is where I talk about me" }
    //     </div>
    //     <div className={ styles.decorCorner } />
    // </div>
};

export default About;