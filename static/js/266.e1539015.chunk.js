"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[266],{174:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(689),a=n(87),u=n(638),c=n(184),s=function(e){var t=e.movies,n=(0,r.TH)();return(0,c.jsx)("ul",{className:u.Z.list,children:t.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{className:u.Z.item,to:"/movies/".concat(e.id),state:{from:n},children:e.title||e.name})},e.id)}))})}},266:function(e,t,n){n.r(t);var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(791),i=n(390),o=n(174),f=n(809),p=n(638),l=n(184);t.default=function(){var e=(0,s.useState)(null),t=(0,a.Z)(e,2),n=t[0],u=t[1],v=(0,s.useState)(!1),d=(0,a.Z)(v,2),h=d[0],m=d[1],Z=(0,s.useState)(null),x=(0,a.Z)(Z,2),_=x[0],g=x[1];(0,s.useEffect)((function(){k()}),[]);var k=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,(0,i._k)();case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),g(e.t0);case 11:return e.prev=11,m(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:p.Z.title,children:"Trending Today"}),n&&(0,l.jsx)(o.Z,{movies:n}),h&&(0,l.jsx)(f.Z,{}),_&&(0,l.jsx)("h2",{children:"The service is temporarily unavailable. Please try again later."})]})}},390:function(e,t,n){n.d(t,{Bt:function(){return f},DD:function(){return o},_k:function(){return i},on:function(){return l},y:function(){return p}});var r=n(861),a=n(757),u=n.n(a),c=n(924);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="c34e25a528f6928955c924e067c2de15",i=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},638:function(e,t){t.Z={list:"MoviesList_list__0Owr9",item:"MoviesList_item__eePYv",title:"MoviesList_title__PB2c8"}}}]);
//# sourceMappingURL=266.e1539015.chunk.js.map