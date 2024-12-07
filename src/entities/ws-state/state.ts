import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { IInitialState } from "./mock";

// импортировать любой из стейтов для теста. Внутри файла mock.ts небольшие пояснения, откуда планируется брать поля.
import { defaultInitialState as initialState } from "./mock";
// import { disconnectedInitialState as initialState } from "./mock";
// import { crashInitialState as initialState } from "./mock";
// import { nullDataInitialState as initialState } from "./mock";

const wsSlice = createSlice({
    name: "ws-slice",
    initialState,
    reducers: {
        wsOpen(state) {
            state.wsConnected = true;

            return state;
        },
        wsError(state, action: PayloadAction<string>) {
            state.wsError = action.payload;
            
            return state;
        },
        wsClose(state) {
            state.wsConnected = false;

            return state;
        },
        wsMessage(state, action: PayloadAction<IInitialState["wsMessage"]>) {
            state.wsMessage = {
                ...state.wsMessage,
                ...action.payload
            }

            return state;
        },
        setDisconnectDevice(state) {
            state.wsMessage.isDeviceConnected = false;

            return state;
        }
    }
})

export const {wsMessage, wsClose, wsError, wsOpen, setDisconnectDevice} = wsSlice.actions;

export default wsSlice.reducer;