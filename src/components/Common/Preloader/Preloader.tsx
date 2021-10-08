import React from "react";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

let Preloader = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 40}} spin />;
    return (
        <div style={{margin: "10px auto", color: "gold"}}>
            <Spin indicator={antIcon} />
        </div>
    )
}

export default Preloader