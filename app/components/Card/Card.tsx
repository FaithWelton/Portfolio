import styles from "./card.module.css";

interface CardProps {
    title: string;
    children: React.ReactNode
};

const Card = ({ title, children }: CardProps) => {
  return <div className={ styles.card }>
    <h2 className={ styles.title }> { title } </h2>
    <div className={ styles.content }> { children } </div>
  </div>
};

export default Card;