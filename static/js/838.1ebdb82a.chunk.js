"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[838],{838:function(e,n,t){t.r(n);var c=t(885),r=t(791),a=t(871),o=t(501),i=t(74),s=t(986),u=t(899),l=t(795),f=t(884),h=t(184);n.default=function(){var e,n,t=(0,r.useState)({}),d=(0,c.Z)(t,2),v=d[0],m=d[1],g=(0,a.UO)("").movieId,p=(0,r.useState)(""),E=(0,c.Z)(p,2),_=E[0],j=E[1],U=(0,r.useState)(l.U.IDLE),k=(0,c.Z)(U,2),w=k[0],x=k[1],b=(0,a.TH)();(0,r.useEffect)((function(){x(l.U.PENDING),(0,i.wP)(g).then((function(e){m(e),x(l.U.RESOLVED)})).catch((function(e){j(e.message),x(l.U.REJECTED)}))}),[g]);var D=null!==(e=null===(n=b.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return w===l.U.PENDING?(0,h.jsx)(u.a,{loader:u.a}):(w===l.U.REJECTED&&_.message,w===l.U.RESOLVED?(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:s.YQ+v.poster_path,alt:""}),(0,h.jsx)("h2",{children:v.title}),(0,h.jsxs)("p",{children:[" ",v.overview," "]}),(0,h.jsxs)("p",{children:["Vote: ",v.vote_average]}),(0,h.jsxs)("p",{children:["Data: ",v.release_date]}),(0,h.jsxs)("ul",{className:f.Z.nav,children:[(0,h.jsx)("li",{children:(0,h.jsx)(o.rU,{to:"cast",className:f.Z.link,state:{from:b.state.from},children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.rU,{to:"reviews",className:f.Z.link,state:{from:b.state.from},children:"Reviews"})})]}),(0,h.jsx)(a.j3,{}),(0,h.jsx)(o.rU,{to:D,className:f.Z.link,children:"Go back"})]}):void 0)}},986:function(e,n,t){t.d(n,{$h:function(){return r},YQ:function(){return a},_n:function(){return c}});var c="https://api.themoviedb.org/3",r="4bceebe1d1f9bc99c966449bdeaecb86",a="https://image.tmdb.org/t/p/w300"},74:function(e,n,t){t.d(n,{Hb:function(){return a},Pv:function(){return o},Rb:function(){return s},tM:function(){return u},wP:function(){return i}});var c=t(986),r=function(e){if(e.ok)return e.json();throw console.error("server response: ",e.status),new Error("Sorry, something went wrong ...")};function a(e){return fetch("".concat(c._n,"/trending/all/day?api_key=").concat(c.$h,"&language=en-US&page=").concat(e,"&include_adult=false")).then(r)}function o(e,n){return fetch("".concat(c._n,"/search/movie?api_key=").concat(c.$h,"&language=en-US&page=").concat(n,"&include_adult=false&query=").concat(e)).then(r)}function i(e){return fetch("".concat(c._n,"/movie/").concat(e,"?api_key=").concat(c.$h,"&language=en-US")).then(r)}function s(e){return fetch("".concat(c._n,"/movie/").concat(e,"/credits?api_key=").concat(c.$h,"&language=en-US")).then(r)}function u(e){return fetch("".concat(c._n,"/movie/").concat(e,"/reviews?api_key=").concat(c.$h,"&language=en-US")).then(r)}},795:function(e,n,t){t.d(n,{U:function(){return c}});var c={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}}}]);
//# sourceMappingURL=838.1ebdb82a.chunk.js.map