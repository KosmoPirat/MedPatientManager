import React, { FC } from "react";

import Phone from "@material-ui/icons/Phone";

const HelpInfo: FC = () => {

  return (
    <div className="control is-flex is-flex-direction-column mr-5 is-size-5-touch">
      <div className="block has-text-right has-text-centered-touch mb-1">
        <span>Для получения информации звоните по номеру:</span>
      </div>
      <div className="block has-text-right has-text-centered-touch help-info_phone__mb">
        <span className="icon-text is-small mr-2">
          <Phone />
        </span>
        <span>+7 (926) 417-93-16</span>
      </div>
      <hr className="mt-0 help-info_separator__none"/>
    </div>
  );
};

export default HelpInfo;
