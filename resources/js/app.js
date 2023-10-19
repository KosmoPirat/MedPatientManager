import React from "react";
import ReactDom from "react-dom";

import { Provider } from 'react-redux';
import store from './App/src/redux/store';

import 'bulma/css/bulma.min.css';
import "./assets/css/style.css";
import App from "./App/App";

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.querySelector('#root')
);
