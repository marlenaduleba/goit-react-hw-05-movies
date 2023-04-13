"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[599],{9198:function(n,t,e){var r,i=e(168),o=e(6444),a=e(184),c=o.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: 1170px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n\n"])));t.Z=function(n){var t=n.children;return(0,a.jsx)(c,{children:t})}},9689:function(n,t,e){e.d(t,{Z:function(){return r}});var r=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return n?n.includes("https")?n.slice(1,n.length):"/"===n[0]?"https://image.tmdb.org/t/p/w".concat(t).concat(n):"https://image.tmdb.org/t/p/w".concat(t,"/").concat(n):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"}},3314:function(n,t,e){e.d(t,{Z:function(){return m}});var r,i,o,a=e(7689),c=e(168),u=e(1087),p=e(6444),s=(0,p.ZP)(u.OL)(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  padding: 5px;\n  border-radius: 5px;\n  /* border-radius: 4px; */\n  color: black;\n  font-weight: 500;\n  &:hover {\n    color: white;\n    background-color: #FF6700;\n  }\n"]))),l=p.ZP.ul(i||(i=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n"]))),d=p.ZP.li(o||(o=(0,c.Z)(["\n  flex-basis: calc((100% - 70px) / 5);\n"]))),f=e(9689),h=e(184),x=function(n){var t=n.id,e=n.poster_path,r=n.title,i=(0,a.TH)();return(0,h.jsx)(d,{children:(0,h.jsxs)(s,{to:"/movies/".concat(t),state:{from:i},children:[(0,h.jsx)("img",{width:"250",src:(0,f.Z)(e),alt:r}),(0,h.jsx)("p",{children:r})]})},t)},m=function(n){var t=n.films;return(0,h.jsx)(l,{children:t.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return(0,h.jsx)(x,{id:t,title:e,poster_path:r},t)}))})}},2599:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,i,o,a,c=e(9439),u=e(2791),p=e(1087),s=e(2690),l=e(3314),d=e(168),f=e(6444),h=f.ZP.form(r||(r=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 10px 10px 5px 0px #C0C0C0;\n-webkit-box-shadow: 10px 10px 5px 0px#C0C0C0;\n-moz-box-shadow: 10px 10px 5px 0px #C0C0C0;\n"]))),x=f.ZP.button(i||(i=(0,d.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://cdn-icons-png.flaticon.com/512/1086/1086933.png');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),m=f.ZP.span(o||(o=(0,d.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),g=f.ZP.input(a||(a=(0,d.Z)(["\n  display: inline-block;\n  width: 100%;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),v=e(184),b=function(n){var t,e=n.onSubmit,r=(0,p.lr)(),i=(0,c.Z)(r,2),o=i[0],a=i[1],u=null!==(t=o.get("name"))&&void 0!==t?t:"";return(0,v.jsxs)(h,{onSubmit:function(n){n.preventDefault(),e(u)},children:[(0,v.jsx)(x,{type:"submit",children:(0,v.jsx)(m,{children:"Search"})}),(0,v.jsx)(g,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:u,onChange:function(n){var t=n.target.value;a(""!==t?{name:t}:{})}})]})},w=e(9198),Z=function(){var n,t=(0,u.useState)([]),e=(0,c.Z)(t,2),r=e[0],i=e[1],o=(0,p.lr)(),a=(0,c.Z)(o,2),d=a[0],f=a[1],h=(0,u.useState)(null!==(n=d.get("query"))&&void 0!==n?n:""),x=(0,c.Z)(h,2),m=x[0],g=x[1];(0,u.useEffect)((function(){if(m)try{s.h.fetchFilmsByName(m).then((function(n){var t=n.data;0===t.results.length&&f(""),i(t.results)}))}catch(n){console.log(n)}}),[m]);return(0,v.jsx)("main",{children:(0,v.jsxs)(w.Z,{children:[(0,v.jsx)(b,{onSubmit:function(n){g(n),f(""!==n?{query:n}:{})},query:m}),r.length>0&&(0,v.jsx)(l.Z,{films:r})]})})}},2690:function(n,t,e){e.d(t,{h:function(){return l}});var r=e(5861),i=e(7757),o=e.n(i),a=e(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"96b1936b39533cd9542a6bf2c841f4c7"}}),c=function(){var n=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",a.get("/search/movie",{params:{query:t}}));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",a.get("/movie/".concat(t)));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",a.get("/movie/".concat(t,"/credits")));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",a.get("/movie/".concat(t,"/reviews")));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l={fetchFilms:function(){return a.get("/trending/movie/day")},fetchFilmsByName:c,fetchFilmById:u,fetchFilmCast:p,fetchFilmReviews:s}}}]);
//# sourceMappingURL=599.cfaf1630.chunk.js.map