import React, {FC} from 'react';

import MaterialTable, {Column, MTableToolbar} from '@material-table/core';

import {useTypedSelector} from "../../../redux/hooks/useTypedSelector";

import {useAction} from "../../../redux/hooks/useAction";

import ControlTableTitle from "../ControlTableTitle/ControlTableTitle";

import {localization, tableIcons} from "../../../helpers/mTableHelper";
import {isValidPhone} from "../../../helpers/validationHelper";



const HospitalControl: FC= () => {


  const {hospitals} = useTypedSelector(state => state.hospitals);

  const {createHospital, updateHospital, deleteHospital} = useAction();

  const columns: Array<Column<any>> = [
    { title: "ID", field: "id", editable: 'never', hidden: true},
    {
      title: "Поликлиника",
      field: "name",
      validate: rowData => rowData.name === '' ? { isValid: false, helperText: 'Не может быть пустым' } : true,
    },
    {
      title: "Телефон",
      field: "phone",
      validate: rowData => {
        if (rowData.phone === "" || rowData.phone === undefined) return "Не может быть пустым";
        if (isValidPhone(rowData.phone)) return true
        else return "Формат номера телефона: +7 (999) 999-99-99";
      },
      cellStyle: {
        width: 200,
        minWidth: 200
      },
      headerStyle: {
        width: 200,
        minWidth: 250,
        whiteSpace: 'nowrap',
        paddingLeft: '2em',
        paddingRight: '2em'
      }
    },
    {
      title: "Адрес",
      field: "address",
      validate: rowData => rowData.address === '' ? { isValid: false, helperText: 'Не может быть пустым' } : true,
    },
    //{ title: "Почта", field: "email",},
  ];

  const tableData = hospitals.map(item => {
    return {
      "id": item.id,
      "name": item.name,
      "phone": item.phone,
      "address": item.address,
      //"email": item.email,
    };
  });


  return (

    <MaterialTable
      title={<ControlTableTitle text="Список поликлиник" />}
      icons={tableIcons}
      columns={columns}
      data={tableData}

      localization={localization}

      editable={{
        onRowAdd: async (newData) => {
          console.log(newData);
          await createHospital(newData);
        },
        onRowUpdate: async (newData, oldData) => {
          await updateHospital(newData);
        },
        onRowDelete: async (oldData) => {
          await deleteHospital(oldData.id);
        },
      }}

      options={{
        paging: false,
        headerStyle: {
          fontWeight: "bold",
        },
        searchFieldStyle: {
          color: "#FFF",
        },
        maxBodyHeight: 300,
        addRowPosition: 'first',
      }}

      components={{
        Toolbar: props => (
          <div style={{backgroundColor: "#69a2c4", color: "#FFF" }}>
            <MTableToolbar {...props} />
          </div>)
      }}
    />
  );
}

export default HospitalControl;
