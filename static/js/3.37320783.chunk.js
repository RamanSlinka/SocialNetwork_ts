(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{492:function(e,t,s){e.exports={descriptionBlock:"Profile_descriptionBlock__2OyRN",inputFile:"Profile_inputFile__33rtd",avatarContainer:"Profile_avatarContainer__d5f-f",avatar:"Profile_avatar__I9_Mn",detailedInfo:"Profile_detailedInfo__3VFgu",titleDetailedInfo:"Profile_titleDetailedInfo__30vWj",infoBlock:"Profile_infoBlock__3zj5B",contact:"Profile_contact__aAPyu"}},493:function(e,t,s){e.exports={headerProfile:"ProfileInfo_headerProfile__1UJZK",fullName:"ProfileInfo_fullName__EgZqp",status:"ProfileInfo_status__n6rSO",statusTitle:"ProfileInfo_statusTitle__-YRrs",statusDescription:"ProfileInfo_statusDescription__3zFFT",avatar:"ProfileInfo_avatar__U8AEc"}},494:function(e,t,s){e.exports={postsBlock:"MyPosts_postsBlock__1uoA-",title:"MyPosts_title__rT7iN",formWrapper:"MyPosts_formWrapper__Lw-0L"}},495:function(e,t,s){e.exports={item:"Post_item__33mi-",img:"Post_img__1ncUv",like:"Post_like__25eE2"}},496:function(e,t,s){"use strict";s.r(t);var a=s(4),i=s(72),o=s(73),c=s(75),r=s(74),n=s(1),l=s(0),j=s.n(l),u=s(34),d=s(50),p=s.n(d),b=s(53),f=s.n(b),m=s(492),h=s.n(m),O=s(493),x=s.n(O),v=s(80),_=s(167),P=s.n(_),N=function(e){var t=Object(l.useState)(!1),s=Object(u.a)(t,2),a=s[0],i=s[1],o=Object(l.useState)(e.status),c=Object(u.a)(o,2),r=c[0],j=c[1];Object(l.useEffect)((function(){j(e.status)}),[e.status]);return Object(n.jsxs)("div",{className:x.a.status,children:[!a&&Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{className:x.a.statusTitle,children:"Status :"})," ",Object(n.jsx)("span",{className:x.a.statusDescription,onDoubleClick:function(){return i(!0)},children:e.status||"-------"})]}),a&&Object(n.jsx)("div",{children:Object(n.jsx)("input",{className:P.a.input,onChange:function(e){j(e.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),e.updateStatus(r)},value:r})})]})},k=s(201),g=s(52),y=s(216),F=Object(y.a)({form:"edit-profile"})((function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(n.jsx)("div",{className:f.a.titlesForm,children:Object(n.jsx)("button",{className:p.a.button,children:"save"})}),e.error&&Object(n.jsx)("div",{className:f.a.formSummaryError,children:e.error}),Object(n.jsxs)("div",{className:f.a.titlesForm,children:[Object(n.jsx)("p",{children:"Full name"}),": ",Object(g.a)("Full name","fullName",[],g.b)]}),Object(n.jsxs)("div",{className:f.a.titlesForm,children:[Object(n.jsx)("p",{children:"Looking for a job"}),": ",Object(g.a)("","lookingForAJob",[],g.b,{type:"checkbox"})]}),Object(n.jsxs)("div",{className:f.a.titlesForm,children:[Object(n.jsx)("p",{children:"My professional skills"}),":",Object(g.a)("My professional skills","lookingForAJobDescription",[],g.c)]}),Object(n.jsxs)("div",{className:f.a.titlesForm,children:[Object(n.jsx)("p",{children:"About me"}),":",Object(g.a)("About me","AboutMe",[],g.c)]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Contacts"}),": ",Object.keys(e.profile.contacts).map((function(e){return Object(n.jsx)("div",{className:h.a.contact,children:Object(n.jsxs)("p",{children:[e,": ",Object(g.a)(e,"contacts."+e,[],g.b)]})},e)}))]})]})}));function S(e){var t=Object(l.useState)(!1),s=Object(u.a)(t,2),a=s[0],i=s[1];if(!e.profile)return Object(n.jsx)(v.a,{});return Object(n.jsxs)("div",{className:h.a.descriptionBlock,children:[Object(n.jsxs)("div",{className:h.a.avatarContainer,children:[Object(n.jsx)("img",{src:e.profile.photos.large||k.a,className:h.a.avatar}),e.isOwner&&Object(n.jsx)("input",{className:h.a.inputFile,type:"file",onChange:function(t){var s=t.target.files;s&&s.length&&e.savePhoto(s[0])}})]}),Object(n.jsxs)("div",{className:h.a.infoBlock,children:[Object(n.jsxs)("div",{className:x.a.headerProfile,children:[Object(n.jsx)("span",{className:x.a.fullName,children:e.profile.fullName}),Object(n.jsx)(N,{status:e.status,updateStatus:e.updateStatus})]}),Object(n.jsx)("hr",{style:{border:" 1px solid gold "}}),Object(n.jsxs)("div",{className:h.a.detailedInfo,children:[Object(n.jsx)("h3",{className:h.a.titleDetailedInfo,children:"Detailed information"}),a?Object(n.jsx)(F,{initialValues:e.profile,profile:e.profile,onSubmit:function(t){e.saveProfile(t).then((function(){i(!1)}))}}):Object(n.jsx)(I,{goToEditMode:function(){i(!0)},profile:e.profile,isOwner:e.isOwner})]})]})]})}var I=function(e){var t=e.profile,s=e.isOwner,a=e.goToEditMode;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:f.a.titlesForm,children:[Object(n.jsx)("p",{children:"Full name"}),": ",t.fullName]}),Object(n.jsxs)("div",{className:f.a.titlesForm,children:[Object(n.jsx)("p",{children:"Looking for a job"}),": ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&Object(n.jsxs)("div",{className:f.a.titlesForm,children:[Object(n.jsx)("p",{children:"My professional skills"}),": ",t.lookingForAJobDescription]}),Object(n.jsxs)("div",{className:f.a.titlesForm,children:[Object(n.jsx)("p",{children:"About me"}),": ",t?"yes":"no"]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Contacts :"})," ",Object.keys(t.contacts).map((function(e){return Object(n.jsx)(A,{contactTitle:e,contactValue:t.contacts[e]},e)}))]}),s&&Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:p.a.button,onClick:a,children:"Edit"})})]})},A=function(e){var t=e.contactTitle,s=e.contactValue;return Object(n.jsxs)("div",{className:h.a.contact,children:[Object(n.jsx)("b",{children:t})," : ",s]})},w=s(168),C=s(494),D=s.n(C),M=s(495),T=s.n(M);function B(e){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:T.a.item,children:[Object(n.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png",className:T.a.img}),e.message,Object(n.jsxs)("div",{className:T.a.like,children:[Object(n.jsx)("span",{children:"like "}),e.likesCount]})]})})}var E=s(153),J=s(115),U=j.a.memo((function(e){var t=e.posts.map((function(e){return Object(n.jsx)(B,{message:e.message,likesCount:e.likesCount,id:e.id},e.id)}));return Object(n.jsxs)("div",{className:D.a.postsBlock,children:[Object(n.jsx)("h3",{className:D.a.title,children:"My posts"}),Object(n.jsx)(L,{onSubmit:function(t){e.addPost(t.newPostText)}}),t]})})),z=Object(J.a)(10),L=Object(y.a)({form:"ProfileAddNewPostForm"})((function(e){return Object(n.jsxs)("form",{className:D.a.formWrapper,onSubmit:e.handleSubmit,children:[Object(n.jsx)(E.a,{className:P.a.textarea,name:"newPostText",component:g.c,validate:[J.b,z]}),Object(n.jsx)("button",{className:p.a.button,children:"Send"})]})})),V=s(30),W=Object(V.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Object(w.a)(t))}}}))(U),R=s(217);function Z(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(R.a,{}),Object(n.jsx)(S,{saveProfile:e.saveProfile,savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(n.jsx)(W,{})]})}var q=s(19),K=s(17),Y=function(e){Object(c.a)(s,e);var t=Object(r.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e="".concat(this.props.authorizedUserId))||this.props.history.push("/login"),this.props.getUserProfile(+e),this.props.getStatus(+e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(Z,Object(a.a)(Object(a.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))})}}]),s}(j.a.Component);t.default=Object(K.d)(Object(V.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:w.d,getStatus:w.c,updateStatus:w.g,savePhoto:w.e,saveProfile:w.f}),q.g)(Y)}}]);
//# sourceMappingURL=3.37320783.chunk.js.map