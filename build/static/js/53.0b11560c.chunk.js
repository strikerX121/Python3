(this.webpackJsonpflexy=this.webpackJsonpflexy||[]).push([[53],{327:function(e,t,a){"use strict";var c=a(13),o=a(5),r=a(2),n=a(0),l=(a(7),a(6)),i=a(178),s=a(4),d=a(9),b=a(22),u=a(1),j=Object(b.a)(Object(u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=a(45),p=a(56);function O(e){return Object(m.a)("MuiAvatar",e)}Object(p.a)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var h=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=Object(s.a)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],a.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,a=e.ownerState;return Object(r.a)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===a.variant&&{borderRadius:t.shape.borderRadius},"square"===a.variant&&{borderRadius:0},a.colorDefault&&{color:t.palette.background.default,backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]})})),f=Object(s.a)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),v=Object(s.a)(j,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var x=n.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiAvatar"}),s=a.alt,b=a.children,j=a.className,m=a.component,p=void 0===m?"div":m,x=a.imgProps,y=a.sizes,C=a.src,k=a.srcSet,S=a.variant,w=void 0===S?"circular":S,I=Object(o.a)(a,h),R=null,z=function(e){var t=e.crossOrigin,a=e.referrerPolicy,o=e.src,r=e.srcSet,l=n.useState(!1),i=Object(c.a)(l,2),s=i[0],d=i[1];return n.useEffect((function(){if(o||r){d(!1);var e=!0,c=new Image;return c.onload=function(){e&&d("loaded")},c.onerror=function(){e&&d("error")},c.crossOrigin=t,c.referrerPolicy=a,c.src=o,r&&(c.srcset=r),function(){e=!1}}}),[t,a,o,r]),s}(Object(r.a)({},x,{src:C,srcSet:k})),P=C||k,D=P&&"error"!==z,M=Object(r.a)({},a,{colorDefault:!D,component:p,variant:w}),T=function(e){var t=e.classes,a={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return Object(i.a)(a,O,t)}(M);return R=D?Object(u.jsx)(f,Object(r.a)({alt:s,src:C,srcSet:k,sizes:y,ownerState:M,className:T.img},x)):null!=b?b:P&&s?s[0]:Object(u.jsx)(v,{className:T.fallback}),Object(u.jsx)(g,Object(r.a)({as:p,ownerState:M,className:Object(l.a)(T.root,j),ref:t},I,{children:R}))}));t.a=x},344:function(e,t,a){"use strict";var c=a(3),o=a(5),r=a(2),n=a(0),l=(a(7),a(6)),i=a(178),s=a(278),d=a(22),b=a(1),u=Object(d.a)(Object(b.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),j=a(20),m=a(10),p=a(293),O=a(9),h=a(4),g=a(45),f=a(56);function v(e){return Object(g.a)("MuiChip",e)}var x=Object(f.a)("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]),y=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],C=Object(h.a)("div",{name:"MuiChip",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState,o=a.color,r=a.clickable,n=a.onDelete,l=a.size,i=a.variant;return[Object(c.a)({},"& .".concat(x.avatar),t.avatar),Object(c.a)({},"& .".concat(x.avatar),t["avatar".concat(Object(m.a)(l))]),Object(c.a)({},"& .".concat(x.avatar),t["avatarColor".concat(Object(m.a)(o))]),Object(c.a)({},"& .".concat(x.icon),t.icon),Object(c.a)({},"& .".concat(x.icon),t["icon".concat(Object(m.a)(l))]),Object(c.a)({},"& .".concat(x.icon),t["iconColor".concat(Object(m.a)(o))]),Object(c.a)({},"& .".concat(x.deleteIcon),t.deleteIcon),Object(c.a)({},"& .".concat(x.deleteIcon),t["deleteIcon".concat(Object(m.a)(l))]),Object(c.a)({},"& .".concat(x.deleteIcon),t["deleteIconColor".concat(Object(m.a)(o))]),Object(c.a)({},"& .".concat(x.deleteIcon),t["deleteIconOutlinedColor".concat(Object(m.a)(o))]),t.root,t["size".concat(Object(m.a)(l))],t["color".concat(Object(m.a)(o))],r&&t.clickable,r&&"default"!==o&&t["clickableColor".concat(Object(m.a)(o),")")],n&&t.deletable,n&&"default"!==o&&t["deletableColor".concat(Object(m.a)(o))],t[i],"outlined"===i&&t["outlined".concat(Object(m.a)(o))]]}})((function(e){var t,a=e.theme,o=e.ownerState,n=Object(s.a)(a.palette.text.primary,.26);return Object(r.a)((t={maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:a.palette.text.primary,backgroundColor:a.palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box"},Object(c.a)(t,"&.".concat(x.disabled),{opacity:a.palette.action.disabledOpacity,pointerEvents:"none"}),Object(c.a)(t,"& .".concat(x.avatar),{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],fontSize:a.typography.pxToRem(12)}),Object(c.a)(t,"& .".concat(x.avatarColorPrimary),{color:a.palette.primary.contrastText,backgroundColor:a.palette.primary.dark}),Object(c.a)(t,"& .".concat(x.avatarColorSecondary),{color:a.palette.secondary.contrastText,backgroundColor:a.palette.secondary.dark}),Object(c.a)(t,"& .".concat(x.avatarSmall),{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)}),Object(c.a)(t,"& .".concat(x.icon),Object(r.a)({color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],marginLeft:5,marginRight:-6},"small"===o.size&&{fontSize:18,marginLeft:4,marginRight:-4},"default"!==o.color&&{color:"inherit"})),Object(c.a)(t,"& .".concat(x.deleteIcon),Object(r.a)({WebkitTapHighlightColor:"transparent",color:n,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(s.a)(n,.4)}},"small"===o.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==o.color&&{color:Object(s.a)(a.palette[o.color].contrastText,.7),"&:hover, &:active":{color:a.palette[o.color].contrastText}})),t),"small"===o.size&&{height:24},"default"!==o.color&&{backgroundColor:a.palette[o.color].main,color:a.palette[o.color].contrastText},o.onDelete&&Object(c.a)({},"&.".concat(x.focusVisible),{backgroundColor:Object(s.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),o.onDelete&&"default"!==o.color&&Object(c.a)({},"&.".concat(x.focusVisible),{backgroundColor:a.palette[o.color].dark}))}),(function(e){var t,a=e.theme,o=e.ownerState;return Object(r.a)({},o.clickable&&(t={userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:Object(s.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}},Object(c.a)(t,"&.".concat(x.focusVisible),{backgroundColor:Object(s.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),Object(c.a)(t,"&:active",{boxShadow:a.shadows[1]}),t),o.clickable&&"default"!==o.color&&Object(c.a)({},"&:hover, &.".concat(x.focusVisible),{backgroundColor:a.palette[o.color].dark}))}),(function(e){var t,a,o=e.theme,n=e.ownerState;return Object(r.a)({},"outlined"===n.variant&&(t={backgroundColor:"transparent",border:"1px solid ".concat("light"===o.palette.mode?o.palette.grey[400]:o.palette.grey[700])},Object(c.a)(t,"&.".concat(x.clickable,":hover"),{backgroundColor:o.palette.action.hover}),Object(c.a)(t,"&.".concat(x.focusVisible),{backgroundColor:o.palette.action.focus}),Object(c.a)(t,"& .".concat(x.avatar),{marginLeft:4}),Object(c.a)(t,"& .".concat(x.avatarSmall),{marginLeft:2}),Object(c.a)(t,"& .".concat(x.icon),{marginLeft:4}),Object(c.a)(t,"& .".concat(x.iconSmall),{marginLeft:2}),Object(c.a)(t,"& .".concat(x.deleteIcon),{marginRight:5}),Object(c.a)(t,"& .".concat(x.deleteIconSmall),{marginRight:3}),t),"outlined"===n.variant&&"default"!==n.color&&(a={color:o.palette[n.color].main,border:"1px solid ".concat(Object(s.a)(o.palette[n.color].main,.7))},Object(c.a)(a,"&.".concat(x.clickable,":hover"),{backgroundColor:Object(s.a)(o.palette[n.color].main,o.palette.action.hoverOpacity)}),Object(c.a)(a,"&.".concat(x.focusVisible),{backgroundColor:Object(s.a)(o.palette[n.color].main,o.palette.action.focusOpacity)}),Object(c.a)(a,"& .".concat(x.deleteIcon),{color:Object(s.a)(o.palette[n.color].main,.7),"&:hover, &:active":{color:o.palette[n.color].main}}),a))})),k=Object(h.a)("span",{name:"MuiChip",slot:"Label",overridesResolver:function(e,t){var a=e.ownerState.size;return[t.label,t["label".concat(Object(m.a)(a))]]}})((function(e){var t=e.ownerState;return Object(r.a)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===t.size&&{paddingLeft:8,paddingRight:8})}));function S(e){return"Backspace"===e.key||"Delete"===e.key}var w=n.forwardRef((function(e,t){var a=Object(O.a)({props:e,name:"MuiChip"}),c=a.avatar,s=a.className,d=a.clickable,h=a.color,g=void 0===h?"default":h,f=a.component,x=a.deleteIcon,w=a.disabled,I=void 0!==w&&w,R=a.icon,z=a.label,P=a.onClick,D=a.onDelete,M=a.onKeyDown,T=a.onKeyUp,N=a.size,A=void 0===N?"medium":N,L=a.variant,V=void 0===L?"filled":L,E=Object(o.a)(a,y),W=n.useRef(null),H=Object(j.a)(W,t),F=function(e){e.stopPropagation(),D&&D(e)},B=!(!1===d||!P)||d,K="small"===A,J=B||D?p.a:f||"div",U=Object(r.a)({},a,{component:J,disabled:I,size:A,color:g,onDelete:!!D,clickable:B,variant:V}),X=function(e){var t=e.classes,a=e.disabled,c=e.size,o=e.color,r=e.onDelete,n=e.clickable,l=e.variant,s={root:["root",l,a&&"disabled","size".concat(Object(m.a)(c)),"color".concat(Object(m.a)(o)),n&&"clickable",n&&"clickableColor".concat(Object(m.a)(o)),r&&"deletable",r&&"deletableColor".concat(Object(m.a)(o)),"".concat(l).concat(Object(m.a)(o))],label:["label","label".concat(Object(m.a)(c))],avatar:["avatar","avatar".concat(Object(m.a)(c)),"avatarColor".concat(Object(m.a)(o))],icon:["icon","icon".concat(Object(m.a)(c)),"iconColor".concat(Object(m.a)(o))],deleteIcon:["deleteIcon","deleteIcon".concat(Object(m.a)(c)),"deleteIconColor".concat(Object(m.a)(o)),"deleteIconOutlinedColor".concat(Object(m.a)(o))]};return Object(i.a)(s,v,t)}(U),q=J===p.a?Object(r.a)({component:f||"div",focusVisibleClassName:X.focusVisible},D&&{disableRipple:!0}):{},Y=null;if(D){var $=Object(l.a)("default"!==g&&("outlined"===V?X["deleteIconOutlinedColor".concat(Object(m.a)(g))]:X["deleteIconColor".concat(Object(m.a)(g))]),K&&X.deleteIconSmall);Y=x&&n.isValidElement(x)?n.cloneElement(x,{className:Object(l.a)(x.props.className,X.deleteIcon,$),onClick:F}):Object(b.jsx)(u,{className:Object(l.a)(X.deleteIcon,$),onClick:F})}var G=null;c&&n.isValidElement(c)&&(G=n.cloneElement(c,{className:Object(l.a)(X.avatar,c.props.className)}));var Q=null;return R&&n.isValidElement(R)&&(Q=n.cloneElement(R,{className:Object(l.a)(X.icon,R.props.className)})),Object(b.jsxs)(C,Object(r.a)({as:J,className:Object(l.a)(X.root,s),disabled:!(!B||!I)||void 0,onClick:P,onKeyDown:function(e){e.currentTarget===e.target&&S(e)&&e.preventDefault(),M&&M(e)},onKeyUp:function(e){e.currentTarget===e.target&&(D&&S(e)?D(e):"Escape"===e.key&&W.current&&W.current.blur()),T&&T(e)},ref:H,ownerState:U},q,E,{children:[G||Q,Object(b.jsx)(k,{className:Object(l.a)(X.label),ownerState:U,children:z}),Y]}))}));t.a=w},764:function(e,t,a){"use strict";a.r(t);a(0);var c=a(304),o=a(305),r=a(242),n=a(309),l=a(310),i=a(311),s=a(312),d=a(110),b=a(313),u=a(327),j=a(344),m=a(99),p=a(98),O=a(27),h=a(48),g=a(58),f=a(65),v=a(66),x=a(1),y=[{id:"1",imgsrc:O.a,name:"Sunil Joshi",post:"Web Designer",pname:"Elite Admin",teams:[{id:"1.1",color:"secondary.main",text:"S"},{id:"1.2",color:"error.main",text:"D"}],status:"Active",budget:"3.9"},{id:"2",imgsrc:h.a,name:"Andrew McDownland",post:"Project Manager",pname:"Real Homes WP Theme",teams:[{id:"2.1",color:"primary.main",text:"A"},{id:"2.2",color:"warning.main",text:"X"},{id:"2.3",color:"secondary.main",text:"N"}],status:"Pending",budget:"24.5"},{id:"3",imgsrc:g.a,name:"Christopher Jamil",post:"Project Manager",pname:"MedicalPro WP Theme",teams:[{id:"3.1",color:"error.main",text:"X"}],status:"Completed",budget:"12.8"},{id:"4",imgsrc:f.a,name:"Nirav Joshi",post:"Frontend Engineer",pname:"Hosting Press HTML",teams:[{id:"4.1",color:"primary.main",text:"Y"},{id:"4.2",color:"error.main",text:"X"}],status:"Active",budget:"2.4"},{id:"5",imgsrc:v.a,name:"Micheal Doe",post:"Content Writer",pname:"Helping Hands WP Theme",teams:[{id:"5.1",color:"secondary.main",text:"S"}],status:"Cancel",budget:"9.3"}],C=[{to:"/",title:"Home"},{title:"Basic Table"}];t.default=function(){return Object(x.jsxs)(p.a,{title:"Basic Table",description:"this is Basic Table page",children:[Object(x.jsx)(m.a,{title:"Basic Table",items:C}),Object(x.jsx)(c.a,{children:Object(x.jsx)(o.a,{children:Object(x.jsx)(r.a,{sx:{overflow:{xs:"auto",sm:"unset"}},children:Object(x.jsxs)(n.a,{"aria-label":"simple table",sx:{whiteSpace:"nowrap"},children:[Object(x.jsx)(l.a,{children:Object(x.jsxs)(i.a,{children:[Object(x.jsx)(s.a,{children:Object(x.jsx)(d.a,{variant:"h5",children:"Users"})}),Object(x.jsx)(s.a,{children:Object(x.jsx)(d.a,{variant:"h5",children:"Project Name"})}),Object(x.jsx)(s.a,{children:Object(x.jsx)(d.a,{variant:"h5",children:"Team"})}),Object(x.jsx)(s.a,{children:Object(x.jsx)(d.a,{variant:"h5",children:"Status"})}),Object(x.jsx)(s.a,{children:Object(x.jsx)(d.a,{variant:"h5",children:"Budget"})})]})}),Object(x.jsx)(b.a,{children:y.map((function(e){return Object(x.jsxs)(i.a,{children:[Object(x.jsx)(s.a,{children:Object(x.jsxs)(r.a,{display:"flex",alignItems:"center",children:[Object(x.jsx)(u.a,{src:e.imgsrc,alt:e.imgsrc,width:"35",sx:{borderRadius:"100%"}}),Object(x.jsxs)(r.a,{sx:{ml:2},children:[Object(x.jsx)(d.a,{variant:"h6",fontWeight:"600",children:e.name}),Object(x.jsx)(d.a,{color:"textSecondary",variant:"h6",fontWeight:"400",children:e.post})]})]})}),Object(x.jsx)(s.a,{children:Object(x.jsx)(d.a,{color:"textSecondary",variant:"h6",fontWeight:"400",children:e.pname})}),Object(x.jsx)(s.a,{children:Object(x.jsx)(r.a,{display:"flex",alignItems:"center",children:e.teams.map((function(e){return Object(x.jsx)(u.a,{sx:{backgroundColor:e.color,width:"35px",height:"35px",color:"#fff",ml:"-8px"},children:e.text},e.id)}))})}),Object(x.jsx)(s.a,{children:Object(x.jsx)(j.a,{sx:{backgroundColor:"Active"===e.status?function(e){return e.palette.success.light}:"Pending"===e.status?function(e){return e.palette.warning.light}:"Completed"===e.status?function(e){return e.palette.primary.light}:"Cancel"===e.status?function(e){return e.palette.error.light}:function(e){return e.palette.secondary.light},color:"Active"===e.status?function(e){return e.palette.success.main}:"Pending"===e.status?function(e){return e.palette.warning.main}:"Completed"===e.status?function(e){return e.palette.primary.main}:"Cancel"===e.status?function(e){return e.palette.error.main}:function(e){return e.palette.secondary.main},borderRadius:"6px",pl:"3px",pr:"3px"},size:"small",label:e.status})}),Object(x.jsx)(s.a,{children:Object(x.jsxs)(d.a,{variant:"h6",children:["$",e.budget,"k"]})})]},e.id)}))})]})})})})]})}}}]);
//# sourceMappingURL=53.0b11560c.chunk.js.map