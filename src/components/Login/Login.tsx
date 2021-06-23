import React from 'react';
import { InjectedFormProps, reduxForm} from 'redux-form';
import {CreateField, Input} from '../Common/FormsControls/FormsControls';
import {required} from "../../Utils/Validators/validators";
import {connect} from "react-redux";
import { login} from "../../Redux/AuthReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";
import s from './../Common/FormsControls/FormsControls.module.css'

type FormDateType = {
    email: string
    password: string
    remember: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDateType>> = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            {CreateField('Email', 'email', [required], Input)}
            {CreateField('Password', 'password', [required], Input, {type: 'password'})}
            {CreateField(null, 'remember', [], Input, {type: 'checkbox'}, 'remember me')}


            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

const LoginReduxForm = reduxForm<FormDateType>({
    form: 'login'
})(LoginForm)

const Login: React.FC<any> = (props) => {
    const onSubmit = (formData: FormDateType) => {
        props.login(formData.email, formData.password, formData.remember)}

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);