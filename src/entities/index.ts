import { combineReducers, configureStore } from "@reduxjs/toolkit";
import wsStore from "./ws-state/state";

const reducer = combineReducers({
    wsReducer: wsStore
})

const store = configureStore({
    reducer: reducer,
    middleware(getDefaultMiddleware) {
        // здесь буду подключать миддлвара для сокета
        return getDefaultMiddleware().concat()
    },
});

export type TRootState = ReturnType<typeof store.getState>;

export default store;