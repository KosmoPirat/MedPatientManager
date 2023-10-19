import React, {FC} from 'react';
import SelectSearch, {fuzzySearch} from "react-select-search";
import {getCancerCodeParamOption} from "../../helpers/searchFormHelper";
import {useTypedSelector} from "../../redux/hooks/useTypedSelector";
import {useAction} from "../../redux/hooks/useAction";


const CancerCodeParamSelect: FC = () => {

  const {foundResearches, cancerCodeParamId} = useTypedSelector(state => state.researches);
  const{setCancerCodeParamId} = useAction();
    return (
      <>
        {
          getCancerCodeParamOption(foundResearches).length !== 0 &&
          <div className="is-flex is-flex-direction-column is-align-items-center my-4">
            <h5 className="has-text-centered">Выберите подтип опухоли</h5>
            <SelectSearch
              className={`select-search select-search__select`}
              options={getCancerCodeParamOption(foundResearches)}
              multiple
              value={cancerCodeParamId?.map(param => param.toString())}
              closeOnSelect={false}
              printOptions="on-focus"
              filterOptions={fuzzySearch}
              onChange={(e: any) => setCancerCodeParamId(e)}
              placeholder="Выберите особенности заболевания"/>
          </div>
        }
      </>
  );
};

export default CancerCodeParamSelect;
