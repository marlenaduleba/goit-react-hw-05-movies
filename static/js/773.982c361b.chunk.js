"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[773],{9689:function(t,e,n){n.d(e,{Z:function(){return r}});var r=function(t){return t?t.includes("https")?t.slice(1,t.length):"/"===t[0]?"https://image.tmdb.org/t/p/w500".concat(t):"https://image.tmdb.org/t/p/w500/".concat(t):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"}},3773:function(t,e,n){n.r(e),n.d(e,{default:function(){return P}});var r,a,i,c,s,u,o,p=n(9439),f=n(2791),l=n(7689),d=n(2690),h=n(9689),m=n(168),x=n(6444),v=x.ZP.ul(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-top: 20px;\n"]))),g=x.ZP.li(a||(a=(0,m.Z)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: start;\n  gap: 20px;\n  padding: 10px;\n  border: 1px solid darkred;\n  border-radius: 5px;\n"]))),w=x.ZP.img(i||(i=(0,m.Z)(["\n  display: block;\n  width: 70px;\n  height: 70px;\n  border-radius: 50px;\n"]))),y=x.ZP.div(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n"]))),Z=x.ZP.p(s||(s=(0,m.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n"]))),b=x.ZP.p(u||(u=(0,m.Z)(["\n  display: flex;\n  justify-self: self-end;\n"]))),k=x.ZP.div(o||(o=(0,m.Z)(["\n  max-width: 80%;\n"]))),j=n(184),P=function(){var t=(0,f.useState)({}),e=(0,p.Z)(t,2),n=e[0],r=e[1],a=(0,l.UO)().id;return(0,f.useEffect)((function(){try{d.h.fetchFilmReviews(a).then((function(t){var e=t.data;r(e.results)}))}catch(t){console.log(t)}}),[a]),0===Object.keys(n).length?(0,j.jsx)("p",{children:"We don't have any reviews for this movie."}):(0,j.jsx)("div",{style:{display:"flex"},children:(0,j.jsx)(v,{children:n.map((function(t){return(0,j.jsxs)(g,{children:[(0,j.jsx)(w,{width:"70",height:"70",src:(0,h.Z)(t.author_details.avatar_path),alt:t.author}),(0,j.jsxs)(y,{children:[(0,j.jsx)(Z,{children:t.author}),(0,j.jsx)(b,{children:new Date(t.updated_at).toLocaleDateString()})]}),(0,j.jsx)(k,{children:t.content})]},t.id)}))})})}},2690:function(t,e,n){n.d(e,{h:function(){return l}});var r=n(5861),a=n(7757),i=n.n(a),c=n(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"96b1936b39533cd9542a6bf2c841f4c7"}}),s=function(){var t=(0,r.Z)(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/trending/movie/day");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/search/movie",{params:{query:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e,"/credits"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e,"/reviews"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l={fetchFilms:s,fetchFilmsByName:u,fetchFilmById:o,fetchFilmCast:p,fetchFilmReviews:f}}}]);
//# sourceMappingURL=773.982c361b.chunk.js.map