"use client";

import { useEffect, useState } from "react";
import Typing from "../components/Animations/Typing/Typing";
import { GetProfile } from "../hooks/useGithub";
import { config } from "../util/config";
import Image from "next/image";
import { UserProfile } from "../util/types";
import styles from "./about.module.css";
import Glow from "../components/Animations/Neon/Glow";
import Glitchy from "../components/Animations/Glitch/Glitchy";
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
    
    return <div className={ styles.container }>
        <div id="HEAD" className={ styles.head }>
            <Glitchy> <Glow text="/about" color="pink" /> </Glitchy>
        </div>

        <div id="BODY" style={{ height: "100%", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly", padding: "50px" }}>
            <Container id={ "bio" } style={{ height: "100%", width: "60%", display: "flex", flexDirection: "column" }}>
                <div>
                    <Typing text={ `name: ${ user.name }` } elementId={ `about_name` } style={{ letterSpacing: 1, fontSize: 10, justifySelf: "flex-end" }} />
                    <Typing text={ `location: ${ user.location }` } elementId={ `about_location` } style={{ letterSpacing: 1, fontSize: 10, justifySelf: "flex-end" }} /><br/>
                </div>

                <div style={{ height: "85%", width: "100%", overflow: "scroll" }}>
                    { user.bio.length === 1
                        ? <Typing text={ `bio: ${ user.bio }` } elementId={ `about_bio` } style={{ letterSpacing: 1, fontSize: 10 }} />
                        : user.bio.map((item, index) => <Typing key={ index } text={ item } elementId={ `about_bio_${ index }` } style={{ letterSpacing: 1, fontSize: 10, paddingBottom: "10px" }} />
                    )}
                </div>
            </Container>

            { user.avatar_url && <Container id={ "image" } style={{ height: "250px", width: "35%" }}>
                <Image
                    src={ user.avatar_url }
                    alt="Profile Image"
                    quality={ 100 }
                    priority
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </Container> }
        </div>

        <Glow text="Thanks for Visiting!" color="blue" style={{ color: "#000000", alignSelf: "flex-end" }} />
    </div>
};

export default About;