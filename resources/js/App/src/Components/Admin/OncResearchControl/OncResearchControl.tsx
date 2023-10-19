import React, {FC} from 'react';

import MaterialTable, {Column, MTableToolbar} from '@material-table/core';

import {useTypedSelector} from "../../../redux/hooks/useTypedSelector";

import {useAction} from "../../../redux/hooks/useAction";

import {convertDataForLookupTable, localization, tableIcons} from "../../../helpers/mTableHelper";
import {convertCancerCodeParamForTable} from "../../../helpers/reportDataHelper";
import TableTitle from "../ControlTableTitle/ControlTableTitle";


const OncResearchControl: FC= () => {

  const {researches} = useTypedSelector(state => state.researches);
  const {cancerCodes} = useTypedSelector(state => state.cancerCodes);
  const {cancerTypes} = useTypedSelector(state => state.cancerTypes);
  const {cancerCodeParams} = useTypedSelector(state => state.cancerCodeParams);
  const {cancerTypeParams} = useTypedSelector(state => state.cancerTypeParams);
  const {hospitals} = useTypedSelector(state => state.hospitals);
  const {managers} = useTypedSelector(state => state.managers);

  const {createResearch, updateResearch, deleteResearch} = useAction();

  const columns: Array<Column<any>> = [
    { title: "ID", field: "id", editable: 'never', hidden: true},
    {
      title: "Название исследования",
      field: "name",
      validate: rowData => rowData.name === '' ? { isValid: false, helperText: 'Не может быть пустым' } : true,
    },
    {
      title: "Код МКБ",
      field: "cancerCode",
      validate: rowData => rowData.cancerCode === '' ? { isValid: false, helperText: 'Не может быть пустым' } : true,
      lookup: convertDataForLookupTable(cancerCodes),
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
      title: "Распространенность",
      field: "cancerType",
      validate: rowData => rowData.cancerType === '' ? { isValid: false, helperText: 'Не может быть пустым' } : true,
      lookup: convertDataForLookupTable(cancerTypes),
    },
    {
      title: "Подтип опухоли",
      field: "cancerCodeParams",
      lookup: convertDataForLookupTable(cancerCodeParams),
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
      title: "Линия лечения",
      field: "cancerTypeParam",
      validate: rowData => rowData.cancerTypeParam === '' ? { isValid: false, helperText: 'Не может быть пустым' } : true,
      lookup: convertDataForLookupTable(cancerTypeParams),
    },
    {
      title: "Руководитель исследования",
      field: "manager",
      validate: rowData => rowData.manager === '' ? { isValid: false, helperText: 'Не может быть пустым' } : true,
      lookup: convertDataForLookupTable(managers),
      cellStyle: {
        width: 200,
        minWidth: 200
      },

    },
    {
      title: "Поликлиника",
      field: "hospital",
      validate: rowData => rowData.hospital === '' ? { isValid: false, helperText: 'Не может быть пустым' } : true,
      lookup: convertDataForLookupTable(hospitals),

    },
    {
      title: "Статус",
      field: "active",
      validate: rowData => rowData.active === '' ? { isValid: false, helperText: 'Не может быть пустым' } : true,
      lookup: {1: "Активно", 2: "Закрыто",},
    },
  ];

  const tableData = researches.map(item => {
    return {
      "id": item.id,
      "name": item.name,
      "cancerCode": item.cancerCode.id,
      "cancerType": item.cancerType.id,
      "cancerCodeParams": convertCancerCodeParamForTable(item.cancerCodeParams),
      "cancerTypeParam": item.cancerTypeParam.id,
      "manager": item.researchManager.id,
      "hospital": item.hospital.id,
      "active": item.active,
    };
  });

  return (
    <MaterialTable
      title={<TableTitle text="Список исследований" />}
      icons={tableIcons}
      columns={columns}
      data={tableData}

      localization={localization}

      editable={{
        onRowAdd: async (newData) => {
          await createResearch(newData);
        },
        onRowUpdate: async (newData, oldData) => {
          await updateResearch(newData);
        },
        onRowDelete: async (oldData) => {
          await deleteResearch(oldData.id);
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
        maxBodyHeight: 400,
        addRowPosition: 'first',
      }}

      components={{
        Toolbar: props => (
          <div style={{backgroundColor: '#69a2c4', color: '#FFF' }}>
            <MTableToolbar {...props} />
          </div>),

        // EditField: (fieldProps) => {
        //   return getUserEditField(fieldProps);
        // }
      }}
    />
  );
}

export default OncResearchControl;
