"use client";

import { useState } from "react";
import View from "./components/View/View";
import SocialLinks from "./components/Social/socialLinks";
import VersionUpdate from "./components/VersionUpdate/VersionUpdate";
import Menu from "./components/Menu/Menu";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import styles from "./page.module.css";
import Warn from "./components/Animations/Warn/Warn";

export default function Home() {
  const [selection, setSelection] = useState<any>("HOME");

  return <div className={ styles.openScreen }>
    <View>
      <VersionUpdate />

      <div className={ styles.mainContainer }>
          <Menu selection={ selection } setSelection={ setSelection } />

          { selection === "PROJECTS" && <Projects /> }
          { selection === "ABOUT" && <About /> }
      </div>

      <SocialLinks />

      <Warn />
    </View>
  </div>
};