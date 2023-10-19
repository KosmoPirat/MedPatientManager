import React, { FC } from 'react';
import {Link} from "react-router-dom";

const Logo: FC = () => {

  return (
    <Link className="logo_padding-top"  to="/">
      <img style={{height: 40}} src="./images/logo_new.svg" alt="Logo"/>
    </Link>
  );
}

export default Logo;
