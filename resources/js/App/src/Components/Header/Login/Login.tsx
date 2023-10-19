import React, {FC, useState} from 'react';

import {useTypedSelector} from "../../../redux/hooks/useTypedSelector";
import {useAction} from "../../../redux/hooks/useAction";

import LoginForm from "../LoginForm/LoginForm";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";

const Login: FC = () => {
  const {authUserLoading, isFormActive} = useTypedSelector(state => state.authUser);
  const {toggleAuthFormVisibility} = useAction();

  const toggleDropDownItem = () => {
    toggleAuthFormVisibility();
  };
  return (
    <div className={`navbar-item has-dropdown ${isFormActive ? 'is-active' : ''}`}>
      <div className={`
          is-hidden-touch
          button
          is-link
          is-size-5
          has-text-white
          ${authUserLoading ? 'is-loading' : ''}`}
          onClick={toggleDropDownItem}
        >
        <span className="px-3">Авторизация</span>
        <span className="icon is-small">
          <ArrowDropDown />
        </span>
      </div>

      <LoginForm />
    </div>
  );
};

export default Login;
