(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(2),r=n.n(c),l=n(5),s=n(3),d=n(4),i=n(7),u=n(6),m=(n(13),n(14),function(e){var t=e.item;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"visible content"},t),o.a.createElement("div",{className:"hidden content"},o.a.createElement("i",{className:"shop icon"})))}),p=function(e){var t=e.preparedGoods,n=e.clickHandler;return o.a.createElement(o.a.Fragment,null,t.map((function(e){return o.a.createElement("button",{type:"button",className:"ui animated button",onClick:function(){return n(e)},key:e.id,tabIndex:"-1"},o.a.createElement(m,{item:e.name}))})))},f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(e,t){return{name:e,id:t}})),G=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={selectedGoods:[]},e.SelectGoodsHandler=function(t){var n=t.name;t.id;e.setState((function(e){if(!e.selectedGoods.includes(n))return{selectedGoods:[].concat(Object(l.a)(e.selectedGoods),[n])};var t=e.selectedGoods.indexOf(n);return e.selectedGoods.splice(t,1),{selectedGoods:e.selectedGoods}}))},e.ClearGoodsHandler=function(){e.setState({selectedGoods:[]})},e}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement("h1",null,"Selected goods:",this.state.selectedGoods.join(", ")),o.a.createElement(p,{preparedGoods:f,clickHandler:this.SelectGoodsHandler}),o.a.createElement("button",{className:"fluid ui red button",onClick:this.ClearGoodsHandler,type:"button",tabIndex:"-1"},"Clear All"))}}]),n}(a.PureComponent);r.a.render(o.a.createElement(G,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.3c8db901.chunk.js.map