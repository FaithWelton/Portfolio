"use client";

import { useEffect, useState } from "react";
import Typing from "../components/Animations/Typing/Typing";
import { GetProfile } from "../hooks/useGithub";
import { config } from "../util/config";
import { UserProfile } from "../util/types";
import styles from "./about.module.css";
import Container from "../components/Container/Container";

const About = () => {
    const [user, setUser] = useState<UserProfile>(config.defaultUser);

    useEffect(() => {
        const GetData = async () => {
            let profileInfo = await GetProfile();
            if (!profileInfo) return;
            setUser(profileInfo);
        };
        
        if (user === config.defaultUser) GetData();
    }, [user]);

    return <div className={ styles.about }>
        <Container size="fill" image={ user.avatar_url } imageAlt="Profile Image" title={[`Name: ${ user.name }`, `Location: ${ user.location }`]}>            
            <div className={ styles.bio } style={{ height: "75%", width: "100%", overflow: "scroll", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                { user.bio.length === 1
                    ? <div> { user.bio } </div>
                    : user.bio.map((item, index) => <div key={ index } style={{ padding: "5px", height: "100%" }}> { item } </div>)
                }
            </div>
        </Container>
    </div>
};

export default About;