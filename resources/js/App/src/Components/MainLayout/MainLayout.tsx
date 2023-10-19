import React, {CSSProperties, FC} from 'react';
import {Redirect, Route} from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import {PropagateLoader} from "react-spinners";
import AdminLayout from "../Admin/AdminLayout/AdminLayout";
import DoctorLayout from "../Doctor/DoctorLayout/DoctorLayout";

import "./MainLayout.css";

import {useTypedSelector} from "../../redux/hooks/useTypedSelector";
import UserLayout from "../User/UserLayout/UserLayout";
import {redirectTo} from "../../helpers/redirectHelper";




const MainLayout: FC = () => {
  const {authUser, isAuth, authUserLoading} = useTypedSelector(state => state.authUser);
  const {researchLoading} = useTypedSelector(state => state.researches);
  const {reportDataLoading} = useTypedSelector(state => state.reportData);

  const loadingOverlayStyleParam = {
    overlay: (base: CSSProperties) => ({
      ...base,
      background: "rgba(191,191,191,0.8)"
    })
  };

  return (
    <LoadingOverlay
      className="is-flex-grow-1"
      active={authUserLoading || researchLoading || reportDataLoading}
      spinner={<PropagateLoader color="#ffffff" />}
      styles={loadingOverlayStyleParam}>
      {
        isAuth ? redirectTo(authUser.role) : ""
      }
        <>
          <Route path={'/'} component={UserLayout} exact/>
          <Route exact path="/admin">
            {!isAuth ? <Redirect to="/" /> : <AdminLayout />}
          </Route>
          <Route exact path="/doctor">
            {!isAuth ? <Redirect to="/" /> : <DoctorLayout />}
          </Route>
        </>

    </LoadingOverlay>
  );
};

export default MainLayout;
