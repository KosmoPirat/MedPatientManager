import React, {FC} from 'react';
import SelectSearch, {fuzzySearch} from "react-select-search";
import {getTypeOptions} from "../../helpers/searchFormHelper";
import {useTypedSelector} from "../../redux/hooks/useTypedSelector";
import {useAction} from "../../redux/hooks/useAction";


const CancerTypeSelect: FC = () => {

  const {foundResearches, cancerTypeParamId} = useTypedSelector(state => state.researches);
  const{setCancerTypeParamId} = useAction();
    return (
      <>
        {
          getTypeOptions(foundResearches, 'cancerTypeParam').length !== 0 &&
          <div className="is-flex is-flex-direction-column is-align-items-center my-4">
            <h5 className="has-text-centered">Выберите линию / этап лечения, планируемую в настоящее время</h5>
            <SelectSearch
              className={`select-search select-search__select`}
              options={getTypeOptions(foundResearches!, 'cancerTypeParam')}
              value={cancerTypeParamId?.toString()}
              filterOptions={fuzzySearch}
              onChange={(e: any) => setCancerTypeParamId(e)}
              emptyMessage="По запросу ничего не найдено"
              placeholder="Выберите особенности типа заболевания"/>
          </div>
        }
      </>
  );
};

export default CancerTypeSelect;
