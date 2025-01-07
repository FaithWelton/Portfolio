import React, { CSSProperties } from "react";
import styles from "./typing.module.css";

interface Props {
  text: string;
  elementId: string;
  style?: CSSProperties;
};

const Typing: React.FC<Props> = ({ text, elementId, style }) => {
  return <p id={ elementId } className={ styles.text } style={{ ...style }}> { text } </p>
};

export default Typing;