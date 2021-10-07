import React from 'react';
import style from './MyPosts.module.scss'
import styleCommon from '../../Common/SCSS/input.module.scss';
import styleBtn from '../../Common/SCSS/button.module.scss';
import Post from './Post/Post';
import {MyPostsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/Validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";


const MyPosts = React.memo((props: MyPostsType) => {

    let postsElements =
        props.posts.map(post =>
            <Post key={post.id}
                  message={post.message}
                  likesCount={post.likesCount}
                  id={post.id}/>);


    let onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }


    return (
        <div className={style.postsBlock}>
            <h3 className={style.title}>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            {postsElements}
        </div>
    );
})


export default MyPosts


type FormType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<FormType>> = (props) => {
    return (
        <form
            className={style.formWrapper}
            onSubmit={props.handleSubmit}>
            <Field
                className={styleCommon.textarea}
                name='newPostText' component={Textarea}
                validate={[required, maxLength10]}
            />

            <br/>
            <button
                className={styleBtn.button}>Send
            </button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<FormType>({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm)
