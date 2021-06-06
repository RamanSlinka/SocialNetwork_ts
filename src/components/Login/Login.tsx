import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type FormDateType = {
    login: string
    password: string
    remember: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDateType>> = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field component={'input'} name={'remember'} type={'checkbox'}/> remember
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

const Login = () => {
    const onSubmit = (formData: FormDateType) => {console.log(formData)}

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;