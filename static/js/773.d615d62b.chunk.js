"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[773],{9689:function(t,n,e){e.d(n,{Z:function(){return r}});var r=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return t?t.includes("https")?t.slice(1,t.length):"/"===t[0]?"https://image.tmdb.org/t/p/w".concat(n).concat(t):"https://image.tmdb.org/t/p/w".concat(n,"/").concat(t):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"}},3773:function(t,n,e){e.r(n),e.d(n,{default:function(){return P}});var r,i,a,c,o,s,u,p=e(9439),l=e(2791),f=e(7689),d=e(2690),h=e(9689),m=e(168),x=e(6444),g=x.ZP.ul(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n"]))),v=x.ZP.li(i||(i=(0,m.Z)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: start;\n  gap: 20px;\n  padding: 10px;\n  border: 1px solid #C0C0C0;\n  border-radius: 5px;\n"]))),w=x.ZP.img(a||(a=(0,m.Z)(["\n  display: block;\n  width: 70px;\n  height: 70px;\n  border-radius: 50px;\n"]))),y=x.ZP.div(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n"]))),Z=x.ZP.p(o||(o=(0,m.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n"]))),b=x.ZP.p(s||(s=(0,m.Z)(["\n  display: flex;\n  justify-self: self-end;\n"]))),k=x.ZP.div(u||(u=(0,m.Z)(["\n  max-width: 80%;\n"]))),j=e(184),P=function(){var t=(0,l.useState)({}),n=(0,p.Z)(t,2),e=n[0],r=n[1],i=(0,f.UO)().id;return(0,l.useEffect)((function(){try{d.h.fetchFilmReviews(i).then((function(t){var n=t.data;r(n.results)}))}catch(t){console.log(t)}}),[i]),0===Object.keys(e).length?(0,j.jsx)("p",{children:"We don't have any reviews for this movie."}):(0,j.jsx)("div",{style:{display:"flex"},children:(0,j.jsx)(g,{children:e.map((function(t){return(0,j.jsxs)(v,{children:[(0,j.jsx)(w,{width:"70",height:"70",src:(0,h.Z)(t.author_details.avatar_path),alt:t.author}),(0,j.jsxs)(y,{children:[(0,j.jsx)(Z,{children:t.author}),(0,j.jsx)(b,{children:new Date(t.updated_at).toLocaleDateString()})]}),(0,j.jsx)(k,{children:t.content})]},t.id)}))})})}},2690:function(t,n,e){e.d(n,{h:function(){return l}});var r=e(5861),i=e(7757),a=e.n(i),c=e(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"96b1936b39533cd9542a6bf2c841f4c7"}}),o=function(){var t=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.get("/search/movie",{params:{query:n}}));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.get("/movie/".concat(n)));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.get("/movie/".concat(n,"/credits")));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.get("/movie/".concat(n,"/reviews")));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l={fetchFilms:function(){return c.get("/trending/movie/day")},fetchFilmsByName:o,fetchFilmById:s,fetchFilmCast:u,fetchFilmReviews:p}}}]);
//# sourceMappingURL=773.d615d62b.chunk.js.map