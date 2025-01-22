import React, { CSSProperties } from "react";
import styles from "./typing.module.css";

type Props = {
  text: string;
  elementId: string;
  style?: CSSProperties;
  animated?: boolean;
};

const Typing: React.FC<Props> = ({ text, elementId, animated, style }) =>
  <p id={ elementId } className={ `${ styles.text } ${ animated && styles.animate }` } style={{ ...style }}> { text } </p>

export default Typing;