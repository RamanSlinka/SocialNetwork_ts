import store from "./Redux/redux-store";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {DatePicker} from "antd";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>

                <App/>
            </Provider>
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
);




