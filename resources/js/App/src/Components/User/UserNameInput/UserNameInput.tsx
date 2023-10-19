import React, {FC} from 'react';
import {useTypedSelector} from "../../../redux/hooks/useTypedSelector";
import {useAction} from "../../../redux/hooks/useAction";
import {isValidPhone} from "../../../helpers/validationHelper";

const UserNameInput: FC = () => {

  const {userName} = useTypedSelector(state => state.users);
  const {setUserName} = useAction();

  return (
    <div className="is-flex is-flex-direction-column is-align-items-center my-3">
      <h5>Введите ФИО пациента</h5>
      <input
        className={`select-search__input ${ (userName !== "" ) ? "" : "input is-danger"}`}
        value={userName}
        onChange={(e: any) => setUserName(e.target.value)}
        placeholder="Введите ФИО пациента" />
      {
        (userName !== "" ) ? "" : <p className="is-size-7 has-text-danger">Поле обязательное для заполнения</p>
      }
    </div>
  );
};


export default UserNameInput;
