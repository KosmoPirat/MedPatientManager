import React, { FC } from "react";

import AccountBox from "@material-ui/icons/AccountBox";
import Group from "@material-ui/icons/Group";
import {useTypedSelector} from "../../../redux/hooks/useTypedSelector";


const AuthInfo: FC = () => {
  const {authUser} = useTypedSelector(state => state.authUser);

  return (
    <div className="control is-flex is-flex-direction-column mr-5">
      <div className="block mb-1">
        <span className="icon-text is-small mr-2">
          <AccountBox />
        </span>
        <span>{authUser.name}</span>
      </div>
      <div className="block">
        <span className="icon-text is-small mr-2">
          <Group />
        </span>
        <span>Статус аккаунта: {authUser.role}</span>
      </div>
    </div>
  );
};

export default AuthInfo;
