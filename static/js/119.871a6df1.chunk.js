"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[119],{609:function(n,e,t){t.d(e,{z:function(){return r}});var c=t(184),r=function(n){var e=n.onClick;return(0,c.jsx)("div",{children:(0,c.jsx)("button",{type:"button",onClick:e,children:"Load more"})})}},774:function(n,e,t){t.d(e,{g:function(){return u}});t(791);var c=t(343),r="CardFilm_cardItem__SW2d+",i="CardFilm_cardItemImage__EKkUA",a="CardFilm_title__R78gF",o=t(184),u=function(n){var e=n.film;return(0,o.jsxs)("li",{className:r,children:[(0,o.jsx)("img",{src:c.YQ+e.poster_path,id:e.id,alt:e.title,className:i}),e.title?(0,o.jsxs)("h2",{id:e.id,className:a,children:[" ",e.title," "]}):(0,o.jsx)("h2",{id:e.id,className:a,children:e.name})]},e.id)}},343:function(n,e,t){t.d(e,{$h:function(){return r},YQ:function(){return i},_n:function(){return c}});var c="https://api.themoviedb.org/3",r="4bceebe1d1f9bc99c966449bdeaecb86",i="https://image.tmdb.org/t/p/w300"},44:function(n,e,t){t.d(e,{Hb:function(){return i},Pv:function(){return a},Rb:function(){return u},tM:function(){return l},wP:function(){return o}});var c=t(343),r=function(n){if(n.ok)return n.json();throw console.error("server response: ",n.status),new Error("Sorry, something went wrong ...")};function i(n){return fetch("".concat(c._n,"/trending/all/day?api_key=").concat(c.$h,"&language=en-US&page=").concat(n,"&include_adult=false")).then(r)}function a(n,e){return fetch("".concat(c._n,"/search/movie?api_key=").concat(c.$h,"&language=en-US&page=").concat(e,"&include_adult=false&query=").concat(n)).then(r)}function o(n){return fetch("".concat(c._n,"/movie/").concat(n,"?api_key=").concat(c.$h,"&language=en-US")).then(r)}function u(n){return fetch("".concat(c._n,"/movie/").concat(n,"/credits?api_key=").concat(c.$h,"&language=en-US")).then(r)}function l(n){return fetch("".concat(c._n,"/movie/").concat(n,"/reviews?api_key=").concat(c.$h,"&language=en-US")).then(r)}},851:function(n,e,t){t.d(e,{U:function(){return c}});var c={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},119:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var c=t(791),r=t(885),i=t(501),a=t(44),o=t(774),u=t(609),l=t(899),s=t(851),d=t(934),f=t(184),h=function(){var n=(0,c.useState)(1),e=(0,r.Z)(n,2),t=e[0],h=e[1],m=(0,c.useState)([]),_=(0,r.Z)(m,2),g=_[0],v=_[1],p=(0,c.useState)(""),E=(0,r.Z)(p,2),j=E[0],k=E[1],S=(0,c.useState)(s.U.IDLE),U=(0,r.Z)(S,2),b=U[0],x=U[1];(0,c.useEffect)((function(){x(s.U.PENDING),(0,a.Hb)(t).then((function(n){return n.results})).then((function(n){v(n),h(t),x(s.U.RESOLVED)})).catch((function(n){k(n.message),x(s.U.REJECTED)}))}),[t]);return b===s.U.PENDING?(0,f.jsx)(l.a,{loader:l.a}):(b===s.U.RESOLVED&&j.message,b===s.U.RESOLVED?(0,f.jsxs)("div",{children:[(0,f.jsx)("ul",{className:d.Z.gallery,children:g.map((function(n){return(0,f.jsx)(i.rU,{to:"/movies/".concat(n.id),movieId:n.id,children:(0,f.jsx)(o.g,{film:n},n.id)},n.id)}))}),(0,f.jsx)(u.z,{onClick:function(){h((function(n){return n+1}))},children:"Load more"})]}):void 0)},m=function(){return(0,f.jsx)(h,{})}},934:function(n,e){e.Z={gallery:"GalleryFilm_gallery__oFjeQ"}}}]);
//# sourceMappingURL=119.871a6df1.chunk.js.map