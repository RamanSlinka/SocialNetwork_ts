import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import { Input } from '../Common/FormsControls/FormsControls';
import {required} from "../../Utils/Validators/validators";
import {connect} from "react-redux";
import {initialStateType, login} from "../../Redux/AuthReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";

type FormDateType = {
    email: string
    password: string
    remember: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDateType>> = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input} name={'remember'} type={'checkbox'}/> remember
            </div>
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