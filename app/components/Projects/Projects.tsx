import { useEffect, useState } from "react";
import styles from "./projects.module.css";
import Container from "../Container/container";
import Typing from "../Animations/Typing/Typing";
import Link from "next/link";
import { GetRepos, UserRepo } from "@/app/hooks/useGithub";

const Projects = () => {
    const [repoData, setRepoData] = useState<UserRepo[]>([]);
    const [selected, setSelected] = useState<UserRepo>();

    useEffect(() => {
        const GetData = async () => {
            let repoInfo = await GetRepos();
            setRepoData(repoInfo);
        };
        GetData();
    }, []);
    
    const List = () => <div style={{ position: "relative", border: "1px solid #d4ff00", height: "250px", width: "200px", overflow: "scroll" }}>
        { repoData.length > 0
            ? repoData.map((project, index) =>
                <div key={ index } className={ styles.listItem } onClick={() => setSelected(project)}>
                    <Typing text={ project.name } elementId={ `project_${ project.name }` } style={{ letterSpacing: 1 }} />
                </div>
            )
            : <div className={ styles.listItem }>
                <Typing text={ "Oops, something went wrong! 😳" } elementId={ `project_oops` } style={{ letterSpacing: 1 }} />
            </div>
        }   
    </div>

    const ProjectDisplay = ({ project }: { project: UserRepo }) => <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px solid #d4ff00", height: "95%", padding: "10px", overflow: "scroll" }}>
        <Typing text={ `name: ${ project.name }` } elementId={ `project_name_${ project.id }` } style={{ letterSpacing: 1, fontSize: 12 }} />
        <Typing text={ `description: ${ project.description }` } elementId={ `project_description_${ project.id }` } style={{ letterSpacing: 1, fontSize: 12 }} />
        <Typing text={ `language(s): ${ project.language }` } elementId={ `project_languages_${ project.id }` } style={{ letterSpacing: 1, fontSize: 12 }} />
    
        <Typing text={ `created: ${ project.created_at }` } elementId={ `project_created_${ project.id }` } style={{ letterSpacing: 1, fontSize: 12 }} />
        <Typing text={ `last updated: ${ project.updated_at }` } elementId={ `updated${ project.id }` } style={{ letterSpacing: 1, fontSize: 12 }} />

        <Link href={ project.html_url } rel="noopener noreferrer" target="_blank"> <Typing text={ "view on github" } elementId={ `project_link_${ project.id }` } style={{ letterSpacing: 1, fontSize: 12 }} /> </Link>
    </div>

    return <Container title={ "My Projects" } extra={ <List /> }>
        { selected && <ProjectDisplay project={ selected } /> }
    </Container>
};

export default Projects;