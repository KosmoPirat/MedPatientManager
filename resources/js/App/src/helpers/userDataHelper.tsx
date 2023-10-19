import React from 'react';
import { MTableEditField} from "@material-table/core";

import SelectSearch, {fuzzySearch} from "react-select-search";



// export const getCell = (fieldProps: any) => {
//   const {
//     columnDef: {field, lookup},
//     rowData: {cancerCodeParams, files, hospital},
//   } = fieldProps;
//
//   switch (field) {
//
//     case "hospital":
//       return (
//         <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">
//           <div className="dropdown is-hoverable">
//             <div className="dropdown-trigger ">
//               <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2">
//                 <span className="is-size-6">Информация о клинике</span>
//                 <span className="icon is-small">
//                   <KeyboardArrowDown />
//                 </span>
//               </button>
//             </div>
//             <div className="dropdown-menu" id="dropdown-menu2" role="menu">
//               <div className="dropdown-content">
//                 {Object.values(lookup).filter((x: any, index: number) => hospital.includes(index+1))
//                   .map((item: any, index: number) => {
//                   return (
//                     <>
//                       <div key={index} className="dropdown-item">
//                         <p>{item}</p>
//                       </div>
//                       <hr className="dropdown-divider"/>
//                     </>
//                   )
//                 })}
//               </div>
//             </div>
//           </div>
//         </td>
//       )
//
//     case "cancerCodeParams":
//       return (
//         <MTableCell
//           {...{ ...fieldProps, value: Object.values(lookup).filter((x: any, index: number) => cancerCodeParams.includes(index+1)).join() }}
//         />)
//
//     case "files":
//       return (
//         <MTableCell
//           {...{ ...fieldProps, value: files?.map((file: any, index: number) => {
//             return <><Link key={index} className="is-link" to={`./download_user_data/${file.link}`} target="_blank" download>{file.fileName}</Link><br/></>
//             }) }}
//         />)
//
//     default:
//       return (
//         <MTableCell
//           {...{ ...fieldProps, value: fieldProps.value || "" }}
//         />
//       );
//   }
// }

export const getUserEditField = (fieldProps: any) => {
  const {
    columnDef: { lookup, field },
    value,
    onChange,
  } = fieldProps;
  let data: any;
if (lookup) data = Object.entries<string>(lookup).map(([key, value]) => {
    return {name: value, value: key}
  });

  switch (field) {
    case "role":
      return (
        <SelectSearch
          className={`select-search select-search__select`}
          options={data}
          value={value}
          filterOptions={fuzzySearch}
          onChange={(e: any) => onChange(e)}
          emptyMessage="По запросу ничего не найдено"/>
      );

    default:
      return (
        <MTableEditField
          {...{ ...fieldProps, value: fieldProps.value || "" }}
        />
      );
  }
}
