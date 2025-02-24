"use client";

import styles from "./template.module.css";
import Menu, { MenuItem } from "./components/Menu/Menu";
import ThemeSwitcher from "./components/ThemeProvider/ThemeSwitcher";
import { usePathname, useRouter } from "next/navigation";
import Glitchy from "./components/Animations/Glitch/Glitchy";
import Glow from "./components/Animations/Neon/Glow";
import SocialLinks from "./components/Social/socialLinks";

const Template = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname();
    
    const items: MenuItem[] = [
        { label: "Home", onClick: () => router.push("/") },
        { label: "About", onClick: () => router.push("/about") },
        { label: "Projects", onClick: () => router.push("/projects") },
    ];
    
    return <div style={{ background: "var(--background)", color: "var(--foreground)", height: "100%", width: "100%" }}>
        <div>
            <nav className={ styles.container }>
                <ThemeSwitcher />
            </nav>

            <div id="page" className={ styles.page }>
                <Glitchy> <Glow text={ pathname === "/" ? "/home" : pathname } color="pink" /> </Glitchy>
            </div>

            <div className={ styles.divider } />
        </div>
        
        <Menu items={ items } />
        
        <main className={ styles.container }>
            { children }

            <div className={ styles.divider } />
        </main>
        
        <SocialLinks />
    </div>
};

export default Template;