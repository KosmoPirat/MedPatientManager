import React, {FC} from 'react';

import MaterialTable, {Column} from '@material-table/core';

import {useTypedSelector} from "../../../redux/hooks/useTypedSelector";

import {
  fileLink,
  convertCancerCodeParamForTable,
  getEditField,
  getCell, convertHospitalForTable,
} from "../../../helpers/reportDataHelper";
import {convertDataForLookupTable, dateFormat, localization, tableIcons} from "../../../helpers/mTableHelper";


import {useAction} from "../../../redux/hooks/useAction";



const ReportData: FC = () => {

  const {authUser} = useTypedSelector(state => state.authUser);
  const {data, isUpdateDataStatus} = useTypedSelector(state => state.reportData);
  const {users} = useTypedSelector(state => state.users);
  const {cancerCodes} = useTypedSelector(state => state.cancerCodes);
  const {cancerTypes} = useTypedSelector(state => state.cancerTypes);
  const {cancerCodeParams} = useTypedSelector(state => state.cancerCodeParams);
  const {cancerTypeParams} = useTypedSelector(state => state.cancerTypeParams);
  const {hospitals} = useTypedSelector(state => state.hospitals);
  const {statuses} = useTypedSelector(state => state.statuses);
  const {updateReportData, deleteReportData, toggleIsUpdateDataStatus} = useAction();

  const isShowColumn = () => {
    return authUser.role == 'doctor';
  }


  const columns: Array<Column<any>> = [
    { title: "ИД", field: "id", editable: 'never', hidden: true },
    { title: "Дата", field: "updatedAt", editable: 'never', },
    { title: "Название исследования", field: "researchName",},
    {
      title: "Код МКБ",
      field: "cancerCode",
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
      lookup: convertDataForLookupTable(cancerTypeParams),
    },
    { title: "Пациент", field: "name",},
    {
      title: "Телефон пациента",
      field: "phone",
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
      },
      hidden: isShowColumn(),
    },
    {
      title: "Данные пациента",
      field: "files",
      editable: 'never',
      hidden: isShowColumn(),
    },
    {
      title: "Доктор",
      field: "user",
      lookup: convertDataForLookupTable(users),
      editable: 'never',
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
      },
      hidden: isShowColumn(),
    },
    {
      title: "Поликлиника",
      field: "hospital",
      lookup: convertDataForLookupTable(hospitals),
      hidden: isShowColumn(),
    },
    {
      title: "Статус",
      field: "status",
      lookup: convertDataForLookupTable(statuses),
    },
  ];

  const tableData = data.map(item => {
    return {
      "id": item.id,
      "updatedAt": dateFormat(item.updatedAt),
      "cancerCode": item.research.cancerCode.id,
      "researchName": item.research.researchName,
      "cancerType": item.research.cancerType.id,
      "cancerCodeParams": convertCancerCodeParamForTable(item.research.cancerCodeParams),
      "cancerTypeParam": item.research.cancerTypeParam.id,
      "name": item.patient.name,
      "phone": item.patient.phone,
      "files": item.patient.files?.map((file) => fileLink(file.name, file.link)),
      "user": item.user.id,
      "hospital": convertHospitalForTable(item.hospital),
      "status": item.status.id,
    };
  });

  return (
    <>
      {
        isUpdateDataStatus ? (
          <article className="message is-success">
            <div className="message-header">
              <p>Запись успешно обновлена</p>
              <button onClick={() => toggleIsUpdateDataStatus()} className="delete" aria-label="delete" />
            </div>
          </article>
        ) : ''
      }
      <MaterialTable
        title="Список заявок"
        icons={tableIcons}
        columns={columns}
        data={tableData}

        localization={localization}

        editable={{
          isEditHidden: () => authUser.role === 'doctor',
          isDeletable: () => authUser.role === 'admin',

          onRowUpdate: async (newData, oldData) => {
            await updateReportData(newData);
          },
          onRowDelete: async (oldData) => {
            await deleteReportData(oldData.id);
          },
        }}

        options={{
          paging: false,
          headerStyle: {
            backgroundColor: "#378FC3",
            color: "#FFF",
            fontSize: "14px",
            textAlign: "center",
            fontWeight: "bold"
          },
          rowStyle: rowData => ({
            backgroundColor: rowData.status === 1 ? "#effaf5" : "#fff"
          }),
          filtering: true,
          maxBodyHeight: 700,
          addRowPosition: 'first',
        }}

        components={{

          Cell: (fieldProps) => {
            return getCell(fieldProps)
          },
          EditField: (fieldProps) => {
            return getEditField(fieldProps);
          }
        }}
      />
    </>



    // <div className="table-container is-border">
    //   <table className="table is-striped is-hoverable is-fullwidth is-size-6">
    //     <thead>
    //     <tr>
    //       <th>Дата</th>
    //       <th>Название исследования</th>
    //       <th>Код заболевания</th>
    //       <th>Особености заболевания</th>
    //       <th>Тип заболевания</th>
    //       <th>Особенности типа заболевания</th>
    //       <th>ФИО пациента</th>
    //       <th>Телефон пациента</th>
    //       <th>Данные о пациенте</th>
    //       <th>Ответственный доктор</th>
    //       <th>Поликлиника</th>
    //       <th>Телефон поликлиники</th>
    //       <th>Статус</th>
    //     </tr>
    //     </thead>
    //     <tbody>
    //       {
    //         data.map((dataItem, index) => {
    //           return <PatientRegistrationDataRow key={index} data={dataItem} />
    //         })
    //       }
    //     </tbody>
    //   </table>
    // </div>
  );
}

export default ReportData;
