"use client";

import { useState } from "react";
import BlinkyText from "./components/Animations/Blink/BlinkyText";
import View from "./components/View/View";
import Menu from "./components/Menu/Menu";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Typing from "./components/Animations/Typing/Typing";

export default function Home() {
  const [selection, setSelection] = useState<any>("HOME");

  return <View>
    <div style={{ display: "flex", justifyContent: "center", width: "100%", height: "5%" }}>    
      <Typing text={["welcome to my portfolio"]} elementId={ "welcome" } />
      <BlinkyText> { "_" } </BlinkyText>
    </div>

    <div style={{ display: "flex", justifyContent: selection === "HOME" ? "center" : "space-evenly", paddingLeft: "1%", paddingRight: "1%", alignItems: "center", height: "90%", width: "100%" }}>
      { selection === "ABOUT" && <About /> }

      <Menu selection={ selection } setSelection={ setSelection } />

      { selection && selection.split("_")[0] === "PROJECTS" && <Projects selection={ selection } /> }
    </div>
  </View>
};