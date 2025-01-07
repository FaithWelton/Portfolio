"use server";

import { Dispatch, SetStateAction } from "react";
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
    html_url: string;
    description: string;
    // created_at: string;
    // updated_at: string;
    // languages: string;
    // has_wiki: boolean;
    // has_pages: boolean;
    // license: any;
};

export type UserProject = {

};

const username = config.defaultUser.username;
export async function GetProfile(): Promise<UserProfile> {
    let profileRes;
    try {
        profileRes = await fetch(`https://api.github.com/users/${ username }`);
        if (!profileRes.ok) throw new Error("User not found");
    } catch (error) {
        console.error(error);
        return config.defaultUser;
    };

    const profileData: UserProfile = await profileRes.json();
    profileData.bio = config.defaultUser.bio;
    return profileData;
};

const GetLanguages = async (project: string): Promise<string> => {
    let response;
    try {
        response = await fetch(`https://api.github.com/repos/FaithWelton/${ project }/languages`);
        if (!response.ok) throw new Error("Languages not found");
    } catch (error) {
        console.error(error);
        return "";
    };
    
    let result = await response.json();
    if (!result) return "";

    return Object.keys(result).toString();
};    

export async function GetRepos(): Promise<UserRepo[] | []> {
    let reposRes;
    try {
        reposRes = await fetch(`https://api.github.com/users/${ username }/repos`);
        if (!reposRes.ok) throw new Error("Repos not found");
    } catch (error) {
        console.error(error);
        return [];
    };

    const reposData: UserRepo[] = await reposRes.json();
    console.log("REPOS");
    console.log(reposData);
    return reposData;
};

export async function GetProject({ projectname }: { projectname: string; }): Promise<UserProject | null> {
    let projectRes;
    try {
        projectRes = await fetch(`https://api.github.com/repos/${ username }/${ projectname }`);
        if (!projectRes.ok) throw new Error("Project not found");
    } catch (error) {
        console.error(error);
        return null;
    };

    const projectData: UserRepo[] = await projectRes.json();
    console.log("Project");
    console.log(projectData);
    return projectData;
};