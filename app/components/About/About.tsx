import { Fragment, useEffect, useState } from "react";
import Container from "../Container/container";
import styles from "./about.module.css";
import { GetInfo, Me } from "@/app/hooks/getInfo";
import Typing from "../Animations/Typing/Typing";
import Image from "next/image";
import Link from "next/link";
import { GetProfile, UserProfile } from "@/app/hooks/useGithub";
import { config } from "@/app/util/config";

const About = () => {
    const [user, setUser] = useState<UserProfile>(config.defaultUser);
    useEffect(() => {
        const GetData = async () => {
            let profileInfo = await GetProfile();
            console.log(profileInfo);

            setUser(profileInfo);
        };
        GetData();
    }, []);

    const Shot = ({ user }: { user: UserProfile }) => <div style={{ position: "relative", border: "1px solid #d4ff00", height: "200px", width: "200px", overflow: "scroll" }}>
        <Image
            src={ user.avatar_url }
            alt="Profile Image"
            quality={ 100 }
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ border: "3px double #00fffc" }}
        />
    </div>

    return <Container title={ "About Me" } extra={ user.avatar_url && <Shot user={ user } /> }>
        <div style={{ display: "flex", flexDirection: "column", border: "1px solid #d4ff00", height: "95%", padding: "2px", overflow: "scroll" }}>
            <Typing text={ `name: ${ user.name }` } elementId={ `about_name` } style={{ letterSpacing: 1, fontSize: 12 }} /><br/>
            <Typing text={ `location: ${ user.location }` } elementId={ `about_location` } style={{ letterSpacing: 1, fontSize: 12 }} /><br/>
            
            { user.bio.length === 1
                ? <Typing text={ `bio: ${ user.bio }` } elementId={ `about_bio` } style={{ letterSpacing: 1, fontSize: 12 }} />
                : user.bio.map((item, index) => <Fragment key={ index }><Typing text={ item } elementId={ `about_bio_${ index }` } style={{ letterSpacing: 1, fontSize: 12 }} /><br/></Fragment> )
            }
        </div>
    </Container>
};

export default About;