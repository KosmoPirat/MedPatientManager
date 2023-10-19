import React, {FC, useState} from 'react';
import {useAction} from "../../redux/hooks/useAction";
import {useTypedSelector} from "../../redux/hooks/useTypedSelector";

import PatientDataInput from "../PatientDataInput/PatientDataInput";
import SuccessFormButton from "./SuccesFormButton";

import ThumbUp from "@material-ui/icons/ThumbUp";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import UserNameInput from "../User/UserNameInput/UserNameInput";
import UserPhoneInput from "../User/UserPhoneInput/UserPhoneInput";


const SuccessModalForm: FC = () => {

  const [isShowDataInput, setIsShowDataInput] = useState(false);
  const {isFindStatus} = useTypedSelector(state => state.researches);
  const { isAuth } = useTypedSelector(state => state.authUser);

  const {
    toggleIsFindStatus,
    setCancerCodeId,
    setCancerCodeParamId,
    setCancerTypeId,
    setCancerTypeParamId,
    addFiles,
    setUserName,
    setUserPhone,
    resetResearches,
  } = useAction();

  const closeModalHandler = () => {
    setCancerCodeId(null);
    setCancerCodeParamId(null);
    setCancerTypeId(null);
    setCancerTypeParamId(null);
    addFiles(null);
    setUserName('');
    setUserPhone('');
    resetResearches();
    toggleIsFindStatus();
  }

  return (
    <div className={`modal ${isFindStatus ? "is-active" : ""}`}>
      <div className="modal-background"/>
      <div className="modal-content">
        <article className="message is-primary">
          <div className="message-header py-4">
            <span className="icon">
              <ThumbUp />
            </span>
            <span className="is-size-3-desktop">Отлично! Исследование найдено</span>
            <button onClick={() => closeModalHandler()} className="delete"  aria-label="delete"/>
          </div>
          <div className="message-body px-4 py-5  is-flex is-flex-direction-column is-align-items-center">
            <UserNameInput/>
            <UserPhoneInput/>
            <div className={`dropdown mb-5 ${isShowDataInput ? 'is-active' : ""}`}>
              <div className="dropdown-trigger">
                <button className="button" onClick={() => setIsShowDataInput(!isShowDataInput)} aria-haspopup="true" aria-controls="dropdown-menu">
                  <span className="is-size-7-mobile">Кликните для загрузки данных о заболевании (опционально)</span>
                  <span className="icon is-small">
                    <KeyboardArrowDown />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content notification">
                  <button className="delete" onClick={() => setIsShowDataInput(!isShowDataInput)}/>
                  <PatientDataInput />
                </div>
              </div>
            </div>
            <SuccessFormButton />
          </div>
        </article>
      </div>
      <button onClick={() => toggleIsFindStatus()} className="modal-close is-large" aria-label="close"/>
    </div>
  );
};


export default SuccessModalForm;
