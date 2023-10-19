import React, {FC} from 'react';

import InputMask from 'react-input-mask'

import {useTypedSelector} from "../../../redux/hooks/useTypedSelector";
import {useAction} from "../../../redux/hooks/useAction";

import {isValidPhone} from "../../../helpers/validationHelper";

const UserPhoneInput: FC = () => {

  const {userPhone} = useTypedSelector(state => state.users);
  const {setUserPhone} = useAction();

  return (
    <div className="is-flex is-flex-direction-column is-align-items-center my-3">
      <h5>Введите номер телефона пациента</h5>
      <InputMask
        className={`select-search__input ${isValidPhone(userPhone) ? "" : "input is-danger"}`}
        value={userPhone}
        mask="+7 (999) 999-99-99"
        onChange={(e: any) => setUserPhone(e.target.value)}
        placeholder="+7 (999) 999-99" />
        {
          isValidPhone(userPhone) ? "" : <p className="is-size-7 has-text-danger">Поле обязательное для заполнения</p>
        }

    </div>
  );
};


export default UserPhoneInput;
