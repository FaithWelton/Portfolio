import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import Glitchy from "../components/Animations/Glitch/Glitchy";

interface IconMapProps {
    icon: string;
    size?: number;
    color?: string;
};

const IconMap: React.FC<IconMapProps> = ({ icon, size }) => {
    const iconMap: Record<string, JSX.Element> = {
        github: <FaGithub size={ size } />,
        linkedin: <FaLinkedinIn size={ size } />,
        email: <TbMailFilled size={ size } />,
    };

    return <Glitchy> { iconMap[icon] } </Glitchy>;
};

export default IconMap;

