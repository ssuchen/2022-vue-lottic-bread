(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-460e82e2"],{"057f":function(t,e,n){var r=n("c6b6"),o=n("fc6a"),c=n("241c").f,i=n("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return c(t)}catch(e){return i(a)}};t.exports.f=function(t){return a&&"Window"==r(t)?u(t):c(o(t))}},"0b42":function(t,e,n){var r=n("da84"),o=n("e8b5"),c=n("68ee"),i=n("861d"),a=n("b622"),u=a("species"),s=r.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,c(e)&&(e===s||o(e.prototype))?e=void 0:i(e)&&(e=e[u],null===e&&(e=void 0))),void 0===e?s:e}},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),c=n("2d00"),i=o("species");t.exports=function(t){return c>=51||!r((function(){var e=[],n=e.constructor={};return n[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2ab7":function(t,e,n){},"428f":function(t,e,n){var r=n("da84");t.exports=r},"4dae":function(t,e,n){var r=n("da84"),o=n("23cb"),c=n("07fa"),i=n("8418"),a=r.Array,u=Math.max;t.exports=function(t,e,n){for(var r=c(t),s=o(e,r),f=o(void 0===n?r:n,r),d=a(u(f-s,0)),l=0;s<f;s++,l++)i(d,l,t[s]);return d.length=l,d}},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"746f":function(t,e,n){var r=n("428f"),o=n("1a2d"),c=n("e538"),i=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||i(e,t,{value:c.f(t)})}},"7d7c":function(t,e,n){"use strict";n.r(e);n("a4d3"),n("e01a");var r=n("7a23"),o=function(t){return Object(r["B"])("data-v-228974c2"),t=t(),Object(r["z"])(),t},c={class:"container"},i={class:"row align-items-center"},a={class:"col-md-6"},u={class:"col-md-6"},s={class:"fw-bold h1 mb-1"},f={class:"mb-0 text-muted text-end"},d={class:"h4 fw-bold text-end"},l={class:"row align-items-center"},b={class:"col-6"},p={class:"input-group my-3 bg-light rounded"},v=o((function(){return Object(r["g"])("div",{class:"input-group-prepend"},null,-1)})),g={class:"col-6"},h={class:"row my-5"},y=o((function(){return Object(r["g"])("div",{class:"col-md-3"},null,-1)})),m={class:"col-md-4"},O=["innerHTML"];function w(t,e,n,o,w,j){return Object(r["y"])(),Object(r["f"])("div",c,[Object(r["g"])("div",i,[Object(r["g"])("div",a,[Object(r["g"])("div",{class:"productImg",style:Object(r["s"])({backgroundImage:"url(".concat(w.product.imageUrl,")")})},null,4)]),Object(r["g"])("div",u,[Object(r["g"])("h2",s,Object(r["I"])(w.product.title),1),Object(r["g"])("p",f,[Object(r["g"])("del",null,"NT."+Object(r["I"])(w.product.origin_price)+"元",1)]),Object(r["g"])("p",d," NT."+Object(r["I"])(w.product.price)+"元/"+Object(r["I"])(w.product.unit),1),Object(r["g"])("div",l,[Object(r["g"])("div",b,[Object(r["g"])("div",p,[v,Object(r["T"])(Object(r["g"])("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none bg-light",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1","onUpdate:modelValue":e[0]||(e[0]=function(t){return w.qty=t})},null,512),[[r["N"],w.qty,void 0,{number:!0}]])])]),Object(r["g"])("div",g,[Object(r["g"])("button",{onClick:e[1]||(e[1]=function(){return j.addToCart&&j.addToCart.apply(j,arguments)}),href:"",class:"text-nowrap btn btn-dark w-100 py-2"}," 加入購物車 ")])])])]),Object(r["g"])("div",h,[y,Object(r["g"])("div",m,[Object(r["g"])("p",{innerHTML:w.product.description},null,8,O)])])])}n("99af");var j=n("aee4"),x={data:function(){return{product:[],id:"",qty:1,cartLenData:0}},methods:{getProduct:function(t){var e=this,n="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("attic-bread","/product/").concat(t);this.$http.get(n).then((function(t){e.product=t.data.product})).catch((function(t){console.log(t)}))},addToCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("attic-bread","/cart"),n={data:{product_id:this.id,qty:this.qty}};this.$http.post(e,n).then((function(e){console.log(e),t.getCartsLen()})).catch((function(t){console.log(t)}))},getCartsLen:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("attic-bread","/cart");this.$http.get(e).then((function(e){t.cartLenData=e.data.data.carts.length,console.log(e.data.data.carts.length,t.cartLenData),j["a"].emit("cartLenData",t.cartLenData)})).catch((function(t){console.log(t)}))}},mounted:function(){this.id=this.$route.params.id,this.getProduct(this.id),this.getCartsLen()}},S=(n("e0d6"),n("6b0d")),P=n.n(S);const L=P()(x,[["render",w],["__scopeId","data-v-228974c2"]]);e["default"]=L},8418:function(t,e,n){"use strict";var r=n("a04b"),o=n("9bf2"),c=n("5c6c");t.exports=function(t,e,n){var i=r(e);i in t?o.f(t,i,c(0,n)):t[i]=n}},"99af":function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),c=n("d039"),i=n("e8b5"),a=n("861d"),u=n("7b0b"),s=n("07fa"),f=n("8418"),d=n("65f0"),l=n("1dde"),b=n("b622"),p=n("2d00"),v=b("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",y=o.TypeError,m=p>=51||!c((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),O=l("concat"),w=function(t){if(!a(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)},j=!m||!O;r({target:"Array",proto:!0,forced:j},{concat:function(t){var e,n,r,o,c,i=u(this),a=d(i,0),l=0;for(e=-1,r=arguments.length;e<r;e++)if(c=-1===e?i:arguments[e],w(c)){if(o=s(c),l+o>g)throw y(h);for(n=0;n<o;n++,l++)n in c&&f(a,l,c[n])}else{if(l>=g)throw y(h);f(a,l++,c)}return a.length=l,a}})},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),c=n("d066"),i=n("2ba4"),a=n("c65b"),u=n("e330"),s=n("c430"),f=n("83ab"),d=n("4930"),l=n("d039"),b=n("1a2d"),p=n("e8b5"),v=n("1626"),g=n("861d"),h=n("3a9b"),y=n("d9b5"),m=n("825a"),O=n("7b0b"),w=n("fc6a"),j=n("a04b"),x=n("577e"),S=n("5c6c"),P=n("7c73"),L=n("df75"),T=n("241c"),C=n("057f"),I=n("7418"),k=n("06cf"),N=n("9bf2"),A=n("37e8"),D=n("d1e7"),E=n("f36a"),$=n("6eeb"),q=n("5692"),M=n("f772"),J=n("d012"),_=n("90e3"),B=n("b622"),F=n("e538"),H=n("746f"),U=n("d44e"),z=n("69f3"),Q=n("b727").forEach,R=M("hidden"),V="Symbol",W="prototype",G=B("toPrimitive"),K=z.set,X=z.getterFor(V),Y=Object[W],Z=o.Symbol,tt=Z&&Z[W],et=o.TypeError,nt=o.QObject,rt=c("JSON","stringify"),ot=k.f,ct=N.f,it=C.f,at=D.f,ut=u([].push),st=q("symbols"),ft=q("op-symbols"),dt=q("string-to-symbol-registry"),lt=q("symbol-to-string-registry"),bt=q("wks"),pt=!nt||!nt[W]||!nt[W].findChild,vt=f&&l((function(){return 7!=P(ct({},"a",{get:function(){return ct(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=ot(Y,e);r&&delete Y[e],ct(t,e,n),r&&t!==Y&&ct(Y,e,r)}:ct,gt=function(t,e){var n=st[t]=P(tt);return K(n,{type:V,tag:t,description:e}),f||(n.description=e),n},ht=function(t,e,n){t===Y&&ht(ft,e,n),m(t);var r=j(e);return m(n),b(st,r)?(n.enumerable?(b(t,R)&&t[R][r]&&(t[R][r]=!1),n=P(n,{enumerable:S(0,!1)})):(b(t,R)||ct(t,R,S(1,{})),t[R][r]=!0),vt(t,r,n)):ct(t,r,n)},yt=function(t,e){m(t);var n=w(e),r=L(n).concat(xt(n));return Q(r,(function(e){f&&!a(Ot,n,e)||ht(t,e,n[e])})),t},mt=function(t,e){return void 0===e?P(t):yt(P(t),e)},Ot=function(t){var e=j(t),n=a(at,this,e);return!(this===Y&&b(st,e)&&!b(ft,e))&&(!(n||!b(this,e)||!b(st,e)||b(this,R)&&this[R][e])||n)},wt=function(t,e){var n=w(t),r=j(e);if(n!==Y||!b(st,r)||b(ft,r)){var o=ot(n,r);return!o||!b(st,r)||b(n,R)&&n[R][r]||(o.enumerable=!0),o}},jt=function(t){var e=it(w(t)),n=[];return Q(e,(function(t){b(st,t)||b(J,t)||ut(n,t)})),n},xt=function(t){var e=t===Y,n=it(e?ft:w(t)),r=[];return Q(n,(function(t){!b(st,t)||e&&!b(Y,t)||ut(r,st[t])})),r};if(d||(Z=function(){if(h(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?x(arguments[0]):void 0,e=_(t),n=function(t){this===Y&&a(n,ft,t),b(this,R)&&b(this[R],e)&&(this[R][e]=!1),vt(this,e,S(1,t))};return f&&pt&&vt(Y,e,{configurable:!0,set:n}),gt(e,t)},tt=Z[W],$(tt,"toString",(function(){return X(this).tag})),$(Z,"withoutSetter",(function(t){return gt(_(t),t)})),D.f=Ot,N.f=ht,A.f=yt,k.f=wt,T.f=C.f=jt,I.f=xt,F.f=function(t){return gt(B(t),t)},f&&(ct(tt,"description",{configurable:!0,get:function(){return X(this).description}}),s||$(Y,"propertyIsEnumerable",Ot,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Z}),Q(L(bt),(function(t){H(t)})),r({target:V,stat:!0,forced:!d},{for:function(t){var e=x(t);if(b(dt,e))return dt[e];var n=Z(e);return dt[e]=n,lt[n]=e,n},keyFor:function(t){if(!y(t))throw et(t+" is not a symbol");if(b(lt,t))return lt[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),r({target:"Object",stat:!0,forced:!d,sham:!f},{create:mt,defineProperty:ht,defineProperties:yt,getOwnPropertyDescriptor:wt}),r({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:jt,getOwnPropertySymbols:xt}),r({target:"Object",stat:!0,forced:l((function(){I.f(1)}))},{getOwnPropertySymbols:function(t){return I.f(O(t))}}),rt){var St=!d||l((function(){var t=Z();return"[null]"!=rt([t])||"{}"!=rt({a:t})||"{}"!=rt(Object(t))}));r({target:"JSON",stat:!0,forced:St},{stringify:function(t,e,n){var r=E(arguments),o=e;if((g(e)||void 0!==t)&&!y(t))return p(e)||(e=function(t,e){if(v(o)&&(e=a(o,this,t,e)),!y(e))return e}),r[1]=e,i(rt,null,r)}})}if(!tt[G]){var Pt=tt.valueOf;$(tt,G,(function(t){return a(Pt,this)}))}U(Z,V),J[R]=!0},aee4:function(t,e,n){"use strict";var r=function(t){return{all:t=t||new Map,on:function(e,n){var r=t.get(e);r?r.push(n):t.set(e,[n])},off:function(e,n){var r=t.get(e);r&&(n?r.splice(r.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var r=t.get(e);r&&r.slice().map((function(t){t(n)})),(r=t.get("*"))&&r.slice().map((function(t){t(e,n)}))}}};e["a"]=r()},b727:function(t,e,n){var r=n("0366"),o=n("e330"),c=n("44ad"),i=n("7b0b"),a=n("07fa"),u=n("65f0"),s=o([].push),f=function(t){var e=1==t,n=2==t,o=3==t,f=4==t,d=6==t,l=7==t,b=5==t||d;return function(p,v,g,h){for(var y,m,O=i(p),w=c(O),j=r(v,g),x=a(w),S=0,P=h||u,L=e?P(p,x):n||l?P(p,0):void 0;x>S;S++)if((b||S in w)&&(y=w[S],m=j(y,S,O),t))if(e)L[S]=m;else if(m)switch(t){case 3:return!0;case 5:return y;case 6:return S;case 2:s(L,y)}else switch(t){case 4:return!1;case 7:s(L,y)}return d?-1:o||f?f:L}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},e01a:function(t,e,n){"use strict";var r=n("23e7"),o=n("83ab"),c=n("da84"),i=n("e330"),a=n("1a2d"),u=n("1626"),s=n("3a9b"),f=n("577e"),d=n("9bf2").f,l=n("e893"),b=c.Symbol,p=b&&b.prototype;if(o&&u(b)&&(!("description"in p)||void 0!==b().description)){var v={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),e=s(p,this)?new b(t):void 0===t?b():b(t);return""===t&&(v[e]=!0),e};l(g,b),g.prototype=p,p.constructor=g;var h="Symbol(test)"==String(b("test")),y=i(p.toString),m=i(p.valueOf),O=/^Symbol\((.*)\)[^)]+$/,w=i("".replace),j=i("".slice);d(p,"description",{configurable:!0,get:function(){var t=m(this),e=y(t);if(a(v,t))return"";var n=h?j(e,7,-1):w(e,O,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:g})}},e0d6:function(t,e,n){"use strict";n("2ab7")},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-460e82e2.8cb05bc2.js.map