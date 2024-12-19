"use client";

import { useState } from "react";
import BlinkyText from "./components/Animations/Blink/BlinkyText";
import View from "./components/View/View";
import Menu from "./components/Menu/Menu";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Typing from "./components/Animations/Typing/Typing";
import Container from "./components/Container/container";
import styles from "./page.module.css";
import Warn from "./components/Animations/Warn/Warn";

export default function Home() {
  const [selection, setSelection] = useState<any>("HOME");

  const exclaim = <svg height="100%" width="100%" fill="#000000" viewBox="0 0 32 32" version="1.1" stroke="#ffffff">
    <path d="M10.656 8.864q0-2.208 1.568-3.776t3.776-1.568 3.776 1.568 1.6 3.776q0 0.256-0.064 0.448l-1.76 6.944q-0.096 1.408-1.12 2.368t-2.432 0.96q-1.376 0-2.4-0.928t-1.152-2.304q-0.32-0.96-0.672-2.112t-0.736-2.784-0.384-2.592zM12.416 24.928q0-1.472 1.056-2.496t2.528-1.056 2.528 1.056 1.056 2.496q0 1.504-1.056 2.528t-2.528 1.056-2.528-1.056-1.056-2.528z" />
  </svg>

  return <>
    <View>
      <div style={{ display: "flex", justifyContent: "center", width: "100%", height: "5%" }}>    
        <Typing text={["> welcome to my portfolio"]} elementId={ "welcome" } />
        <BlinkyText> { "_" } </BlinkyText>
      </div>

      <div style={{ display: "flex", justifyContent: selection === "HOME" ? "center" : "space-evenly", paddingLeft: "1%", paddingRight: "1%", alignItems: "center", height: "90%", width: "100%" }}>
        <Menu selection={ selection } setSelection={ setSelection } />

        { selection && selection.split("_")[0] === "PROJECTS" && selection.split("_")[1] !== undefined && <Container><Projects selection={ selection } /></Container> }
        { selection === "ABOUT" && <Container><About /></Container> }
      </div>
    </View>
  </>
};