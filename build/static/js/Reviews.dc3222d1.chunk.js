(this["webpackJsonpsearch-movies"]=this["webpackJsonpsearch-movies"]||[]).push([[5],{87:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n(14),r=n(15),c=n(17),i=n(16),s=n(0),u=n.n(s),l=n(36),o=function(e){var t=e.reviews;return u.a.createElement(u.a.Fragment,null,u.a.createElement("ul",null,t.map((function(e){return u.a.createElement("li",{key:e.id},u.a.createElement("p",null,e.author),u.a.createElement("p",null,e.content))}))))},v=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={reviews:[]},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId;l.b(t).then((function(t){e.setState({reviews:t.data.results})}))}},{key:"render",value:function(){var e=this.state.reviews;return u.a.createElement(o,{reviews:e})}}]),n}(s.Component)}}]);
//# sourceMappingURL=Reviews.dc3222d1.chunk.js.map