import React, {FC} from 'react';

import MaterialTable, {Column, MTableToolbar} from '@material-table/core';

import {useTypedSelector} from "../../../redux/hooks/useTypedSelector";

import {useAction} from "../../../redux/hooks/useAction";

import ControlTableTitle from "../ControlTableTitle/ControlTableTitle";
import {convertDataForLookupTable, localization, tableIcons} from "../../../helpers/mTableHelper";
import {isValidLogin, isValidPhone} from "../../../helpers/validationHelper";



const UserControl: FC= () => {


  const {users} = useTypedSelector(state => state.users);
  const {authUser} = useTypedSelector(state => state.authUser);
  const {roles} = useTypedSelector(state => state.roles);

  const {createUsers, updateUser, deleteUser, toggleIsUpdateDataStatus} = useAction();

  const columns: Array<Column<any>> = [
    { title: "ID", field: "id", editable: 'never', hidden: true},
    {
      title: "ФИО пользователя",
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
    {
      title: "Login",
      field: "login",
      validate: rowData => {
        if (rowData.login === "" || rowData.login === undefined) return "Не может быть пустым";
        if (rowData.login.length < 4 || !isValidLogin(rowData.login)) return "Имя пользователя должно содержать не менее 4 латинских символов";
        else return true;
      },
    },
    {
      title: "Пароль",
      field: "password",
      validate: rowData => {

        if (rowData.password === "" || rowData.password === undefined) return "Не может быть пустым";
        if (rowData.password.length < 8) return "Пароль должен содержать не менее 8 символов"
        else return true;
      },
      cellStyle: {
        width: 200,
        minWidth: 200
      },
      editable: "onAdd",
      headerStyle: {
        width: 200,
        minWidth: 250,
        whiteSpace: 'nowrap',
        paddingLeft: '2em',
        paddingRight: '2em'
      }
    },
    {
      title: "Права доступа",
      field: "role",
      validate: rowData => rowData.role === '' ? { isValid: false, helperText: 'Не может быть пустым' } : true,
      lookup: convertDataForLookupTable(roles),
    },
  ];

  const tableData = users.map(item => {
    return {
      "id": item.id,
      "name": item.name,
      "phone": item.phone,
      "login": item.login,
      "password": item.password,
      "role": item.role!.id,
    };
  });


  return (

    <MaterialTable
      title={<ControlTableTitle text="Список пользователей" />}
      icons={tableIcons}
      columns={columns}
      data={tableData}

      localization={localization}

      editable={{
        isDeletable: (rowData) => rowData.id !== authUser.id,
        onRowAdd: async (newData) => {
          await createUsers(newData);
        },
        onRowUpdate: async (newData, oldData) => {
          await updateUser(newData);
        },
        onRowDelete: async (oldData) => {
          await deleteUser(oldData.id);
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
          </div>),

        // EditField: (fieldProps) => {
        //   return getUserEditField(fieldProps);
        // }
      }}
    />
  );
}

export default UserControl;
