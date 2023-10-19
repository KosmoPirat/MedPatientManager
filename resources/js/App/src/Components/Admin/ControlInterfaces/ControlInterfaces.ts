import {UserTypes} from "../../../redux/types/UserTypes";
import {ResearchTypes} from "../../../redux/types/ResearchTypes";
import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import {SvgIconTypeMap} from "@material-ui/core";
import {ReactElement} from "react";


export interface IUpdateUserControl {
  data: UserTypes;
}

export interface IUpdateResearchControl {
  data: ResearchTypes;
}

export interface DeleteItemType {
  id?: number;
}

export interface ControlHeaderData {
  title: string;
  icon: ReactElement<OverridableComponent<SvgIconTypeMap>>
}
