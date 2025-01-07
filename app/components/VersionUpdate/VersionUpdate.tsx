import { format } from "date-fns";
import Glitchy from "../Animations/Glitch/Glitchy";
import Typing from "../Animations/Typing/Typing";

const VersionUpdate = () => {
    const modifiedDate = new Date();
    const lastUpdate = `> Last Update: ${ format(modifiedDate, "EEEEE MMMMM dd yyyy") }`;
    const today = `> ${ format(new Date(), "EEEEE MMMMM dd yyyy") }`;
    const version = "1.0.";
  
    return <Glitchy style={{ width: "100%", paddingTop: "5px", paddingBottom: "10px", paddingLeft: "5px", height: "6%", padding: "5px" }}>
      <Typing text={ lastUpdate } elementId={ "last_update" } />
      <Typing text={ today } elementId={ "today" } />
      <Typing text={ `> V.${ version }` } elementId={ "version" } />
    </Glitchy>
};

export default VersionUpdate;