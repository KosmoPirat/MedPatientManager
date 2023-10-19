import React, {FC} from 'react';
import SelectSearch, {fuzzySearch} from "react-select-search";
import {getOptionForSearch, getTypeOptions} from "../../helpers/searchFormHelper";
import {useTypedSelector} from "../../redux/hooks/useTypedSelector";
import {useAction} from "../../redux/hooks/useAction";


const CancerTypeSelect: FC = () => {

  const {cancerTypeId} = useTypedSelector(state => state.researches);
  const{setCancerTypeId, setCancerTypeParamId, setCancerCodeParamId,} = useAction();
  const {cancerTypes} = useTypedSelector(state => state.cancerTypes);

  const  handlerCancerCode = (id: any) => {
    setCancerTypeParamId(null);
    setCancerCodeParamId(null);
    setCancerTypeId(id);
  }

    return (
      <>
        {
          <div className="is-flex is-flex-direction-column is-align-items-center my-4">
            <h5 className="has-text-centered">Выберите распространенность заболевания</h5>
            <SelectSearch
              className={`select-search select-search__select`}
              options={getOptionForSearch(cancerTypes)}
              value={cancerTypeId?.toString()}
              filterOptions={fuzzySearch}
              onChange={(e: any) => handlerCancerCode(e)}
              placeholder="Выберите тип заболевания"/>
          </div>
        }
      </>
  );
};

export default CancerTypeSelect;
