import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {useAction} from "../../redux/hooks/useAction";
import {useTypedSelector} from "../../redux/hooks/useTypedSelector";

import Send from "@material-ui/icons/Send";
import {getHospitalId, getResearchName} from "../../helpers/searchFormHelper";
import Compressor from 'compressorjs';


const SuccessFormButton: FC = () => {

  const {
    createReportData,
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

  const {
    foundResearches,
    cancerCodeId,
    cancerCodeParamId,
    cancerTypeId,
    cancerTypeParamId,
    uploadData,
  } = useTypedSelector(state => state.researches);
  const {userName, userPhone} = useTypedSelector(state => state.users);
  const { authUser, isAuth } = useTypedSelector(state => state.authUser);
  const { reportDataLoading } = useTypedSelector(state => state.reportData);

   const compress = async (files: FileList, formData: FormData) => {
    let index = 0;
    for (const file of Object.values(files)) {
      index += 1;
      if(file.type !== 'image/jpeg' && file.type !== 'image/png') formData.append(`uploadData${index}`, file, file.name);
      else {
        await new Promise((resolve, reject) => {
          new Compressor(file, {
            quality: 0.5,
            width: 800,
            success(result) {
              // Use result. For example upload to server.
              formData.append(`uploadData${index}`, result, file.name);
              resolve(resolve);
            },
            error(reject) {
              console.log(reject);
            },
          });
        });
      }

    }
  }

  const handlerAddReportData = () => {
    const formData = new FormData();
    const researchName = getResearchName(foundResearches);
    const cancerCodeParam = cancerCodeParamId ? cancerCodeParamId.toString() : "";
    const hospitals = getHospitalId(foundResearches).toString();
    formData.append("researchName", researchName);
    formData.append("cancerCodeId", cancerCodeId!.toString());
    formData.append("cancerCodeParamId", cancerCodeParam);
    formData.append("hospitalId", hospitals);
    formData.append("cancerTypeId", cancerTypeId!.toString());
    formData.append("cancerTypeParamId", cancerTypeParamId!.toString());

    if (isAuth) {
      formData.append("userId", authUser.id.toString());
      formData.append("name", userName);
      formData.append("phone", userPhone);
    } else {
      formData.append("name", userName);
      formData.append("phone", userPhone);
    }

    if(uploadData === null) {
      formData.append(`uploadData`, "");
      createReportData(formData);
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
    else {
        compress(uploadData, formData)
          .then((result) => {
            console.log("Compress success");
          })
          .catch((err) => {
            console.log("Compress error");
          })
          .finally(() => {
            createReportData(formData);
            setCancerCodeId(null);
            setCancerCodeParamId(null);
            setCancerTypeId(null);
            setCancerTypeParamId(null);
            addFiles(null);
            setUserName('');
            setUserPhone('');
            resetResearches();
            toggleIsFindStatus();
            console.log("Compress complete");
          });
    }
  }

  const isSubmitButtonActive = () => {
     if(isAuth) return false;
     return userName == "" || userPhone == "";
  }

  return (
    <div className="is-flex is-flex-direction-column is-align-items-center">
      <button
        disabled={isSubmitButtonActive()}
        onClick={() => handlerAddReportData()}
        className={`button is-primary is-medium is-size-5-touch ${reportDataLoading ? 'is-loading' : ''}`}>
        <span>Отправить данные</span>
        <span className="icon is-small">
          <Send />
        </span>
      </button>

      <p className="is-size-6 my-3 has-text-centered">
        Отправляя данные через форму регистрации заявок вы даете согласие на обработку персональных данных &nbsp;
        <Link to='./upload/privacy_policy.pdf' target='_blank'>
          <strong>политика обработки персональных данных</strong>
        </Link>
      </p>

    </div>
  );
};


export default SuccessFormButton;
