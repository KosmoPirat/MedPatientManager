import React, {FC} from 'react';
import PatientRegistrationDataRowItem from "../PatientRegistrationDataRowItem/PatientRegistrationDataRowItem";
import {ReportDataTypes} from "../../../redux/types/ReportDataTypes";
import {fileLink, rowStatusBackground} from "../../../helpers/reportDataHelper";
import {dateFormat} from "../../../helpers/mTableHelper";

interface IReportDataRow {
  data: ReportDataTypes;
}

interface IIName {
  id: number;
  name: string;
  link: string;
}

const PatientRegistrationDataRow: FC<IReportDataRow> = ({data}) => {
  const dataItems = Object.values(data);
  console.log(dataItems);
  return (
    <tr className={rowStatusBackground(dataItems[4].name)}>

      <PatientRegistrationDataRowItem key={0} itemName={dateFormat(dataItems[0])} />
      <PatientRegistrationDataRowItem key={1} itemName={dataItems[1]} />
      <PatientRegistrationDataRowItem key={2} itemName={dataItems[2].cancerCode.name} />
      <PatientRegistrationDataRowItem key={3} itemName={dataItems[2].cancerType.name} />
      <PatientRegistrationDataRowItem key={4} itemName={dataItems[2].cancerCodeParams?.map((iName: IIName) => iName.name).join()} />
      <PatientRegistrationDataRowItem key={5} itemName={dataItems[2].cancerTypeParam.name} />
      <PatientRegistrationDataRowItem key={6} itemName={dataItems[3].name} />
      <PatientRegistrationDataRowItem key={7} itemName={dataItems[3].phone} />
      <PatientRegistrationDataRowItem key={8} itemName={...dataItems[3].files?.map((iName: IIName) => fileLink(iName.name, iName.link))} />
      <PatientRegistrationDataRowItem key={9} itemName={dataItems[4].name} />
      <PatientRegistrationDataRowItem key={10} itemName={dataItems[5].name} />
      <PatientRegistrationDataRowItem key={11} itemName={dataItems[5].phone} />
      <PatientRegistrationDataRowItem key={12} itemName={dataItems[6].name} />

    </tr>

  );
}

export default PatientRegistrationDataRow;
