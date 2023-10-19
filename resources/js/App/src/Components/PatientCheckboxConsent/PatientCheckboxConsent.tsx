import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {useAction} from "../../redux/hooks/useAction";


const PatientCheckboxConsent: FC= () => {

  const{toggleUserConsent} = useAction();
    return (
      <label className="checkbox my-3">
        <input type="checkbox" onChange={() => toggleUserConsent()}/>
           Для отправки данных требуется согласие на обработку персональных данных
        <Link to='./upload/privacy_policy.pdf' target='_blank'><strong>политика обработки персональных данных</strong></Link>
      </label>
  );
};

export default PatientCheckboxConsent;
