import styles from "./projects.module.css";

interface Props {
    selection: any;
};

const Projects = ({ selection }: Props) => {
    return <div className={ styles.wrapper }>
        <div className={ styles.decorSidebar } />
        <div className={ styles.decorBox } />

        <div className={ styles.container }>
        { selection.split("_")[1]
            ? selection.split("_")[1]
            : <span className={ styles.spacedText }> { "Select a Project from the Menu!" } </span>
        }
        </div>

        <div className={ styles.decorCorner } />
    </div>
};

export default Projects;