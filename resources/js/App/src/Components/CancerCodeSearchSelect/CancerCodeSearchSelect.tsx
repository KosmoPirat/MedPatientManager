import React, {FC} from 'react';
import SelectSearch, {fuzzySearch} from "react-select-search";
import {useTypedSelector} from "../../redux/hooks/useTypedSelector";
import {getOptionForSearch} from "../../helpers/searchFormHelper";
import {useAction} from "../../redux/hooks/useAction";

const CancerCodeSearchSelect: FC = () => {

  const {cancerCodeLoading, cancerCodes} = useTypedSelector(state => state.cancerCodes);
  const {researchLoading, cancerCodeId} = useTypedSelector(state => state.researches);
  const {
    setCancerCodeId,
    setCancerTypeId,
    findResearches,
    setCancerTypeParamId,
    setCancerCodeParamId,
    resetResearches,
  } = useAction();

  const  handlerCancerCode = (id: any) => {
    setCancerCodeId(id);
    setCancerTypeId(null);
    setCancerTypeParamId(null);
    setCancerCodeParamId(null);
    resetResearches();
    findResearches(id);
  }

  return (
    <div className="is-flex is-flex-direction-column is-align-items-center my-4">
      <h5 className="has-text-centered">Выберите заболевание</h5>
      <p className="has-text-centered">(Введите код МКБ или выберите диагноз из списка)</p>
      <SelectSearch
        className={`select-search select-search__select ${cancerCodeLoading || researchLoading ? 'is-loading' : ''}`}
        options={getOptionForSearch(cancerCodes)}
        search
        value={cancerCodeId?.toString()}
        filterOptions={fuzzySearch}
        onChange={(e: any) => handlerCancerCode(e)}
        emptyMessage="По запросу ничего не найдено"
        placeholder="Введите код заболевания" />
    </div>
  );
};


export default CancerCodeSearchSelect;
