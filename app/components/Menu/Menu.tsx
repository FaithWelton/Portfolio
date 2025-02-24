"use client";

import { useState } from "react";
import styles from "./menu.module.css";

export interface MenuItem {
  label: string;
  onClick: () => void;
  style?: {};
};

interface MenuProps {
  items: MenuItem[];
  className?: string;
};

const Menu = ({ items }: MenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return <div className={ styles.container }>
    <div className={`${ styles.menu } ${ isOpen ? styles.open : "" }`}>
      { items.map((item, index) =>
        <div key={ index } className={ styles.menuItem } onClick={() => item.onClick() }>
          { item.label }
        </div>
      )}
    </div>

    <button className={ styles.toggle } onClick={() => setIsOpen(!isOpen)}>
      { "Menu" }
    </button>
  </div>
};

export default Menu;