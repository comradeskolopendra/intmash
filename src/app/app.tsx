import { Home } from "@/pages";
import { FC } from "react";
import { Provider } from "react-redux";

import store from "../entities/index";

const App: FC = () => {
    return (
        <Provider store={store}>
            <Home/>
        </Provider>
    )
};

export default App;