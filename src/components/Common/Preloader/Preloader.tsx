import React from "react";
import style from './preloader.module.scss'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

let Preloader = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 60}} spin />;
    return (
        <div
            className={style.preloader}
            style={{margin: "10px auto", color: "gold"}}>
            <Spin indicator={antIcon} />
        </div>
    )
}

export default Preloader