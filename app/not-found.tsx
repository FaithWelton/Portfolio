import Image from "next/image";
import Typing from "./components/Animations/Typing/Typing";
import Glitchy from "./components/Animations/Glitch/Glitchy";

const NotFound = () => {        
	return <div style={{ height: "100%", width: "100%" }}>
        <Image
            src={ "/skeleton.svg" }
            alt="404 Not Found - Image"
            quality={ 100 }
            priority
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ border: "3px double #00fffc" }}
        />

        <div style={{ position: "relative", height: "fit-content", width: "200px", top: "20px" }}>
            <Typing text={ "404" } elementId="error" style={{ letterSpacing: 1, fontSize: 20 }}/>
            <Typing text={ "uh oh! a mysterious man appears to have stolen the page!" } elementId="error" style={{ letterSpacing: 1, fontSize: 10 }} />
        </div>
    </div>
};

export default NotFound;