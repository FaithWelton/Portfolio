"use client";

import { Fragment, useEffect, useState } from "react";
import Typing from "../components/Animations/Typing/Typing";
import { GetProfile } from "../hooks/useGithub";
import { config } from "../util/config";
import Image from "next/image";
import { UserProfile } from "../util/types";
import styles from "./about.module.css";

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
            <Typing text={ "about me" } elementId="about" style={{ letterSpacing: 5, fontSize: 13 }}/>
        </div>

        <div id="IMAGE" className={ styles.photoBox }>
            <div className={ styles.innerPhotoBox }>                
                { user.avatar_url && <Image
                    src={ user.avatar_url }
                    alt="Profile Image"
                    quality={ 100 }
                    priority
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ border: "3px double #00fffc" }}
                /> }
            </div>
        </div>

        <div id="CONTENT" className={ styles.content }>
            <Typing text={ `name: ${ user.name }` } elementId={ `about_name` } style={{ letterSpacing: 1, fontSize: 12 }} /><br/>
            <Typing text={ `location: ${ user.location }` } elementId={ `about_location` } style={{ letterSpacing: 1, fontSize: 12 }} /><br/>
            
            { user.bio.length === 1
                ? <Typing text={ `bio: ${ user.bio }` } elementId={ `about_bio` } style={{ letterSpacing: 1, fontSize: 12 }} />
                : user.bio.map((item, index) => <Fragment key={ index }>
                    <Typing text={ item } elementId={ `about_bio_${ index }` } style={{ letterSpacing: 1, fontSize: 12 }} /><br/>
                </Fragment>
            )}
        </div>
    </div>
};

export default About;