import {CheckOutlined} from '@ant-design/icons';
import React from 'react';
import CarouselPage from "../carousel/CarouselPage";
import style from './WelcomePage.module.scss'

const WelcomePage = () => {
    return (
        <div>
            <CarouselPage/>

            <div className={style.wrapper}>
                <h2 className={style.title}>Welcome !</h2>
                <h3 className={style.title}>This application is made using technologies such as:</h3>
                <ol>
                    <li><CheckOutlined   style={{color: "gold"}}/> React + TypeScript</li>
                    <li> <CheckOutlined  style={{color: "gold"}}/> Classes components</li>
                    <li><CheckOutlined  style={{color: "gold"}}/> Functions components</li>
                    <li><CheckOutlined  style={{color: "gold"}}/> Hooks: useState, useEffect, useDispatch.</li>
                    <li> <CheckOutlined  style={{color: "gold"}}/> Redux, React redux typescript, Thunk.</li>
                    <li><CheckOutlined  style={{color: "gold"}}/>  React router. Page navigation. BrowserRouter, Route, Switch, Redirect.</li>
                    <li><CheckOutlined  style={{color: "gold"}}/> Decomposition</li>
                    <li> <CheckOutlined  style={{color: "gold"}}/> Working with the server. Axios. JSON.</li>
                    <li><CheckOutlined  style={{color: "gold"}}/> User authorization.</li>
                    <li><CheckOutlined  style={{color: "gold"}}/> Redux-form</li>
                    <li> <CheckOutlined  style={{color: "gold"}}/> SASS. Module.scss. Variables</li>
                    <li><CheckOutlined  style={{color: "gold"}}/>  Ant Design</li>
                </ol>
            </div>


        </div>
    );
};

export default WelcomePage;