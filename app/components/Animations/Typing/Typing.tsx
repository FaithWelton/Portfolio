"use client";

import React, { useEffect, useState } from "react";
import styles from "./typing.module.css";

interface Props {
  text: string[];
  speed?: number;
  elementId: string;
  onTypingComplete?: any;
};

const Typing: React.FC<Props> = ({ text, speed = 150, elementId, onTypingComplete }) => {
  useEffect(() => {
    let i = 0;
    let lineIndex = 0;
    const targetElement = document.getElementById(elementId);

    function typeWriter() {
      if (!targetElement) return;

      if (i < text[lineIndex].length) {
        targetElement.innerHTML += text[lineIndex].charAt(i);
        i++;

        setTimeout(typeWriter, speed);
      } else if (lineIndex < text.length - 1) {
        setTimeout(() => {
          targetElement.innerHTML += "<br/>";
          lineIndex++;
          i = 0;
          typeWriter();
        }, speed * 2);
      } else if (onTypingComplete) onTypingComplete();
    };

    typeWriter();

    return () => { i = text[lineIndex]?.length || 0; };
  }, []);

  return <div id={ elementId } className={ `${ styles.spacedText }` } />;
};

export default Typing;