(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{292:function(t,e,s){t.exports={background:"Profile_background__2QAss",avatar:"Profile_avatar__sBZxj",descriptionBlock:"Profile_descriptionBlock__2UH2o",contact:"Profile_contact__1zTcf"}},293:function(t,e,s){t.exports={textarea:"MyPosts_textarea__183te",btn:"MyPosts_btn__jTdtM",postsBlock:"MyPosts_postsBlock__2IsO1"}},294:function(t,e,s){t.exports={item:"Post_item__zF9vz",img:"Post_img__Ru95D",like:"Post_like__3CHUQ"}},295:function(t,e,s){"use strict";s.r(e);var c=s(3),i=s(35),o=s(36),n=s(40),r=s(38),a=s(1),j=s(0),l=s.n(j),u=s(39),b=s(292),d=s.n(b),p=s(44),O=function(t){var e=Object(j.useState)(!1),s=Object(u.a)(e,2),c=s[0],i=s[1],o=Object(j.useState)(t.status),n=Object(u.a)(o,2),r=n[0],l=n[1];Object(j.useEffect)((function(){l(t.status)}),[t.status]);return Object(a.jsxs)("div",{children:[!c&&Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Status :"})," ",Object(a.jsx)("span",{onDoubleClick:function(){return i(!0)},children:t.status||"-------"})]}),c&&Object(a.jsx)("div",{children:Object(a.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.updateStatus(r)},value:r})})]})},h=s(119),f=s(24),x=s(130),m=s(49),v=s.n(m),k=Object(x.a)({form:"edit-profile"})((function(t){return Object(a.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(a.jsx)("div",{children:Object(a.jsx)("button",{children:"save"})}),t.error&&Object(a.jsx)("div",{className:v.a.formSummaryError,children:t.error}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Full name"}),": ",Object(f.a)("Full name","fullName",[],f.b)]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Looking for a job"}),": ",Object(f.a)("","lookingForAJob",[],f.b,{type:"checkbox"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"My professional skills"}),":",Object(f.a)("My professional skills","lookingForAJobDescription",[],f.c)]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"About me"}),":",Object(f.a)("About me","AboutMe",[],f.c)]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Contacts"}),": ",Object.keys(t.profile.contacts).map((function(t){return Object(a.jsx)("div",{className:d.a.contact,children:Object(a.jsxs)("b",{children:[t,": ",Object(f.a)(t,"contacts."+t,[],f.b)]})},t)}))]})]})}));function g(t){var e=Object(j.useState)(!1),s=Object(u.a)(e,2),c=s[0],i=s[1];if(!t.profile)return Object(a.jsx)(p.a,{});return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:d.a.descriptionBlock,children:[Object(a.jsx)("img",{src:t.profile.photos.large||h.a,className:d.a.avatar}),t.isOwner&&Object(a.jsx)("input",{type:"file",onChange:function(e){var s=e.target.files;s&&s.length&&t.savePhoto(s[0])}}),c?Object(a.jsx)(k,{initialValues:t.profile,profile:t.profile,onSubmit:function(e){t.saveProfile(e).then((function(){i(!1)}))}}):Object(a.jsx)(P,{goToEditMode:function(){i(!0)},profile:t.profile,isOwner:t.isOwner}),Object(a.jsx)(O,{status:t.status,updateStatus:t.updateStatus})]})})}var P=function(t){var e=t.profile,s=t.isOwner,c=t.goToEditMode;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Full name"}),": ",e.fullName]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"About me"}),": ",e?"yes":"no"]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.contacts).map((function(t){return Object(a.jsx)(_,{contactTitle:t,contactValue:e.contacts[t]},t)}))]}),s&&Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:c,children:"Edit"})})]})},_=function(t){var e=t.contactTitle,s=t.contactValue;return Object(a.jsxs)("div",{className:d.a.contact,children:[Object(a.jsx)("b",{children:e})," : ",s]})},y=s(98),S=s(293),w=s.n(S),A=s(294),N=s.n(A);function M(t){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:N.a.item,children:[Object(a.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png",className:N.a.img}),t.message,Object(a.jsxs)("div",{className:N.a.like,children:[Object(a.jsx)("span",{children:"like "}),t.likesCount]})]})})}var C=s(91),F=s(66),T=l.a.memo((function(t){var e=t.posts.map((function(t){return Object(a.jsx)(M,{message:t.message,likesCount:t.likesCount,id:t.id},t.id)}));return Object(a.jsxs)("div",{className:w.a.postsBlock,children:[Object(a.jsx)("h3",{children:"My posts"}),Object(a.jsx)(I,{onSubmit:function(e){t.addPost(e.newPostText)}}),e]})})),B=Object(F.a)(10),I=Object(x.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(a.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(a.jsx)(C.a,{className:w.a.textarea,name:"newPostText",component:f.c,validate:[F.b,B]}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:w.a.btn,children:"Send"})]})})),J=s(16),U=Object(J.b)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(e){t(Object(y.a)(e))}}}))(T);function D(t){return Object(a.jsxs)("div",{children:[Object(a.jsx)(g,{saveProfile:t.saveProfile,savePhoto:t.savePhoto,isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(a.jsx)(U,{})]})}var z=s(10),E=s(9),V=function(t){Object(n.a)(s,t);var e=Object(r.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t="".concat(this.props.authorizedUserId))||this.props.history.push("/login"),this.props.getUserProfile(+t),this.props.getStatus(+t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,s){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(D,Object(c.a)(Object(c.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))})}}]),s}(l.a.Component);e.default=Object(E.d)(Object(J.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:y.d,getStatus:y.c,updateStatus:y.g,savePhoto:y.e,saveProfile:y.f}),z.g)(V)}}]);
//# sourceMappingURL=3.0bef8f91.chunk.js.map