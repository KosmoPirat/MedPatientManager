import React, { FC } from 'react';

import "./Footer.css";
import {Link} from "react-router-dom";

const FooterLayout: FC = () => {

  return (
    <footer className="footer has-background-info is-info footer_shadow p-0">
      <div className="content has-text-centered">
        <p className="is-size-6 my-2 has-text-centered">
          <Link className="has-text-white" to='./upload/privacy_policy.pdf' target='_blank'>
            <strong>Политика обработки персональных данных</strong>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default FooterLayout;
