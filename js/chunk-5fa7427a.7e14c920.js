(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fa7427a"],{"0a75":function(t,c,n){},"0b42":function(t,c,n){var e=n("da84"),o=n("e8b5"),r=n("68ee"),a=n("861d"),i=n("b622"),s=i("species"),u=e.Array;t.exports=function(t){var c;return o(t)&&(c=t.constructor,r(c)&&(c===u||o(c.prototype))?c=void 0:a(c)&&(c=c[s],null===c&&(c=void 0))),void 0===c?u:c}},1173:function(t,c,n){"use strict";n("7bfb")},"152e":function(t,c,n){"use strict";n("0a75")},"1dde":function(t,c,n){var e=n("d039"),o=n("b622"),r=n("2d00"),a=o("species");t.exports=function(t){return r>=51||!e((function(){var c=[],n=c.constructor={};return n[a]=function(){return{foo:1}},1!==c[t](Boolean).foo}))}},"564a":function(t,c,n){"use strict";n.r(c);var e=n("7a23"),o=Object(e["g"])("div",{class:""},"產品列表",-1),r={class:"container"},a={class:"row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4"},i={class:"card"},s={class:"card-img"},u=["src"],d={class:"card-body"},l={class:"card-title"},b={class:"text-item small"},f=Object(e["g"])("span",null,"原售價",-1),p={class:"text-item"},g=Object(e["g"])("span",null,"$",-1);function j(t,c,n,j,v,O){var h=Object(e["F"])("Banner"),m=Object(e["F"])("router-link");return Object(e["y"])(),Object(e["f"])(e["a"],null,[Object(e["j"])(h),o,Object(e["g"])("section",null,[Object(e["g"])("div",r,[Object(e["g"])("div",a,[(Object(e["y"])(!0),Object(e["f"])(e["a"],null,Object(e["E"])(v.products,(function(t){return Object(e["y"])(),Object(e["f"])("div",{key:t.id,class:"col"},[Object(e["j"])(m,{to:"/product/".concat(t.id)},{default:Object(e["S"])((function(){return[Object(e["g"])("div",i,[Object(e["g"])("div",s,[Object(e["g"])("img",{src:t.imageUrl,class:"card-img-top",alt:""},null,8,u)]),Object(e["g"])("div",d,[Object(e["g"])("h5",l,Object(e["I"])(t.title),1),Object(e["g"])("div",b,[f,Object(e["g"])("p",null,Object(e["I"])(t.price),1)]),Object(e["g"])("div",p,[g,Object(e["g"])("p",null,Object(e["I"])(t.origin_price),1)])])])]})),_:2},1032,["to"])])})),128))])])])],64)}n("99af");var v=n("abde"),O=n.n(v),h=Object(e["g"])("div",{class:"banner"},[Object(e["g"])("img",{src:O.a,class:"d-block w-100",alt:"@assets/image/banner"})],-1),m=[h];function y(t,c,n,o,r,a){return Object(e["y"])(),Object(e["f"])("section",null,m)}var w={},x=(n("152e"),n("6b0d")),k=n.n(x);const A=k()(w,[["render",y]]);var _=A,q={components:{Banner:_},data:function(){return{product:[],id:"",qty:1,products:[],product_id:""}},methods:{getProducts:function(){var t=this,c="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("attic-bread","/products");this.$http.get(c).then((function(c){console.log(c.data.products),t.products=c.data.products})).catch((function(t){console.log(t)}))},addToCart:function(t){this.id=t;var c="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("attic-bread","/cart"),n={data:{product_id:this.id,qty:this.qty}};this.$http.post(c,n).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}},mounted:function(){this.getProducts()}};n("1173");const B=k()(q,[["render",j]]);c["default"]=B},"65f0":function(t,c,n){var e=n("0b42");t.exports=function(t,c){return new(e(t))(0===c?0:c)}},"7bfb":function(t,c,n){},8418:function(t,c,n){"use strict";var e=n("a04b"),o=n("9bf2"),r=n("5c6c");t.exports=function(t,c,n){var a=e(c);a in t?o.f(t,a,r(0,n)):t[a]=n}},"99af":function(t,c,n){"use strict";var e=n("23e7"),o=n("da84"),r=n("d039"),a=n("e8b5"),i=n("861d"),s=n("7b0b"),u=n("07fa"),d=n("8418"),l=n("65f0"),b=n("1dde"),f=n("b622"),p=n("2d00"),g=f("isConcatSpreadable"),j=9007199254740991,v="Maximum allowed index exceeded",O=o.TypeError,h=p>=51||!r((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),m=b("concat"),y=function(t){if(!i(t))return!1;var c=t[g];return void 0!==c?!!c:a(t)},w=!h||!m;e({target:"Array",proto:!0,forced:w},{concat:function(t){var c,n,e,o,r,a=s(this),i=l(a,0),b=0;for(c=-1,e=arguments.length;c<e;c++)if(r=-1===c?a:arguments[c],y(r)){if(o=u(r),b+o>j)throw O(v);for(n=0;n<o;n++,b++)n in r&&d(i,b,r[n])}else{if(b>=j)throw O(v);d(i,b++,r)}return i.length=b,i}})},abde:function(t,c,n){t.exports=n.p+"img/banner.d7424e4d.jpg"},e8b5:function(t,c,n){var e=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}}}]);
//# sourceMappingURL=chunk-5fa7427a.7e14c920.js.map