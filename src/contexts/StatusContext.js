import React, { createContext, useReducer } from "react";
import StatusReducer from "../reducers/StatusReducer";

export const StatusContext = createContext();
export const DispatchStatusContext = createContext();

export function StatusProvider(props) {
  const [status, dispatchStatus] = useReducer(StatusReducer, "no-data");

  return (
    <StatusContext.Provider value={status}>
      <DispatchStatusContext.Provider value={dispatchStatus}>
        {props.children}
      </DispatchStatusContext.Provider>
    </StatusContext.Provider>
  );
}
