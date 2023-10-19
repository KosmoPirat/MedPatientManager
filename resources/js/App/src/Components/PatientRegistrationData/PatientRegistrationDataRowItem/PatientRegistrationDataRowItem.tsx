import React, {FC} from 'react';

interface IReportDataRowItem {
  itemName: string | HTMLLinkElement;
}

const PatientRegistrationDataRowItem: FC<IReportDataRowItem> = ({itemName}) => {
  return (
      <td>
        {itemName}
      </td>
  );
}

export default PatientRegistrationDataRowItem;
