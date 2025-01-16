"use client";

import { Fragment, useEffect, useState } from "react";
import Typing from "../components/Animations/Typing/Typing";
import Container from "../components/Container/container";
import { GetProfile, UserProfile } from "../hooks/useGithub";
import { config } from "../util/config";
import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
    const [user, setUser] = useState<UserProfile>(config.defaultUser);
    // useEffect(() => {
    //     const GetData = async () => {
    //         let profileInfo = await GetProfile();
    //         setUser(profileInfo);
    //     };
    //     GetData();
    // }, []);

    const ProfileImage = ({ user }: { user: UserProfile }) => <div style={{ position: "relative", border: "1px solid #d4ff00", height: "250px", width: "200px" }}>
        <Image
            src={ user.avatar_url }
            alt="Profile Image"
            quality={ 100 }
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ border: "3px double #00fffc" }}
        />

        {/* <div className={ styles.decor2 } /> */}
    </div>

    // return <Container title={ "About Me" } extra={ user.avatar_url && <ProfileImage user={ user } /> }>
    //     <div style={{ display: "flex", flexDirection: "column", border: "1px solid #d4ff00", height: "95%", padding: "10px", overflow: "scroll" }}>
    //         <Typing text={ `name: ${ user.name }` } elementId={ `about_name` } style={{ letterSpacing: 1, fontSize: 12 }} /><br/>
    //         <Typing text={ `location: ${ user.location }` } elementId={ `about_location` } style={{ letterSpacing: 1, fontSize: 12 }} /><br/>
            
    //         { user.bio.length === 1
    //             ? <Typing text={ `bio: ${ user.bio }` } elementId={ `about_bio` } style={{ letterSpacing: 1, fontSize: 12 }} />
    //             : user.bio.map((item, index) => <Fragment key={ index }><Typing text={ item } elementId={ `about_bio_${ index }` } style={{ letterSpacing: 1, fontSize: 12 }} /><br/></Fragment> )
    //         }
    //     </div>

    //     <div style={{ clipPath: "polygon(100% 0, 70% 100%, 0 100%, 0 0)", border: "1px solid #d4ff00", background: "#d4ff00", height: "20%", marginTop: "5px" }}>
    //         <div style={{ clipPath: "inherit", height: "99%", width: "99%", inset: "1px", background: "#006665", padding: "10px", display: "flex", alignItems: "center" }}>
    //             <Typing text={ `Thanks for visiting!` } elementId={ `about_bio` } style={{ letterSpacing: 1, fontSize: 12 }} />
    //         </div>
    //     </div>
    // </Container>

    return <div style={{ width: "100%", height: "100%", marginLeft: "1%", border: "1px solid orange" }}>
        {/* <div className={ styles.title }>
            <Typing text={ "about me" } elementId="about" style={{ letterSpacing: 5, fontSize: 13 }}/>
        </div>

        <div style={{ height: "55%", width: "35%", position: "absolute", top: 115, left: 10 }}>
            { user.avatar_url && <ProfileImage user={ user } /> }
        </div>

        <div style={{ height: "80%", width: "60%", position: "absolute", right: 10, top: 10 }}>
            <div style={{ display: "flex", flexDirection: "column", border: "1px solid #d4ff00", height: "95%", padding: "10px", overflow: "scroll" }}>
                <Typing text={ `name: ${ user.name }` } elementId={ `about_name` } style={{ letterSpacing: 1, fontSize: 12 }} /><br/>
                <Typing text={ `location: ${ user.location }` } elementId={ `about_location` } style={{ letterSpacing: 1, fontSize: 12 }} /><br/>
                
                { user.bio.length === 1
                    ? <Typing text={ `bio: ${ user.bio }` } elementId={ `about_bio` } style={{ letterSpacing: 1, fontSize: 12 }} />
                    : user.bio.map((item, index) => <Fragment key={ index }><Typing text={ item } elementId={ `about_bio_${ index }` } style={{ letterSpacing: 1, fontSize: 12 }} /><br/></Fragment> )
                }
            </div>

            <div style={{ clipPath: "polygon(100% 0, 70% 100%, 0 100%, 0 0)", border: "1px solid #d4ff00", background: "#d4ff00", height: "20%", marginTop: "5px" }}>
                <div style={{ clipPath: "inherit", height: "99%", width: "99%", inset: "1px", background: "#006665", padding: "10px", display: "flex", alignItems: "center" }}>
                    <Typing text={ `Thanks for visiting!` } elementId={ `about_bio` } style={{ letterSpacing: 1, fontSize: 12 }} />
                </div>
            </div>  
        </div> */}
    </div>
}

export default About;