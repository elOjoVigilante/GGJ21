(this["webpackJsonpjuego-ggj"]=this["webpackJsonpjuego-ggj"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},41:function(e,t,n){},44:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),o=n(31),i=n.n(o),u=(n(41),n(7)),s=n(21),l=n(2),d=n(3),b=n(24),j=n(4),h=n(5);function g(){var e=Object(j.a)(["\n\n    #root, body {\n        background-color: white;\n        \n    }\n\n    button {\n        cursor: pointer;\n    }\n"]);return g=function(){return e},e}function m(){var e=Object(j.a)(["\n\theight: ",";\n\twidth: ",";\n\tpointer-events: none;\n"]);return m=function(){return e},e}h.b.div(m(),(function(e){return e.height}),(function(e){return e.width}));var O=Object(h.a)(g()),f=(n(44),n(17)),x=n(18),p=n(20),S=n(19),w=(n(29),r.Component,n(30),r.Component,n.p+"static/media/mapa.32d7fe51.png"),v="show results",A="toggle hint",C="clicked",y="character found",I="character not found",k="loading results",P="next round",Y=Date.now(),X="loading final results",z="show final results",R=n(35),M=n(25);function Q(){var e=Object(j.a)(["\n\tbackground-color: black;\n\tcolor: white;\n    width:100%;\n    font-size: ",";\n    font-weight:bold;\n\ttext-align: center;\n"]);return Q=function(){return e},e}function D(){var e=Object(j.a)(["\n\tcursor: pointer;\n\ttext-align: center;\n    width: 100%;\n    display: table;\n    color: #FFF;\n    padding: "," ",";\n    background-color: ",";\n\t&&:hover {\n\t\tcolor: white;\n\t\tbackground-color: #000000;\n\t}\n\t&& > h2 {\n\t\tfont-size: ",";\n\t\ttext-transform: capitalize;\n        font-weight: bold;\n        display: table-cell;\n\t}\n"]);return D=function(){return e},e}function N(){var e=Object(j.a)(["\n\tposition: absolute;\n\tleft: ",";\n\ttop: ",";\n\tbackground-color: #3FA3EF;\n    z-index:3000;\n    width: ",";\n    max-width: ",";\n    border: solid black 3px;\n\tborder-radius: ",";\n    border-spacing: 0px;\n\t&& > div:first-child {\n\t\tborder-top-left-radius: ",";\n\t\tborder-top-right-radius: ",";\n\t}\n\t&& > div:last-child {\n\t\tborder-bottom-left-radius: ",";\n\t\tborder-bottom-right-radius: ",";\n\t}\n"]);return N=function(){return e},e}var F=h.b.div(N(),(function(e){return"calc((".concat(e.offsets.left," / ").concat(e.currentScale,") - (").concat(e.currentPositionX,"px) / ").concat(e.currentScale,")")}),(function(e){return"calc((".concat(e.offsets.top," / ").concat(e.currentScale,") - (").concat(e.currentPositionY,"px / ").concat(e.currentScale,"))")}),(function(e){return"calc(120px / ".concat(e.currentScale,")")}),(function(e){return"calc(120px / ".concat(e.currentScale,")")}),(function(e){return"calc(12px / ".concat(e.currentScale,")")}),(function(e){return"calc(6px / ".concat(e.currentScale,")")}),(function(e){return"calc(6px / ".concat(e.currentScale,")")}),(function(e){return"calc(6px / ".concat(e.currentScale,")")}),(function(e){return"calc(6px / ".concat(e.currentScale,")")})),H=h.b.div(D(),(function(e){return"calc(5px / ".concat(e.currentScale,")")}),(function(e){return"calc(10px / ".concat(e.currentScale,")")}),(function(e){return"".concat(e.backgroundColor)}),(function(e){return"calc(13px / ".concat(e.currentScale,")")})),B=Object(h.b)(H)(Q(),(function(e){return"calc(15px / ".concat(e.currentScale,")")}));function U(e){var t=e.currentClickPercentage,n=e.layoutDispatch,r=e.addClick,a=e.currentClickCoords,o=e.currentImage,i=e.currentScale,u=e.currentPositionX,s=e.currentPositionY,l=Object.values(o).filter((function(e){return e.hasOwnProperty("found")&&!e.found&&e})),d=["#188de6","#3fa3ef"];return Object(c.jsxs)(F,{x:t&&t.x,y:t&&t.y,windowScrollX:t.windowScrollX,windowScrollY:t.windowScrollY,offsets:function(){var e={},n=30*l.length,c={right:"calc(".concat(t&&t.x,"% + (50px * ").concat(i,"))"),left:"calc(".concat(t&&t.x,"% - 115px - (15px * ").concat(i,"))"),up:"calc(".concat(t&&t.y,"% - ").concat(n,"px + (30px * ").concat(i,"))"),down:"calc(".concat(t&&t.y,"%)")};return a.x+50*i+100/i>window.outerWidth?e.left=c.left:e.left=c.right,a.y-52+330/i-s/i<window.outerHeight-150/i?e.top=c.down:e.top=c.up,e}(),currentScale:i,currentPositionX:u,currentPositionY:s,children:[l.map((function(e,t){return Object(c.jsx)(H,{currentScale:i,currentPositionX:u,currentPositionY:s,backgroundColor:d[t%d.length],onClick:function(t){t.stopPropagation(),r(e.name)},children:Object(c.jsx)("h2",{children:e.title})},"".concat(e.name))})),Object(c.jsx)(B,{currentScale:i,currentPositionX:u,currentPositionY:s,onClick:function(e){e.stopPropagation(),n({type:C})},children:"X"})]})}var W=a.a.memo(U);function E(){var e=Object(j.a)(["\n\twidth: 40px;\n\theight: 40px;\n\tposition: absolute;\n\ttop: ",";\n\tleft: ",";\n\tborder: solid 4px black;\n\tborder-radius: 8px;\n"]);return E=function(){return e},e}var G=h.b.div(E(),(function(e){return e.y&&"calc((".concat(e.y,"% / ").concat(e.currentScale,") - (").concat(e.currentPositionY,"px / ").concat(e.currentScale,"))")}),(function(e){return e.x&&"calc((".concat(e.x,"% / ").concat(e.currentScale,") - (").concat(e.currentPositionX,"px / ").concat(e.currentScale,"))")}));function K(e){e.clicksArray;var t=e.isSelectCharacterShown,n=e.currentClickPercentage,r=e.layoutDispatch,a=e.imageDims,o=e.addClick,i=e.currentClickCoords,u=e.currentImage,s=e.currentScale,l=e.currentPositionX,d=e.currentPositionY;return Object(c.jsx)(c.Fragment,{children:t&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(W,{layoutDispatch:r,imageHeight:a.height,addClick:o,currentClickPercentage:n,currentClickCoords:i,currentImage:u,currentScale:s,currentPositionX:l,currentPositionY:d}),Object(c.jsx)(G,{x:n&&n.x,y:n&&n.y,windowScrollX:n.windowScrollX,windowScrollY:n.windowScrollY,currentScale:s,currentPositionX:l,currentPositionY:d})]})})}var L=a.a.memo(K),V=n.p+"static/media/imageGlass.1659f460.png",q=function(){var e=Object(r.useState)({}),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),o=Object(u.a)(a,2),i=o[0],s=o[1],l=Object(r.useRef)(null),d=Object(r.useCallback)((function(){var e=l.current;e&&e.disconnect()}),[]),b=Object(r.useCallback)((function(){l.current=new ResizeObserver((function(e){var t=Object(u.a)(e,1)[0];return c(t)})),i&&l.current.observe(i)}),[i]);return Object(r.useLayoutEffect)((function(){return b(),function(){return d()}}),[d,b]),[s,n]};function J(){var e=Object(j.a)(["\n    float:left;\n    width:27px;\n    height:27px;\n    cursor:pointer;\n    border:none;\n    margin:15px 5px;\n"]);return J=function(){return e},e}function T(){var e=Object(j.a)(["\n    float:left;\n    width:60px;\n    height:60px;\n"]);return T=function(){return e},e}function Z(){var e=Object(j.a)(["\n    width:100%;\n"]);return Z=function(){return e},e}function $(){var e=Object(j.a)(["\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  top: 40%;\n  left: 38%;\n  cursor: pointer;\n  z-index:4000;\n"]);return $=function(){return e},e}function _(){var e=Object(j.a)(["\n\tposition: absolute;\n    top: 60px;\n    left: 10px;\n    width: 200px;\n    height:30px;\n    z-index:1010;\n"]);return _=function(){return e},e}function ee(){var e=Object(j.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tposition: relative;\n    max-width: 100%;\n"]);return ee=function(){return e},e}function te(){var e=Object(j.a)(["\n\twidth: 100%;\n\theight: 100%;\n    touch-action: manipulation;\n    overflow: hidden;\n"]);return te=function(){return e},e}var ne=h.b.div(te()),ce=h.b.div(ee()),re=h.b.div(_()),ae=(h.b.div($()),h.b.img(Z())),oe=h.b.img(T()),ie=h.b.img(J());function ue(e){var t=e.currentImage,n=e.layoutDispatch,a=e.clicksArray,o=e.isSelectCharacterShown,i=e.currentClickPercentage,s=e.currentClickCoords,l=e.currentScale,d=e.currentPositionX,b=e.currentPositionY,j=e.currentIsOpened,h=(e.currentImageIndex,e.hintCount,e.introCount,Object(r.useState)({height:0,width:0})),g=Object(u.a)(h,2),m=g[0],O=g[1],f=q(),x=Object(u.a)(f,2),p=x[0],S=x[1],w=Object(r.useState)(l),v=Object(u.a)(w,2),k=v[0],P=(v[1],Object(r.useState)(d)),Y=Object(u.a)(P,2),X=Y[0],z=(Y[1],Object(r.useState)(b)),Q=Object(u.a)(z,2),D=Q[0],N=(Q[1],Object(r.useState)(j)),F=Object(u.a)(N,2),H=(F[0],F[1],Object(r.useState)(!1)),B=Object(u.a)(H,2);B[0],B[1];Object(r.useEffect)((function(){S.contentRect&&O({width:S.contentRect.width,height:S.contentRect.height})}),[S]);var U=function(e){(function(e){var n=40*l/m.width*100/2,c=40*l/m.height*100/2,r=t[e].y+b/l/m.height*100,a=t[e].x+d/l/m.width*100,o=i.y/l+20/m.height*100,u=i.x/l+20/m.width*100;if(u+n>a&&u-n<a&&o+c>r&&o-c<r)return!0})(e)?n({type:y,character:e}):(a.filter((function(e){return 0==e.characterFound})).length>=2&&n({type:A}),n({type:I}))};return Object(c.jsx)(ne,{children:Object(c.jsx)(M.b,{scale:k,positionX:X,positionY:D,wheel:{step:20},zoomIn:{step:5},zoomOut:{step:5},doubleClick:{disabled:!0},options:{minScale:1,maxScale:3,limitToBounds:!1,limitToWrapper:!1,centerContent:!1},children:function(e){var r=e.zoomIn,u=e.zoomOut,j=(e.setTransform,e.positionX),h=e.positionY,g=e.scale;Object(R.a)(e,["zoomIn","zoomOut","setTransform","positionX","positionY","scale"]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(re,{children:[Object(c.jsx)(ie,{onClick:u,src:"data:image/png;base64,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"}),Object(c.jsx)(oe,{src:V}),Object(c.jsx)(ie,{onClick:r,src:"data:image/png;base64,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"})]}),Object(c.jsx)(M.a,{children:Object(c.jsxs)(ce,{onClick:function(e){!function(e,t,c,r){e.persist();var a=e.clientX-20*t,o=e.clientY-40*t;n({type:C,currentClickPercentage:{x:a/m.width*100,y:o/m.height*100,windowScrollY:window.scrollY,windowScrollX:window.scrollX},currentClickCoords:{x:e.clientX,y:e.clientY,windowScrollY:window.scrollY,windowScrollX:window.scrollX},currentScale:t,currentPositionX:c,currentPositionY:r})}(e,g,j,h)},children:[Object(c.jsx)(ae,{src:t.src,alt:"",ref:p}),Object(c.jsx)(L,{clicksArray:a,isSelectCharacterShown:o,currentClickPercentage:i,layoutDispatch:n,imageDims:m,addClick:U,currentClickCoords:s,currentImage:t,currentScale:l,currentPositionX:d,currentPositionY:b})]})})]})}})})}var se=a.a.memo(ue);function le(){var e=Object(j.a)(["\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tposition: absolute;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: fixed;\n\tz-index: 1004;\n"]);return le=function(){return e},e}var de=h.b.div(le());function be(e){e.layoutDispatch;var t=Object(d.f)();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(de,{children:Object(c.jsxs)("div",{className:"menu",children:[Object(c.jsx)("div",{id:"boton",children:Object(c.jsx)("div",{class:"d-grid gap-2 col-1 mx-auto",children:Object(c.jsx)("a",{href:"#",onClick:function(){t.push("/find")},children:Object(c.jsx)("button",{type:"button",class:"btn btn-success btn-lg",id:"btnJugar",children:"JUGAR"})})})}),Object(c.jsx)("div",{id:"boton2",children:Object(c.jsxs)("div",{className:"mensaje",children:[Object(c.jsx)("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal","data-bs-whatever":"@mdo",children:"A\xf1adir mensaje secreto"}),Object(c.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(c.jsx)("div",{class:"modal-dialog",children:Object(c.jsxs)("div",{class:"modal-content",children:[Object(c.jsxs)("div",{class:"modal-header",id:"modalHeader",children:[Object(c.jsx)("h5",{class:"modal-title",id:"exampleModalLabel",children:"Mensaje secreto"}),Object(c.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(c.jsx)("div",{class:"modal-body",children:Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{class:"mb-3",children:[Object(c.jsx)("label",{for:"message-text",class:"col-form-label",children:"Tu mensaje:"}),Object(c.jsx)("textarea",{class:"form-control",id:"message-text",required:!0})]}),Object(c.jsx)("div",{class:"row",children:Object(c.jsxs)("div",{class:"col",id:"botones",children:[Object(c.jsx)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",id:"btnCerrar",children:"Cerrar"}),Object(c.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Enviar"})]})})]})})]})})})]})}),Object(c.jsx)("div",{id:"version",children:Object(c.jsx)("h5",{className:"version",children:"Version 0.1"})})]})})})}function je(e,t){switch(t.type){case"save uid":return Object(l.a)(Object(l.a)({},e),{},{uid:t.uid});case"save username":return Object(l.a)(Object(l.a)({},e),{},{allScores:Object(l.a)(Object(l.a)({},e.allScores),{},{userScores:Object(l.a)(Object(l.a)({},e.allScores.userScores),{},{name:t.username})}),hasNameBeenSet:!1});case"save all scores":return Object(l.a)(Object(l.a)({},e),{},{allScores:Object(l.a)(Object(l.a)({},e.allScores),t.allScores)});case"start game":return Object(l.a)(Object(l.a)({},e),{},{hasGameStarted:!0});case"image resize":return Object(l.a)(Object(l.a)({},e),{},{currentImageHeight:t.height});case C:var n={x:e.currentClickPercentage.x/e.currentScale,y:e.currentClickPercentage.y/e.currentScale,windowScrollX:e.currentPositionX/e.currentScale,windowScrollY:e.currentPositionY/e.currentScale,characterFound:!1},c=e.clicksArray.length>0?[n].concat(Object(s.a)(e.clicksArray)):[n];return Object(l.a)(Object(l.a)({},e),{},{isSelectCharacterShown:!1,clicksArray:c});case y:var r={x:e.currentClickPercentage.x/e.currentScale,y:e.currentClickPercentage.y/e.currentScale,windowScrollX:e.currentPositionX/e.currentScale,windowScrollY:e.currentPositionY/e.currentScale,characterFound:!0},a=Object(l.a)(Object(l.a)({},e),{},{clicksArray:[r].concat(Object(s.a)(e.clicksArray)),isSelectCharacterShown:!1});return a[e.images[e.currentImageIndex].string][t.character].found=!0,a;case I:var o={x:e.currentClickPercentage.x/e.currentScale,y:e.currentClickPercentage.y/e.currentScale,windowScrollX:e.currentPositionX/e.currentScale,windowScrollY:e.currentPositionY/e.currentScale,characterFound:!1},i=e.clicksArray.length>0?[o].concat(Object(s.a)(e.clicksArray)):[o];return Object(l.a)(Object(l.a)({},e),{},{isSelectCharacterShown:!1,clicksArray:i});case A:var u=Object(l.a)({},e);return u.hintCount<2?u.currentIsOpened=!0:u.currentIsOpened=!1,u;case"toggle selection container":return t.coords?Object(l.a)({selectionContainer:{x:t.coords.x,y:t.coords.y}},e):Object(l.a)({selectionContainer:null},e);case k:return Object(l.a)(Object(l.a)({},e),{},{clicksArray:[],isLoadingResult:!0,hasResultBeenCalculated:!0});case v:var d=Object(l.a)({},e);return d.isLoadingResult=!1,d.allScores.userScores[e.images[e.currentImageIndex].string][Y]=t.result,d;case P:var b=Object(l.a)({},e);return b.currentImageIndex=e.currentImageIndex+1,""===e.allScores.userScores.name||e.hasNameBeenSet||(b.allScores.userScores.NameBeenSet=!0),b.currentScale=1,b.currentPositionX=0,b.currentPositionY=0,b.currentIsOpened=!1,b.hintCount=0,b.hasResultBeenCalculated=!1,b;case"first round":var j=Object(l.a)({},e);return j.currentImageIndex=0,j.hasResultBeenCalculated=!1,j;case X:return Object(l.a)(Object(l.a)({},e),{},{clicksArray:[],isLoadingResult:!0,hasResultBeenCalculated:!0});case z:var h=Object(l.a)({},e);return h.isLoadingResult=!1,h.allScores.userScores[e.images[e.currentImageIndex].string][Y]=t.result,h;case"count hint":var g=Object(l.a)({},e);return g.hintCount+=1,g;case"count intro":var m=Object(l.a)({},e);return m.introCount+=1,m;case"reset game":var O=Object(l.a)({},e);return O.imageOne={src:w,manzana:{name:"manzana",title:"Manzana",x:20,y:13,found:!1}},O.currentImageIndex=0,O.currentImage=null,O.clicksArray=[],O.currentScale=1,O.currentPositionX=0,O.currentPositionY=0,O.currentIsOpened=!1,O.hintCount=0,O.hasResultBeenCalculated=!1,O;default:return e}}var he={allScores:{userScores:{imageOne:{},imageTwo:{},imageThree:{},imageFour:{},imageFive:{},imageSix:{},imageSeven:{},imageEight:{},name:""}},uid:null,hasNameBeenSet:!1,isImageShown:!1,isLoadingResult:!1,hasGameStarted:!1,images:[{src:w,string:"imageOne"}],currentImageIndex:0,selectionContainer:null,isSelectCharacterShown:!1,clicksArray:[],currentClickPercentage:null,currentClickCoords:null,imageOne:{src:w,manzana:{name:"manzana",title:"Manzana",x:20,y:13,found:!1}},currentScale:1,currentPositionX:0,currentPositionY:0,hasResultBeenCalculated:!1,currentIsOpened:!1,hintCount:0,introCount:0};var ge=function(){var e=Object(r.useReducer)(je,he),t=Object(u.a)(e,2),n=t[0],o=t[1],i=Object(d.f)();return Object(r.useEffect)((function(){Object.values(n[n.images[n.currentImageIndex].string]).filter((function(e){return e.hasOwnProperty("found")})).every((function(e){return e.found}))&&!n.hasResultBeenCalculated&&(n.currentImageIndex+1!==n.images.length?(o({type:k}),o({type:P}),i.push("/round"),o({type:v})):(o({type:X}),i.push("/exit"),o({type:z})))}),[n,i]),Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)(b.a,{children:Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{exact:!0,path:"/",component:function(e){return Object(c.jsx)(be,Object(l.a)(Object(l.a)({},e),{},{layoutDispatch:o}))}}),Object(c.jsx)(d.a,{exact:!0,path:"/find",component:function(e){return Object(c.jsx)(se,{currentImage:n[n.images[n.currentImageIndex].string],currentClickPercentage:n.currentClickPercentage,clicksArray:n.clicksArray,isSelectCharacterShown:n.isSelectCharacterShown,currentClickCoords:n.currentClickCoords,currentScale:n.currentScale,currentPositionX:n.currentPositionX,currentPositionY:n.currentPositionY,currentImageIndex:n.currentImageIndex,currentIsOpened:n.currentIsOpened,hintCount:n.hintCount,introCount:n.introCount,layoutDispatch:o})}})]})}),Object(c.jsx)(O,{})]})};n(49),n(50);i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(ge,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.c9647695.chunk.js.map