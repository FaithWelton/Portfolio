import { useEffect, useState } from "react";
import Glitchy from "../Animations/Glitch/Glitchy";
import Typing from "../Animations/Typing/Typing";
import { GetProject } from "@/app/hooks/useGithub";
import { UserRepo } from "@/app/util/types";
import styles from "./vu.module.css";
import { format } from "date-fns";

const VersionUpdate = () => {
  const [portfolio, setPortfolio] = useState<UserRepo | null>(null);
  const [dateModified, setDateModified] = useState<Date>(new Date());
  const style = { fontSize: "5px", letterSpacing: "3px", };

  useEffect(() => {
    const GetData = async () => {
      let repoInfo = await GetProject("portfolio");
      if (!repoInfo) return;
      setPortfolio(repoInfo);
    };
  
    if (!portfolio) GetData();
    else {
      let newDate = new Date(portfolio.updated_at);
      setDateModified(newDate);
    };
  }, [portfolio]);
    
  return <div className={ styles.container }>
    <Glitchy>
      <Typing text={ `Last Update: ${ format(dateModified, "EEEEE MMMMM dd yyyy") }` } elementId={ "last_update" } style={ style } />
    </Glitchy>

    <Glitchy>
      <Typing text={ `${ format(new Date(), "EEEEE MMMMM dd yyyy") }` } elementId={ "today" } style={ style } />
    </Glitchy>

    <Glitchy>
      <Typing text={ `V.1.0.` } elementId={ "version" } style={ style } />
    </Glitchy>
  </div>
};

export default VersionUpdate;