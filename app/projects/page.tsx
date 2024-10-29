import { projects } from "@/config";
import Link from "next/link";
import styles from "./projects.module.css";

const capital = (word: string) => { return word.replace(/\b\w/g, (char) => char.toUpperCase()) }

const Projects = () => {
    return <div style={{ border: "5px double green", padding: "10px" }}>
        <div style={{ padding: "5px" }}>
            <span> { "My Projects" } </span>
        </div>

        <div style={{ padding: "5px", display: "flex", flexDirection: "row", flexFlow: "wrap" }}>
            { Object.entries(projects).map(([name, { path, description }]) =>
                <div key={ name } style={{ border: "1px solid lightgray", boxShadow: "2px 2px gray", padding: "5px", width: "250px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span> { capital(name) } </span>

                    <br />

                    <span> { "Desc:" } { description } </span>

                    <Link key={ path } href={ path } className={ styles.link }> { "View Code" } </Link>
                </div>
            )}
        </div>
    </div>
};

export default Projects;