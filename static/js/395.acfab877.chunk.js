"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[395],{9689:function(e,t,n){n.d(t,{Z:function(){return r}});var r=function(e){return e?e.includes("https")?e.slice(1,e.length):"/"===e[0]?"https://image.tmdb.org/t/p/w500".concat(e):"https://image.tmdb.org/t/p/w500/".concat(e):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"}},6395:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r,c,a,o=n(9439),i=n(2791),u=n(7689),s=n(2690),p=n(9689),l=n(168),f=n(6444),h=f.ZP.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n"]))),v=f.ZP.li(c||(c=(0,l.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),m=f.ZP.div(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n"]))),d=n(184),x=function(){var e=(0,i.useState)({}),t=(0,o.Z)(e,2),n=t[0],r=t[1],c=(0,u.UO)().id;return(0,i.useEffect)((function(){s.hi.fetchFilmCast(c).then((function(e){var t=e.data;r(t.cast.splice(0,20))}))}),[c]),0===Object.keys(n).length?(0,d.jsx)("p",{children:"We don't have any information about cast for this movie."}):(0,d.jsx)(h,{children:n.map((function(e){return(0,d.jsxs)(v,{children:[(0,d.jsx)("img",{width:"100",src:(0,p.Z)(e.profile_path),alt:e.original_name}),(0,d.jsxs)(m,{children:[(0,d.jsx)("h3",{children:e.original_name?e.original_name:"No Info"}),(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"Character: "})," ",e.character?e.character:"No Info"]})]})]},e.id)}))})}},2690:function(e,t,n){n.d(t,{hi:function(){return v}});var r=n(5861),c=n(7757),a=n.n(c),o=n(1243),i="96b1936b39533cd9542a6bf2c841f4c7",u="https://api.themoviedb.org/3",s=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(u,"/trending/movie/day?api_key=").concat(i),e.next=4,o.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(u,"/movie/").concat(t,"?api_key=").concat(i),e.next=4,o.Z.get(n);case 4:return r=e.sent,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(u,"/search/movie?api_key=").concat(i,"&query=").concat(t),e.next=4,o.Z.get(n);case 4:return r=e.sent,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(i),e.next=4,o.Z.get(n);case 4:return r=e.sent,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(i),e.next=4,o.Z.get(n);case 4:return r=e.sent,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),v={fetchFilms:s,fetchFilmsByName:l,fetchFilmById:p,fetchFilmCast:f,fetchFilmReviews:h}}}]);
//# sourceMappingURL=395.acfab877.chunk.js.map