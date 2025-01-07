"use server";

interface GitProject {
    id: number;
    name: string;
    html_url: string;
    description: string;
    url: string;
    languages_url: string;
    contents_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    has_wiki: boolean;
    has_pages: boolean;
    license: any;
};

export interface ProjectData {
    id: number;
    name: string;
    html_url: string;
    description: string;
    created_at: string;
    updated_at: string;
    languages: string;
    has_wiki: boolean;
    has_pages: boolean;
    license: any;
}

const GetProjectList = async (): Promise<string[]> => {
    let response;
    try {
        response = await fetch("https://api.github.com/users/FaithWelton/repos");
    } catch (error) {
        console.error(error);
        return [];
    };

    if (!response.ok) return [];

    let result = await response.json();

    if (!result) return [];

    let list: string[] = [];
    result.map((project: any) => list.push(project.name));

    return list;
};

const GetProject = async (name: string): Promise<ProjectData | null> => {
    let response;
    try {
        response = await fetch(`https://api.github.com/repos/FaithWelton/${ name }`);
    } catch (error) {
        console.error(error);
        return null;
    };

    if (!response.ok) return null;

    const result: GitProject = await response.json();
    if (!result) return null;

    let languages = await GetLanguages(result.name);
    const project: ProjectData = { ...result, languages: languages };

    return project;
};

const GetLanguages = async (project: string): Promise<string> => {
    let response;
    try {
        response = await fetch(`https://api.github.com/repos/FaithWelton/${ project }/languages`);
    } catch (error) {
        console.error(error);
        return "";
    };

    if (!response.ok) return "";

    let result = await response.json();
    if (!result) return "";

    return Object.keys(result).toString();
};

export { GetProjectList, GetProject };
