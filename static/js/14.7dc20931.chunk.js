(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[14],{497:function(e,a,t){"use strict";var n=t(505),r=t.n(n),o={"Content-Type":"application/json"};o.Authorization="Bearer ".concat(localStorage.getItem("autenticarlogin"));var c=r.a.create({baseURL:"https://hydroponics-api.azurewebsites.net//api",headers:o});a.a=c},501:function(e,a,t){"use strict";function n(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function r(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,r=!1,o=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(t.push(c.value),!a||t.length!==a);n=!0);}catch(i){r=!0,o=i}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}return t}}(e,a)||function(e,a){if(e){if("string"===typeof e)return n(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,a):void 0}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(a,"a",(function(){return r}))},511:function(e,a,t){"use strict";var n=t(19),r=t(49),o=t(495),c=t(30),s=t(2),i=t.n(s),l=t(62),u=t.n(l),f=t(493),d=t.n(f),p=t(494),b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(o.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],o=e.block,c=e.className,s=e.close,l=e.cssModule,u=e.color,f=e.outline,b=e.size,m=e.tag,h=e.innerRef,v=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof v.children&&(v.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(f?"-outline":"")+"-"+u,j=Object(p.j)(d()(c,{close:s},s||"btn",s||g,!!b&&"btn-"+b,!!o&&"btn-block",{active:a,disabled:this.props.disabled}),l);v.href&&"button"===m&&(m="a");var y=s?"Close":null;return i.a.createElement(m,Object(n.a)({type:"button"===m&&v.onClick?"button":void 0},v,{className:j,ref:h,onClick:this.onClick,"aria-label":t||y}))},a}(i.a.Component);m.propTypes=b,m.defaultProps={color:"secondary",tag:"button"},a.a=m},517:function(e,a,t){"use strict";var n=t(19),r=t(49),o=t(495),c=t(30),s=t(2),i=t.n(s),l=t(62),u=t.n(l),f=t(493),d=t.n(f),p=t(494),b={children:u.a.node,inline:u.a.bool,tag:p.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.submit=t.submit.bind(Object(o.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.inline,c=e.tag,s=e.innerRef,l=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(p.j)(d()(a,!!o&&"form-inline"),t);return i.a.createElement(c,Object(n.a)({},l,{ref:s,className:u}))},a}(s.Component);m.propTypes=b,m.defaultProps={tag:"form"},a.a=m},518:function(e,a,t){"use strict";var n=t(19),r=t(49),o=t(495),c=t(30),s=t(2),i=t.n(s),l=t(62),u=t.n(l),f=t(493),d=t.n(f),p=t(494),b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.focus=t.focus.bind(Object(o.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.type,c=e.bsSize,s=e.valid,l=e.invalid,u=e.tag,f=e.addon,b=e.plaintext,m=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(o)>-1,g=new RegExp("\\D","g"),j=u||("select"===o||"textarea"===o?o:"input"),y="form-control";b?(y+="-plaintext",j=u||"input"):"file"===o?y+="-file":"range"===o?y+="-range":v&&(y=f?null:"form-check-input"),h.size&&g.test(h.size)&&(Object(p.p)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=h.size,delete h.size);var O=Object(p.j)(d()(a,l&&"is-invalid",s&&"is-valid",!!c&&"form-control-"+c,y),t);return("input"===j||u&&"function"===typeof u)&&(h.type=o),h.children&&!b&&"select"!==o&&"string"===typeof j&&"select"!==j&&(Object(p.p)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),i.a.createElement(j,Object(n.a)({},h,{ref:m,className:O,"aria-invalid":l}))},a}(i.a.Component);m.propTypes=b,m.defaultProps={type:"text"},a.a=m},535:function(e,a,t){"use strict";var n=t(19),r=t(49),o=t(2),c=t.n(o),s=t(62),i=t.n(s),l=t(493),u=t.n(l),f=t(494),d={tag:f.n,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,o=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),i=Object(f.j)(u()(a,"card-header"),t);return c.a.createElement(o,Object(n.a)({},s,{className:i}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},553:function(e,a,t){"use strict";var n=t(19),r=t(49),o=t(2),c=t.n(o),s=t(62),i=t.n(s),l=t(493),u=t.n(l),f=t(494),d={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:f.n,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,o=e.row,s=e.disabled,i=e.check,l=e.inline,d=e.tag,p=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),b=Object(f.j)(u()(a,!!o&&"row",i?"form-check":"form-group",!(!i||!l)&&"form-check-inline",!(!i||!s)&&"disabled"),t);return"fieldset"===d&&(p.disabled=s),c.a.createElement(d,Object(n.a)({},p,{className:b}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},554:function(e,a,t){"use strict";var n=t(19),r=t(49),o=t(2),c=t.n(o),s=t(62),i=t.n(s),l=t(493),u=t.n(l),f=t(494),d=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:d,order:d,offset:d})]),b={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:f.n,className:i.a.string,cssModule:i.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:i.a.array},m={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,o=e.hidden,s=e.widths,i=e.tag,l=e.check,d=e.size,p=e.for,b=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),m=[];s.forEach((function(a,n){var r=e[a];if(delete b[a],r||""===r){var o,c=!n;if(Object(f.h)(r)){var s,i=c?"-":"-"+a+"-";o=h(c,a,r.size),m.push(Object(f.j)(u()(((s={})[o]=r.size||""===r.size,s["order"+i+r.order]=r.order||0===r.order,s["offset"+i+r.offset]=r.offset||0===r.offset,s))),t)}else o=h(c,a,r),m.push(o)}}));var v=Object(f.j)(u()(a,!!o&&"sr-only",!!l&&"form-check-label",!!d&&"col-form-label-"+d,m,!!m.length&&"col-form-label"),t);return c.a.createElement(i,Object(n.a)({htmlFor:p},b,{className:v}))};v.propTypes=b,v.defaultProps=m,a.a=v},555:function(e,a,t){"use strict";var n=t(19),r=t(49),o=t(2),c=t.n(o),s=t(62),i=t.n(s),l=t(493),u=t.n(l),f=t(494),d={children:i.a.node,inline:i.a.bool,tag:f.n,color:i.a.string,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,o=e.inline,s=e.color,i=e.tag,l=Object(r.a)(e,["className","cssModule","inline","color","tag"]),d=Object(f.j)(u()(a,!o&&"form-text",!!s&&"text-"+s),t);return c.a.createElement(i,Object(n.a)({},l,{className:d}))};p.propTypes=d,p.defaultProps={tag:"small",color:"muted"},a.a=p},953:function(e,a,t){"use strict";t.r(a);var n=t(503),r=t.n(n),o=t(504),c=t(501),s=t(2),i=t.n(s),l=t(595),u=t(535),f=t(596),d=t(517),p=t(553),b=t(534),m=t(554),h=t(518),v=t(555),g=t(511),j=t(497);a.default=function(){var e=Object(s.useState)([]),a=Object(c.a)(e,2),t=a[0],n=a[1],y=Object(s.useState)([]),O=Object(c.a)(y,2),E=O[0],k=O[1],N=Object(s.useState)(""),x=Object(c.a)(N,2),z=x[0],w=x[1],M=Object(s.useState)(""),R=Object(c.a)(M,2),S=R[0],C=R[1],T=Object(s.useState)(""),A=Object(c.a)(T,2),D=A[0],P=A[1],I=Object(s.useState)(""),F=Object(c.a)(I,2),B=F[0],q=F[1];Object(s.useEffect)((function(){(function(){var e=Object(o.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("Estufa");case 3:a=e.sent,n(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("erro",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.useEffect)((function(){(function(){var e=Object(o.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("Dispositivo?naoMostrarVinculadas=true");case 3:a=e.sent,k(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("erro",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var J=function(){var e=Object(o.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,t={nome:z,localizacao:S,idEstufa:D,idDispositivo:B},e.next=5,j.a.post("Bancada",t);case 5:200===e.sent.status&&(w(""),C(""),q(""),P("")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0,"falha ao enviar");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}();return i.a.createElement(l.a,null,i.a.createElement(u.a,null,i.a.createElement("strong",null,"Cadastro de bancada")),i.a.createElement(f.a,null,i.a.createElement(d.a,{onSubmit:J},i.a.createElement(p.a,{row:!0,className:"my-0"},i.a.createElement(b.a,{xs:"6"},i.a.createElement(p.a,null,i.a.createElement(m.a,{htmlFor:"select"},"Estufa"),i.a.createElement(h.a,{type:"select",name:"select",id:"select",value:D,onChange:function(e){var a=e.target.value;P(a)}},i.a.createElement("option",{value:"0"},"Selecione uma op\xe7\xe3o"),null===t||void 0===t?void 0:t.map((function(e){return i.a.createElement("option",{key:e.idEstufa,value:e.idEstufa},e.nome)}))),i.a.createElement(v.a,{className:"help-block"},"Escolha a estufa que deseja vincular \xe0 sua bancada"))),i.a.createElement(b.a,{xs:"6"},i.a.createElement(p.a,null,i.a.createElement(m.a,{htmlFor:"select"},"Dispositivo"),i.a.createElement(h.a,{type:"select",name:"select",id:"select",value:B,onChange:function(e){var a=e.target.value;q(a)}},i.a.createElement("option",{value:"0"},"Selecione uma op\xe7\xe3o"),null===E||void 0===E?void 0:E.map((function(e){return i.a.createElement("option",{key:e.idDispositivo,value:e.idDispositivo},e.nome)}))),i.a.createElement(v.a,{className:"help-block"},"Escolha o dispositivo que deseja vincular \xe0 sua bancada")))),i.a.createElement(p.a,{row:!0,className:"my-0"},i.a.createElement(b.a,{xs:"6"},i.a.createElement(p.a,null,i.a.createElement(m.a,{htmlFor:"nf-name"},"Nome"),i.a.createElement(h.a,{type:"text",id:"nf-name",name:"nf-name",placeholder:"Ex: Bancada-01",value:z,onChange:function(e){var a=e.target.value;return w(a)}}),i.a.createElement(v.a,{className:"help-block"},"Insira o nome da bancada"))),i.a.createElement(b.a,{xs:"6"},i.a.createElement(p.a,null,i.a.createElement(m.a,{htmlFor:"nf-location"},"Localiza\xe7\xe3o"),i.a.createElement(h.a,{type:"text",id:"nf-location",name:"nf-location",placeholder:"Ex: Setor A6",value:S,onChange:function(e){var a=e.target.value;return C(a)}}),i.a.createElement(v.a,{className:"help-block"},"Insira a localiza\xe7\xe3o da sua bancada.")))),i.a.createElement(g.a,{size:"sm",color:"primary"},"CADASTRAR"))))}}}]);
//# sourceMappingURL=14.7dc20931.chunk.js.map