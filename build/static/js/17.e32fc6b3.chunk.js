(this.webpackJsonpflexy=this.webpackJsonpflexy||[]).push([[17],{321:function(e,t,a){"use strict";a(0);var i=a(304),n=a(345),r=a(110),o=a(305),c=a(1);t.a=function(e){var t=e.custompadding,a=e.customheaderpadding,s=e.customdisplay,l=e.custommargin,d=e.title,j=e.subtitle,b=e.action,u=e.children;return Object(c.jsxs)(i.a,{sx:{p:t,"& .MuiCardContent-root:last-child":{pb:t}},children:[Object(c.jsx)(n.a,{sx:{p:a,display:{xs:s,lg:"flex",sm:"flex"}},title:Object(c.jsx)(r.a,{variant:"h3",sx:{mb:{xs:l}},children:d}),subtitle:j,action:b||""}),Object(c.jsx)(o.a,{sx:{p:t},children:u})]})}},325:function(e,t,a){"use strict";var i=a(0),n=i.createContext({});t.a=n},358:function(e,t,a){"use strict";var i=a(13),n=a(0),r=a.n(n),o=a(4),c=a(23),s=a(294),l=a(315),d=a(1),j=Object(o.a)(c.c)((function(e){var t=e.theme;return{"&  .MuiInputBase-root":{borderRadius:"5px"},"& .MuiInputBase-input":{backgroundColor:"light"===t.palette.mode?"white":t.palette.grey.A400,borderRadius:5,fontSize:15,padding:"8px 33px 8px 16px",transition:t.transitions.create(["border-color","box-shadow"]),border:"1px solid rgba(0,0,0,0.12)"}}}));t.a=function(){var e=r.a.useState("10"),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(d.jsxs)(s.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a,onChange:function(e){n(e.target.value)},input:Object(d.jsx)(j,{}),children:[Object(d.jsx)(l.a,{value:10,children:"March 2021"}),Object(d.jsx)(l.a,{value:20,children:"April 2021"}),Object(d.jsx)(l.a,{value:30,children:"May 2021"})]})}},373:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var i=a(395),n=a(396);function r(e){return Object(i.a)("MuiTimelineContent",e)}var o=Object(n.a)("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate"]);t.a=o},374:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var i=a(395),n=a(396);function r(e){return Object(i.a)("MuiTimelineOppositeContent",e)}var o=Object(n.a)("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate"]);t.a=o},394:function(e,t,a){"use strict";function i(e,t,a){var i={};return Object.keys(e).forEach((function(n){i[n]=e[n].reduce((function(e,i){return i&&(a&&a[i]&&e.push(a[i]),e.push(t(i))),e}),[]).join(" ")})),i}a.d(t,"a",(function(){return i}))},395:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function n(e,t){return i[t]||"".concat(e,"-").concat(t)}},396:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a(395);function n(e,t){var a={};return t.forEach((function(t){a[t]=Object(i.a)(e,t)})),a}},433:function(e,t,a){"use strict";t.a=a.p+"static/media/welcome-bg2-2x-svg.97ed12dc.svg"},434:function(e,t,a){"use strict";t.a=a.p+"static/media/blog-bg2-2x.f6e9447d.jpg"},490:function(e,t,a){"use strict";var i=a(5),n=a(2),r=a(0),o=(a(7),a(6)),c=a(4),s=a(9),l=a(10),d=a(394),j=a(110),b=a(325),u=a(374),p=a(1),x=["className"],h=Object(c.a)(j.a,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t["position".concat(Object(l.a)(a.position))]]}})((function(e){var t=e.ownerState;return Object(n.a)({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},"left"===t.position&&{textAlign:"left"})})),m=r.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiTimelineOppositeContent"}),c=a.className,j=Object(i.a)(a,x),m=r.useContext(b.a).position,O=Object(n.a)({},a,{position:m||"left"}),f=function(e){var t=e.position,a=e.classes,i={root:["root","position".concat(Object(l.a)(t))]};return Object(d.a)(i,u.b,a)}(O);return Object(p.jsx)(h,Object(n.a)({component:"div",className:Object(o.a)(f.root,c),ownerState:O,ref:t},j))}));m.muiName="TimelineOppositeContent",t.a=m},491:function(e,t,a){"use strict";var i=a(5),n=a(2),r=a(0),o=(a(7),a(6)),c=a(10),s=a(4),l=a(9),d=a(394),j=a(110),b=a(325),u=a(373),p=a(1),x=["className"],h=Object(s.a)(j.a,{name:"MuiTimelineContent",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t["position".concat(Object(c.a)(a.position))]]}})((function(e){var t=e.ownerState;return Object(n.a)({flex:1,padding:"6px 16px",textAlign:"left"},"left"===t.position&&{textAlign:"right"})})),m=r.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTimelineContent"}),s=a.className,j=Object(i.a)(a,x),m=r.useContext(b.a).position,O=Object(n.a)({},a,{position:m||"right"}),f=function(e){var t=e.position,a=e.classes,i={root:["root","position".concat(Object(c.a)(t))]};return Object(d.a)(i,u.b,a)}(O);return Object(p.jsx)(h,Object(n.a)({component:"div",className:Object(o.a)(f.root,s),ownerState:O,ref:t},j))}));t.a=m},532:function(e,t,a){"use strict";var i=a(2),n=a(5),r=a(0),o=(a(7),a(6)),c=a(10),s=a(394),l=a(4),d=a(9),j=a(325),b=a(395),u=a(396);function p(e){return Object(b.a)("MuiTimeline",e)}Object(u.a)("MuiTimeline",["root","positionLeft","positionRight","positionAlternate"]);var x=a(1),h=["position","className"],m=Object(l.a)("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.position&&t["position".concat(Object(c.a)(a.position))]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),O=r.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiTimeline"}),r=a.position,l=void 0===r?"right":r,b=a.className,u=Object(n.a)(a,h),O=Object(i.a)({},a,{position:l}),f=function(e){var t=e.position,a=e.classes,i={root:["root",t&&"position".concat(Object(c.a)(t))]};return Object(s.a)(i,p,a)}(O);return Object(x.jsx)(j.a.Provider,{value:{position:l},children:Object(x.jsx)(m,Object(i.a)({className:Object(o.a)(f.root,b),ownerState:O,ref:t},u))})}));t.a=O},533:function(e,t,a){"use strict";var i=a(3),n=a(5),r=a(2),o=a(0),c=(a(7),a(6)),s=a(10),l=a(67),d=a(4),j=a(9),b=a(394),u=a(373),p=a(374),x=a(325),h=a(395),m=a(396);function O(e){return Object(h.a)("MuiTimelineItem",e)}Object(m.a)("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","missingOppositeContent"]);var f=a(1),g=["position","className"],v=Object(d.a)("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t["position".concat(Object(s.a)(a.position))]]}})((function(e){var t,a=e.ownerState;return Object(r.a)({listStyle:"none",display:"flex",position:"relative",minHeight:70},"left"===a.position&&{flexDirection:"row-reverse"},"alternate"===a.position&&{"&:nth-of-type(even)":(t={flexDirection:"row-reverse"},Object(i.a)(t,"& .".concat(u.a.root),{textAlign:"right"}),Object(i.a)(t,"& .".concat(p.a.root),{textAlign:"left"}),t)},!a.hasOppositeContent&&{"&:before":{content:'""',flex:1,padding:"6px 16px"}})})),y=o.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiTimelineItem"}),i=a.position,d=a.className,u=Object(n.a)(a,g),p=o.useContext(x.a).position,h=!1;o.Children.forEach(a.children,(function(e){Object(l.a)(e,["TimelineOppositeContent"])&&(h=!0)}));var m=Object(r.a)({},a,{position:i||p||"right",hasOppositeContent:h}),y=function(e){var t=e.position,a=e.classes,i=e.hasOppositeContent,n={root:["root","position".concat(Object(s.a)(t)),!i&&"missingOppositeContent"]};return Object(b.a)(n,O,a)}(m);return Object(f.jsx)(x.a.Provider,{value:{position:m.position},children:Object(f.jsx)(v,Object(r.a)({className:Object(c.a)(y.root,d),ownerState:m,ref:t},u))})}));t.a=y},534:function(e,t,a){"use strict";var i=a(2),n=a(5),r=a(0),o=(a(7),a(6)),c=a(394),s=a(4),l=a(9),d=a(395),j=a(396);function b(e){return Object(d.a)("MuiTimelineSeparator",e)}Object(j.a)("MuiTimelineSeparator",["root"]);var u=a(1),p=["className"],x=Object(s.a)("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),h=r.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTimelineSeparator"}),r=a.className,s=Object(n.a)(a,p),d=a,j=function(e){var t=e.classes;return Object(c.a)({root:["root"]},b,t)}(d);return Object(u.jsx)(x,Object(i.a)({className:Object(o.a)(j.root,r),ownerState:d,ref:t},s))}));t.a=h},535:function(e,t,a){"use strict";var i=a(5),n=a(2),r=a(0),o=(a(7),a(6)),c=a(4),s=a(9),l=a(10),d=a(394),j=a(395),b=a(396);function u(e){return Object(j.a)("MuiTimelineDot",e)}Object(b.a)("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);var p=a(1),x=["className","color","variant"],h=Object(c.a)("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t["inherit"!==a.color&&"".concat(a.variant).concat(Object(l.a)(a.color))],t[a.variant]]}})((function(e){var t=e.ownerState,a=e.theme;return Object(n.a)({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:a.shadows[1],margin:"11.5px 0"},"filled"===t.variant&&Object(n.a)({borderColor:"transparent"},"inherit"!==t.color&&Object(n.a)({},"grey"===t.color?{color:a.palette.grey[50],backgroundColor:a.palette.grey[400]}:{color:a.palette[t.color].contrastText,backgroundColor:a.palette[t.color].main})),"outlined"===t.variant&&Object(n.a)({boxShadow:"none",backgroundColor:"transparent"},"inherit"!==t.color&&Object(n.a)({},"grey"===t.color?{borderColor:a.palette.grey[400]}:{borderColor:a.palette[t.color].main})))})),m=r.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiTimelineDot"}),r=a.className,c=a.color,j=void 0===c?"grey":c,b=a.variant,m=void 0===b?"filled":b,O=Object(i.a)(a,x),f=Object(n.a)({},a,{color:j,variant:m}),g=function(e){var t=e.color,a=e.variant,i=e.classes,n={root:["root",a,"inherit"!==t&&"".concat(a).concat(Object(l.a)(t))]};return Object(d.a)(n,u,i)}(f);return Object(p.jsx)(h,Object(n.a)({className:Object(o.a)(g.root,r),ownerState:f,ref:t},O))}));t.a=m},536:function(e,t,a){"use strict";var i=a(2),n=a(5),r=a(0),o=(a(7),a(6)),c=a(394),s=a(4),l=a(9),d=a(395),j=a(396);function b(e){return Object(d.a)("MuiTimelineConnector",e)}Object(j.a)("MuiTimelineConnector",["root"]);var u=a(1),p=["className"],x=Object(s.a)("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{width:2,backgroundColor:e.theme.palette.grey[400],flexGrow:1}})),h=r.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTimelineConnector"}),r=a.className,s=Object(n.a)(a,p),d=a,j=function(e){var t=e.classes;return Object(c.a)({root:["root"]},b,t)}(d);return Object(u.jsx)(x,Object(i.a)({className:Object(o.a)(j.root,r),ownerState:d,ref:t},s))}));t.a=h},785:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(127),o=a(304),c=a(305),s=a(110),l=a(296),d=a(433),j=a(1),b=function(){return Object(j.jsx)(o.a,{elevation:0,sx:{position:"relative",backgroundColor:function(e){return"".concat("dark"===e.palette.mode?"#32363e":"")},"&:before":{content:'""',position:"absolute",width:"100%",height:"100%",background:"url(".concat(d.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"45%",transform:function(e){return"".concat("rtl"===e.direction?"":"unset")},backgroundPosition:{xs:"top 0px right -9px"}},borderWidth:"0px"},children:Object(j.jsxs)(c.a,{children:[Object(j.jsxs)(s.a,{sx:{marginTop:"8px",marginBottom:"0px",lineHeight:"35px",position:"relative",zIndex:9},variant:"h3",gutterBottom:!0,children:["Hey Julia, ",Object(j.jsx)("br",{})," Download Latest Report"]}),Object(j.jsx)(l.a,{sx:{marginTop:"15px"},variant:"contained",color:"primary",children:"Download"})]})})},u=a(242),p=a(344),x=a(324),h=a(810),m=a(327),O=a(308),f=a(97),g=a.n(f),v=a(434),y=a(27),w=a(48),M=a(58),S=function(){return Object(j.jsxs)(o.a,{sx:{p:0},children:[Object(j.jsx)("img",{srcSet:"".concat(v.a," 1x, ").concat(v.a," 2x"),alt:"img",height:"205",width:"100%"}),Object(j.jsxs)(c.a,{sx:{paddingLeft:"30px",paddingRight:"30px"},children:[Object(j.jsxs)(u.a,{display:"flex",alignItems:"center",children:[Object(j.jsx)(s.a,{color:"textSecondary",display:"flex",alignItems:"center",children:Object(j.jsx)(g.a,{icon:"clock",width:"20",height:"20"})}),Object(j.jsx)(s.a,{color:"textSecondary",variant:"subtitle2",sx:{ml:1},children:"22 March, 2021"})]}),Object(j.jsx)(s.a,{variant:"h4",sx:{mt:3,pt:1},children:"Super awesome, React 18 is coming soon!"}),Object(j.jsxs)(u.a,{display:"flex",alignItems:"center",sx:{mt:2,pb:3},children:[Object(j.jsx)(p.a,{label:"Medium",size:"small",sx:{backgroundColor:function(e){return e.palette.secondary.main},color:"#fff",pl:"3px",pr:"3px",borderRadius:"6px"}}),Object(j.jsx)(p.a,{label:"Low",size:"small",sx:{backgroundColor:function(e){return e.palette.error.main},color:"#fff",pl:"3px",pr:"3px",borderRadius:"6px",ml:2}})]}),Object(j.jsx)(x.a,{}),Object(j.jsxs)(u.a,{display:"flex",alignItems:"center",sx:{mt:3},children:[Object(j.jsx)(h.a,{title:"John Deo",placement:"top",children:Object(j.jsx)(m.a,{src:y.a,width:"35"})}),Object(j.jsx)(h.a,{title:"Micheal Doe",placement:"top",children:Object(j.jsx)(m.a,{src:w.a,width:"35",sx:{ml:1,mr:1}})}),Object(j.jsx)(h.a,{title:"John Peter",placement:"top",children:Object(j.jsx)(m.a,{src:M.a,width:"35"})}),Object(j.jsx)(u.a,{sx:{ml:"auto"},children:Object(j.jsx)(h.a,{title:"Add Comment",placement:"top",children:Object(j.jsx)(O.a,{children:Object(j.jsx)(g.a,{icon:"message-circle"})})})})]})]})]})},C=a(417),k=function(){return Object(j.jsx)(o.a,{sx:{backgroundColor:function(e){return e.palette.secondary.main},color:"white"},children:Object(j.jsxs)(c.a,{children:[Object(j.jsxs)(u.a,{display:"flex",alignItems:"flex-start",children:[Object(j.jsx)(s.a,{variant:"h3",sx:{marginBottom:"0"},gutterBottom:!0,children:"Earnings"}),Object(j.jsx)(u.a,{sx:{marginLeft:"auto"},children:Object(j.jsx)(C.a,{size:"medium",color:"","aria-label":"add",elevation:"0",sx:{boxShadow:"none"},children:Object(j.jsx)(g.a,{icon:"dollar-sign"})})})]}),Object(j.jsx)(s.a,{variant:"h1",fontWeight:"500",sx:{marginBottom:"0",marginTop:"15px"},gutterBottom:!0,children:"$93,438.78"}),Object(j.jsx)(s.a,{variant:"h6",fontWeight:"400",sx:{marginBottom:"0",opacity:"0.6"},gutterBottom:!0,children:"Monthly Revenue"})]})})},A=a(326),R=a.n(A),T=a(26),P=function(){var e={grid:{show:!0,borderColor:"transparent",strokeDashArray:2,padding:{left:0,right:0,bottom:0}},colors:[Object(T.a)().palette.primary.main],chart:{toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",sparkline:{enabled:!0}},dataLabels:{enabled:!1},markers:{size:0},legend:{show:!1},stroke:{show:!0,width:2,curve:"smooth"},tooltip:{theme:"dark"}};return Object(j.jsxs)(o.a,{sx:{pb:0,pl:0,pr:0},children:[Object(j.jsx)(c.a,{sx:{paddingLeft:"30px",paddingRight:"30px"},children:Object(j.jsxs)(u.a,{display:"flex",alignItems:"flex-start",children:[Object(j.jsxs)(u.a,{children:[Object(j.jsx)(s.a,{variant:"h5",color:"textSecondary",sx:{marginBottom:"0"},gutterBottom:!0,children:"Monthly Sales"}),Object(j.jsx)(s.a,{variant:"h2",sx:{mt:"1px",mb:"0px"},gutterBottom:!0,children:"3,246"})]}),Object(j.jsx)(u.a,{sx:{marginLeft:"auto"},children:Object(j.jsx)(C.a,{size:"medium","aria-label":"add",elevation:"0",color:"primary",sx:{boxShadow:"none"},children:Object(j.jsx)(g.a,{icon:"shopping-bag"})})})]})}),Object(j.jsx)(R.a,{options:e,series:[{name:"Monthly Sales",data:[35,60,30,55,40]}],type:"area",height:"90px"})]})},D=a(309),N=a(310),z=a(311),I=a(312),L=a(313),B=a(358),W=a(321),J=a(65),H=a(66),E=[{imgsrc:y.a,name:"Sunil Joshi",post:"Web Designer",pname:"Elite Admin",priority:"Low",budget:"3.9"},{imgsrc:w.a,name:"Andrew McDownland",post:"Project Manager",pname:"Real Homes WP Theme",priority:"Medium",budget:"24.5"},{imgsrc:M.a,name:"Christopher Jamil",post:"Project Manager",pname:"MedicalPro WP Theme",priority:"High",budget:"12.8"},{imgsrc:J.a,name:"Nirav Joshi",post:"Frontend Engineer",pname:"Hosting Press HTML",priority:"Critical",budget:"2.4"},{imgsrc:H.a,name:"Micheal Doe",post:"Content Writer",pname:"Helping Hands Theme",priority:"Moderate",budget:"9.3"}],F=function(){return Object(j.jsx)(W.a,{title:"Product Performance",subtitle:"Ample Admin Vs Pixel Admin",customdisplay:"block",custommargin:"10px",action:Object(j.jsx)(B.a,{}),children:Object(j.jsx)(u.a,{sx:{overflow:"auto",mt:-3},children:Object(j.jsxs)(D.a,{"aria-label":"simple table",sx:{whiteSpace:"nowrap"},children:[Object(j.jsx)(N.a,{children:Object(j.jsxs)(z.a,{children:[Object(j.jsx)(I.a,{children:Object(j.jsx)(s.a,{variant:"h5",children:"Assigned"})}),Object(j.jsx)(I.a,{children:Object(j.jsx)(s.a,{variant:"h5",children:"Name"})}),Object(j.jsx)(I.a,{children:Object(j.jsx)(s.a,{variant:"h5",children:"Priority"})}),Object(j.jsx)(I.a,{align:"right",children:Object(j.jsx)(s.a,{variant:"h5",children:"Budget"})})]})}),Object(j.jsx)(L.a,{children:E.map((function(e){return Object(j.jsxs)(z.a,{children:[Object(j.jsx)(I.a,{children:Object(j.jsxs)(u.a,{display:"flex",alignItems:"center",children:[Object(j.jsx)(m.a,{src:e.imgsrc,alt:e.imgsrc,width:"35",sx:{borderRadius:"100%"}}),Object(j.jsxs)(u.a,{sx:{ml:2},children:[Object(j.jsx)(s.a,{variant:"h6",fontWeight:"600",children:e.name}),Object(j.jsx)(s.a,{color:"textSecondary",variant:"h6",fontWeight:"400",children:e.post})]})]})}),Object(j.jsx)(I.a,{children:Object(j.jsx)(s.a,{color:"textSecondary",variant:"h6",children:e.pname})}),Object(j.jsx)(I.a,{children:Object(j.jsx)(p.a,{sx:{backgroundColor:"Low"===e.priority?function(e){return e.palette.primary.main}:"Medium"===e.priority?function(e){return e.palette.secondary.main}:"High"===e.priority?function(e){return e.palette.warning.main}:"Moderate"===e.priority?function(e){return e.palette.success.main}:"Critical"===e.priority?function(e){return e.palette.error.main}:function(e){return e.palette.secondary.main},color:"#fff",borderRadius:"6px"},size:"small",label:e.priority})}),Object(j.jsx)(I.a,{align:"right",children:Object(j.jsxs)(s.a,{variant:"h6",children:["$",e.budget,"k"]})})]},e.name)}))})]})})})},V=a(393),G=function(){var e=Object(T.a)(),t={grid:{show:!0,borderColor:"transparent",strokeDashArray:2,padding:{left:0,right:0,bottom:-13}},plotOptions:{bar:{horizontal:!1,columnWidth:"42%",endingShape:"rounded",borderRadius:5}},colors:[e.palette.primary.main,e.palette.secondary.main],fill:{type:"solid",opacity:1},chart:{toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif"},dataLabels:{enabled:!1},markers:{size:0},legend:{show:!1},xaxis:{type:"category",categories:["Jan","Feb","Mar","Apr","May","Jun"],labels:{style:{cssClass:"grey--text lighten-2--text fill-color"}}},yaxis:{show:!0,min:100,max:400,tickAmount:3},stroke:{show:!0,width:5,lineCap:"butt",colors:["transparent"]},tooltip:{theme:"dark"}};return Object(j.jsx)(W.a,{title:"Sales Overview",subtitle:"Ample Admin Vs Pixel Admin",customdisplay:"block",action:Object(j.jsxs)(V.a,{direction:"row",spacing:2,children:[Object(j.jsxs)(s.a,{variant:"h6",display:"flex",alignItems:"center",sx:{color:function(){return e.palette.primary.main}},children:[Object(j.jsx)(s.a,{sx:{color:"primary.main","& svg":{fill:function(){return e.palette.primary.main}},mr:"5px"},children:Object(j.jsx)(g.a,{icon:"circle",width:"10",height:"10"})}),"Ample"]}),Object(j.jsxs)(s.a,{variant:"h6",display:"flex",alignItems:"center",sx:{color:function(){return e.palette.secondary.main}},children:[Object(j.jsx)(s.a,{sx:{color:"secondary.main","& svg":{fill:function(){return e.palette.secondary.main}},mr:"5px"},children:Object(j.jsx)(g.a,{icon:"circle",width:"10",height:"10"})}),"Pixel Admin"]})]}),children:Object(j.jsx)(u.a,{children:Object(j.jsx)(R.a,{options:t,series:[{name:"Ample Admin",data:[355,390,300,350,390,180]},{name:"Pixel Admin",data:[280,250,325,215,250,310]}],type:"bar",height:"280px"})})})},Y=function(){var e=Object(T.a)(),t=e.palette.primary.main,a=e.palette.secondary.main,i=e.palette.warning.main,n={labels:["2021","2020","2019"],chart:{height:280,type:"donut",foreColor:"#adb0bb",fontFamily:"DM sans"},colors:[t,a,e.palette.grey.A100],dataLabels:{enabled:!1},legend:{show:!1},stroke:{colors:["transparent"]},plotOptions:{pie:{donut:{size:"78%",background:"transparent",labels:{show:!1,name:{show:!0,fontSize:"18px",color:void 0,offsetY:-10},value:{show:!1,color:"#98aab4"},total:{show:!1,label:"Our Visitors",color:"#98aab4"}}}}},tooltip:{theme:"dark",fillSeriesColor:!1}};return Object(j.jsxs)(W.a,{title:"Total Sales",subtitle:"Overview of Years",action:Object(j.jsx)(B.a,{}),children:[Object(j.jsx)(x.a,{style:{marginTop:"0px"}}),Object(j.jsxs)(u.a,{display:"flex",alignItems:"center",sx:{mt:3},children:[Object(j.jsx)(s.a,{color:"textSecondary",variant:"body1",sx:{fontSize:"h5.fontSize"},children:"Sales Yearly"}),Object(j.jsx)(u.a,{sx:{ml:"auto"},children:Object(j.jsx)(s.a,{variant:"h2",fontWeight:"700",sx:{marginBottom:"0"},gutterBottom:!0,children:"8,364,398"})})]}),Object(j.jsxs)(u.a,{sx:{mt:5,position:"relative"},children:[Object(j.jsx)(R.a,{options:n,series:[25,35,35],type:"donut",height:"280"}),Object(j.jsx)(s.a,{color:"textSecondary",sx:{position:"absolute",left:"46%",top:"45%"},children:Object(j.jsx)(g.a,{icon:"shopping-cart",height:"30",width:"30"})})]}),Object(j.jsxs)(u.a,{display:"flex",justifyContent:"space-between",sx:{mt:5},children:[Object(j.jsxs)(u.a,{display:"flex",alignItems:"center",children:[Object(j.jsx)(u.a,{sx:{backgroundColor:t,borderRadius:"50%",height:8,width:8,mr:1}}),Object(j.jsx)(s.a,{color:"textSecondary",variant:"h6",children:"2021"})]}),Object(j.jsxs)(u.a,{display:"flex",alignItems:"center",children:[Object(j.jsx)(u.a,{sx:{backgroundColor:a,borderRadius:"50%",height:8,width:8,mr:1}}),Object(j.jsx)(s.a,{color:"textSecondary",variant:"h6",children:"2020"})]}),Object(j.jsxs)(u.a,{display:"flex",alignItems:"center",children:[Object(j.jsx)(u.a,{sx:{backgroundColor:i,borderRadius:"50%",height:8,width:8,mr:1}}),Object(j.jsx)(s.a,{color:"textSecondary",variant:"h6",children:"2019"})]})]})]})},q=a(13),$=a(174),K=a(315),Q=["Action","Another Action","Something else here"],U=[{avatarbg:"secondary.main",icon:"shopping-cart",title:"Top Sales",subtitle:"Johnathan Doe",profit:"+68%"},{avatarbg:"warning.main",icon:"star",title:"Best Seller",subtitle:"MaterialPro Admin",profit:"+68%"},{avatarbg:"success.main",icon:"message-square",title:"Most Commented",subtitle:"Ample Admin",profit:"+68%"}],X=function(){var e=n.a.useState(null),t=Object(q.a)(e,2),a=t[0],i=t[1],r=Boolean(a),o=function(){i(null)},c=Object(T.a)(),l={chart:{height:145,type:"area",foreColor:"#adb0bb",fontFamily:"DM sans",toolbar:{show:!1},sparkline:{enabled:!0}},colors:[c.palette.primary.main],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},fill:{type:"solid",opacity:.05},tooltip:{theme:"dark"},grid:{show:!1,padding:{right:0,left:0}}};return Object(j.jsxs)(W.a,{title:"Weekly Stats",subtitle:"Average sales",custompadding:"0",customheaderpadding:"30px",action:Object(j.jsxs)(u.a,{children:[Object(j.jsx)(h.a,{title:"Action",children:Object(j.jsx)(O.a,{"aria-expanded":r?"true":void 0,"aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},size:"large","aria-label":"action",children:Object(j.jsx)(g.a,{icon:"more-horizontal"})})}),Object(j.jsx)($.a,{id:"long-menu",MenuListProps:{"aria-labelledby":"long-button"},anchorEl:a,open:r,onClose:o,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:Q.map((function(e){return Object(j.jsx)(K.a,{selected:"Pyxis"===e,onClick:o,children:e},e)}))})]}),children:[Object(j.jsx)(u.a,{sx:{pl:"30px",pr:"30px"},children:U.map((function(e){return Object(j.jsxs)(u.a,{display:"flex",alignItems:"center",sx:{mb:3},children:[Object(j.jsx)(m.a,{sx:{backgroundColor:e.avatarbg,color:"#fff"},width:"45",children:Object(j.jsx)(g.a,{icon:e.icon,width:"20"})}),Object(j.jsxs)(u.a,{sx:{ml:2},children:[Object(j.jsx)(s.a,{variant:"h5",fontWeight:"700",children:e.title}),Object(j.jsx)(s.a,{color:"textSecondary",variant:"h6",fontWeight:"400",children:e.subtitle})]}),Object(j.jsx)(u.a,{sx:{ml:"auto"},children:Object(j.jsx)(p.a,{color:"default",size:"small",sx:{borderRadius:"6px",color:function(){return c.palette.grey.A400}},label:e.profit})})]},e.title)}))}),Object(j.jsx)(u.a,{sx:{mt:5,pt:1},children:Object(j.jsx)(R.a,{options:l,series:[{name:"Weekly Stats",data:[40,60,50,65]}],type:"area",height:"160"})})]})},Z=a(532),_=a(533),ee=a(490),te=a(534),ae=a(535),ie=a(536),ne=a(491),re=["Action","Another Action","Something else here"],oe=[{time:"09.50",color:"success.main",text:"Meeting with John"},{time:"09.46",color:"secondary.main",text:"Payment received of $385.90"},{time:"09.47",color:"primary.main",text:"Project Meeting"},{time:"09.48",color:"warning.main",text:"New Sale recorded #ML-3467"},{time:"09.49",color:"error.main",text:"Payment was made to Michael Anderson"}],ce=function(){var e=n.a.useState(null),t=Object(q.a)(e,2),a=t[0],i=t[1],r=Boolean(a),o=function(){i(null)};return Object(j.jsx)(W.a,{title:"Daily Activities",subtitle:"Overview of Years",action:Object(j.jsxs)(u.a,{children:[Object(j.jsx)(h.a,{title:"Action",children:Object(j.jsx)(O.a,{"aria-expanded":r?"true":void 0,"aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},size:"large","aria-label":"action",children:Object(j.jsx)(g.a,{icon:"more-horizontal"})})}),Object(j.jsx)($.a,{id:"long-menu",MenuListProps:{"aria-labelledby":"long-button"},anchorEl:a,open:r,onClose:o,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:re.map((function(e){return Object(j.jsx)(K.a,{selected:"Pyxis"===e,onClick:o,children:e},e)}))})]}),children:Object(j.jsx)(Z.a,{sx:{p:0,mb:0,mt:0},children:oe.map((function(e){return Object(j.jsxs)(_.a,{children:[Object(j.jsx)(ee.a,{sx:{flex:"0"},children:Object(j.jsx)(s.a,{variant:"subtitle2",fontWeight:"700",children:e.time})}),Object(j.jsxs)(te.a,{children:[Object(j.jsx)(ae.a,{variant:"outlined",sx:{borderColor:e.color}}),Object(j.jsx)(ie.a,{})]}),Object(j.jsx)(ne.a,{color:"text.secondary",variant:"h6",children:e.text})]},e.time)}))})})},se=a(98);t.default=function(){return Object(j.jsx)(se.a,{title:"Analytical Dashboard",description:"this is Analytical Dashboard",children:Object(j.jsxs)(r.a,{container:!0,spacing:0,children:[Object(j.jsxs)(r.a,{item:!0,xs:12,lg:6,children:[Object(j.jsx)(b,{}),Object(j.jsxs)(r.a,{container:!0,spacing:0,children:[Object(j.jsx)(r.a,{item:!0,xs:12,lg:6,sm:6,children:Object(j.jsx)(k,{})}),Object(j.jsx)(r.a,{item:!0,xs:12,lg:6,sm:6,children:Object(j.jsx)(P,{})})]})]}),Object(j.jsx)(r.a,{item:!0,xs:12,lg:6,children:Object(j.jsx)(G,{})}),Object(j.jsx)(r.a,{item:!0,xs:12,lg:4,children:Object(j.jsx)(Y,{})}),Object(j.jsx)(r.a,{item:!0,xs:12,lg:8,children:Object(j.jsx)(F,{})}),Object(j.jsx)(r.a,{item:!0,xs:12,lg:4,children:Object(j.jsx)(S,{})}),Object(j.jsx)(r.a,{item:!0,xs:12,lg:4,children:Object(j.jsx)(X,{})}),Object(j.jsx)(r.a,{item:!0,xs:12,lg:4,children:Object(j.jsx)(ce,{})})]})})}}}]);
//# sourceMappingURL=17.e32fc6b3.chunk.js.map