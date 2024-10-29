import { config } from "@/config";
import Link from "next/link";
import styles from "./social.module.css";
import {
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

const SocialLinks = () => {
    const socialItems = {
        github: { path: "https://github.com/FaithWelton", icon: <FaGithub /> },
        linkedin: { path: "linkedin.com/in/faithwelton", icon: <FaLinkedinIn /> },
        email: { path: "mailto:faithmadore@hotmail.com", icon: <TbMailFilled /> },
    };

    return <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
        { Object.entries(socialItems).map(([name, { path, icon }]) =>
            <Link key={ path } href={ path } className={ styles.link }> { icon } </Link>
        )}
    </div>
};

export default SocialLinks;