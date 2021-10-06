import React from 'react'
import s from './FormsControls.module.css'
import {Field} from "redux-form";
import style from "../../Common/FormsControls/FormsControls.module.css"



export const FormControl: React.FC<any> = ({input, meta, child, ...props}) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const CreateField = (placeholder: string | null, name: string,
                            validators: any, component: any, props?: any, text?: string) => {
    return <div>
    <Field
        className={style.input}
        placeholder={placeholder}
                  name={name}
                  validate={validators}
                  component={component}
           {...props}
    /> {text}

    </div>
}


