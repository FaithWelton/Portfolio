import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

interface IconMapProps {
    icon: string;
    size?: number;
};

const IconMap: React.FC<IconMapProps> = ({ icon, size }) => {
    const iconMap: Record<string, JSX.Element> = {
        github: <FaGithub size={ size } />,
        linkedin: <FaLinkedinIn size={ size } />,
        email: <TbMailFilled size={ size } />,
    };

    return  iconMap[icon];
};

export default IconMap;

