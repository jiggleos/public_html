(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{470:function(t,n,e){"use strict";(function(t){var o=e(25),r=(e(102),e(5),e(63),e(40),e(13),e(65),e(64),e(184)),d=["function tokenURI(uint256 _tokenId) view returns(string memory)"];n.a={data:function(){return{contractAddress:"0x2E88Fb70b11bf2B1CF1A6E2f9853f933C1A4cC2a",tokenId:"1",loading:!1}},computed:{color:function(){return this.tokenId<1e9?"indigo":this.tokenId<2e9?"teal":this.tokenId<3e9?"green":this.tokenId<4e9?"orange":"red"}},methods:{decrement:function(){1!==this.tokenId&&(this.tokenId--,this.tokenURI())},increment:function(){this.tokenId++,this.tokenURI()},tokenURI:function(){var n=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var o,c,l,f,m,k,v,iframe,h,title,I;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.loading=!0,"0x2E88Fb70b11bf2B1CF1A6E2f9853f933C1A4cC2a",o=new r.a.providers.JsonRpcProvider("https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"),c=new r.a.Contract("0x2E88Fb70b11bf2B1CF1A6E2f9853f933C1A4cC2a",d,o),e.next=6,c.tokenURI(n.tokenId);case 6:l=e.sent,f=l.split(",")[1],m=t.from(f,"base64"),k=m.toString("utf-8"),v=JSON.parse(k),iframe=document.getElementById("iframe"),h=v.image_data.split(",")[1],iframe.src="data:image/svg+xml;base64,"+h,title=document.getElementById("heading1"),I=document.getElementById("heading2"),title.innerHTML=v.name,I.innerHTML=v.description,n.loading=!1;case 19:case"end":return e.stop()}}),e)})))()},catch:function(t){this.loading=!1;var n=document.getElementById("btn-download");n.innerHTML=t.reason,setTimeout((function(){n.innerHTML="Generate"}),1500)},download:function(){var t=document.getElementById("tokenId");console.log(t.value);var link=document.createElement("a");link.href=document.getElementById("iframe").src,link.download=t.value+".svg",link.click()}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.tokenURI();case 1:case"end":return n.stop()}}),n)})))()}}}).call(this,e(314).Buffer)},475:function(t,n,e){},485:function(t,n,e){"use strict";e(475)},510:function(t,n,e){"use strict";e.r(n);var o=e(313),r=e(482),d=e(462),c=e(528),l=e(456),f=e(453),m=e(215),k=e(529),v=e(474),h=e(527),I=e(530),w=e(454),x=e(525),_=e(54),C=e(183),y=e(470).a,E=(e(485),e(101)),component=Object(E.a)(y,(function(){var t=this,n=t._self._c;return n(r.a,{staticClass:"ma-auto",attrs:{loading:t.loading,"max-width":"500"},scopedSlots:t._u([t.loading?{key:"progress",fn:function(e){e.loading,e.error;return[n(v.a,{attrs:{color:t.color,height:"10",indeterminate:""}})]}}:null],null,!0)},[t._v(" "),n(_.a,{attrs:{flat:"",dense:""}},[n(C.a,[n("span",{staticClass:"subheading",attrs:{id:"heading1"}},[t._v("Title")])]),t._v(" "),n(w.a),t._v(" "),n(C.a,[n("span",{staticClass:"subheading",attrs:{id:"heading2"}},[t._v("Description")])])],1),t._v(" "),n("iframe",{attrs:{id:"iframe",sandbox:"allow-scripts",src:"https://jiggleos.com/push-button.svg"}}),t._v(" "),n("div",{attrs:{id:"description"}}),t._v(" "),n(d.a,[n(l.a,{attrs:{fluid:""}},[n(k.a,{attrs:{row:"",wrap:""}},[n(f.a,{attrs:{xs12:""}},[n(I.a,{attrs:{id:"slider",dense:"",color:t.color,"track-color":"grey","always-dirty":"",min:"1",max:"500",loading:t.loading},on:{end:function(n){return t.tokenURI()}},scopedSlots:t._u([{key:"prepend",fn:function(){return[n(o.a,{staticClass:"mx-2",attrs:{dirty:"",fab:"",dark:"",small:"",loading:t.loading,color:t.color},on:{click:t.decrement}},[n(m.a,{attrs:{dark:""}},[t._v("\n                  mdi-minus\n                ")])],1)]},proxy:!0},{key:"append",fn:function(){return[n(o.a,{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",loading:t.loading,color:t.color},on:{click:t.increment}},[n(m.a,{attrs:{dark:""}},[t._v("\n                  mdi-plus\n                ")])],1)]},proxy:!0}]),model:{value:t.tokenId,callback:function(n){t.tokenId=n},expression:"tokenId"}})],1)],1)],1)],1),t._v(" "),n(d.b,[n(h.a,{staticClass:"mb-0"},[n(c.a,{staticClass:"text-left"},[n("span",[n(x.a,{attrs:{id:"tokenId",label:"tokenId",type:"number"},on:{change:function(n){return t.tokenURI()}},model:{value:t.tokenId,callback:function(n){t.tokenId=n},expression:"tokenId"}})],1)]),t._v(" "),n(c.a,{staticClass:"text-right"},[n("span",[n(o.a,{attrs:{id:"btn-download",loading:t.loading,color:t.color,block:"",outlined:"","x-large":""},on:{click:function(n){return t.download()}}},[t._v("\n            DOWNLOAD\n          ")])],1)])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);