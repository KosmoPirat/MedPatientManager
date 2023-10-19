import React, {FC, useEffect, useRef} from 'react';
import {useAction} from "../../redux/hooks/useAction";
import {useTypedSelector} from "../../redux/hooks/useTypedSelector";

import CancerCodeSearchSelect from "../CancerCodeSearchSelect/CancerCodeSearchSelect";
import CancerCodeParamSelect from "../CancerCodeParamSelect/CancerCodeParamSelect";
import CancerTypeSelect from "../CancerTypeSelect/CancerTypeSelect";
import CancerTypeParamSelect from "../CancerTypeParamSelect/CancerTypeParamSelect";

import "./SearchForm.css";
import SuccessModalForm from "../SuccessModalForm/SuccessModalForm";
import AddedModalForm from "../AddedModalForm/AddedModalForm";
import Search from "@material-ui/icons/Search";

const SearchForm: FC = () => {

  const mounted = useRef(false);
  const {
    checkResearch,
    toggleIsNotFoundStatus,
    filterResearchByType,
    filterResearchByTypeParam,
    resetResearches,
    setCancerCodeId,
  } = useAction();

  const {authUser} = useTypedSelector(state => state.authUser);
  const {
    researches,
    isNotFoundStatus,
    isShowCancerParamOption,
    isShowTypeParamOption,
    foundResearches,
    researchLoading,
    cancerCodeId,
    cancerCodeParamId,
    cancerTypeId,
    cancerTypeParamId,
    uploadData,
  } = useTypedSelector(state => state.researches);

  const {isAddDataStatus} = useTypedSelector(state => state.reportData);

  useEffect(() => {
    if (!mounted.current || !cancerTypeId) {
      mounted.current = true;
    } else {
      filterResearchByType(cancerTypeId);
    }
  }, [cancerTypeId]);

  useEffect(() => {
    if (!mounted.current || !cancerTypeParamId) {
      mounted.current = true;
    } else {
      filterResearchByTypeParam(cancerTypeParamId);
    }
  }, [cancerTypeParamId]);


  const handlerCheckResearch = () => {
    let cancerCodeParam = cancerCodeParamId
    if (cancerCodeParam) {
      if(cancerCodeParam!.find(item => +item === 0) === 0) cancerCodeParam = null;
    }
    checkResearch({
      cancerCodeId: cancerCodeId,
      cancerCodeParamId: cancerCodeParam,
      cancerTypeId: cancerTypeId,
      cancerTypeParamId: cancerTypeParamId,
      uploadData: uploadData,
      userId: authUser.id,
    });
    resetResearches();
  }

  const handlerNotFoundStatus = () => {
    toggleIsNotFoundStatus();
    setCancerCodeId(null);
  };

  return (

    <section className="box has-background-info-light mt-3">
      <h1 className="title has-text-centered is-size-4-desktop">
        Поиск исследований
      </h1>
      <div className="content is-flex is-flex-direction-column is-align-items-center is-relative">

        <CancerCodeSearchSelect />

        {
          researches.length ? <CancerTypeSelect/> : ""
        }

        {
          isShowTypeParamOption ? <CancerTypeParamSelect/> : ""
        }

        {
          isShowCancerParamOption  ? <CancerCodeParamSelect/> : ""
        }

        <SuccessModalForm/>
        <AddedModalForm />

        {
          cancerCodeId && cancerCodeParamId
          && cancerTypeId && cancerTypeParamId && !isNotFoundStatus ?
              <button
                onClick={() => handlerCheckResearch()}
                className={`button is-medium is-primary my-5 px-6 ${researchLoading ? 'is-loading' : ''}`}>
                <span>Найти исследование</span>
                <span className="icon is-small">
                  <Search />
                </span>
              </button> : ""
        }

        {
          isNotFoundStatus && !isAddDataStatus && !foundResearches.length  ?
            <div className="notification is-warning">
              <button onClick={() => handlerNotFoundStatus()} className="delete"/>
              <p className="is-size-5-desktop p-3">По вашеме запросу ничего не найдено, измените параметры ввода или свяжитесь с администратором</p>
            </div> : ""
        }
      </div>
    </section>
  );
};


export default SearchForm;
