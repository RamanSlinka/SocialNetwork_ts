
import store from "./Redux/redux-store";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";



 let rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>

            <BrowserRouter>
                <App state={store.getState()} dispatch={store.dispatch.bind(store) }
                    /* updateNewPostText={store.updateNewPostText.bind(store)}*//>
            </BrowserRouter>

        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree();

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(/*state*/)
});