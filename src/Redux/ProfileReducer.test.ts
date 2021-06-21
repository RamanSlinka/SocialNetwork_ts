
import profileReducer, {addPostActionCreator, deletePost} from "./ProfileReduser";

type PostsType = {
  id: number
  message: string
  likesCount: number
}

 type initialStateType = {
  posts: Array<PostsType>
  profile: any
  status: string
}

let state: initialStateType = {
  posts: [
    {id: 1, message: 'Hi, how are you ?', likesCount: 12},
    {id: 2, message: "It's my firs post", likesCount: 11},
    {id: 2, message: "It's my firs post", likesCount: 11}
  ],
  profile: null,
  status: ''
}

test('new post should be added', () => {
  let action = addPostActionCreator('Raman');
let newState =  profileReducer(state, action);

  expect( newState.posts.length).toBe(3);
  expect( newState.posts[2].message).toBe('Raman');
})

test('after deleting of message should be decrement', () => {
  let actionDelete = deletePost(1);
let newState =  profileReducer(state, actionDelete);


   expect( newState.posts.length).toBe(2);

})


