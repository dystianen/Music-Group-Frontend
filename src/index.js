import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Main} from "./Main";
import enUs from 'antd/lib/locale/en_US';
import {ConfigProvider} from "antd";

ReactDOM.render(
    <ConfigProvider locale={enUs}>
        <Main/>
    </ConfigProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
