import React, {FC} from "react";
import {useHistory} from "react-router-dom";

import {useTypedSelector} from "../../../redux/hooks/useTypedSelector";
import {useAction} from "../../../redux/hooks/useAction";
import ExitToApp from "@material-ui/icons/ExitToApp";

const Logout: FC = () => {
  const {authUserLoading} = useTypedSelector(state => state.authUser);
  const {logoutUser, toggleAuthFormVisibility, resetResearches} = useAction();
  const history = useHistory();

  const logOut = () => {
    history.push('/');
    toggleAuthFormVisibility();
    resetResearches();
    logoutUser();
    document.cookie = 'medpatientmanager_session' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  return (
    <div onClick={logOut} className={`
        button
        is-dark
        is-size-5
        ${authUserLoading ? 'is-loading' : ''}`
      }>
      <span className="px-3">Выйти</span>
      <span className="icon is-small">
        <ExitToApp />
      </span>
    </div>
  );
};

export default Logout;
