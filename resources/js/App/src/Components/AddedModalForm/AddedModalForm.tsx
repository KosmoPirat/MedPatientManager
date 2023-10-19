import React, {FC} from 'react';
import {useAction} from "../../redux/hooks/useAction";
import {useTypedSelector} from "../../redux/hooks/useTypedSelector";


import Check from "@material-ui/icons/Check";


const AddedModalForm: FC = () => {

  const {toggleIsAddDataStatus} = useAction();

  const {isAddDataStatus} = useTypedSelector(state => state.reportData);

  return (
    <div className={`modal ${isAddDataStatus ? "is-active" : ""}`}>
      <div className="modal-background"/>
      <div className="modal-content">
        <article className="message is-primary">
          <div className="message-header py-4">
            <span className="is-size-4-desktop">Поздравляем! Заявка успешно отправлена</span>
            <button onClick={() => toggleIsAddDataStatus()} className="delete"  aria-label="delete"/>
          </div>
          <div className="message-body px-4 py-5  is-flex is-flex-direction-column is-align-items-center">
            <p className="mb-5 is-size-4-desktop is-size-3-touch">С вами свяжутся в течение 20 минут.</p>
            <button onClick={() => toggleIsAddDataStatus()} className="button is-success">
                <span className="icon is-small">
                  <Check />
                </span>
              <span>Ок</span>
            </button>
          </div>
        </article>
      </div>
      <button onClick={() => toggleIsAddDataStatus()} className="modal-close is-large" aria-label="close"/>
    </div>
  );
};


export default AddedModalForm;
