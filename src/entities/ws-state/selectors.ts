import { TRootState } from "..";

export const getStateWarningStatus = (store: TRootState) => store.wsReducer.wsMessage.warning.status;
export const getStateWarningDescription = (store: TRootState) => store.wsReducer.wsMessage.warning.description;

export const getStateCrashStatus = (store: TRootState) => store.wsReducer.wsMessage.crash.status;
export const getStateCrashDescription = (store: TRootState) => store.wsReducer.wsMessage.crash.description;

export const getStateGroups = (store: TRootState) => store.wsReducer.wsMessage.groups;
export const getStateTemperature = (store: TRootState) => store.wsReducer.wsMessage.temperature;
export const getStateAmper = (store: TRootState) => store.wsReducer.wsMessage.amper;
export const getStateAsymmetria = (store: TRootState) => store.wsReducer.wsMessage.asymmetria;

export const getStateIsDeviceConnected = (store: TRootState) => store.wsReducer.wsMessage.isDeviceConnected;