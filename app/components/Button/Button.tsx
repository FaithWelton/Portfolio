import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { variant?: "primary" | "secondary"; };
const Button = ({ variant = "primary", className = "", ...props }: ButtonProps) => {
  return <button className={`${ styles.button } ${ styles[variant] } ${ className }` } {...props} />
};

export default Button;