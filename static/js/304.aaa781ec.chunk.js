"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{9198:function(n,t,e){var r,c=e(168),a=e(6444),i=e(184),o=a.ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: 1170px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n\n"])));t.Z=function(n){var t=n.children;return(0,i.jsx)(o,{children:t})}},9689:function(n,t,e){e.d(t,{Z:function(){return r}});var r=function(n){return n?n.includes("https")?n.slice(1,n.length):"/"===n[0]?"https://image.tmdb.org/t/p/w500".concat(n):"https://image.tmdb.org/t/p/w500/".concat(n):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"}},3314:function(n,t,e){e.d(t,{Z:function(){return m}});var r,c,a,i=e(7689),o=e(168),u=e(1087),s=e(6444),p=(0,s.ZP)(u.OL)(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  padding: 5px;\n  border-radius: 5px;\n  /* border-radius: 4px; */\n  color: black;\n  font-weight: 500;\n  &:hover {\n    color: white;\n    background-color: #FF6700;\n  }\n"]))),l=s.ZP.ul(c||(c=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 16px;\n"]))),f=s.ZP.li(a||(a=(0,o.Z)(["\n  flex-basis: calc((100% - 70px) / 5);\n"]))),d=e(9689),h=e(184),v=function(n){var t=n.id,e=n.poster_path,r=n.title,c=(0,i.TH)();return(0,h.jsx)(f,{children:(0,h.jsxs)(p,{to:"/movies/".concat(t),state:{from:c},style:{display:"flex"},children:[(0,h.jsx)("img",{width:"250",src:(0,d.Z)(e),alt:r}),(0,h.jsx)("p",{children:r})]})},t)},m=function(n){var t=n.films;return(0,h.jsx)(l,{children:t.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return(0,h.jsx)(v,{id:t,title:e,poster_path:r},t)}))})}},304:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r,c=e(9439),a=e(2791),i=e(3314),o=e(9198),u=e(168),s=e(6444).ZP.h1(r||(r=(0,u.Z)(["\n  margin-bottom: 16px;\n  padding: 10px;\n  border-radius: 5px;\n  color: white;\n  background-color: #FF6700;\n"]))),p=e(2690),l=e(184),f=function(){var n=(0,a.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1];return(0,a.useEffect)((function(){p.hi.fetchFilms().then((function(n){var t=n.data;r(t.results)}))}),[]),(0,l.jsx)("main",{children:(0,l.jsxs)(o.Z,{children:[(0,l.jsx)(s,{children:"Trending today"}),e.length>0&&(0,l.jsx)(i.Z,{films:e})]})})}},2690:function(n,t,e){e.d(t,{hi:function(){return h}});var r=e(5861),c=e(7757),a=e.n(c),i=e(1243),o="96b1936b39533cd9542a6bf2c841f4c7",u="https://api.themoviedb.org/3",s=function(){var n=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(u,"/trending/movie/day?api_key=").concat(o),n.next=4,i.Z.get(t);case 4:return e=n.sent,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="".concat(u,"/movie/").concat(t,"?api_key=").concat(o),n.next=4,i.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="".concat(u,"/search/movie?api_key=").concat(o,"&query=").concat(t),n.next=4,i.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(o),n.next=4,i.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(o),n.next=4,i.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),h={fetchFilms:s,fetchFilmsByName:l,fetchFilmById:p,fetchFilmCast:f,fetchFilmReviews:d}}}]);
//# sourceMappingURL=304.aaa781ec.chunk.js.map