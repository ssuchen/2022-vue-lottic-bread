(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3197ef9e"],{"0b42":function(t,e,o){var n=o("da84"),c=o("e8b5"),r=o("68ee"),a=o("861d"),s=o("b622"),i=s("species"),u=n.Array;t.exports=function(t){var e;return c(t)&&(e=t.constructor,r(e)&&(e===u||c(e.prototype))?e=void 0:a(e)&&(e=e[i],null===e&&(e=void 0))),void 0===e?u:e}},"1dde":function(t,e,o){var n=o("d039"),c=o("b622"),r=o("2d00"),a=c("species");t.exports=function(t){return r>=51||!n((function(){var e=[],o=e.constructor={};return o[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,o){var n=o("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},8418:function(t,e,o){"use strict";var n=o("a04b"),c=o("9bf2"),r=o("5c6c");t.exports=function(t,e,o){var a=n(e);a in t?c.f(t,a,r(0,o)):t[a]=o}},"99af":function(t,e,o){"use strict";var n=o("23e7"),c=o("da84"),r=o("d039"),a=o("e8b5"),s=o("861d"),i=o("7b0b"),u=o("07fa"),d=o("8418"),f=o("65f0"),b=o("1dde"),l=o("b622"),h=o("2d00"),p=l("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",y=c.TypeError,O=h>=51||!r((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),j=b("concat"),k=function(t){if(!s(t))return!1;var e=t[p];return void 0!==e?!!e:a(t)},m=!O||!j;n({target:"Array",proto:!0,forced:m},{concat:function(t){var e,o,n,c,r,a=i(this),s=f(a,0),b=0;for(e=-1,n=arguments.length;e<n;e++)if(r=-1===e?a:arguments[e],k(r)){if(c=u(r),b+c>v)throw y(g);for(o=0;o<c;o++,b++)o in r&&d(s,b,r[o])}else{if(b>=v)throw y(g);d(s,b++,r)}return s.length=b,s}})},aa3f:function(t,e,o){"use strict";o.r(e);var n=o("7a23"),c=Object(n["g"])("p",null,"這是最新消息",-1),r={class:""},a={class:""},s=Object(n["g"])("p",null,"付款狀態",-1),i={key:0,class:""},u={key:1,class:""};function d(t,e,o,d,f,b){return Object(n["y"])(),Object(n["f"])("div",null,[c,Object(n["g"])("div",r,Object(n["I"])(f.order.user),1),Object(n["g"])("div",a,Object(n["I"])(f.order.total),1),s,!0===this.status?(Object(n["y"])(),Object(n["f"])("div",i,Object(n["I"])(f.statusMsg),1)):(Object(n["y"])(),Object(n["f"])("div",u,"未付款")),Object(n["g"])("button",{class:Object(n["r"])(["btn btn-primary",{disabled:f.status}]),onClick:e[0]||(e[0]=function(){return b.checkPay&&b.checkPay.apply(b,arguments)})}," 付款 ",2),Object(n["g"])("button",{class:"btn btn-primary",onClick:e[1]||(e[1]=function(){return b.goHomePage&&b.goHomePage.apply(b,arguments)})},"繼續逛逛")])}o("99af");var f={data:function(){return{id:"",status:!1,statusMsg:"",order:{}}},methods:{getOrderList:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("attic-bread","/order/").concat(this.id);this.$http.get(e).then((function(e){console.log(e.data.order),t.order=e.data.order})).catch((function(t){console.log(t)}))},goHomePage:function(){this.$router.push({path:"/"})},checkPay:function(){var t=this;console.log("check");var e="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("attic-bread","/pay/").concat(this.id);this.$http.post(e).then((function(e){t.statusMsg=e.data.message,t.status=!0,console.log(t.statusMsg)})).catch((function(t){console.log(t)}))}},mounted:function(){this.id=this.$route.params.id,console.log(this.id),this.getOrderList(this.id)}},b=o("6b0d"),l=o.n(b);const h=l()(f,[["render",d]]);e["default"]=h},e8b5:function(t,e,o){var n=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-3197ef9e.2102dde2.js.map