(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{100:function(e,t,n){},349:function(e,t,n){},350:function(e,t,n){},351:function(e,t,n){},352:function(e,t,n){},354:function(e,t,n){"use strict";n.r(t);var o=n(3),a=n.n(o),i=n(45),c=n.n(i),r=(n(100),n(90)),l=n(91),s=n(95),u=n(94),m=n(92),g=n.n(m),d=n(46),f=n.n(d),p=(n(349),function(e){var t=e.imageUrl,n=e.box;return console.log("check",n),a.a.createElement("div",{className:"center ma"},a.a.createElement("div",{className:"absolute mt2"},a.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",heigh:"auto"}),n.map((function(e){return a.a.createElement("div",{key:e.index.toString(),className:"bounding-box",style:{top:e.topRow,right:e.rightCol,bottom:e.bottomRow,left:e.leftCol}})}))))}),h=n(93),v=n.n(h),b=n.p+"static/media/icon.a4f0dcd5.svg",w=(n(350),function(){return a.a.createElement("div",{className:"ma4 mt0"},a.a.createElement(v.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},a.a.createElement("div",{className:"Tilt-inner pa3"},a.a.createElement("img",{style:{paddingTop:"5px"},alt:"logo",src:b}))))}),E=(n(351),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return a.a.createElement("div",null,a.a.createElement("p",{className:"f3"},"Detect faces in the pictures."),a.a.createElement("div",{className:"center"},a.a.createElement("div",{className:"form center pa4 br3 shadow-5"},a.a.createElement("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),a.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n},"Detect"))))}),N=(n(352),new f.a.App({apiKey:"6cb581a0909e49ff9e708781f2d1869f"})),x={particles:{number:{value:30,density:{enable:!0,value_area:800}}}},y=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).calculateFaceLocation=function(e){console.log(e.outputs),console.log(e.outputs[0].data.regions.length);for(var t=[],n=0;n<e.outputs[0].data.regions.length;n++){var o=e.outputs[0].data.regions[n].region_info.bounding_box,a=document.getElementById("inputimage"),i=Number(a.width),c=Number(a.height);t[n]={leftCol:o.left_col*i,topRow:o.top_row*c,rightCol:i-o.right_col*i,bottomRow:c-o.bottom_row*c,index:n}}return console.log(t),t},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),N.models.predict(f.a.FACE_DETECT_MODEL,e.state.input).then((function(t){e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.state={input:"",imageUrl:"",box:[]},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.imageUrl,n=e.box;return a.a.createElement("div",{className:"App"},a.a.createElement(g.a,{className:"particles",params:x}),a.a.createElement("div",null,a.a.createElement(w,null),a.a.createElement(E,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),a.a.createElement(p,{box:n,imageUrl:t})))}}]),n}(o.Component),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(353);c.a.render(a.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/FaceDetection",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/FaceDetection","/service-worker.js");C?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):k(e)}))}}()}},[[354,1,2]]]);
//# sourceMappingURL=main.a6954c42.chunk.js.map