"use client";

import { useEffect, useState } from "react";
import BlinkyText from "./components/Blink/BlinkyText";
import View from "./components/View/View";
import styles from "./page.module.css";
import Menu from "./components/Menu/Menu";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";

export default function Home() {
  const [selection, setSelection] = useState<any>("home");

  useEffect(() => {
    let i = 0;
    let txt = "welcome";
    let speed = 150; /* Speed / Duration of the effect in milliseconds */

    function typeWriter() {
      if (i < txt.length) {
        let textBox = document.getElementById("welcome-text");
        if (!textBox) return;

        textBox.innerHTML += txt.charAt(i);
        i++;

        setTimeout(typeWriter, speed);
      }
    };

    typeWriter();
  }, []);
  
  return <View>
    <div style={{ display: "flex", justifyContent: "center", width: "100%", height: "5%" }}>    
      <span className={ styles.spacedText } id="welcome-text" style={{ wordSpacing: -20 }} />
      <BlinkyText> { "_" } </BlinkyText>
    </div>

    <div style={{ display: "flex", justifyContent: selection === "HOME" ? "center" : "space-evenly", paddingLeft: "1%", paddingRight: "1%", alignItems: "center", height: "90%", width: "100%" }}>
      { selection === "ABOUT" && <About /> }

      <Menu selection={ selection } setSelection={ setSelection } />

      { selection && selection.split("_")[0] === "PROJECTS" && <Projects selection={ selection } /> }
    </div>
  </View>
};