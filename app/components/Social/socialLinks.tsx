import { config, socialLinks } from "@/config";
import Link from "next/link";
import styles from "./social.module.css";
import {
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

const SocialLinks = () => {
    const socialItems = {
        github: { path: socialLinks.github, icon: <FaGithub /> },
        linkedin: { path: socialLinks.linkedin, icon: <FaLinkedinIn /> },
        email: { path: socialLinks.email, icon: <TbMailFilled /> },
    };

    return <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
        { Object.entries(socialItems).map(([name, { path, icon }]) =>
            <Link key={ path } href={ path } className={ styles.link }> { icon } </Link>
        )}
    </div>
};

export default SocialLinks;