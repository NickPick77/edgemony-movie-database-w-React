"use strict";(self.webpackChunkedgemony_movie_db=self.webpackChunkedgemony_movie_db||[]).push([[922],{288:function(e,t,s){s.d(t,{C:function(){return d}});var n=s(152),l=s(791),a=s(871),i=s(577),r="styles_AddMovieForm_form__oQbox",o=s(184);function d(e){var t=e.setModalVisibility,s=e.callType,d=e.text,c=(0,l.useState)(""),u=(0,n.Z)(c,2),_=u[0],m=u[1],x=(0,l.useState)(""),h=(0,n.Z)(x,2),p=h[0],y=h[1],j=(0,l.useState)(""),v=(0,n.Z)(j,2),g=v[0],f=v[1],M=(0,l.useState)(""),b=(0,n.Z)(M,2),N=b[0],C=b[1],U=(0,l.useState)(""),D=(0,n.Z)(U,2),S=D[0],B=D[1],I=(0,a.TH)().pathname.split("/").reverse()[0],k=function(e){return e.split(",")};return(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),"POST"===s?((0,i.a4)("",{title:_,year:p,imgUrl:N,genres:k(S),description:g}),t(!0)):((0,i.uO)(I,{title:_,year:p,imgUrl:N,genres:k(S),description:g}),t(!0))},className:r,children:[(0,o.jsx)("label",{htmlFor:"title",children:"Title"}),(0,o.jsx)("input",{value:_,onChange:function(e){return m(e.target.value)},type:"text",id:"title",name:"title",required:!0}),(0,o.jsx)("label",{htmlFor:"",children:"Year"}),(0,o.jsx)("input",{value:p,onChange:function(e){return y(e.target.value)},type:"text",id:"year",name:"year",required:!0}),(0,o.jsx)("label",{htmlFor:"",children:"Description"}),(0,o.jsx)("input",{value:g,onChange:function(e){return f(e.target.value)},type:"text",id:"description",name:"year",required:!0}),(0,o.jsx)("label",{htmlFor:"imgUrl",children:"Image Url"}),(0,o.jsx)("input",{value:N,onChange:function(e){return C(e.target.value)},type:"text",id:"imgUrl",name:"imgUrl",required:!0}),(0,o.jsx)("label",{htmlFor:"genres",children:"Genres"}),(0,o.jsx)("input",{value:S,onChange:function(e){return B(e.target.value)},type:"text",id:"genres",name:"genres",required:!0}),(0,o.jsx)("input",{type:"submit",value:d})]})}},752:function(e,t,s){s.d(t,{S:function(){return p}});var n=s(504),l="styles_CardItem__QIsX0",a="styles_card_img__kGWDh",i="styles_card_delete_btn__phU6+",r="styles_CardItem_info__w8iiu",o="styles_card_title__oZJn6",d="styles_card_year__pYRA2",c="styles_description__GDhAU",u="styles_genres_container__x4LwM",_="styles_genres_ul__wq7hU",m="styles_genre_li__ShH7K",x="styles_CardItem_ext__2aknZ",h=s(184);function p(e){var t=e.cardData,s=e.setModalVisibility,p=e.setMovieData,y=e.setModalInput,j=e.cardlisting,v=function(){y({text:"",yes:"yes",no:"no"}),s(!0),p(t.id)};return(0,h.jsx)(h.Fragment,{children:!0===j?(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)("img",{className:a,src:t.img||t.poster,alt:t.title}),(0,h.jsx)("button",{className:i,value:t.id,onClick:function(){return v()},children:"\u274c"}),(0,h.jsxs)("div",{className:r,children:[(0,h.jsx)(n.rU,{className:"",to:"/edit-movie/".concat(t.id),children:(0,h.jsx)("h2",{className:o,children:t.title})}),(0,h.jsx)("p",{className:d,children:t.year}),(0,h.jsx)("p",{className:c,children:t.description}),(0,h.jsx)("div",{className:u,children:(0,h.jsx)("ul",{className:_,children:t.genres&&t.genres.map((function(e,t){return(0,h.jsx)("li",{className:m,children:e},t)}))})})]})]}):(0,h.jsxs)("div",{className:x,children:[(0,h.jsx)("img",{className:a,src:t.img||t.poster,alt:t.title}),(0,h.jsx)("button",{className:i,value:t.id,onClick:function(){return v()},children:"\u274c"}),(0,h.jsxs)("div",{className:r,children:[(0,h.jsx)(n.rU,{className:"",to:"/edit-movie/".concat(t.id),children:(0,h.jsx)("h2",{className:o,children:t.title})}),(0,h.jsx)("p",{className:d,children:t.year}),(0,h.jsx)("p",{className:c,children:t.description}),(0,h.jsx)("div",{className:u,children:(0,h.jsx)("ul",{className:_,children:t.genres&&t.genres.map((function(e,t){return(0,h.jsx)("li",{className:m,children:e},t)}))})})]})]})})}},509:function(e,t,s){s.d(t,{u:function(){return a}});var n={Modal_Alert:"styles_Modal_Alert__Lkt4h",green:"styles_green__n2xx4",blue:"styles_blue__t4+e6",red:"styles_red__u0Klw",Modal_Confirm:"styles_Modal_Confirm__juqbN",Modal_Container:"styles_Modal_Container__wUzgi",Button_Container:"styles_Button_Container__ribEm",Modal_Button_Span:"styles_Modal_Button_Span__hxZP4",Modal_Button_Confirm:"styles_Modal_Button_Confirm__gsFdY",Modal_Button_Undo:"styles_Modal_Button_Undo__zi7kx"},l=s(184);function a(e){var t=e.isVisible,s=e.setVisibility,a=e.colorClass,i=e.modalInput,r=e.DeleteMovieData,o=e.deleteId,d="green"===a?n.green:"blue"===a?n.blue:"red"===a?n.red:"";return(0,l.jsx)(l.Fragment,{children:i.text.length>0?t&&(0,l.jsx)("div",{className:"".concat(n.Modal_Alert," ").concat(a?d:""),children:(0,l.jsx)("p",{className:n.Modal_paragraph,children:i.text})}):t&&(0,l.jsx)("div",{className:n.Modal_Confirm,children:(0,l.jsxs)("div",{className:n.Modal_Container,children:[(0,l.jsx)("p",{children:"Vuoi davvero eliminare il Film?"}),(0,l.jsxs)("div",{className:n.Button_Container,children:[(0,l.jsx)("button",{className:n.Modal_Button_Confirm,onClick:function(){return r(o)},children:(0,l.jsx)("span",{className:n.Modal_Button_Span,children:i.yes})}),(0,l.jsx)("button",{className:n.Modal_Button_Undo,onClick:function(){return s(!1)},children:(0,l.jsx)("span",{className:n.Modal_Button_Span,children:i.no})})]})]})})})}},663:function(e,t,s){s.r(t),s.d(t,{default:function(){return _}});var n=s(152),l=s(791),a=s(871),i=s(577),r=s(509),o=s(752),d=s(288),c="styles_EditMovie__0ZtzC",u=s(184);function _(e){var t=e.DeleteMovieData,s=e.modalInput,_=e.setModalInput,m=e.modalVisibility,x=e.setModalVisibility,h=e.movieData,p=e.setMovieData,y=(0,a.TH)(),j=(0,l.useState)(!1),v=(0,n.Z)(j,2),g=v[0],f=v[1],M=y.pathname.split("/").reverse()[0];return(0,l.useEffect)((function(){(0,i.HT)(M).then((function(e){return p(e)}))}),[g]),(0,u.jsxs)("section",{className:c,children:[(0,u.jsx)(o.S,{cardData:h,setMovieData:p,update:g,setUpdate:f,setModalInput:_,setModalVisibility:x}),(0,u.jsx)(d.C,{setModalVisibility:x,callType:"PUT",text:"Update Movie"}),(0,u.jsx)(r.u,{modalInput:s,isVisible:m,setVisibility:x,colorClass:"blue",DeleteMovieData:t,deleteId:h})]})}}}]);
//# sourceMappingURL=edit.96f22533.chunk.js.map