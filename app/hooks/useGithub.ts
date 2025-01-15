"use server";

import { config } from "../util/config";

export type UserProfile = {
    username: string;
    avatar_url: string;
    html_url: string;
    name: string;
    location: string;
    email: string;
    bio: string[];
};
  
export type UserRepo = {
    id: number;
    name: string;
    private: boolean;
    html_url: string;
    description: string;
    language: string;
    languages_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    has_wiki: boolean;
    archived: boolean;
    license: string | null;
    visibility: string;
};

const username = config.defaultUser.username;
export async function GetProfile(): Promise<UserProfile> {
    let response: Response;

    try {
        response = await fetch(`https://api.github.com/users/${ username }`);
        if (!response.ok) throw new Error("User not found");
    } catch (error) {
        console.error(error);
        return config.defaultUser;
    };

    const result: UserProfile = await response.json();
    if (!result) return config.defaultUser;

    result.bio = config.defaultUser.bio;

    return result;
};

const GetLanguage = async (url: string): Promise<string> => {
    if (!url || url === "") return "";
    let response: Response;

    try {
        response = await fetch(url);
        if (!response.ok) throw new Error("Languages not found");
    } catch (error) {
        console.error(error);
        return "";
    };
    
    let result = await response.json();
    if (!result) return "";

    const languages: string = Object.keys(result).toString().replaceAll(",", ", ");
    return languages;
};    

export async function GetRepos(): Promise<string[]> {
    let response: Response;

    try {
        response = await fetch(`https://api.github.com/users/${ username }/repos`);
        if (!response.ok) throw new Error("Repos not found");
    } catch (error) {
        console.error(error);
        return [];
    };
    
    const result: UserRepo[] = await response.json();
    if (!result) return [];

    let filteredArray: string[] = [];
    const filteredData: UserRepo[] = result.filter((repo) => !repo.archived && !repo.private);
    filteredData.map((data) => filteredArray.push(data.name));

    return filteredArray;
};

export async function GetProject(projectname: string): Promise<UserRepo | null> {
    if (!projectname || projectname === "") return null;

    let response: Response;
    try {
        response = await fetch(`https://api.github.com/repos/${ username }/${ projectname }`);
        if (!response.ok) throw new Error("Project not found");
    } catch (error) {
        console.error(error);
        return null;
    };

    const result: UserRepo = await response.json();
    if (!result) return null;

    const langs: string = await GetLanguage(result.languages_url);
    if (langs !== "") return { ...result, language: langs };

    return result;
};