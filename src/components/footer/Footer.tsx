import {GithubOutlined, InstagramOutlined,
    LinkedinOutlined, WechatFilled} from '@ant-design/icons';
import React from 'react';
import style from './Footer.module.scss'
const Footer = () => {
    return (
        <footer className={style.footerBlock}>
            <div className={style.content}>

                <div className={style.socialNetworks}>
                    <div className={style.SN}>
                        <a href="https://t.me/RamanSlinka" target="blank">
                                <WechatFilled />
                            telegram
                        </a>
                    </div>
                    <div className={style.SN}>
                        <a href="https://github.com/RamanSlinka" target="blank">
                            <GithubOutlined />
                            gitHub
                        </a></div>
                    <div className={style.SN}>
                        <a href="https://www.linkedin.com/in/raman-slinka" target="blank">
                            <LinkedinOutlined />
                            linkedIn
                        </a></div>
                    <div className={style.SN}>
                        <a href="https://www.instagram.com/raman_slinka/" target="blank">
                            <InstagramOutlined />
                            instagram
                        </a></div>
                </div>
                <h3>© 2021 All rights reserved</h3>
            </div>

        </footer>
    );
};

export default Footer;