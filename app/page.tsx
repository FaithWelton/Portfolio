"use client";

import { ButtonHTMLAttributes, CSSProperties, ReactNode, useEffect, useState } from "react";
import Glow from "./components/Animations/Neon/Glow";
import styles from "./page.module.css";

interface CardProps { title: string; children: React.ReactNode };
const Card = ({ title, children }: CardProps) => {
  return <div className={ styles.card }>
    <h2 className={ styles.title }> { title } </h2>
    <div className={ styles.content }> { children } </div>
  </div>
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { variant?: "primary" | "secondary"; };
const Button = ({ variant = "primary", className = "", ...props }: ButtonProps) => {
  return <button className={`${ styles.button } ${ styles[variant] } ${ className }` } {...props} />
};

interface ContainerProps { children: ReactNode; className?: string; size?: "sm" | "md" | "lg"; variant?: "default" | "danger" | "success" | "warning"; };
const Container = ({ children, className = "", size = "md", variant = "default" }: ContainerProps) => {
  return <div className={`${ styles.container } ${ styles[variant] } ${ styles[size] } ${ className }`}>
    <div className={ styles.content }>
      { children }
    </div>
  </div>
};

interface MenuItem { label: string; onClick: () => void; style?: {} };
interface MenuProps {
  items: MenuItem[];
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "danger" | "success" | "warning";
  animation?: "fade" | "bounce" | "elastic";
};

const RadialMenu = ({ items, className = "", size = "md", variant = "default", animation = "fade" }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    let list: MenuItem[] = [];

    items.forEach((item, index) => {
      const angle = (index * (360 / items.length)) * (Math.PI / 180);
      const radius = 100; // Distance from center
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      list.push({ ...item, style: { transform: `translate(${ x }px, ${ y }px)` } });
    });

    setMenuItems(list);
  }, [items]);

  return <div className={ `${ styles.menuContainer } ${ styles[variant] } ${ styles[size] } ${ isOpen ? styles.open : "" } ${ className }` }>
    <button className={ styles.centerButton } onClick={() => setIsOpen(!isOpen)}>
      { isOpen ? <h1> { "X" } </h1> : <h1> { "Menu" } </h1> }
    </button>

    <div className={styles.menuItems}>
      { menuItems.map((item, index) =>
        <Button
          key={ index }
          className={ styles.menuItem }
          style={ item.style }
          onClick={() => { item.onClick(); setIsOpen(false); }}
        >
          { item.label }
        </Button>
      )}
    </div>
  </div>
};

export default function Home() {
  const items = [
    { label: "Home", onClick: () => console.log("Home Clicked") },
    { label: "About", onClick: () => console.log("About Clicked") },
    { label: "Projects", onClick: () => console.log("Projects Clicked") },
  ];

  return <div style={{ height: "100%", width: "100%", overflow: "scroll" }}>
    <Card title="Welcome">
      <p> { "I'm a card, hello" } </p>
      <Button> Primary Button </Button>
      <Button variant="secondary"> Secondary Button </Button>
    </Card>

    <Container size="lg">
      { "default" }
    </Container>

    <Container size="sm" variant="danger">
      { "default" }
    </Container>

    <Container size="sm" variant="success">
      { "default" }
    </Container>

    <Container size="md" variant="warning">
      { "default" }
    </Container>

    <RadialMenu items={ items } />
  </div>


  // return <div className={ styles.container }>
  //   <div id="HEAD" className={ styles.head }>
  //       <Glow text="Hi I'm Faith!" />
  //   </div>
  // </div>
};