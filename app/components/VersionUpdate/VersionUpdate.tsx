import { format } from "date-fns";
import Glitchy from "../Animations/Glitch/Glitchy";
import Typing from "../Animations/Typing/Typing";
import { useEffect, useState } from "react";
import { GetProject } from "@/app/hooks/useGithub";
 
const VersionUpdate = () => {
  const [dateModified, setDateModified] = useState<Date>(new Date);
  const style = { fontSize: "5px", letterSpacing: "3px", };

  // useEffect(() => {
  //   const GetData = async () => {
  //     let repoInfo = await GetProject("portfolio");
  //     if (!repoInfo) return;

  //     let newDate = new Date(repoInfo.updated_at);
  //     setDateModified(newDate);
  //   };
    
  //   GetData();
  // }, []);
    
  return <div style={{ display: "flex", flexDirection: "column", width: "100%", paddingTop: "5px", paddingBottom: "10px", paddingLeft: "5px", height: "6%", padding: "5px" }}>
    <Glitchy>
      <Typing text={ `Last Update: ${ format(dateModified, "EEEEE MMMMM dd yyyy") }` } elementId={ "last_update" } style={ style } />
      <Typing text={ `${ format(new Date(), "EEEEE MMMMM dd yyyy") }` } elementId={ "today" } style={ style } />
      <Typing text={ `V.1.0.` } elementId={ "version" } style={ style } />
    </Glitchy>
  </div>
};

export default VersionUpdate;