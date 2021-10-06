import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {CreateField, Input} from '../Common/FormsControls/FormsControls';
import {required} from "../../Utils/Validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/AuthReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";
import style from './../Common/FormsControls/FormsControls.module.css'

type FormDateType = {
    email: string
    password: string
    remember: boolean
    captcha: string | null
}

type LoginPropsType = {
    captchaUrl: null | string
}


const LoginForm: React.FC<InjectedFormProps<FormDateType, LoginPropsType> & LoginPropsType> =
    ({handleSubmit, error, captchaUrl}) => {
        debugger

        return (

            <form onSubmit={handleSubmit}>
                {CreateField('Email', 'email', [required], Input)}
                {CreateField('Password', 'password',
                    [required], Input, {type: 'password'})}
                {CreateField(null, 'remember',
                    [], Input, {type: 'checkbox'}, 'remember me')}

                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && CreateField('Symbols from images', 'captcha', [required], Input, {})}


                {error && <div className={style.formSummaryError}>{error}</div>}
                <div>
                    <button className={style.btn}>Login</button>
                </div>
            </form>

        )
    }

const LoginReduxForm = reduxForm<FormDateType, LoginPropsType>({
    form: 'login'
})(LoginForm)


type MapStatePropsType = {
    captchaUrl: null | string
    isAuth: boolean
}

type MapDispatchPropsType = {
    login: (email: string, password: string,
            remember: boolean,
            captcha: null | string) => void
}


const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    debugger

    const onSubmit = (formData: FormDateType) => {
        props.login(formData.email, formData.password,
            formData.remember, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>             //  '/profile'
    }

    return (
        <div className={style.loginFormWrapper}>
            <h1 className={style.logPas}>Login</h1>
            <p>To log in get registered
                <a href={'https://social-network.samuraijs.com/'}
                   target={'_blank'}> here
                </a>
            </p>
            <p>or use common test account credentials:</p>
            <p>Email: <span className={style.logPas}>free@samuraijs.com</span></p>
            <p>Password: <span className={style.logPas}>free</span></p>
            <LoginReduxForm
                onSubmit={onSubmit}
                captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login);