"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{609:function(n,e,t){t.d(e,{z:function(){return c}});var r=t(184),c=function(n){var e=n.onClick;return(0,r.jsx)("div",{children:(0,r.jsx)("button",{type:"button",onClick:e,children:"Load more"})})}},774:function(n,e,t){t.d(e,{g:function(){return u}});t(791);var r=t(986),c="CardFilm_cardItem__SW2d+",a="CardFilm_cardItemImage__EKkUA",i="CardFilm_title__R78gF",o=t(184),u=function(n){var e=n.film;return(0,o.jsxs)("li",{className:c,children:[(0,o.jsx)("img",{src:r.YQ+e.poster_path,id:e.id,alt:e.title,className:a}),e.title?(0,o.jsxs)("h2",{id:e.id,className:i,children:[" ",e.title," "]}):(0,o.jsx)("h2",{id:e.id,className:i,children:e.name})]},e.id)}},134:function(n,e,t){t.r(e);var r=t(885),c=t(791),a=t(74),i=t(501),o=t(774),u=t(609),l=t(899),s=t(795),d=t(934),f=t(184);e.default=function(){var n=(0,c.useState)([]),e=(0,r.Z)(n,2),t=e[0],h=e[1],m=(0,c.useState)(1),g=(0,r.Z)(m,2),_=g[0],p=g[1],v=(0,i.lr)(),E=(0,r.Z)(v,2),j=E[0],x=E[1],S=j.get("name"),b=(0,c.useState)(""),k=(0,r.Z)(b,2),y=k[0],U=k[1],D=(0,c.useState)(s.U.IDLE),w=(0,r.Z)(D,2),N=w[0],C=w[1];(0,c.useEffect)((function(){if(null!==S){if(""===S)return alert("not name");C(s.U.PENDING),h([]),(0,a.Pv)(S,_).then((function(n){return n.results})).then((function(n){h(n),p(_),C(s.U.RESOLVED)})).catch((function(n){U(n.message),C(s.U.REJECTED)}))}}),[S,_]);return N===s.U.PENDING?(0,f.jsx)(l.a,{loader:l.a}):(N===s.U.RESOLVED&&y.message,(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.currentTarget;x({name:e.name.value}),e.reset()},children:[(0,f.jsx)("input",{type:"text",name:"name"}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),N===s.U.RESOLVED&&(0,f.jsxs)("div",{children:[(0,f.jsx)("ul",{className:d.Z.gallery,children:t.map((function(n){return(0,f.jsx)(i.rU,{to:"/movies/".concat(n.id),movieId:n.id,children:(0,f.jsx)(o.g,{film:n},n.id)},n.id)}))}),(0,f.jsx)(u.z,{onClick:function(){p((function(n){return n+1}))},children:"Load more"})]})]}))}},986:function(n,e,t){t.d(e,{$h:function(){return c},YQ:function(){return a},_n:function(){return r}});var r="https://api.themoviedb.org/3",c="4bceebe1d1f9bc99c966449bdeaecb86",a="https://image.tmdb.org/t/p/w300"},74:function(n,e,t){t.d(e,{Hb:function(){return a},Pv:function(){return i},Rb:function(){return u},tM:function(){return l},wP:function(){return o}});var r=t(986),c=function(n){if(n.ok)return n.json();throw console.error("server response: ",n.status),new Error("Sorry, something went wrong ...")};function a(n){return fetch("".concat(r._n,"/trending/all/day?api_key=").concat(r.$h,"&language=en-US&page=").concat(n,"&include_adult=false")).then(c)}function i(n,e){return fetch("".concat(r._n,"/search/movie?api_key=").concat(r.$h,"&language=en-US&page=").concat(e,"&include_adult=false&query=").concat(n)).then(c)}function o(n){return fetch("".concat(r._n,"/movie/").concat(n,"?api_key=").concat(r.$h,"&language=en-US")).then(c)}function u(n){return fetch("".concat(r._n,"/movie/").concat(n,"/credits?api_key=").concat(r.$h,"&language=en-US")).then(c)}function l(n){return fetch("".concat(r._n,"/movie/").concat(n,"/reviews?api_key=").concat(r.$h,"&language=en-US")).then(c)}},795:function(n,e,t){t.d(e,{U:function(){return r}});var r={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},934:function(n,e){e.Z={gallery:"GalleryFilm_gallery__oFjeQ"}}}]);
//# sourceMappingURL=134.db7cd7e4.chunk.js.map