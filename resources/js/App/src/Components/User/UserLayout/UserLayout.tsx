import React, {FC, useEffect} from 'react';
import {useAction} from "../../../redux/hooks/useAction";
import SearchForm from "../../SearchForm/SearchForm";



const UserLayout: FC = () => {

  const {
    fetchCancerCodes,
    fetchCancerTypes,
  } = useAction();

  useEffect(  () => {
    fetchCancerCodes();
    fetchCancerTypes();
  },[])

  return (
    <div className="container is-height-100 user-layout_overflow-y__auto">
      <SearchForm />
    </div>
  );
};


export default UserLayout;
