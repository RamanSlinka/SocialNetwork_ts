(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__lZ0MM",dialogsItem:"Dialogs_dialogsItem__3_tNJ",active:"Dialogs_active__1laJr",messages:"Dialogs_messages__2GK0A",message:"Dialogs_message__3BWVe"}},22:function(e,t,s){e.exports={background:"Profile_background__2QAss",avatar:"Profile_avatar__sBZxj",descriptionBlock:"Profile_descriptionBlock__2UH2o"}},23:function(e,t,s){e.exports={text_area:"MyPosts_text_area__2k5np",btn:"MyPosts_btn__jTdtM",postsBlock:"MyPosts_postsBlock__2IsO1"}},29:function(e,t,s){e.exports={userPhoto:"users_userPhoto__1ZmEe",selectedPage:"users_selectedPage__26UyI"}},30:function(e,t,s){e.exports={item:"Post_item__zF9vz",img:"Post_img__Ru95D"}},31:function(e,t,s){e.exports={header:"Header_header__1lit6",loginBlock:"Header_loginBlock__3slSa"}},49:function(e,t,s){},5:function(e,t,s){e.exports={nav:"NavBar_nav__1-8yx",item:"NavBar_item__i7o89",active:"NavBar_active__2CX6I"}},50:function(e,t,s){},73:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(17),c=s(21),i=s(2),r={posts:[{id:1,message:"Hi, how are you ?",likesCount:12},{id:2,message:"It's my firs post",likesCount:11}],newPostText:"random text",profile:null},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var s={id:6,message:e.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[s]),newPostText:""});case"UPDATE-NEW-POST-TEXT":return Object(i.a)(Object(i.a)({},e),{},{newPostText:t.newText});case"SET-USER-PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});default:return e}},l={dialogs:[{id:1,name:"Roman"},{id:2,name:"Anna"},{id:3,name:"Sofia"},{id:4,name:"Robert"}],messages:[{id:1,message:"hi !"},{id:2,message:"how are you ?"},{id:3,message:"WTF?"}],newMessageBody:""},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE-NEW-MESSAGE-BODY":return Object(i.a)(Object(i.a)({},e),{},{newMessageBody:t.body});case"SEND-MESSAGE":var s=e.newMessageBody;return Object(i.a)(Object(i.a)({},e),{},{newMessageBody:"",messages:[].concat(Object(c.a)(e.messages),[{id:4,message:s}])});default:return e}},d={users:[],pageSize:15,totalCount:0,currentPage:1,isFetching:!0},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case"SET_USERS_TOTAL_COUNT":return Object(i.a)(Object(i.a)({},e),{},{totalCount:t.totalCount});case"TOGGLE_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});default:return e}},j={userId:null,email:null,login:null,isAuth:!1},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATE":return Object(i.a)(Object(i.a)(Object(i.a)({},e),t.data),{},{isAuth:!0});default:return e}},p=Object(n.b)({profilePage:o,dialogsPage:u,usersPage:A,auth:b}),g=Object(n.c)(p),h=s(1),m=s.n(h),O=s(19),v=s.n(O),x=(s(49),s(50),s(4)),f=s(5),E=s.n(f);function k(){return Object(a.jsxs)("nav",{className:E.a.nav,children:[Object(a.jsx)("div",{className:E.a.item,children:Object(a.jsx)(x.b,{to:"/profile",activeClassName:E.a.active,children:" Profile "})}),Object(a.jsx)("div",{className:E.a.item,children:Object(a.jsx)(x.b,{to:"/dialogs",activeClassName:E.a.active,children:"Messages"})}),Object(a.jsx)("div",{className:E.a.item,children:Object(a.jsx)(x.b,{to:"/users",activeClassName:E.a.active,children:"Users"})}),Object(a.jsx)("div",{className:"".concat(E.a.item," ").concat(E.a.active),children:Object(a.jsx)(x.b,{to:"/news",activeClassName:E.a.active,children:"News"})}),Object(a.jsx)("div",{className:E.a.item,children:Object(a.jsx)(x.b,{to:"/music",activeClassName:E.a.active,children:"Music"})}),Object(a.jsx)("div",{className:E.a.item,children:Object(a.jsx)(x.b,{to:"/settings",activeClassName:E.a.active,children:"Settings"})})]})}function C(){return Object(a.jsx)("div",{children:"Settings"})}function T(){return Object(a.jsx)("div",{children:"News"})}function P(){return Object(a.jsx)("div",{children:"Music"})}function y(){return Object(a.jsxs)("div",{children:["Friends",Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:"http://pngimg.com/uploads/batman/batman_PNG41.png",alt:"logo"}),Object(a.jsx)("p",{children:"Brad Pitt"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e2ff7567-427a-43e8-9446-b08937695ae9/d9m5yji-8813bee6-2c33-4ee5-bee7-8bab8f458948.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZTJmZjc1NjctNDI3YS00M2U4LTk0NDYtYjA4OTM3Njk1YWU5XC9kOW01eWppLTg4MTNiZWU2LTJjMzMtNGVlNS1iZWU3LThiYWI4ZjQ1ODk0OC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.NKZswdg4vZChczHzRcpM2-Jb9BTJ6ye74_uvujaHzpA",alt:"logo"}),Object(a.jsx)("p",{children:"John Connor"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:"https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-png-transparent.png",alt:"logo"}),Object(a.jsx)("p",{children:"Nickolas"})]})]})}var B=s(3),w=s(11),N=s.n(w);function I(e){return Object(a.jsx)("div",{className:N.a.dialog+" "+N.a.active,children:Object(a.jsxs)(x.b,{to:"/dialogs/"+e.id,children:[" ",e.name]})})}function S(e){return Object(a.jsx)("div",{className:N.a.message,children:e.message.message})}var J=s(8),M=Object(J.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(){e({type:"SEND-MESSAGE"})},updateNewMessageBody:function(t){e({type:"UPDATE-NEW-MESSAGE-BODY",body:t})}}}))((function(e){var t=e.dialogsPage.dialogs.map((function(e){return Object(a.jsx)(I,{name:e.name,id:e.id})})),s=e.dialogsPage.messages.map((function(e){return Object(a.jsx)(S,{message:e})})),n=e.dialogsPage.newMessageBody;return Object(a.jsxs)("div",{className:N.a.dialogs,children:[Object(a.jsx)("div",{className:N.a.dialogsItem,children:t}),Object(a.jsx)("div",{className:N.a.messages,children:s}),Object(a.jsxs)("div",{children:[Object(a.jsx)("textarea",{value:n,onChange:function(t){var s=t.currentTarget.value;e.updateNewMessageBody(s)}}),Object(a.jsx)("button",{onClick:function(){e.sendMessage()},children:"Send"})]})]})})),Q=s(13),R=s(14),H=s(16),Z=s(15),D=s(10),V=s.n(D),U=s(29),z=s.n(U),L=function(e){Math.ceil(e.totalCount/e.pageSize);for(var t=[],s=1;s<=30;s++)t.push(s);return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:t.map((function(t){return Object(a.jsxs)("span",{className:e.currentPage===t?z.a.selectedPage:"",onClick:function(s){e.onPageChanged(t)},children:[" ",t," "]})}))}),e.users.map((function(t){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{children:Object(a.jsx)(x.b,{to:"/profile/"+t.id,children:Object(a.jsx)("img",{src:t.photos.small?t.photos.small:"data:image/png;base64,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",alt:"user",className:z.a.userPhoto})})}),Object(a.jsx)("div",{children:t.followed?Object(a.jsx)("button",{onClick:function(){V.a.delete("https://social-network.samuraijs.com/api/1.0/follow/".concat(t.id),{withCredentials:!0,headers:{"API-KEY":"3d0e16a8-fd7d-4f04-a847-cacf5931e58d"}}).then((function(s){0===s.data.resultCode&&e.unfollow(t.id)}))},children:"follow"}):Object(a.jsx)("button",{onClick:function(){V.a.post("https://social-network.samuraijs.com/api/1.0/follow/".concat(t.id),{},{withCredentials:!0,headers:{"API-KEY":"3d0e16a8-fd7d-4f04-a847-cacf5931e58d"}}).then((function(s){0===s.data.resultCode&&e.follow(t.id)}))},children:"Unfollow"})})]}),Object(a.jsxs)("span",{children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{children:t.name}),Object(a.jsx)("div",{children:t.status})]}),Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{children:"u.location.country"}),Object(a.jsx)("div",{children:"u.location.city"})]})]})]},t.id)}))]})},G=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:"data:image/gif;base64,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"})})},W=function(e){Object(H.a)(s,e);var t=Object(Z.a)(s);function s(){var e;Object(Q.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.toggleIsFetching(!0),V.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(t,"&count=").concat(e.props.pageSize),{withCredentials:!0}).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.data.items)}))},e}return Object(R.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.props.toggleIsFetching(!0),V.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.currentPage,"&count=").concat(this.props.pageSize),{withCredentials:!0}).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.data.items),e.props.setTotalUsersCount(t.data.totalCount)}))}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[this.props.isFetching?Object(a.jsx)(G,{}):null,Object(a.jsx)(L,{totalCount:this.props.totalCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unFollow})]})}}]),s}(m.a.Component),F=Object(J.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalCount:e.usersPage.totalCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching}}),{follow:function(e){return{type:"FOLLOW",userId:e}},unFollow:function(e){return{type:"UNFOLLOW",userId:e}},setUsers:function(e){return{type:"SET_USERS",users:e}},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},setTotalUsersCount:function(e){return{type:"SET_USERS_TOTAL_COUNT",totalCount:e}},toggleIsFetching:function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}}})(W),q=s(22),K=s.n(q);function Y(e){return e.profile?Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:"https://images.wallpaperscraft.ru/image/lava_tekstura_kamni_140277_2560x1024.jpg",alt:"img",className:K.a.background})}),Object(a.jsx)("div",{className:K.a.descriptionBlock,children:Object(a.jsx)("img",{src:e.profile.photos.large,className:K.a.avatar})})]}):Object(a.jsx)(G,{})}var X=s(23),_=s.n(X),$=s(30),ee=s.n($);function te(e){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:ee.a.item,children:[Object(a.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU",className:ee.a.img}),e.message,Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"like "}),e.likesCount]})]})})}var se=Object(J.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){e(function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}(t))},addPost:function(){e({type:"ADD-POST"})}}}))((function(e){var t=e.posts.map((function(e){return Object(a.jsx)(te,{message:e.message,likesCount:e.likesCount,id:e.id})}));return Object(a.jsxs)("div",{className:_.a.postsBlock,children:[Object(a.jsx)("h3",{children:"My posts"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("textarea",{onChange:function(t){var s=t.currentTarget.value;e.updateNewPostText(s)},value:e.newPostText,placeholder:"how are you:)",className:_.a.text_area}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{onClick:function(){e.addPost()},className:_.a.btn,children:"Send"})]}),t]})}));function ae(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)(Y,{profile:e.profile}),Object(a.jsx)(se,{})]})}var ne=function(e){Object(H.a)(s,e);var t=Object(Z.a)(s);function s(){return Object(Q.a)(this,s),t.apply(this,arguments)}return Object(R.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.userId;t||(t="2"),V.a.get("https://social-network.samuraijs.com/api/1.0/profile/"+t).then((function(t){e.props.setUserProfile(t.data)}))}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(ae,Object(i.a)(Object(i.a)({},this.props),{},{profile:this.props.profile}))})}}]),s}(m.a.Component),ce=Object(B.e)(ne),ie=Object(J.b)((function(e){return{profile:e.profilePage.profile}}),{setUserProfile:function(e){return{type:"SET-USER-PROFILE",profile:e}}})(ce),re=s(31),oe=s.n(re);function le(e){return Object(a.jsxs)("header",{className:oe.a.header,children:[Object(a.jsx)("img",{src:"https://previews.123rf.com/images/mackdsgn/mackdsgn1602/mackdsgn160200050/53552462-social-network-logo-template-business-logo-template-vector.jpg",alt:"logo"}),Object(a.jsx)("div",{className:oe.a.loginBlock,children:e.isAuth?e.login:Object(a.jsx)(x.b,{to:"/login",children:"Login"})})]})}var ue=function(e){Object(H.a)(s,e);var t=Object(Z.a)(s);function s(){return Object(Q.a)(this,s),t.apply(this,arguments)}return Object(R.a)(s,[{key:"componentDidMount",value:function(){var e=this;V.a.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials:!0}).then((function(t){if(0===t.data.resultCode){var s=t.data.data,a=s.id,n=s.login,c=s.email;e.props.setAuthUserData(a,n,c)}}))}},{key:"render",value:function(){return Object(a.jsx)(le,Object(i.a)({},this.props))}}]),s}(m.a.Component),de=Object(J.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setAuthUserData:function(e,t,s){return{type:"SET_USER_DATE",data:{userId:e,email:t,login:s}}}})(ue),Ae=function(){return Object(a.jsxs)("div",{className:"app-wrapper",children:[Object(a.jsx)(de,{}),Object(a.jsx)(k,{}),Object(a.jsxs)("div",{className:"app-wrapper-content",children:[Object(a.jsx)(B.a,{path:"/dialogs",render:function(){return Object(a.jsx)(M,{})}}),Object(a.jsx)(B.a,{path:"/profile/:userId?",render:function(){return Object(a.jsx)(ie,{})}}),Object(a.jsx)(B.a,{path:"/users",render:function(){return Object(a.jsx)(F,{})}}),Object(a.jsx)(B.a,{path:"/news",component:T}),Object(a.jsx)(B.a,{path:"/music",component:P}),Object(a.jsx)(B.a,{path:"/settings",component:C}),Object(a.jsx)(B.a,{path:"/sidebar",sidebar:y})]})]})};v.a.render(Object(a.jsx)(m.a.StrictMode,{children:Object(a.jsx)(x.a,{children:Object(a.jsx)(J.a,{store:g,children:Object(a.jsx)(Ae,{})})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.39d327f7.chunk.js.map