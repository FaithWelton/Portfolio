import { useEffect, useState } from "react";
import styles from "./projects.module.css";
import { GetProject, GetProjectList, ProjectData } from "@/app/hooks/getProjects";
import Container from "../Container/container";
import Typing from "../Animations/Typing/Typing";
import Link from "next/link";

const Projects = () => {
    const [projectList, setProjectList] = useState<{ label: string; onclick: () => void; }[]>([]);
    const [displayProject, setDisplayProject] = useState<ProjectData | null>(null);

    const GetSelectedProject = async (proj: string) => {
        const project = await GetProject(proj)
        if (!project) return;
        setDisplayProject(project);
    };

    useEffect(() => {
        const GetData = async () => {
            const projects = await GetProjectList();
            if (!projects || projects.length <= 0) return;

            let list: { label: string; onclick: any }[] = [];
            projects.map(proj => list.push({ label: proj, onclick: () => GetSelectedProject(proj) }))
            setProjectList(list);
        };

        GetData();
    }, []);

    const List = () => <div style={{ border: "1px solid #00fffc", height: "150px", width: "150px", overflow: "scroll" }}>
        { projectList.length > 0 && projectList.map((project, index) =>
            <div key={ index } className={ styles.listItem } onClick={ project.onclick }>
                <Typing text={ project.label } elementId={ `project_${ project.label }` } style={{ letterSpacing: 1 }} />
            </div>
        )}
    </div>

    const ProjectDisplay = ({ project }: { project: ProjectData }) => <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px solid #d4ff00", height: "95%", padding: "2px" }}>
        <Typing text={ `name: ${ project.name }` } elementId={ `project_name_${ project.id }` } style={{ letterSpacing: 1, fontSize: 12 }} />
        <Typing text={ `description: ${ project.description }` } elementId={ `project_description_${ project.id }` } style={{ letterSpacing: 1, fontSize: 12 }} />
        <Typing text={ `language(s): ${ project.languages }` } elementId={ `project_languages_${ project.id }` } style={{ letterSpacing: 1, fontSize: 12 }} />
    
        <Typing text={ `created: ${ project.created_at }` } elementId={ `project_created_${ project.id }` } style={{ letterSpacing: 1, fontSize: 12 }} />
        <Typing text={ `last updated: ${ project.updated_at }` } elementId={ `updated${ project.id }` } style={{ letterSpacing: 1, fontSize: 12 }} />

        <Link href={ project.html_url } rel="noopener noreferrer" target="_blank"> <Typing text={ "view on github" } elementId={ `project_link_${ project.id }` } style={{ letterSpacing: 1, fontSize: 12 }} /> </Link>
    </div>

    return <Container title={ "My Projects" } extra={ <List /> }>
        { displayProject && <ProjectDisplay project={ displayProject } /> }
    </Container>
};

export default Projects;