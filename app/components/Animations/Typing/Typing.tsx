import React, { CSSProperties } from "react";
import styles from "./typing.module.css";

type Props = {
  elementId: string;
  text: string;
  style?: CSSProperties;
  animated?: boolean;
  light?: boolean;
};

const Typing: React.FC<Props> = ({ elementId, text, animated, style, light }) =>
  <p id={ elementId } className={ `${ light ? styles.lightText : styles.text } ${ animated && styles.animate }` } style={{ ...style }}> { text } </p>

export default Typing;