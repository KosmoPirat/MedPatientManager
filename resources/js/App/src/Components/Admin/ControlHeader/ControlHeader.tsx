import React, {FC} from 'react';
import {ControlHeaderData} from "../ControlInterfaces/ControlInterfaces";


const ControlHeader: FC<ControlHeaderData> = ({title, icon}) => {

  return (
      <header className="card-header has-background-primary-dark">
        <p className="card-header-title has-text-white is-size-4-desktop">
          {title}
        </p>
        <div className="card-header-icon has-text-white" aria-label="more options">
          {icon}
        </div>
      </header>
  );
}

export default ControlHeader;
