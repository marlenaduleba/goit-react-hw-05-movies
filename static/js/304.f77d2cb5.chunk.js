"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{9198:function(n,t,e){var r,i=e(168),c=e(6444),a=e(184),o=c.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: 1170px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n\n"])));t.Z=function(n){var t=n.children;return(0,a.jsx)(o,{children:t})}},9689:function(n,t,e){e.d(t,{Z:function(){return r}});var r=function(n){return n?n.includes("https")?n.slice(1,n.length):"/"===n[0]?"https://image.tmdb.org/t/p/w500".concat(n):"https://image.tmdb.org/t/p/w500/".concat(n):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"}},3314:function(n,t,e){e.d(t,{Z:function(){return g}});var r,i,c,a=e(7689),o=e(168),u=e(1087),s=e(6444),p=(0,s.ZP)(u.OL)(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  padding: 5px;\n  border-radius: 5px;\n  /* border-radius: 4px; */\n  color: black;\n  font-weight: 500;\n  &:hover {\n    color: white;\n    background-color: #FF6700;\n  }\n"]))),f=s.ZP.ul(i||(i=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 16px;\n"]))),l=s.ZP.li(c||(c=(0,o.Z)(["\n  flex-basis: calc((100% - 70px) / 5);\n"]))),d=e(9689),h=e(184),m=function(n){var t=n.id,e=n.poster_path,r=n.title,i=(0,a.TH)();return(0,h.jsx)(l,{children:(0,h.jsxs)(p,{to:"/movies/".concat(t),state:{from:i},children:[(0,h.jsx)("img",{width:"250",src:(0,d.Z)(e),alt:r}),(0,h.jsx)("p",{children:r})]})},t)},g=function(n){var t=n.films;return(0,h.jsx)(f,{children:t.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return(0,h.jsx)(m,{id:t,title:e,poster_path:r},t)}))})}},304:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,i=e(9439),c=e(2791),a=e(3314),o=e(9198),u=e(168),s=e(6444).ZP.h1(r||(r=(0,u.Z)(["\n  margin-bottom: 16px;\n  padding: 10px;\n  border-radius: 5px;\n  color: white;\n  background-color: #FF6700;\n"]))),p=e(2690),f=e(184),l=function(){var n=(0,c.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1];return(0,c.useEffect)((function(){try{p.h.fetchFilms().then((function(n){var t=n.data;r(t.results)}))}catch(n){console.log(n)}}),[]),(0,f.jsx)("main",{children:(0,f.jsxs)(o.Z,{children:[(0,f.jsx)(s,{children:"Trending today"}),e.length>0&&(0,f.jsx)(a.Z,{films:e})]})})}},2690:function(n,t,e){e.d(t,{h:function(){return f}});var r=e(5861),i=e(7757),c=e.n(i),a=e(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"96b1936b39533cd9542a6bf2c841f4c7"}}),o=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",a.get("/search/movie",{params:{query:t}}));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",a.get("/movie/".concat(t)));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",a.get("/movie/".concat(t,"/credits")));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",a.get("/movie/".concat(t,"/reviews")));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f={fetchFilms:function(){return a.get("/trending/movie/day")},fetchFilmsByName:o,fetchFilmById:u,fetchFilmCast:s,fetchFilmReviews:p}}}]);
//# sourceMappingURL=304.f77d2cb5.chunk.js.map