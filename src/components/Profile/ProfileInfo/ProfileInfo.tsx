import React from "react";
import p from "../Profile.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


export default function ProfileInfo(props: any) {
    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div>
            {/*<div>
                <img src="https://images.wallpaperscraft.ru/image/lava_tekstura_kamni_140277_2560x1024.jpg" alt="img"
                     className={p.background}/>
            </div>*/}
            <div className={p.descriptionBlock}>
                <img src={props.profile.photos.large} className={p.avatar} />
              {/* <img src="https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg"
              alt="avatar" className={p.avatar}/>*/}
                <ProfileStatus />
            </div>
        </div>
    );
}