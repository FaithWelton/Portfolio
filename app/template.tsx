"use client";

import styles from "./template.module.css";
import Menu from "./components/Menu/Menu";
import View from "./components/View/View";
import Warn from "./components/Animations/Warn/Warn";
import Sidelines from "./components/Decoration/Sidelines/Sidelines";
import Sidebar from "./components/Sidebar/Sidebar";
import { Bouncy1, Bouncy2 } from "./components/Decoration/BouncyLines/Bouncy";
import SocialLinks from "./components/Social/socialLinks";
import GridBackground from "./components/Animations/GridBackground/gridbg";
import ThemeSwitcher from "./components/ThemeProvider/ThemeSwitcher";

const Template = ({ children }: { children: React.ReactNode }) => {
    return <div style={{ background: "hsl(var(--background))", color: "hsl(var(--foreground))", height: "100%", width: "100%" }}>
        <header>
            <nav className={ styles.container }>
                <ThemeSwitcher />
            </nav>
        </header>
        
        <main className={ styles.container }>
            { children }
        </main>
    </div>

    // return <div className={ styles.template }>
    //     <GridBackground />

    //     <Sidelines />
    //     <Bouncy1 /><Bouncy2 />
        
    //     <Sidebar />

    //     <Menu />

    //     <View>
    //         { children }
    //     </View>

    //     <SocialLinks />
    //     <Warn />
    // </div>
};

export default Template;