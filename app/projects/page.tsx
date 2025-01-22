"use client";

import { useEffect, useState } from "react";
import styles from "./projects.module.css";
import Link from "next/link";
import { GetProject, GetRepos } from "@/app/hooks/useGithub";
import { format } from "date-fns";
import Typing from "../components/Animations/Typing/Typing";
import { UserRepo } from "../util/types";
import Glow from "../components/Animations/Neon/Glow";
import Glitchy from "../components/Animations/Glitch/Glitchy";
import Container from "../components/Container/Container";

const Projects = () => {
    const [repoData, setRepoData] = useState<string[]>([]);
    const [selected, setSelected] = useState<UserRepo | null>(null);

    useEffect(() => {
        const GetData = async () => {
            let repoInfo = await GetRepos();
            setRepoData(repoInfo);
        };

        GetData();
    }, []);

    const HandleSelected = async (project: string) => {
        let projectInfo = await GetProject(project);
        setSelected(projectInfo);
    };
    
    return <div className={ styles.container }>
        <div id="HEAD" className={ styles.head }>
            <Glitchy> <Glow text="/projects" color="yellow" /> </Glitchy>
        </div>

        <div id="BODY" style={{ height: "100%", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly", padding: "10px" }}>
            <Container id={ "list" } style={{ height: "250px", width: "35%" }}>
                { repoData.length > 0
                    ? repoData.map((project, index) =>
                        <div key={ index } className={ styles.listItem } onClick={() => HandleSelected(project)}>
                            <Typing text={ project } elementId={ `project_${ project }` } style={{ letterSpacing: 1 }} />
                        </div>
                    )
                    : <div className={ styles.listItem }>
                        <Typing text={ "Oops, something went wrong! 😳" } elementId={ `project_oops` } style={{ letterSpacing: 1 }} />
                    </div>
                }  
            </Container>

            { selected && <Container id={ "project" } style={{ height: "50%", width: "60%", display: "flex", flexDirection: "column", alignSelf: "flex-end" }}>
                <div style={{ height: "20%", width: "100%" }}>
                    <Typing text={ `name: ${ selected.name }` } elementId={ `project_name_${ selected.id }` } style={{ letterSpacing: 1, fontSize: 12, justifySelf: "flex-end" }} />
                </div>

                <div style={{ height: "60%", width: "100%", alignContent: "center" }}>
                    <Typing text={ `description: ${ selected.description }` } elementId={ `project_description_${ selected.id }` } style={{ letterSpacing: 1, fontSize: 12 }} />
                    <Typing text={ `language(s): ${ selected.language }` } elementId={ `project_languages_${ selected.id }` } style={{ letterSpacing: 1, fontSize: 12 }} />
                
                    <Typing text={ `created: ${ format(selected.created_at, "EEEE MMMM dd yyyy") }` } elementId={ `project_created_${ selected.id }` } style={{ letterSpacing: 1, fontSize: 12 }} />
                    <Typing text={ `last updated: ${ format(selected.updated_at, "EEEE MMMM dd yyyy") }` } elementId={ `updated${ selected.id }` } style={{ letterSpacing: 1, fontSize: 12 }} />
                </div>

                <div style={{ height: "20%", width: "100%", alignContent: "flex-end" }}>
                    <Link href={ selected.html_url } rel="noopener noreferrer" target="_blank"> <Typing text={ "view on github" } elementId={ `project_link_${ selected.id }` } style={{ letterSpacing: 1, fontSize: 12 }} /> </Link>
                </div>
            </Container> }
        </div>
    </div>
};

export default Projects;