"use client";

import styles from "./template.module.css";
import Menu from "./components/Menu/Menu";
import View from "./components/View/View";
import Warn from "./components/Animations/Warn/Warn";
import Sidelines from "./components/Decoration/Sidelines/Sidelines";
import Sidebar from "./components/Sidebar/Sidebar";
import { Bouncy1, Bouncy2 } from "./components/Decoration/BouncyLines/Bouncy";
import SocialLinks from "./components/Social/socialLinks";

const Template = ({ children }: { children: React.ReactNode }) => {
    return <div className={ styles.template }>
        <Sidelines />
        <Bouncy1 /><Bouncy2 />
        
        <Sidebar />

        <Menu />

        <View>
            { children }
        </View>

        <SocialLinks />
        <Warn />
    </div>
};

export default Template;