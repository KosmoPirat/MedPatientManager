import React, {FC, useEffect} from 'react';
import {useAction} from "../../../redux/hooks/useAction";
import ReportData from "../../PatientRegistrationData/PatientRegistrationDataLayout/PatientRegistrationDataLayout";
import {useTypedSelector} from "../../../redux/hooks/useTypedSelector";
import SearchForm from "../../SearchForm/SearchForm";

const DoctorLayout: FC = () => {

  const {authUser} = useTypedSelector(state => state.authUser);
  const {data, isReportDataVisible, reportDataLoading} = useTypedSelector(state => state.reportData);

  const {
    fetchCancerCodes,
    fetchCancerCodeParams,
    fetchCancerTypes,
    fetchCancerTypeParams,
    fetchReportDataByUser,
    toggleReportDataVisibility,
    fetchHospitals,
    fetchStatuses,
    fetchUsers,
  } = useAction();

  useEffect(  () => {
    fetchCancerCodes();
    fetchCancerCodeParams();
    fetchCancerTypes();
    fetchCancerTypeParams();
    fetchHospitals();
    fetchStatuses();
    fetchUsers();
  },[])

  useEffect(  () => {
    fetchReportDataByUser(authUser.id);
  },[data.length])

  return (
    <div className="section">
      <SearchForm />
      <section className="is-flex is-flex-direction-column is-align-items-center my-4 pb-3">
        <button
          disabled={reportDataLoading}
          onClick={()=> toggleReportDataVisibility()}
          className={`button is-success mb-3 is-size-5-tablet m-auto ${reportDataLoading ? 'is-loading' : ''}`}
        >
          {isReportDataVisible ? "Скрыть информацию о пациентах" : "Показать информацию о пациентах"}
        </button>
      </section>
      <section>
        {
          isReportDataVisible ? <ReportData /> : ""
        }
      </section>
    </div>
  );
};


export default DoctorLayout;
