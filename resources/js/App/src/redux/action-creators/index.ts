import * as AuthActionCreators from "./AuthAction";
import * as ReportDataActionCreators from "./ReportDataAction";
import * as RoleActionCreators from "./RoleAction";
import * as UsersActionCreators from "./UsersAction";
import * as ResearchActionCreators from "./ResearchAction";
import * as CancerTypeActionCreators from "./CancerTypeAction";
import * as CancerCodeActionCreators from "./CancerCodesAction";
import * as CancerCodeParamActionCreators from "./CancerCodeParamsAction";
import * as CancerTypeParamActionCreators from "./CancerTypeParamsAction";
import * as StatusActionCreators from "./StatusAction";
import * as HospitalActionCreators from "./HospitalAction";
import * as ResearchManagerActionCreators from "./ResearchManagerAction";

export default {
  ...AuthActionCreators,
  ...ReportDataActionCreators,
  ...RoleActionCreators,
  ...UsersActionCreators,
  ...ResearchActionCreators,
  ...CancerTypeActionCreators,
  ...CancerCodeActionCreators,
  ...CancerCodeParamActionCreators,
  ...CancerTypeParamActionCreators,
  ...StatusActionCreators,
  ...HospitalActionCreators,
  ...ResearchManagerActionCreators,
}
