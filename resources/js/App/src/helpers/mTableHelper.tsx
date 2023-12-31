import React, {forwardRef} from 'react';
import {Icons} from "@material-table/core";

import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";


export const convertDataForLookupTable = (reportData: any) => {
  return reportData.reduce((data:{[key: number]: string} , dataItem: any) => {
    dataItem.phone ? data[dataItem.id] = `${dataItem.name},\n тел.: ${dataItem.phone}` : data[dataItem.id] = dataItem.name;
    return data;
  }, {})
}

export const dateFormat = (data: string) => {
  const date = new Date(data);
  const year = date.getFullYear().toString();
  let month = (date.getMonth()+1).toString();
  let dt = date.getDate().toString();
  const hours = date.getHours().toString();
  const minutes = date.getMinutes().toString();
  const seconds = date.getSeconds().toString();

  if (date.getDate() < 10) {
    dt = '0' + dt;
  }
  if (date.getMonth() < 10) {
    month = '0' + month;
  }
  return `${year}-${month}-${dt}/ ${hours}:${minutes}:${seconds}`;
}

export const tableIcons : Icons = {
  Add: forwardRef((props, ref) => <AddBox style={{color: "#fff"}} {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export const localization={
  header: {
    actions: 'Действие',
  },
  toolbar: {
    searchPlaceholder: "Поиск",
  },
  body: {
    emptyDataSourceMessage: 'Нет информации...',
      editRow: {
      deleteText: 'Вы уверены, что хотите удалить эти данные?',
    },
  }
}
