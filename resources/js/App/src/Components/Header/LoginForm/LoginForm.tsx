import React, {FC, useRef} from 'react';

import Check from '@material-ui/icons/Check';
import Lock from '@material-ui/icons/Lock';

import {useTypedSelector} from "../../../redux/hooks/useTypedSelector";
import {useAction} from "../../../redux/hooks/useAction";

import "./LoginForm.css";

const LoginForm: FC = () => {
  const {error} = useTypedSelector(state => state.authUser);
  const {loginUser} = useAction();


  const loginInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const logIn = (event: React.FormEvent) => {
    event.preventDefault();
    const login = loginInputRef.current?.value;
    const password = passwordInputRef.current?.value;
    loginUser(login, password);
  };

  const errorCheck =(str: string) => {
    if (RegExp(/.*401.*/).test(str)) return 'Вы не авторизованы';
    if (RegExp(/.*422.*/).test(str)) return 'Введен не правильный логин или пароль';
    if (RegExp(/.*429.*/).test(str)) return 'Привышено количество попыток авторизации, повторите попытку через 1 - 2 минуты';

  }

  return (
    <div className="navbar-dropdown login-form-width is-right">
      <p className="subtitle-6 has-text-centered mb-3">Введите имя пользователя и пароль для авторизации.</p>
      <form className="navbar-item is-flex is-flex-direction-column pl-3 pr-3">
        <div className="field">
          <div className="control has-icons-right">
            <input ref={loginInputRef} className="input" type="login" placeholder="Login" />
            <span className="icon is-small is-right">
              <Check />
            </span>
          </div>
        </div>
        <div className="field">
          <div className="control has-icons-left">
            <input ref={passwordInputRef} className="input" type="password" placeholder="Password" />
            <span className="icon is-small is-left">
            <Lock />
          </span>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button onClick={logIn} className="button is-success">
              Войти
            </button>
          </div>
        </div>
      </form>
      {
        error ?
          <>
            <hr className="navbar-divider navbar-divider__display-block" />
            <div className="navbar-item">
              {errorCheck(error)}
            </div>
          </>
          :
          ""
      }
    </div>



  );
};

export default LoginForm;
