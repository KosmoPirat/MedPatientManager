import React, {FC, useEffect} from 'react';

import {useAction} from "../../../redux/hooks/useAction";

import Panel from "../Panel/Panel";
import PatientRegistrationDataLayout from "../../PatientRegistrationData/PatientRegistrationDataLayout/PatientRegistrationDataLayout";

import {fetchHospitals} from "../../../redux/action-creators/HospitalAction";



const AdminLayout: FC= () => {
  const {
    fetchReportData,
    fetchCancerCodeParams,
    fetchCancerTypes,
    fetchCancerTypeParams,
    fetchHospitals,
    fetchRoles,
    fetchUsers,
    fetchStatuses,
    fetchResearches,
    fetchManagers,
  } = useAction();

  useEffect(  () => {
    fetchCancerCodeParams();
    fetchCancerTypes();
    fetchCancerTypeParams();
    fetchReportData();
    fetchHospitals();
    fetchRoles();
    fetchUsers();
    fetchStatuses();
    fetchResearches();
    fetchManagers();
  },[])

  return (
    <div className="section is-height-100">
      <Panel />
      <PatientRegistrationDataLayout />
    </div>
  );
}

export default AdminLayout;
