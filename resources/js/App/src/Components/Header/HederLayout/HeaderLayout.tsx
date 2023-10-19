import React, {FC, useState} from 'react';

import Login from "../Login/Login";
import Logo from "../Logo/Logo";
import AuthIfo from "../AuthInfo/AuthIfo";
import HelpInfo from "../HelpInfo/HelpInfo";

import "./HeaderLayout.css";
import {useTypedSelector} from "../../../redux/hooks/useTypedSelector";
import Logout from "../Logout/Logout";



const HeaderLayout: FC = () => {
  const {isAuth} = useTypedSelector(state => state.authUser);
  const [isActive, setIsActive] = useState(false);

  return (

    <nav className="header-layout_shadow header-layout_height navbar is-info"
         role="navigation"
         aria-label="dropdown navigation">
      <div className="navbar-brand py-4 ml-3">
        <Logo />
        <div onClick={()=>setIsActive(!isActive)}
             className={`navbar-burger mr-2 ${isActive ? 'is-active' : ''}`}
             role="button"
             aria-label="menu"
             aria-expanded="false"
             data-target="navbarBurger">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </div>
      </div>
      <div id="navbarBurger" className={`navbar-menu is-expanded ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className={`field is-grouped is-justify-content-center ${!isAuth ? 'help-layout_flex-direction__column' : ''}`}>
                {
                  isAuth ? <AuthIfo /> : <HelpInfo />
                }
              <div className="control">
                {
                  isAuth ? <Logout /> : <Login />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderLayout;
