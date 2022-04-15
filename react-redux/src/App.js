import React from "react";
import './App.css';
import CakeContainer from "./components/CakeContainer";
import {Provider} from "react-redux";
import store from "./redux/store";
import HookCakeContainer from "./components/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                {/*<CakeContainer/>*/}
                {/*<HookCakeContainer/>*/}
                {/*<IceCreamContainer/>*/}
                {/*<NewCakeContainer/>*/}
                {/*<ItemContainer cake/>*/}
                {/*<ItemContainer iceCream/>*/}
                <UserContainer/>
            </div>
        </Provider>
    );
}

export default App;
