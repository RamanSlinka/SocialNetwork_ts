import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {MyPostsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/Validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";


/*type PropsType = {
    posts: Array<PostsType>
    /!*dispatch: (action: ActionTypes) => void*!/
    newPostText: string
    updateNewPostText: (message: string) => void
    addPost: () => void
}*/

export default function MyPosts(props: MyPostsType) {

    let postsElements =
        props.posts.map(post =>
            <Post message={post.message}
                  likesCount={post.likesCount}
                  id={post.id}/>);


    let onAddPost = (values: any) => {
        props.addPost(values.newPostText);
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            {postsElements}
        </div>
    );
}

type FormType = {
    newPostText: string
}

const maxLength10 =  maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<FormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newPostText' component={Textarea}
            validate={[required,maxLength10]}
            />

            <br/>
            <button
                className={s.btn}>Send
            </button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<FormType>({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm)
