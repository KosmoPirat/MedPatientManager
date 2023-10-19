import {ResearchTypes} from "../redux/types/ResearchTypes";

interface IOptions {
  id: number;
  name: string;
}

export const getOptionForSearch = (options: IOptions[]) => {
  return options.map( (option: IOptions) => {
    return { name: option.name, value: option.id}
  });
};

export const getCancerCodeParamOption = (options: ResearchTypes[]) => {
  if (!options.length) return [];
  let cancerCodeParams: any[] = [];
  cancerCodeParams.push([{id: 0, name: "Подтип отсутствует"}]);
    options.forEach((option: any) => {
      cancerCodeParams.push(option.cancerCodeParams);
    });
  return cancerCodeParams.reduce((a:any,b:any) => a.concat(b))
    .map( (option: IOptions) => {
      return { name: option.name, value: option.id}
    }).filter((v: { value: any; }, i: any, options: any[]) => {
      return options.findIndex(t => (t.value === v.value)) === i;
    });
};

export const getTypeOptions = (options: object[], optionType: string) => {
  options = options.filter((option: any) => option[optionType] !== null);
  if (!options.length) return [];
  return options.map( (option: any) => {
      return { name: option[optionType].name, value: option[optionType].id};
    }).filter((v: { value: any; }, i: any, options: any[]) => {
    return options.findIndex(t => (t.value === v.value)) === i;
  });
};

export const getResearchName = (foundResearches: any) => {
  if (!foundResearches.length) return '';
  let researchName: any[] = [];
  foundResearches.forEach((foundResearch: any) => {
    researchName.push(foundResearch.name);
  });
  return researchName.filter((v,i,researchName) => {
    return researchName.findIndex(t => (t === v)) === i;
  }).toString();
};

export const getHospitalId = (ids: any) => {
  if (!ids.length) return '';
  let hospitalsIds: any[] = [];
  ids.forEach((id: any) => {
    hospitalsIds.push(id.hospital.id);
  });
  return hospitalsIds.filter((v,i,hospitalsIds) => {
    return hospitalsIds.findIndex(t => (t === v)) === i;
  });
};

// export const getCancerTypeParamOption = (options: any) => {
//   if (!options.length) return [];
//   let cancerTypeParam: any[] = [];
//   cancerTypeParam.push({ id: 0, name: "Отсутствует"});
//   options.forEach((option: any) => {
//     cancerTypeParam.push(option.cancerTypeParam);
//   });
//   return cancerTypeParam.map( (option: IOptions) => {
//     return { name: option.name, value: option.id};
//   }).filter((v,i,cancerTypeParam) => {
//     return cancerTypeParam.findIndex(t => (t.value === v.value)) === i;
//   });
// };


