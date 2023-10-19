import React from 'react';
import { MTableCell, MTableEditField} from "@material-table/core";

import SelectSearch, {fuzzySearch} from "react-select-search";
import {Link} from "react-router-dom";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";

export const rowStatusBackground = (data: string) => {
  if(data === "Закрыта") {
    return "has-background-success-light has-text-primary";
  } else if(data === "Отменена") {
    return "has-background-grey-lighter has-text-grey-light";
  }
}

export const fileLink = (fileName : string, link: string) => {
  return {fileName: fileName, link: link};
};

export const convertCancerCodeParamForTable = (cancerCodeParams: any) => {
  if (!cancerCodeParams.length) return [];
  return cancerCodeParams.map( (option: any) => {
    return option.id;
  }).reduce((result: any, item: any) => {
    return result.includes(item) ? result : [... result, item];
  }, []);
}

export const convertHospitalForTable = (hospitals: any) => {
  if (!hospitals.length) return [];
  return hospitals.map( (option: any) => {
    return option.id;
  }).reduce((result: any, item: any) => {
    return result.includes(item) ? result : [... result, item];
  }, []);
}

export const getCell = (fieldProps: any) => {
  const {
    columnDef: {field, lookup},
    rowData: {cancerCodeParams, files, hospital},
  } = fieldProps;

  switch (field) {

    case "hospital":
      return (
        <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">
          <div className="dropdown is-hoverable">
            <div className="dropdown-trigger ">
              <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                <span className="is-size-6">Информация о клинике</span>
                <span className="icon is-small">
                  <KeyboardArrowDown />
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu2" role="menu">
              <div className="dropdown-content">
                {Object.values(lookup).filter((x: any, index: number) => hospital.includes(index+1))
                  .map((item: any, index: number) => {
                  return (
                    <>
                      <div key={index} className="dropdown-item">
                        <p>{item}</p>
                      </div>
                      <hr className="dropdown-divider"/>
                    </>
                  )
                })}
              </div>
            </div>
          </div>
        </td>
      )

    case "cancerCodeParams":
      return (
        <MTableCell
          {...{ ...fieldProps, value: Object.values(lookup).filter((x: any, index: number) => cancerCodeParams.includes(index+1)).join() }}
        />)

    case "files":
      return (
        <MTableCell
          {...{ ...fieldProps, value: files?.map((file: any, index: number) => {
            return <><Link key={index} className="is-link" to={`./download_user_data/${file.link}`} target="_blank" download>{file.fileName}</Link><br/></>
            }) }}
        />)

    default:
      return (
        <MTableCell
          {...{ ...fieldProps, value: fieldProps.value || "" }}
        />
      );
  }
}

export const getEditField = (fieldProps: any) => {
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
    case "cancerCode":
    case "cancerType":
    case "cancerTypeParam":
    case "status":
      return (
        <SelectSearch
          className={`select-search select-search__select`}
          options={data}
          value={value}
          filterOptions={fuzzySearch}
          onChange={(e: any) => onChange(e)}
          emptyMessage="По запросу ничего не найдено"/>
      );

    case "cancerCodeParams":
      return (
        <SelectSearch
          className={`select-search select-search__select`}
          options={data}
          multiple
          value={value}
          closeOnSelect={false}
          printOptions="on-focus"
          filterOptions={fuzzySearch}
          onChange={(e: any) => onChange(e)}
          placeholder="Выбирите подтип опухоли"/>
      );

    case "hospital":
      return (
        <SelectSearch
          className={`select-search select-search__select`}
          options={data}
          multiple
          value={value}
          closeOnSelect={false}
          printOptions="on-focus"
          filterOptions={fuzzySearch}
          onChange={(e: any) => onChange(e)}
          placeholder="Выбирите поликлинику"/>
      );

    default:
      return (
        <MTableEditField
          {...{ ...fieldProps, value: fieldProps.value || "" }}
        />
      );
  }
}
