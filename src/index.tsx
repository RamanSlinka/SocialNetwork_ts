
import store from "./Redux/redux-store";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import  {Provider} from "react-redux";



/* let rerenderEntireTree = () => {*/

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider  store={store}>
                <App
                    /*store={store.getState()} dispatch={store.dispatch.bind(store)*/
                    /* updateNewPostText={store.updateNewPostText.bind(store)}*/
                />
                </Provider>
            </BrowserRouter>

        </React.StrictMode>,
        document.getElementById('root')
    );
}
/*rerenderEntireTree();*/

