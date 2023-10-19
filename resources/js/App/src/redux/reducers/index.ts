import { combineReducers } from 'redux';
import { AuthReducer } from './AuthReducer';
import {ReportDataReducer} from "./ReportDataReducer";
import {RoleReducer} from "./RoleReducer";
import {UsersReducer} from "./UsersReducer";
import {ResearchReducer} from "./ResearchReducer";
import {CancerTypeReducer} from "./CancerTypeReducer";
import {CancerCodesReducer} from "./CancerCodesReducer";
import {CancerCodeParamsReducer} from "./CancerCodeParamsReducer";
import {CancerTypeParamsReducer} from "./CancerTypeParamsReducer";
import {HospitalReducer} from "./HospitalReducer";
import {StatusReducer} from "./StatusReducer";
import {ResearchManagerReducer} from "./ResearchManagerReducer";

const rootReducer = combineReducers({
  authUser: AuthReducer,
  reportData: ReportDataReducer,
  roles: RoleReducer,
  users: UsersReducer,
  researches: ResearchReducer,
  cancerTypes: CancerTypeReducer,
  cancerCodes: CancerCodesReducer,
  cancerCodeParams: CancerCodeParamsReducer,
  cancerTypeParams: CancerTypeParamsReducer,
  hospitals: HospitalReducer,
  statuses: StatusReducer,
  managers: ResearchManagerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
