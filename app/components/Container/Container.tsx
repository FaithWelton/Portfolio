import { CSSProperties, ReactNode } from "react";
import styles from "./container.module.css";
import Image from "next/image";
import Glitchy from "../Animations/Glitch/Glitchy";

interface ContainerProps {
    children?: ReactNode;
    className?: string;
    contentClassName?: string;
    size?: "sm" | "md" | "lg" | "fill";
    variant?: "default" | "danger" | "success" | "warning";
    image?: string;
    imageAlt?: string;
    title?: string[];
    style?: CSSProperties;
};

const Container = ({ children, className = "", contentClassName = "", size = "md", variant = "default", image, imageAlt, title, style }: ContainerProps) => {
  return <div className={`${ styles.container } ${ styles[variant] } ${ styles[size] } ${ className }`}>
    <div className={ `${ styles.content } ${ contentClassName }` } style={{ ...style }}>
      { image && imageAlt &&
        <div className={ styles.imageWrapper }>
          <Glitchy>
            <Image className={ styles.image } src={ image } alt={ imageAlt } fill priority sizes="100%"/>
          </Glitchy>
        </div>
      }

      { title && <div style={{ position: "absolute", right: 10, top: 10 }}>
        { title.map((text, index) => <div key={ index }> { text } </div> )}
      </div> }


      { children && children }
    </div>
  </div>
};

export default Container;