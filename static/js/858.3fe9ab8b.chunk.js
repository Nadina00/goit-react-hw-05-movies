"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[858],{858:function(e,n,t){t.r(n);var c=t(885),a=t(791),r=t(871),o=t(44),u=t(899),i=t(851),s=t(394),f=t(184);n.default=function(){var e=(0,a.useState)([]),n=(0,c.Z)(e,2),t=n[0],h=n[1],l=(0,r.UO)("").movieId,d=(0,a.useState)(""),E=(0,c.Z)(d,2),_=E[0],g=E[1],m=(0,a.useState)(i.U.IDLE),p=(0,c.Z)(m,2),v=p[0],U=p[1];return(0,a.useEffect)((function(){U(i.U.PENDING),(0,o.tM)(l).then((function(e){return e.results})).then((function(e){h(e),U(i.U.RESOLVED),e.length<1&&(U(i.U.REJECTED),alert("There are no reviews yet..."))})).catch((function(e){g(e.message),U(i.U.REJECTED)}))}),[l]),v===i.U.PENDING?(0,f.jsx)(u.a,{loader:u.a}):(v===i.U.REJECTED&&_.message,v===i.U.RESOLVED?(0,f.jsx)("ul",{className:s.Z.CastsList,children:t.map((function(e){return(0,f.jsxs)("li",{className:s.Z.CastsItem,children:[(0,f.jsxs)("h2",{children:["author: ",e.author]}),(0,f.jsxs)("p",{children:["content: ",e.content]})]},e.id)}))}):void 0)}},343:function(e,n,t){t.d(n,{$h:function(){return a},YQ:function(){return r},_n:function(){return c}});var c="https://api.themoviedb.org/3",a="4bceebe1d1f9bc99c966449bdeaecb86",r="https://image.tmdb.org/t/p/w300"},44:function(e,n,t){t.d(n,{Hb:function(){return r},Pv:function(){return o},Rb:function(){return i},tM:function(){return s},wP:function(){return u}});var c=t(343),a=function(e){if(e.ok)return e.json();throw console.error("server response: ",e.status),new Error("Sorry, something went wrong ...")};function r(e){return fetch("".concat(c._n,"/trending/all/day?api_key=").concat(c.$h,"&language=en-US&page=").concat(e,"&include_adult=false")).then(a)}function o(e,n){return fetch("".concat(c._n,"/search/movie?api_key=").concat(c.$h,"&language=en-US&page=").concat(n,"&include_adult=false&query=").concat(e)).then(a)}function u(e){return fetch("".concat(c._n,"/movie/").concat(e,"?api_key=").concat(c.$h,"&language=en-US")).then(a)}function i(e){return fetch("".concat(c._n,"/movie/").concat(e,"/credits?api_key=").concat(c.$h,"&language=en-US")).then(a)}function s(e){return fetch("".concat(c._n,"/movie/").concat(e,"/reviews?api_key=").concat(c.$h,"&language=en-US")).then(a)}},851:function(e,n,t){t.d(n,{U:function(){return c}});var c={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},394:function(e,n){n.Z={CastsList:"MovieCast_CastsList__f6fQV",CastsItem:"MovieCast_CastsItem__9qRim"}}}]);
//# sourceMappingURL=858.3fe9ab8b.chunk.js.map