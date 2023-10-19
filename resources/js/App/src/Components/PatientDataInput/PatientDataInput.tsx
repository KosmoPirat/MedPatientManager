import React, {FC} from 'react';
import {useTypedSelector} from "../../redux/hooks/useTypedSelector";
import {useAction} from "../../redux/hooks/useAction";

import CloudUpload from "@material-ui/icons/CloudUpload";

const PatientDataInput: FC = () => {

  const {uploadData} = useTypedSelector(state => state.researches);
  const{addFiles} = useAction();

  const inputData = (data: FileList | null) => {
    if(data == null) return "";
    return Object.values(data).map(item => {
      return item.name;
    }).toString()
  }

    return (
      <>
        {
          <div className="is-flex is-flex-direction-column is-align-items-center mb-3">
            <h5 className="has-text-centered pt-3">Прикрепите данные с информацией о заболевании (история болезни, выписной эпикриз и т.д.)</h5>
            <div className="file is-info has-name">
              <label className="file-label">
                <input
                  onChange={event => addFiles(event.target.files)}
                  className="file-input"
                  type="file"
                  name="file"
                  multiple
                />
                <span className="file-cta">
                  <span className="file-icon">
                      <CloudUpload/>
                  </span>
                  <span className="file-label">
                      Выберите файл…
                  </span>
                </span>
                <span className="file-name">
                  {
                    uploadData == null ? "Файл не выбран..." : inputData(uploadData)
                  }
                </span>
              </label>
            </div>
          </div>
        }
      </>
  );
};

export default PatientDataInput;
