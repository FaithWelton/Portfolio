import pageStyles from "../../page.module.css";

export interface MenuItemProps {
    label: string;
    onClick: any;
};

const MenuItem = ({ label, onClick }: MenuItemProps) => <li className={ pageStyles.spacedText } onClick={ onClick }>
    <a> { label } </a>
</li>

export default MenuItem;