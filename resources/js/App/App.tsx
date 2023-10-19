import React, {FC, useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import MainLayout from "./src/Components/MainLayout/MainLayout";
import HeaderLayout from "./src/Components/Header/HederLayout/HeaderLayout";
import FooterLayout from "./src/Components/Footer/FooterLayout";

import {useAction} from "./src/redux/hooks/useAction";


const App: FC = () => {
  const {fetchAuthUser} = useAction();

  useEffect( () => {
      fetchAuthUser();
  },[]);


  return (
    <BrowserRouter>
      <HeaderLayout />
      <MainLayout />
      <FooterLayout />
    </BrowserRouter>
  );
};

export default App;
