(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[27],{497:function(e,a,t){"use strict";var l=t(505),n=t.n(l),r={"Content-Type":"application/json"};r.Authorization="Bearer ".concat(localStorage.getItem("autenticarlogin"));var c=n.a.create({baseURL:"https://hydroponics-api.azurewebsites.net//api",headers:r});a.a=c},956:function(e,a,t){"use strict";t.r(a);var l=t(503),n=t.n(l),r=t(504),c=t(501),o=t(2),m=t.n(o),u=t(516),i=t(534),d=t(595),E=t(535),s=t(596),p=t(948),v=t(957),h=t(18),f=t(520),y=t.n(f),b=t(497),g=t(929);a.default=function(){var e=Object(h.n)().params.plantacaoId,a=Object(o.useState)(null),t=Object(c.a)(a,2),l=t[0],f=t[1],M=Object(o.useState)(null),x=Object(c.a)(M,2),k=x[0],Y=x[1],D=(null===k||void 0===k?void 0:k.map((function(e){return{date:e.date,value:e.sensorTempBanc.value}})))||[],T=(null===k||void 0===k?void 0:k.map((function(e){return{date:e.date,value:e.sensorTempSol.value}})))||[],w=(null===k||void 0===k?void 0:k.map((function(e){return{date:e.date,value:e.sensorPh.value}})))||[],S=(null===k||void 0===k?void 0:k.map((function(e){return{date:e.date,value:e.sensorEc.value}})))||[],j=function(e){return[e+" \xb0C","Valor"]},K=function(e){return y()(e).format("DD/MM/YYYY HH:mm")},O=function(e){return"Valor"};Object(o.useEffect)((function(){(function(){var a=Object(r.a)(n.a.mark((function a(){var t,l;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b.a.get("Plantacao/".concat(e));case 3:return t=a.sent,a.next=6,b.a.get("Plantacao/".concat(e,"/Graphics"));case 6:l=a.sent,f(t.data),Y(l.data),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.error("erro",a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(){return a.apply(this,arguments)}})()()}),[e]);var B=function(e){var a=e.x,t=e.y,l=e.payload,n=y()(l.value).format("DD/MM/YYYY HH:mm");return m.a.createElement("g",{transform:"translate(".concat(a,",").concat(t,")")},m.a.createElement("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-40)"},n))};return m.a.createElement(u.a,null,m.a.createElement(i.a,{xs:"12"},m.a.createElement(d.a,null,m.a.createElement(E.a,null,m.a.createElement("strong",null,"Planta\xe7\xe3o")),m.a.createElement(s.a,null,m.a.createElement(p.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"N\xfamero"),m.a.createElement("th",null,"Tipo de semeio"),m.a.createElement("th",null,"Data de Cria\xe7\xe3o"),m.a.createElement("th",null,"Data de T\xe9rmino"),m.a.createElement("th",null,"Bancada"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null,null===l||void 0===l?void 0:l.idPlantacao),m.a.createElement("td",null,null===l||void 0===l?void 0:l.semeio),m.a.createElement("td",null,y()(null===l||void 0===l?void 0:l.dataInicio).format("DD/MM/YYYY")),m.a.createElement("td",null,y()(null===l||void 0===l?void 0:l.dataFim).format("DD/MM/YYYY")),m.a.createElement("td",null,null===l||void 0===l?void 0:l.nomeBancada))))))),m.a.createElement(i.a,null,m.a.createElement(d.a,null,m.a.createElement(E.a,null,m.a.createElement("strong",null,"Sensores")),(null===k||void 0===k?void 0:k.length)>0?m.a.createElement(m.a.Fragment,null,m.a.createElement(s.a,null,m.a.createElement(u.a,null,m.a.createElement(i.a,{sm:"5"},m.a.createElement(v.a,null,m.a.createElement("h4",null,"Temperatura da bancada (\xb0C)")))),m.a.createElement("div",{className:"chart-wrapper",style:{height:"400px",marginTop:"40px"}},m.a.createElement(g.f,null,m.a.createElement(g.d,{data:D,margin:{top:20,right:50,left:20,bottom:5}},m.a.createElement(g.a,{strokeDasharray:"3 3"}),m.a.createElement(g.h,{dataKey:"date",tick:m.a.createElement(B,null),height:120,interval:0}),m.a.createElement(g.i,null),m.a.createElement(g.g,{formatter:j,labelFormatter:K}),m.a.createElement(g.b,{formatter:O}),m.a.createElement(g.e,{y:null===l||void 0===l?void 0:l.tempBancMax,label:"Max",stroke:"red"}),m.a.createElement(g.e,{y:null===l||void 0===l?void 0:l.tempBancMin,label:"Min",stroke:"red"}),m.a.createElement(g.c,{type:"monotone",dataKey:"value",stroke:"#8884d8"}))))),m.a.createElement("hr",null),m.a.createElement(s.a,null,m.a.createElement(u.a,null,m.a.createElement(i.a,{sm:"5"},m.a.createElement(v.a,null,m.a.createElement("h4",null,"Temperatura da solu\xe7\xe3o (\xb0C)")))),m.a.createElement("div",{className:"chart-wrapper",style:{height:"400px",marginTop:"40px"}},m.a.createElement(g.f,null,m.a.createElement(g.d,{data:T,margin:{top:20,right:50,left:20,bottom:5}},m.a.createElement(g.a,{strokeDasharray:"3 3"}),m.a.createElement(g.h,{dataKey:"date",tick:m.a.createElement(B,null),height:120,interval:0}),m.a.createElement(g.i,null),m.a.createElement(g.g,{formatter:j,labelFormatter:K}),m.a.createElement(g.b,{formatter:O}),m.a.createElement(g.e,{y:null===l||void 0===l?void 0:l.tempSolMax,label:"Max",stroke:"red"}),m.a.createElement(g.e,{y:null===l||void 0===l?void 0:l.tempSolMin,label:"Min",stroke:"red"}),m.a.createElement(g.c,{type:"monotone",dataKey:"value",stroke:"#8884d8"}))))),m.a.createElement("hr",null),m.a.createElement(s.a,null,m.a.createElement(u.a,null,m.a.createElement(i.a,{sm:"5"},m.a.createElement(v.a,null,m.a.createElement("h4",null,"Medi\xe7\xe3o de PH")))),m.a.createElement("div",{className:"chart-wrapper",style:{height:"400px",marginTop:"40px"}},m.a.createElement(g.f,null,m.a.createElement(g.d,{data:w,margin:{top:20,right:50,left:20,bottom:5}},m.a.createElement(g.a,{strokeDasharray:"3 3"}),m.a.createElement(g.h,{dataKey:"date",tick:m.a.createElement(B,null),height:120,interval:0}),m.a.createElement(g.i,null),m.a.createElement(g.g,{formatter:function(e){return[e,"Valor"]},labelFormatter:K}),m.a.createElement(g.b,{formatter:O}),m.a.createElement(g.e,{y:null===l||void 0===l?void 0:l.phMax,label:"Max",stroke:"red"}),m.a.createElement(g.e,{y:null===l||void 0===l?void 0:l.phMin,label:"Min",stroke:"red"}),m.a.createElement(g.c,{type:"monotone",dataKey:"value",stroke:"#8884d8"}))))),m.a.createElement("hr",null),m.a.createElement(s.a,null,m.a.createElement(u.a,null,m.a.createElement(i.a,{sm:"5"},m.a.createElement(v.a,null,m.a.createElement("h4",null,"Medi\xe7\xe3o de EC (mS/cm)")))),m.a.createElement("div",{className:"chart-wrapper",style:{height:"400px",marginTop:"40px"}},m.a.createElement(g.f,null,m.a.createElement(g.d,{data:S,margin:{top:20,right:50,left:20,bottom:5}},m.a.createElement(g.a,{strokeDasharray:"3 3"}),m.a.createElement(g.h,{dataKey:"date",tick:m.a.createElement(B,null),height:120,interval:0}),m.a.createElement(g.i,null),m.a.createElement(g.g,{formatter:function(e){return[e+" mS/cm","Valor"]},labelFormatter:K}),m.a.createElement(g.b,{formatter:O}),m.a.createElement(g.e,{y:null===l||void 0===l?void 0:l.ecMax,label:"Max",stroke:"red"}),m.a.createElement(g.e,{y:null===l||void 0===l?void 0:l.ecMin,label:"Min",stroke:"red"}),m.a.createElement(g.c,{type:"monotone",dataKey:"value",stroke:"#8884d8"})))))):m.a.createElement(s.a,null,"Ainda n\xe3o foram coletados dados."))))}}}]);
//# sourceMappingURL=27.02c750a8.chunk.js.map