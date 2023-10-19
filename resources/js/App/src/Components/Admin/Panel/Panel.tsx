import React, {FC, useState} from 'react';

import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import "./Panel.css";
import UserControl from "../UserControl/UserControl";
import ResearchControl from "../OncResearchControl/OncResearchControl";
import ResearchManagerControl from "../ResearchManagerControl/ResearchManagerControl";
import HospitalControl from "../HospitalControl/HospitalControl";


const Panel: FC= () => {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <aside className={`
             scroll-style
             is-border
             notification is-info is-light
             menu
             is-3-tablet
             panel-is-fixed
             mb-0
             px-6
             is-full-touch
             ${isActive ? 'panel-is-visible' : 'panel-hide-effect'}`}
              >
        <button onClick={()=>setIsActive(!isActive)} className={`delete mt-2`} />
        <p className="title is-size-5 has-text-centered">Панель администратора</p>
        <div className="mb-5">
          <UserControl />
        </div>
        <div className="mb-5">
          <ResearchControl />
        </div>
        <div className="mb-5">
          <ResearchManagerControl />
        </div>
        <div className="mb-5">
          <HospitalControl />
        </div>

      </aside>
      <button onClick={()=>setIsActive(!isActive)}
              className={`button
                          is-success
                          is-rounded
                          panel-button-is-fixed
                          ${isActive ? 'is-hidden' : ''}`}>
        Панель Администратора
        <KeyboardArrowRight />
      </button>
    </>
  );
};

export default Panel;
