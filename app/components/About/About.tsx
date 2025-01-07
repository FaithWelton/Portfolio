import { Fragment, useEffect, useState } from "react";
import Container from "../Container/container";
import Typing from "../Animations/Typing/Typing";
import Image from "next/image";
import { GetProfile, UserProfile } from "@/app/hooks/useGithub";
import { config } from "@/app/util/config";
import pageStyles from "../../page.module.css";
import Link from "next/link";

const About = () => {
    const [user, setUser] = useState<UserProfile>(config.defaultUser);
    useEffect(() => {
        const GetData = async () => {
            let profileInfo = await GetProfile();
            setUser(profileInfo);
        };
        GetData();
    }, []);

    const ProfileImage = ({ user }: { user: UserProfile }) => <div style={{ position: "relative", border: "1px solid #d4ff00", height: "250px", width: "200px" }}>
        <Image
            src={ user.avatar_url }
            alt="Profile Image"
            quality={ 100 }
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ border: "3px double #00fffc" }}
        />

        <div className={ pageStyles.decor2 } />
    </div>

    return <Container title={ "About Me" } extra={ user.avatar_url && <ProfileImage user={ user } /> }>
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
    </Container>
};

export default About;