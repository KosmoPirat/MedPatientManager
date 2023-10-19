import React, {FC} from 'react';

import MaterialTable, {Column, MTableToolbar} from '@material-table/core';

import {useTypedSelector} from "../../../redux/hooks/useTypedSelector";

import {useAction} from "../../../redux/hooks/useAction";

import ControlTableTitle from "../ControlTableTitle/ControlTableTitle";

import {localization, tableIcons} from "../../../helpers/mTableHelper";
import {isValidPhone} from "../../../helpers/validationHelper";



const ResearchManagerControl: FC= () => {


  const {managers} = useTypedSelector(state => state.managers);

  const {createManager, updateManager, deleteManager} = useAction();

  const columns: Array<Column<any>> = [
    { title: "ID", field: "id", editable: 'never', hidden: true},
    {
      title: "Руководитель исследования",
      field: "name",
      validate: rowData => {
        if (rowData.name === "" || rowData.name === undefined) return "Не может быть пустым";
        if (rowData.name.length < 4) return "Имя должно содержать не менее 4 символов"
        else return true;
      },
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
  ];

  const tableData = managers.map(item => {
    return {
      "id": item.id,
      "name": item.name,
      "phone": item.phone,
    };
  });


  return (

    <MaterialTable
      title={<ControlTableTitle text="Список руководителей исследований" />}
      icons={tableIcons}
      columns={columns}
      data={tableData}

      localization={localization}

      editable={{
        onRowAdd: async (newData) => {
          console.log(newData);
          await createManager(newData);
        },
        onRowUpdate: async (newData, oldData) => {
          await updateManager(newData);
        },
        onRowDelete: async (oldData) => {
          await deleteManager(oldData.id);
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

export default ResearchManagerControl;
