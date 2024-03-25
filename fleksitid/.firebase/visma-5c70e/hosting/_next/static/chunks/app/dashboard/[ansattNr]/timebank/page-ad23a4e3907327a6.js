(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[645],{25577:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(28480),i=r(90900),o=r(23113),a=r(53469),s=r(62423);let u=(0,s.Z)("MuiBox",["root"]),l=(0,o.Z)(),c=(0,n.Z)({themeId:a.Z,defaultTheme:l,defaultClassName:u.root,generateClassName:i.Z.generate});var d=c},43226:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(20791),i=r(13428),o=r(2265),a=r(57042),s=r(43381),u=r(40182),l=r(35843),c=r(87927),d=r(28702),p=r(62423),f=r(20800);function getTypographyUtilityClass(e){return(0,f.ZP)("MuiTypography",e)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=r(57437);let h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],useUtilityClasses=e=>{let{align:t,gutterBottom:r,noWrap:n,paragraph:i,variant:o,classes:a}=e,s={root:["root",o,"inherit"!==e.align&&`align${(0,d.Z)(t)}`,r&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return(0,u.Z)(s,getTypographyUtilityClass,a)},g=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,d.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,i.Z)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},transformDeprecatedColors=e=>v[e]||e,Z=o.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiTypography"}),o=transformDeprecatedColors(r.color),u=(0,s.Z)((0,i.Z)({},r,{color:o})),{align:l="inherit",className:d,component:p,gutterBottom:f=!1,noWrap:v=!1,paragraph:Z=!1,variant:x="body1",variantMapping:b=y}=u,S=(0,n.Z)(u,h),w=(0,i.Z)({},u,{align:l,color:o,className:d,component:p,gutterBottom:f,noWrap:v,paragraph:Z,variant:x,variantMapping:b}),C=p||(Z?"p":b[x]||y[x])||"span",j=useUtilityClasses(w);return(0,m.jsx)(g,(0,i.Z)({as:C,ref:t,ownerState:w,className:(0,a.Z)(j.root,d)},S))});var x=Z},37014:function(e,t,r){"use strict";r.d(t,{Z:function(){return createContainer}});var n=r(20791),i=r(13428),o=r(2265),a=r(57042),s=r(20800),u=r(40182),l=r(81051),c=r(48153),d=r(39190),p=r(27796),f=r(57437);let m=["className","component","disableGutters","fixed","maxWidth","classes"],h=(0,p.Z)(),g=(0,d.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,l.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemePropsDefault=e=>(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:h}),useUtilityClasses=(e,t)=>{let{classes:r,fixed:n,disableGutters:i,maxWidth:o}=e,a={root:["root",o&&`maxWidth${(0,l.Z)(String(o))}`,n&&"fixed",i&&"disableGutters"]};return(0,u.Z)(a,e=>(0,s.ZP)(t,e),r)};function createContainer(e={}){let{createStyledComponent:t=g,useThemeProps:r=useThemePropsDefault,componentName:s="MuiContainer"}=e,u=t(({theme:e,ownerState:t})=>(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,r)=>{let n=e.breakpoints.values[r];return 0!==n&&(t[e.breakpoints.up(r)]={maxWidth:`${n}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,i.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})),l=o.forwardRef(function(e,t){let o=r(e),{className:l,component:c="div",disableGutters:d=!1,fixed:p=!1,maxWidth:h="lg"}=o,g=(0,n.Z)(o,m),y=(0,i.Z)({},o,{component:c,disableGutters:d,fixed:p,maxWidth:h}),v=useUtilityClasses(y,s);return(0,f.jsx)(u,(0,i.Z)({as:c,ownerState:y,className:(0,a.Z)(v.root,l),ref:t},g))});return l}},65474:function(e,t,r){"use strict";r(2265);var n=r(45536),i=r(95270),o=r(57437);t.Z=function({styles:e,themeId:t,defaultTheme:r={}}){let a=(0,i.Z)(r),s="function"==typeof e?e(t&&a[t]||a):e;return(0,o.jsx)(n.Z,{styles:s})}},28480:function(e,t,r){"use strict";r.d(t,{Z:function(){return createBox}});var n=r(13428),i=r(20791),o=r(2265),a=r(57042),s=r(69613),u=r(87947),l=r(43381),c=r(95270),d=r(57437);let p=["className","component"];function createBox(e={}){let{themeId:t,defaultTheme:r,defaultClassName:f="MuiBox-root",generateClassName:m}=e,h=(0,s.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(u.Z),g=o.forwardRef(function(e,o){let s=(0,c.Z)(r),u=(0,l.Z)(e),{className:g,component:y="div"}=u,v=(0,i.Z)(u,p);return(0,d.jsx)(h,(0,n.Z)({as:y,ref:o,className:(0,a.Z)(g,m?m(f):f),theme:t&&s[t]||s},v))});return g}},15602:function(e,t,r){"use strict";r.d(t,{P_:function(){return p},ZP:function(){return createStyled},x9:function(){return shouldForwardProp}});var n=r(13428),i=r(20791),o=r(69613),a=r(52927),s=r(27796),u=r(87947);let l=["ownerState"],c=["variants"],d=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function shouldForwardProp(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}let p=(0,s.Z)(),lowercaseFirstLetter=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function resolveTheme({defaultTheme:e,theme:t,themeId:r}){return 0===Object.keys(t).length?e:t[r]||t}function processStyleArg(e,t){let{ownerState:r}=t,o=(0,i.Z)(t,l),a="function"==typeof e?e((0,n.Z)({ownerState:r},o)):e;if(Array.isArray(a))return a.flatMap(e=>processStyleArg(e,(0,n.Z)({ownerState:r},o)));if(a&&"object"==typeof a&&Array.isArray(a.variants)){let{variants:e=[]}=a,t=(0,i.Z)(a,c),s=t;return e.forEach(e=>{let t=!0;"function"==typeof e.props?t=e.props((0,n.Z)({ownerState:r},o,r)):Object.keys(e.props).forEach(n=>{(null==r?void 0:r[n])!==e.props[n]&&o[n]!==e.props[n]&&(t=!1)}),t&&(Array.isArray(s)||(s=[s]),s.push("function"==typeof e.style?e.style((0,n.Z)({ownerState:r},o,r)):e.style))}),s}return a}function createStyled(e={}){let{themeId:t,defaultTheme:r=p,rootShouldForwardProp:s=shouldForwardProp,slotShouldForwardProp:l=shouldForwardProp}=e,systemSx=e=>(0,u.Z)((0,n.Z)({},e,{theme:resolveTheme((0,n.Z)({},e,{defaultTheme:r,themeId:t}))}));return systemSx.__mui_systemSx=!0,(e,u={})=>{var c;let p;(0,o.internal_processStyles)(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));let{name:f,slot:m,skipVariantsResolver:h,skipSx:g,overridesResolver:y=(c=lowercaseFirstLetter(m))?(e,t)=>t[c]:null}=u,v=(0,i.Z)(u,d),Z=void 0!==h?h:m&&"Root"!==m&&"root"!==m||!1,x=g||!1,b=shouldForwardProp;"Root"===m||"root"===m?b=s:m?b=l:"string"==typeof e&&e.charCodeAt(0)>96&&(b=void 0);let S=(0,o.default)(e,(0,n.Z)({shouldForwardProp:b,label:p},v)),transformStyleArg=e=>"function"==typeof e&&e.__emotion_real!==e||(0,a.P)(e)?i=>processStyleArg(e,(0,n.Z)({},i,{theme:resolveTheme({theme:i.theme,defaultTheme:r,themeId:t})})):e,muiStyledResolver=(i,...o)=>{let a=transformStyleArg(i),s=o?o.map(transformStyleArg):[];f&&y&&s.push(e=>{let i=resolveTheme((0,n.Z)({},e,{defaultTheme:r,themeId:t}));if(!i.components||!i.components[f]||!i.components[f].styleOverrides)return null;let o=i.components[f].styleOverrides,a={};return Object.entries(o).forEach(([t,r])=>{a[t]=processStyleArg(r,(0,n.Z)({},e,{theme:i}))}),y(e,a)}),f&&!Z&&s.push(e=>{var i;let o=resolveTheme((0,n.Z)({},e,{defaultTheme:r,themeId:t})),a=null==o||null==(i=o.components)||null==(i=i[f])?void 0:i.variants;return processStyleArg({variants:a},(0,n.Z)({},e,{theme:o}))}),x||s.push(systemSx);let u=s.length-o.length;if(Array.isArray(i)&&u>0){let e=Array(u).fill("");(a=[...i,...e]).raw=[...i.raw,...e]}let l=S(a,...s);return e.muiName&&(l.muiName=e.muiName),l};return S.withConfig&&(muiStyledResolver.withConfig=S.withConfig),muiStyledResolver}}},39190:function(e,t,r){"use strict";var n=r(15602);let i=(0,n.ZP)();t.Z=i},25779:function(e,t,r){"use strict";function createChainedFunction(...e){return e.reduce((e,t)=>null==t?e:function(...r){e.apply(this,r),t.apply(this,r)},()=>{})}r.d(t,{Z:function(){return createChainedFunction}})},97017:function(e,t,r){"use strict";function debounce(e,t=166){let r;function debounced(...n){clearTimeout(r),r=setTimeout(()=>{e.apply(this,n)},t)}return debounced.clear=()=>{clearTimeout(r)},debounced}r.d(t,{Z:function(){return debounce}})},22984:function(e,t,r){"use strict";function deprecatedPropType(e,t){return()=>null}r.d(t,{Z:function(){return deprecatedPropType}})},4108:function(e,t,r){"use strict";function getScrollbarSize(e){let t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}r.d(t,{Z:function(){return getScrollbarSize}})},26357:function(e,t,r){"use strict";r.d(t,{Z:function(){return isMuiElement}});var n=r(2265);function isMuiElement(e,t){var r,i;return n.isValidElement(e)&&-1!==t.indexOf(null!=(r=e.type.muiName)?r:null==(i=e.type)||null==(i=i._payload)||null==(i=i.value)?void 0:i.muiName)}},82423:function(e,t,r){"use strict";function ownerDocument(e){return e&&e.ownerDocument||document}r.d(t,{Z:function(){return ownerDocument}})},80149:function(e,t,r){"use strict";r.d(t,{Z:function(){return ownerWindow}});var n=r(82423);function ownerWindow(e){let t=(0,n.Z)(e);return t.defaultView||window}},78004:function(e,t,r){"use strict";function requirePropFactory(e,t){return()=>null}r.d(t,{Z:function(){return requirePropFactory}}),r(13428)},99537:function(e,t,r){"use strict";function unsupportedProp(e,t,r,n,i){return null}r.d(t,{Z:function(){return unsupportedProp}})},53076:function(e,t,r){"use strict";r.d(t,{Z:function(){return useControlled}});var n=r(2265);function useControlled({controlled:e,default:t,name:r,state:i="value"}){let{current:o}=n.useRef(void 0!==e),[a,s]=n.useState(t),u=o?e:a,l=n.useCallback(e=>{o||s(e)},[]);return[u,l]}},40090:function(e,t,r){"use strict";r.d(t,{Z:function(){return useId}});var n,i=r(2265);let o=0,a=(n||(n=r.t(i,2)))["useId".toString()];function useId(e){if(void 0!==a){let t=a();return null!=e?e:t}return function(e){let[t,r]=i.useState(e),n=e||t;return i.useEffect(()=>{null==t&&(o+=1,r(`mui-${o}`))},[t]),n}(e)}},97227:function(e,t,r){Promise.resolve().then(r.bind(r,94261)),Promise.resolve().then(r.bind(r,83490)),Promise.resolve().then(r.bind(r,56486)),Promise.resolve().then(r.t.bind(r,50423,23))},94261:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ArbeidsTimerGjenstår}});var n=r(57437),i=r(2265),o=r(25577),a=r(43226),s=r(30771);function ArbeidsTimerGjenstår(){let[e,t]=(0,i.useState)(0),{timer:r,minutter:u}=(0,s.W)(40);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o.Z,{sx:{bgcolor:"lightgray",height:"30vh",width:"50vw",margin:"auto",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",border:"3px solid #800080"},children:[(0,n.jsx)(a.Z,{variant:"h3",component:"div",style:{marginBottom:"20px",alignSelf:"center",textAlign:"center"},children:"Gjenst\xe5ende arbeidstimer"}),(0,n.jsxs)(a.Z,{variant:"h2",component:"div",style:{alignSelf:"center"},children:[r," timer"]}),(0,n.jsxs)(a.Z,{variant:"h2",component:"div",style:{alignSelf:"center"},children:[u," minutter"]})]})})}},83490:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Timebank}});var n=r(57437),i=r(2265),o=r(25577),a=r(43226),s=r(30771);function Timebank(){let[e,t]=i.useState(0),{timer:r,minutter:u}=(0,s.W)(100.33);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o.Z,{sx:{bgcolor:"lightgray",height:"30vh",width:"50vw",margin:"auto",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",border:"3px solid #800080"},children:[(0,n.jsx)(a.Z,{variant:"h2",component:"div",style:{marginBottom:"20px",alignSelf:"center"},children:"Timebank"}),(0,n.jsxs)(a.Z,{variant:"h2",component:"div",style:{alignSelf:"center"},children:[r," timer"]}),(0,n.jsxs)(a.Z,{variant:"h2",component:"div",style:{alignSelf:"center"},children:[u," minutter"]})]})})}},56486:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return TotalArbeidstimer}});var n=r(57437),i=r(2265),o=r(25577),a=r(43226),s=r(30771);function TotalArbeidstimer(){let[e,t]=(0,i.useState)(0),{timer:r,minutter:u}=(0,s.W)(50);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o.Z,{sx:{bgcolor:"lightgray",height:"30vh",width:"50vw",margin:"auto",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",border:"3px solid #800080"},children:[(0,n.jsx)(a.Z,{variant:"h3",component:"div",style:{marginBottom:"20px",alignSelf:"center",textAlign:"center"},children:"Totale arbeidstimer i uken"}),(0,n.jsxs)(a.Z,{variant:"h2",component:"div",style:{alignSelf:"center"},children:[r," timer"]}),(0,n.jsxs)(a.Z,{variant:"h2",component:"div",style:{alignSelf:"center"},children:[u," minutter"]})]})})}},30771:function(e,t,r){"use strict";function beregnTimerogMinutter(e){let t=Math.floor(60*e);return{timer:Math.floor(t/60),minutter:t%60}}r.d(t,{W:function(){return beregnTimerogMinutter}})}},function(e){e.O(0,[187,777,423,971,472,744],function(){return e(e.s=97227)}),_N_E=e.O()}]);