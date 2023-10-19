import React from "react";
import {Redirect} from "react-router-dom";


export const redirectTo = (redirectData: string) => {
  if (redirectData === "admin" || redirectData === "doctor") return <Redirect to={`/${redirectData}`} />
}
