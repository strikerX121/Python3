(this.webpackJsonpflexy=this.webpackJsonpflexy||[]).push([[54],{327:function(e,t,a){"use strict";var c=a(13),o=a(5),r=a(2),n=a(0),l=(a(7),a(6)),i=a(178),s=a(4),d=a(9),b=a(22),u=a(1),j=Object(b.a)(Object(u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),O=a(45),m=a(56);function p(e){return Object(O.a)("MuiAvatar",e)}Object(m.a)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var h=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=Object(s.a)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],a.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,a=e.ownerState;return Object(r.a)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===a.variant&&{borderRadius:t.shape.borderRadius},"square"===a.variant&&{borderRadius:0},a.colorDefault&&{color:t.palette.background.default,backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]})})),f=Object(s.a)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),v=Object(s.a)(j,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var x=n.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiAvatar"}),s=a.alt,b=a.children,j=a.className,O=a.component,m=void 0===O?"div":O,x=a.imgProps,C=a.sizes,y=a.src,S=a.srcSet,k=a.variant,w=void 0===k?"circular":k,R=Object(o.a)(a,h),I=null,P=function(e){var t=e.crossOrigin,a=e.referrerPolicy,o=e.src,r=e.srcSet,l=n.useState(!1),i=Object(c.a)(l,2),s=i[0],d=i[1];return n.useEffect((function(){if(o||r){d(!1);var e=!0,c=new Image;return c.onload=function(){e&&d("loaded")},c.onerror=function(){e&&d("error")},c.crossOrigin=t,c.referrerPolicy=a,c.src=o,r&&(c.srcset=r),function(){e=!1}}}),[t,a,o,r]),s}(Object(r.a)({},x,{src:y,srcSet:S})),D=y||S,z=D&&"error"!==P,M=Object(r.a)({},a,{colorDefault:!z,component:m,variant:w}),J=function(e){var t=e.classes,a={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return Object(i.a)(a,p,t)}(M);return I=z?Object(u.jsx)(f,Object(r.a)({alt:s,src:y,srcSet:S,sizes:C,ownerState:M,className:J.img},x)):null!=b?b:D&&s?s[0]:Object(u.jsx)(v,{className:J.fallback}),Object(u.jsx)(g,Object(r.a)({as:m,ownerState:M,className:Object(l.a)(J.root,j),ref:t},R,{children:I}))}));t.a=x},344:function(e,t,a){"use strict";var c=a(3),o=a(5),r=a(2),n=a(0),l=(a(7),a(6)),i=a(178),s=a(278),d=a(22),b=a(1),u=Object(d.a)(Object(b.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),j=a(20),O=a(10),m=a(293),p=a(9),h=a(4),g=a(45),f=a(56);function v(e){return Object(g.a)("MuiChip",e)}var x=Object(f.a)("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]),C=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],y=Object(h.a)("div",{name:"MuiChip",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState,o=a.color,r=a.clickable,n=a.onDelete,l=a.size,i=a.variant;return[Object(c.a)({},"& .".concat(x.avatar),t.avatar),Object(c.a)({},"& .".concat(x.avatar),t["avatar".concat(Object(O.a)(l))]),Object(c.a)({},"& .".concat(x.avatar),t["avatarColor".concat(Object(O.a)(o))]),Object(c.a)({},"& .".concat(x.icon),t.icon),Object(c.a)({},"& .".concat(x.icon),t["icon".concat(Object(O.a)(l))]),Object(c.a)({},"& .".concat(x.icon),t["iconColor".concat(Object(O.a)(o))]),Object(c.a)({},"& .".concat(x.deleteIcon),t.deleteIcon),Object(c.a)({},"& .".concat(x.deleteIcon),t["deleteIcon".concat(Object(O.a)(l))]),Object(c.a)({},"& .".concat(x.deleteIcon),t["deleteIconColor".concat(Object(O.a)(o))]),Object(c.a)({},"& .".concat(x.deleteIcon),t["deleteIconOutlinedColor".concat(Object(O.a)(o))]),t.root,t["size".concat(Object(O.a)(l))],t["color".concat(Object(O.a)(o))],r&&t.clickable,r&&"default"!==o&&t["clickableColor".concat(Object(O.a)(o),")")],n&&t.deletable,n&&"default"!==o&&t["deletableColor".concat(Object(O.a)(o))],t[i],"outlined"===i&&t["outlined".concat(Object(O.a)(o))]]}})((function(e){var t,a=e.theme,o=e.ownerState,n=Object(s.a)(a.palette.text.primary,.26);return Object(r.a)((t={maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:a.palette.text.primary,backgroundColor:a.palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box"},Object(c.a)(t,"&.".concat(x.disabled),{opacity:a.palette.action.disabledOpacity,pointerEvents:"none"}),Object(c.a)(t,"& .".concat(x.avatar),{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],fontSize:a.typography.pxToRem(12)}),Object(c.a)(t,"& .".concat(x.avatarColorPrimary),{color:a.palette.primary.contrastText,backgroundColor:a.palette.primary.dark}),Object(c.a)(t,"& .".concat(x.avatarColorSecondary),{color:a.palette.secondary.contrastText,backgroundColor:a.palette.secondary.dark}),Object(c.a)(t,"& .".concat(x.avatarSmall),{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)}),Object(c.a)(t,"& .".concat(x.icon),Object(r.a)({color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],marginLeft:5,marginRight:-6},"small"===o.size&&{fontSize:18,marginLeft:4,marginRight:-4},"default"!==o.color&&{color:"inherit"})),Object(c.a)(t,"& .".concat(x.deleteIcon),Object(r.a)({WebkitTapHighlightColor:"transparent",color:n,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(s.a)(n,.4)}},"small"===o.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==o.color&&{color:Object(s.a)(a.palette[o.color].contrastText,.7),"&:hover, &:active":{color:a.palette[o.color].contrastText}})),t),"small"===o.size&&{height:24},"default"!==o.color&&{backgroundColor:a.palette[o.color].main,color:a.palette[o.color].contrastText},o.onDelete&&Object(c.a)({},"&.".concat(x.focusVisible),{backgroundColor:Object(s.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),o.onDelete&&"default"!==o.color&&Object(c.a)({},"&.".concat(x.focusVisible),{backgroundColor:a.palette[o.color].dark}))}),(function(e){var t,a=e.theme,o=e.ownerState;return Object(r.a)({},o.clickable&&(t={userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:Object(s.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}},Object(c.a)(t,"&.".concat(x.focusVisible),{backgroundColor:Object(s.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),Object(c.a)(t,"&:active",{boxShadow:a.shadows[1]}),t),o.clickable&&"default"!==o.color&&Object(c.a)({},"&:hover, &.".concat(x.focusVisible),{backgroundColor:a.palette[o.color].dark}))}),(function(e){var t,a,o=e.theme,n=e.ownerState;return Object(r.a)({},"outlined"===n.variant&&(t={backgroundColor:"transparent",border:"1px solid ".concat("light"===o.palette.mode?o.palette.grey[400]:o.palette.grey[700])},Object(c.a)(t,"&.".concat(x.clickable,":hover"),{backgroundColor:o.palette.action.hover}),Object(c.a)(t,"&.".concat(x.focusVisible),{backgroundColor:o.palette.action.focus}),Object(c.a)(t,"& .".concat(x.avatar),{marginLeft:4}),Object(c.a)(t,"& .".concat(x.avatarSmall),{marginLeft:2}),Object(c.a)(t,"& .".concat(x.icon),{marginLeft:4}),Object(c.a)(t,"& .".concat(x.iconSmall),{marginLeft:2}),Object(c.a)(t,"& .".concat(x.deleteIcon),{marginRight:5}),Object(c.a)(t,"& .".concat(x.deleteIconSmall),{marginRight:3}),t),"outlined"===n.variant&&"default"!==n.color&&(a={color:o.palette[n.color].main,border:"1px solid ".concat(Object(s.a)(o.palette[n.color].main,.7))},Object(c.a)(a,"&.".concat(x.clickable,":hover"),{backgroundColor:Object(s.a)(o.palette[n.color].main,o.palette.action.hoverOpacity)}),Object(c.a)(a,"&.".concat(x.focusVisible),{backgroundColor:Object(s.a)(o.palette[n.color].main,o.palette.action.focusOpacity)}),Object(c.a)(a,"& .".concat(x.deleteIcon),{color:Object(s.a)(o.palette[n.color].main,.7),"&:hover, &:active":{color:o.palette[n.color].main}}),a))})),S=Object(h.a)("span",{name:"MuiChip",slot:"Label",overridesResolver:function(e,t){var a=e.ownerState.size;return[t.label,t["label".concat(Object(O.a)(a))]]}})((function(e){var t=e.ownerState;return Object(r.a)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===t.size&&{paddingLeft:8,paddingRight:8})}));function k(e){return"Backspace"===e.key||"Delete"===e.key}var w=n.forwardRef((function(e,t){var a=Object(p.a)({props:e,name:"MuiChip"}),c=a.avatar,s=a.className,d=a.clickable,h=a.color,g=void 0===h?"default":h,f=a.component,x=a.deleteIcon,w=a.disabled,R=void 0!==w&&w,I=a.icon,P=a.label,D=a.onClick,z=a.onDelete,M=a.onKeyDown,J=a.onKeyUp,N=a.size,T=void 0===N?"medium":N,A=a.variant,L=void 0===A?"filled":A,V=Object(o.a)(a,C),E=n.useRef(null),F=Object(j.a)(E,t),K=function(e){e.stopPropagation(),z&&z(e)},W=!(!1===d||!D)||d,H="small"===T,U=W||z?m.a:f||"div",q=Object(r.a)({},a,{component:U,disabled:R,size:T,color:g,onDelete:!!z,clickable:W,variant:L}),B=function(e){var t=e.classes,a=e.disabled,c=e.size,o=e.color,r=e.onDelete,n=e.clickable,l=e.variant,s={root:["root",l,a&&"disabled","size".concat(Object(O.a)(c)),"color".concat(Object(O.a)(o)),n&&"clickable",n&&"clickableColor".concat(Object(O.a)(o)),r&&"deletable",r&&"deletableColor".concat(Object(O.a)(o)),"".concat(l).concat(Object(O.a)(o))],label:["label","label".concat(Object(O.a)(c))],avatar:["avatar","avatar".concat(Object(O.a)(c)),"avatarColor".concat(Object(O.a)(o))],icon:["icon","icon".concat(Object(O.a)(c)),"iconColor".concat(Object(O.a)(o))],deleteIcon:["deleteIcon","deleteIcon".concat(Object(O.a)(c)),"deleteIconColor".concat(Object(O.a)(o)),"deleteIconOutlinedColor".concat(Object(O.a)(o))]};return Object(i.a)(s,v,t)}(q),$=U===m.a?Object(r.a)({component:f||"div",focusVisibleClassName:B.focusVisible},z&&{disableRipple:!0}):{},G=null;if(z){var Q=Object(l.a)("default"!==g&&("outlined"===L?B["deleteIconOutlinedColor".concat(Object(O.a)(g))]:B["deleteIconColor".concat(Object(O.a)(g))]),H&&B.deleteIconSmall);G=x&&n.isValidElement(x)?n.cloneElement(x,{className:Object(l.a)(x.props.className,B.deleteIcon,Q),onClick:K}):Object(b.jsx)(u,{className:Object(l.a)(B.deleteIcon,Q),onClick:K})}var X=null;c&&n.isValidElement(c)&&(X=n.cloneElement(c,{className:Object(l.a)(B.avatar,c.props.className)}));var Y=null;return I&&n.isValidElement(I)&&(Y=n.cloneElement(I,{className:Object(l.a)(B.icon,I.props.className)})),Object(b.jsxs)(y,Object(r.a)({as:U,className:Object(l.a)(B.root,s),disabled:!(!W||!R)||void 0,onClick:D,onKeyDown:function(e){e.currentTarget===e.target&&k(e)&&e.preventDefault(),M&&M(e)},onKeyUp:function(e){e.currentTarget===e.target&&(z&&k(e)?z(e):"Escape"===e.key&&E.current&&E.current.blur()),J&&J(e)},ref:F,ownerState:q},$,V,{children:[X||Y,Object(b.jsx)(S,{className:Object(l.a)(B.label),ownerState:q,children:P}),G]}))}));t.a=w},765:function(e,t,a){"use strict";a.r(t);var c=a(13),o=a(0),r=a(26),n=a(242),l=a(308),i=a(304),s=a(305),d=a(309),b=a(310),u=a(311),j=a(312),O=a(110),m=a(313),p=a(327),h=a(344),g=a(314),f=a(295),v=a(118),x=a.n(v),C=a(120),y=a.n(C),S=a(119),k=a.n(S),w=a(117),R=a.n(w),I=a(99),P=a(98),D=a(27),z=a(48),M=a(58),J=a(65),N=a(66),T=a(1);function A(e){var t=Object(r.a)(),a=e.count,c=e.page,o=e.rowsPerPage,i=e.onPageChange;return Object(T.jsxs)(n.a,{sx:{flexShrink:0,ml:2.5},children:[Object(T.jsx)(l.a,{onClick:function(e){i(e,0)},disabled:0===c,"aria-label":"first page",children:"rtl"===t.direction?Object(T.jsx)(R.a,{}):Object(T.jsx)(x.a,{})}),Object(T.jsx)(l.a,{onClick:function(e){i(e,c-1)},disabled:0===c,"aria-label":"previous page",children:"rtl"===t.direction?Object(T.jsx)(k.a,{}):Object(T.jsx)(y.a,{})}),Object(T.jsx)(l.a,{onClick:function(e){i(e,c+1)},disabled:c>=Math.ceil(a/o)-1,"aria-label":"next page",children:"rtl"===t.direction?Object(T.jsx)(y.a,{}):Object(T.jsx)(k.a,{})}),Object(T.jsx)(l.a,{onClick:function(e){i(e,Math.max(0,Math.ceil(a/o)-1))},disabled:c>=Math.ceil(a/o)-1,"aria-label":"last page",children:"rtl"===t.direction?Object(T.jsx)(x.a,{}):Object(T.jsx)(R.a,{})})]})}var L=[{orderno:"ORD - 0120145",items:"5",imgsrc:D.a,customer:"Sunil Joshi",total:"550,000",status:"Completed",date:"10 Jun, 2021 09:51:40"},{orderno:"ORD - 0120146",items:"1",imgsrc:z.a,customer:"John Deo",total:"45,000",status:"Pending",date:"10 Jun, 2021 07:46:00"},{orderno:"ORD - 0120460",items:"3",imgsrc:M.a,customer:"Mily Peter",total:"57,000",status:"Cancel",date:"10 Jun, 2021 04:19:38"},{orderno:"ORD - 0124060",items:"11",imgsrc:J.a,customer:"Andrew McDownland",total:"457,000",status:"Completed",date:"10 Jun, 2021 04:12:29"},{orderno:"ORD - 0124568",items:"4",imgsrc:N.a,customer:"Christopher Jamil",total:"120,000",status:"Pending",date:"15 Apr, 2021 04:12:50"},{orderno:"ORD - 0120146",items:"1",imgsrc:z.a,customer:"John Deo",total:"45,000",status:"Pending",date:"10 Jun, 2021 07:46:00"},{orderno:"ORD - 0120460",items:"3",imgsrc:M.a,customer:"Mily Peter",total:"57,000",status:"Cancel",date:"10 Jun, 2021 04:19:38"},{orderno:"ORD - 0124060",items:"11",imgsrc:J.a,customer:"Andrew McDownland",total:"457,000",status:"Completed",date:"10 Jun, 2021 04:12:29"},{orderno:"ORD - 0124568",items:"4",imgsrc:N.a,customer:"Christopher Jamil",total:"120,000",status:"Pending",date:"15 Apr, 2021 04:12:50"},{orderno:"ORD - 0120145",items:"5",imgsrc:D.a,customer:"Sunil Joshi",total:"550,000",status:"Completed",date:"10 Jun, 2021 09:51:40"},{orderno:"ORD - 0124060",items:"11",imgsrc:J.a,customer:"Andrew McDownland",total:"457,000",status:"Completed",date:"10 Jun, 2021 04:12:29"},{orderno:"ORD - 0124568",items:"4",imgsrc:N.a,customer:"Christopher Jamil",total:"120,000",status:"Pending",date:"15 Apr, 2021 04:12:50"}].sort((function(e,t){return e.calories<t.calories?-1:1})),V=[{to:"/",title:"Home"},{title:"Pagination Table"}];t.default=function(){var e=o.useState(0),t=Object(c.a)(e,2),a=t[0],r=t[1],l=o.useState(5),v=Object(c.a)(l,2),x=v[0],C=v[1],y=a>0?Math.max(0,(1+a)*x-L.length):0;return Object(T.jsxs)(P.a,{title:"Pagination Table",description:"this is Pagination Table page",children:[Object(T.jsx)(I.a,{title:"Pagination Table",items:V}),Object(T.jsx)(i.a,{children:Object(T.jsx)(s.a,{children:Object(T.jsx)(n.a,{sx:{overflow:{xs:"auto",sm:"unset"}},children:Object(T.jsxs)(d.a,{"aria-label":"custom pagination table",sx:{whiteSpace:"nowrap"},children:[Object(T.jsx)(b.a,{children:Object(T.jsxs)(u.a,{children:[Object(T.jsx)(j.a,{children:Object(T.jsx)(O.a,{variant:"h5",children:"Order No."})}),Object(T.jsx)(j.a,{children:Object(T.jsx)(O.a,{variant:"h5",children:"Customer"})}),Object(T.jsx)(j.a,{children:Object(T.jsx)(O.a,{variant:"h5",children:"Items"})}),Object(T.jsx)(j.a,{children:Object(T.jsx)(O.a,{variant:"h5",children:"Total"})}),Object(T.jsx)(j.a,{children:Object(T.jsx)(O.a,{variant:"h5",children:"Date"})}),Object(T.jsx)(j.a,{children:Object(T.jsx)(O.a,{variant:"h5",children:"Status"})})]})}),Object(T.jsxs)(m.a,{children:[(x>0?L.slice(a*x,a*x+x):L).map((function(e){return Object(T.jsxs)(u.a,{children:[Object(T.jsx)(j.a,{children:Object(T.jsx)(O.a,{variant:"h5",children:e.orderno})}),Object(T.jsx)(j.a,{children:Object(T.jsxs)(n.a,{display:"flex",alignItems:"center",children:[Object(T.jsx)(p.a,{src:e.imgsrc,alt:e.imgsrc,width:"30",sx:{borderRadius:"100%"}}),Object(T.jsx)(n.a,{sx:{ml:2},children:Object(T.jsx)(O.a,{variant:"h6",fontWeight:"600",children:e.customer})})]})}),Object(T.jsx)(j.a,{children:Object(T.jsx)(O.a,{color:"textSecondary",variant:"h6",fontWeight:"400",children:e.items})}),Object(T.jsx)(j.a,{children:Object(T.jsxs)(O.a,{color:"textSecondary",variant:"h6",fontWeight:"400",children:["$",e.total]})}),Object(T.jsx)(j.a,{children:Object(T.jsx)(O.a,{variant:"h6",children:e.date})}),Object(T.jsx)(j.a,{children:Object(T.jsx)(h.a,{sx:{backgroundColor:"Completed"===e.status?function(e){return e.palette.success.light}:"Pending"===e.status?function(e){return e.palette.warning.light}:"Cancel"===e.status?function(e){return e.palette.error.light}:function(e){return e.palette.secondary.light},color:"Completed"===e.status?function(e){return e.palette.success.main}:"Pending"===e.status?function(e){return e.palette.warning.main}:"Cancel"===e.status?function(e){return e.palette.error.main}:function(e){return e.palette.secondary.main},borderRadius:"6px",pl:"3px",pr:"3px"},size:"small",label:e.status})})]},e.orderno)})),y>0&&Object(T.jsx)(u.a,{style:{height:53*y},children:Object(T.jsx)(j.a,{colSpan:6})})]}),Object(T.jsx)(g.a,{children:Object(T.jsx)(u.a,{children:Object(T.jsx)(f.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],colSpan:6,count:L.length,rowsPerPage:x,page:a,SelectProps:{inputprops:{"aria-label":"rows per page"},native:!0},onPageChange:function(e,t){r(t)},onRowsPerPageChange:function(e){C(parseInt(e.target.value,10)),r(0)},ActionsComponent:A})})})]})})})})]})}}}]);
//# sourceMappingURL=54.a2be622d.chunk.js.map