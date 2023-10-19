import {UserTypes} from "../redux/types/UserTypes";
import {ResearchTypes} from "../redux/types/ResearchTypes";
import {CancerCodeTypes} from "../redux/types/CancerCodeTypes";
import {CancerCodeParamTypes} from "../redux/types/CancerCodeParamTypes";
import {CancerTypeParamTypes} from "../redux/types/CancerTypeParamTypes";
import {ReportDataTypes} from "../redux/types/ReportDataTypes";
import {ResearchManagerTypes} from "../redux/types/ResearchManagerTypes";
import {HospitalTypes} from "../redux/types/HospitalTypes";

export const deleteUserFromList = (usersList: UserTypes[], id: number) => {
  return usersList.filter(user => id !== user.id);
};

export const updateUserFromList = (usersList: UserTypes[], userData: UserTypes) => {
  return usersList.map(user => {
    if (user.id === userData.id) {
      return {
        ...user,
        ...userData,
      };
    } else {
      return user;
    }
  });
};

export const deleteManagerFromList = (managersList: ResearchManagerTypes[], id: number) => {
  return managersList.filter(manager => id !== manager.id);
};

export const updateManagerFromList = (managersList: ResearchManagerTypes[], managerData: ResearchManagerTypes) => {
  return managersList.map(manager => {
    if (manager.id === managerData.id) {
      return {
        ...manager,
        ...managerData,
      };
    } else {
      return manager;
    }
  });
};

export const deleteHospitalFromList = (hospitalList: HospitalTypes[], id: number) => {
  return hospitalList.filter(hospital => id !== hospital.id);
};

export const updateHospitalFromList = (hospitalList: HospitalTypes[], hospitalData: HospitalTypes) => {
  return hospitalList.map(hospital => {
    if (hospital.id === hospitalData.id) {
      return {
        ...hospital,
        ...hospitalData,
      };
    } else {
      return hospital;
    }
  });
};


export const deleteCancerCodeFromList = (cancerCodesList: CancerCodeTypes[], id: number) => {
  return cancerCodesList.filter(cancerCode => id !== cancerCode.id);
};

export const updateCancerCodeFromList = (cancerCodesList: CancerCodeTypes[], cancerCodeData: CancerCodeTypes) => {
  return cancerCodesList.map(cancerCode => {
    if (cancerCode.id === cancerCodeData.id) {
      return {
        ...cancerCode,
        ...cancerCodeData,
      };
    } else {
      return cancerCode;
    }
  });
};


export const deleteCancerCodeParamFromList = (cancerCodeParamsList: CancerCodeParamTypes[], id: number) => {
  return cancerCodeParamsList.filter(cancerCodeParam => id !== cancerCodeParam.id);
};

export const updateCancerCodeParamFromList = (
  cancerCodeParamsList: CancerCodeParamTypes[],
  cancerCodeParamData: CancerCodeParamTypes
) => {
  return cancerCodeParamsList.map(cancerCodeParam => {
    if (cancerCodeParam.id === cancerCodeParamData.id) {
      return {
        ...cancerCodeParam,
        ...cancerCodeParamData,
      };
    } else {
      return cancerCodeParam;
    }
  });
};


export const deleteCancerTypeParamFromList = (cancerTypeParamsList: CancerTypeParamTypes[], id: number) => {
  return cancerTypeParamsList.filter(cancerTypeParam => id !== cancerTypeParam.id);
};

export const updateCancerTypeParamFromList = (
  cancerTypeParamsList: CancerTypeParamTypes[],
  cancerTypeParamData: CancerTypeParamTypes
) => {
  return cancerTypeParamsList.map(cancerTypeParam => {
    if (cancerTypeParam.id === cancerTypeParamData.id) {
      return {
        ...cancerTypeParam,
        ...cancerTypeParamData,
      };
    } else {
      return cancerTypeParam;
    }
  });
};


export const deleteResearchFromList = (researchList: ResearchTypes[], id: number) => {
  return researchList.filter(research => id !== research.id);
};

export const updateResearchFromList = (researchList: ResearchTypes[], researchData: ResearchTypes) => {
  return researchList.map(research => {
    if (research.id === researchData.id) {
      return {
        ...research,
        ...researchData,
      };
    } else {
      return research;
    }
  });
};

export const addToListIfExist = (reportDataList: ReportDataTypes[], reportData: ReportDataTypes) => {
  if (reportData) return [...reportDataList, reportData];
  else return reportDataList;
};

export const updateReportDataFromList = (reportDataList: ReportDataTypes[], reportData: ReportDataTypes) => {
  return reportDataList.map(reportDataItem => {
    if (reportDataItem.id === reportData.id) {
      return {
        ...reportDataItem,
        ...reportData,
      };
    } else {
      return reportDataItem;
    }
  });
};

export const deleteReportDataFromList = (reportDataList: ReportDataTypes[], id: number) => {
  return reportDataList.filter(reportDataItem => id !== reportDataItem.id);
};

export const filterResearchByType = (researchList: ResearchTypes[], typeId: number) => {
  return researchList.filter(researchItem => {
    return researchItem.cancerType.id === typeId;
  });
};

export const filterResearchByTypeParam = (researchList: ResearchTypes[], typeId: number) => {
  return researchList.filter(researchItem => {
    return researchItem.cancerTypeParam.id === typeId;
  });
};
