(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{83:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return h}));var n=a(14),r=a(15),c=a(17),i=a(16),l=a(0),s=a.n(l),u=a(35),o=a(46),m=function(t){var e=t.cast;return s.a.createElement(s.a.Fragment,null,s.a.createElement("ul",null,e.map((function(t){return s.a.createElement("li",{key:t.id},s.a.createElement("img",{src:Object(o.a)(t.profile_path),alt:t.name,width:"120",height:"150"}),s.a.createElement("p",null,t.name),s.a.createElement("p",null,t.character))}))))},h=function(t){Object(c.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={cast:[]},t}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.movieId;u.a(e).then((function(e){t.setState({cast:e.data.cast})}))}},{key:"render",value:function(){var t=this.state.cast;return s.a.createElement(m,{cast:t})}}]),a}(l.Component)}}]);
//# sourceMappingURL=Cast.dc9e7b0a.chunk.js.map