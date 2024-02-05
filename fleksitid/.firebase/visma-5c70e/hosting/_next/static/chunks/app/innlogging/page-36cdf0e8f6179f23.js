(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[479],{2431:function(){},5525:function(e,n,r){Promise.resolve().then(r.bind(r,5228))},5228:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return page}});var i=r(7437);r(6543);var t=r(2265),a=r(8508),d=r(3226),l=r(9050),o=r(1975),components_AnsattInnlogging=e=>{let{valgtBrukerNavn:n,pin:r,håndterPinEndring:t,håndterInnlogin:a}=e;return(0,i.jsxs)("form",{onSubmit:a,children:[(0,i.jsx)("form",{onSubmit:a,children:(0,i.jsx)(d.Z,{variant:"h5",gutterBottom:!0,children:n})}),(0,i.jsx)(o.Z,{fullWidth:!0,id:"pin",type:"password",label:"PIN-kode",placeholder:"PIN-kode",margin:"normal",value:r,onChange:t}),(0,i.jsx)(l.Z,{variant:"contained",type:"submit",fullWidth:!0,children:"Logg inn"})]})},components_AdminInnlogging=e=>{let{adminBruker:n,vedPassordEndring:r,vedLoginKlikk:t,passord:a}=e;return(0,i.jsxs)("div",{children:[(0,i.jsx)(d.Z,{variant:"h6",children:n.brukernavn}),(0,i.jsx)(o.Z,{fullWidth:!0,type:"password",label:"Password",placeholder:"Enter your password",margin:"normal",value:a,onChange:r}),(0,i.jsx)(l.Z,{variant:"contained",onClick:t,fullWidth:!0,style:{marginTop:"20px"},children:"Logg inn som admin"})]})},s=r(8874),components_NummerPad=e=>{let{vedNumKlikk:n,vedSlett:r,vedEnter:t}=e,håndterNummerKlikk=e=>{"⌫"===e?r():"✓"===e?t():n(e)};return(0,i.jsx)(s.ZP,{container:!0,spacing:1,children:["1","2","3","4","5","6","7","8","9","⌫","0","✓"].map(e=>(0,i.jsx)(s.ZP,{item:!0,xs:4,children:(0,i.jsx)(l.Z,{variant:"outlined",onClick:()=>håndterNummerKlikk(e),sx:{width:"100%",height:"64px",fontSize:"24px"},children:e})},e))})},u=r(4081),c=r(7033),v=r(4997),g=r(3341),h=r(7739),HenteBruker=e=>{let{brukere:n,adminBrukere:r,valgtBrukerId:a,håndterBrukerEndring:d,gåTilInnlogging:s}=e,[m,k]=(0,t.useState)(""),p=m?n.filter(e=>e.Fornavn&&e.Fornavn.toLowerCase().includes(m.toLowerCase())||e.Etternavn&&e.Etternavn.toLowerCase().includes(m.toLowerCase())):n,f=m?r.filter(e=>e.brukernavn&&e.brukernavn.toLowerCase().includes(m.toLowerCase())):r;return(0,i.jsxs)("div",{children:[(0,i.jsx)(o.Z,{fullWidth:!0,margin:"normal",label:"S\xf8k etter navnet ditt",value:m,onChange:e=>{k(e.target.value)},placeholder:"Skriv her for \xe5 s\xf8ke etter navnet ditt"}),(0,i.jsxs)(u.Z,{fullWidth:!0,margin:"normal",children:[(0,i.jsx)(c.Z,{id:"velge-bruker-label",children:"Velg bruker"}),(0,i.jsxs)(v.Z,{labelId:"velge-bruker-label",id:"velge-bruker",value:a,label:"Velg bruker",onChange:d,children:[(0,i.jsx)(g.Z,{children:"Brukere"}),p.map(e=>(0,i.jsxs)(h.Z,{value:e.id,children:[e.Fornavn?e.Fornavn:"Ukjent"," ",e.Etternavn?e.Etternavn:""]},e.id)),(0,i.jsx)(g.Z,{children:"Administratorer"}),f.map(e=>(0,i.jsx)(h.Z,{value:e.brukernavn,children:e.brukernavn},e.brukernavn))]})]}),(0,i.jsx)(l.Z,{variant:"contained",onClick:s,fullWidth:!0,children:"G\xe5 til pin innloggin"})]})},m=r(3113),k=r(8652);let p=(0,m.Z)({palette:{primary:{main:k.Z[500]},secondary:{main:k.Z[300]}}});var f=r(148),x=r(4086),j=r(4866),b=r.n(j);let bcryptVerify=async(e,n)=>{try{let r=await b().compare(e,n);return r}catch(e){throw e}};var page=()=>{var e,n,r,o,s,u;let[c,v]=(0,t.useState)(""),[g,h]=(0,t.useState)(""),[m,k]=(0,t.useState)(""),[j,b]=(0,t.useState)("VelgBrukerListe"),[y,w]=(0,t.useState)(!1),[Z,E]=(0,t.useState)([]),[L,B]=(0,t.useState)([]);(0,t.useEffect)(()=>{let hentBrukere=async()=>{let e=(0,x.hJ)(f.db,"Brukere"),n=await (0,x.PL)(e),r=n.docs.map(e=>({id:e.id,...e.data()}));E(r);let i=r.filter(e=>e.erAdmin);B(i)};hentBrukere()},[]);let håndterPinKodeEndring=e=>{h(e.target.value)},validerLogin=async()=>{let e=Z.find(e=>e.id===c);if(e){let n=await bcryptVerify(g,e.Passord);e.ErAdmin&&n?(k("Logget inn som admin. Velkommen "+e.Fornavn+"!"),window.location.href="/admin"):!e.ErAdmin&&n?(k("Logget inn. Velkommen ".concat(e.Fornavn," ").concat(e.Etternavn,"!")),window.location.href="/dashboard/sjekkinn"):k("Innlogging feilet. Feil navn eller pin kode!")}},håndterInnlogin=e=>{e.preventDefault(),validerLogin()};return(0,t.useEffect)(()=>{let håndterTaseTrykk=e=>{e.key>="0"&&e.key<="9"?h(n=>n+e.key):"Enter"===e.key?validerLogin():"Backspace"===e.key&&h(e=>e.slice(0,-1))};return window.addEventListener("keydown",håndterTaseTrykk),()=>{window.removeEventListener("keydown",håndterTaseTrykk)}},[g,validerLogin]),(0,i.jsx)(a.Z,{theme:p,children:(0,i.jsxs)("div",{children:["VelgBrukerListe"===j?(0,i.jsx)(HenteBruker,{brukere:Z,adminBrukere:L,valgtBrukerId:c,håndterBrukerEndring:e=>{let n=e.target.value,r=Z.find(e=>e.id===n);v(n),w((null==r?void 0:r.erAdmin)||!1),h(""),k("")},gåTilInnlogging:()=>{b("innlogging")}}):(0,i.jsxs)("div",{children:[(0,i.jsxs)(d.Z,{variant:"h2",gutterBottom:!0,children:["Velkommen"," ",y?null===(e=L.find(e=>e.brukernavn===c))||void 0===e?void 0:e.brukernavn:"".concat(null===(n=Z.find(e=>e.id===c))||void 0===n?void 0:n.Fornavn," ").concat(null===(r=Z.find(e=>e.id===c))||void 0===r?void 0:r.Etternavn)]}),(0,i.jsxs)(d.Z,{variant:"h5",gutterBottom:!0,children:["Logget p\xe5 som:"," ",y?(null===(o=L.find(e=>e.brukernavn===c))||void 0===o?void 0:o.brukernavn)||"Ukjent Admin":"".concat(null===(s=Z.find(e=>e.id===c))||void 0===s?void 0:s.Fornavn," ").concat(null===(u=Z.find(e=>e.id===c))||void 0===u?void 0:u.Etternavn)||"Ukjent Bruker"]}),y?(0,i.jsx)("div",{children:(0,i.jsx)(components_AdminInnlogging,{adminBruker:L,passord:g,vedPassordEndring:håndterPinKodeEndring,vedLoginKlikk:håndterInnlogin})}):(0,i.jsxs)("div",{children:[(0,i.jsx)(d.Z,{variant:"h4",gutterBottom:!0,style:{marginTop:"50px"},children:"For skjerminnlogging"}),(0,i.jsx)(components_NummerPad,{vedNumKlikk:e=>{h(n=>n+e)},vedSlett:()=>{h(e=>e.slice(0,-1))},vedEnter:()=>{håndterInnlogin()}}),(0,i.jsx)(components_AnsattInnlogging,{pin:g,håndterPinnEndring:håndterPinKodeEndring,håndterInnlogin:håndterInnlogin})]})]}),(0,i.jsx)(l.Z,{variant:"contained",color:"primary",fullWidth:!0,onClick:()=>{window.location.href="/"},style:{marginTop:75},children:"G\xe5 tilbake til hovedsiden"}),m&&(0,i.jsx)(d.Z,{variant:"h5",style:{marginTop:"15px"},children:m})]})})}},148:function(e,n,r){"use strict";r.d(n,{N:function(){return l},db:function(){return d}});var i=r(994),t=r(4086);let a=(0,i.ZF)({apiKey:"AIzaSyDXAV7xZr-ztj97FSL3oOhaUqsIiqfR2fk",authDomain:"visma-5c70e.firebaseapp.com",projectId:"visma-5c70e",storageBucket:"visma-5c70e.appspot.com",messagingSenderId:"161477454641",appId:"1:161477454641:web:7abeb57872fb86ef719e10"}),d=(0,t.ad)(a),l="Brukere"}},function(e){e.O(0,[358,218,863,777,50,109,458,220,65,971,472,744],function(){return e(e.s=5525)}),_N_E=e.O()}]);