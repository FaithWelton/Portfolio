"use client";

import { useEffect, useState } from "react";
import styles from "./projects.module.css";
import Link from "next/link";
import { GetProject, GetRepos } from "@/app/hooks/useGithub";
import { format } from "date-fns";
import { UserRepo } from "../util/types";
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

    const HandleSelected = async (e: any, project: string) => {
        e.preventDefault();
        let projectInfo = await GetProject(project);
        setSelected(projectInfo);
    };

    return <div className={ styles.projects }>
        <Container size="fill" contentClassName={ styles.projectContainer }>
            <div className={ styles.list }>
                { repoData.length > 0
                    ? repoData.map((project, index) =>
                        <div key={ index } className={ `${ styles.listItem } ${ selected && selected.name === project && styles.selected }` } onClick={(e) => HandleSelected(e, project)}>
                            { String(index).padStart(2, "0") + "." } { project }
                        </div>
                    )
                    : <div className={ styles.listItem }>
                        { "Oops, something went wrong! 😳" }
                    </div>
                }
            </div>

            <div className={ styles.message }>
                <div className={ styles.messageHead }> { "Project Information" } </div>

                <div className={ styles.topText }>  
                    { selected && <div>
                        { "Project Name: " }

                        <div> { selected.name } </div>
                    </div> }

                    { selected && <div>
                        { "Description: " }

                        <div> { selected.description } </div>
                    </div> }

                    { selected && <div>
                        { "Language(s): " }

                        <div> { selected.language } </div>
                    </div> }

                    { selected && <div>
                        { "Created: " }

                        <div> { format(selected.created_at, "EEEE MMMM dd yyyy") } </div>
                    </div> }

                    { selected && <div>
                        { "Updated: " }

                        <div> { format(selected.updated_at, "EEEE MMMM dd yyyy") } </div>
                    </div> }

                    { !selected && <div>
                        { "Please choose a project from the left for more information." }
                    </div> }
                </div>

                <div className={ styles.bottomBar }>
                    <div className={ styles.barItem }>
                        { selected && <Link href={ selected.html_url } rel="noopener noreferrer" target="_blank" className={ styles.link }>
                            { "view repo" }
                        </Link> }
                    </div>

                    <div className={ styles.barItem }></div>
                    <div className={ styles.barItem }></div>
                </div>
            </div>
        </Container>
    </div>
};

export default Projects;