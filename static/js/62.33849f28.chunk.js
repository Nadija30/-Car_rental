"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[62],{7062:function(e,r,s){s.r(r),s.d(r,{default:function(){return g}});var a=s(9439),t=s(1981),l=s(3708),n=s(3833),c=s(9856),i=s(8554),o=s(184),d=function(e){var r=e.adverts,s=(0,n.BR)(l.G),d=(0,a.Z)(s,3),m=d[0],u=d[1],p=d[2],f=m*u;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("ul",{className:"cards-list",children:(0,c.ZC)(r,f).map((function(e){return(0,o.jsx)(i.Z,{car:e},e.id)}))}),(null===r||void 0===r?void 0:r.length)>=f&&(0,o.jsx)(t.Z,{className:"button-load",label:"Load more",onClick:p})]})},m=s(1413),u=s(4420),p=s(1134),f=s(2791),x=s(7689),h=s(223),b=s(7519),j=function(e){var r=e.cars,s=(0,u.v9)(b.AD),a=(0,u.I0)(),l="/favorites"===(0,x.TH)().pathname&&0===(null===r||void 0===r?void 0:r.length),i=(0,c.U7)(r),d=(0,n.W9)(r,"make"),j=(0,p.cI)({mode:"onChange",shouldDisable:l}),v=j.register,g=j.handleSubmit,N=j.control,y=j.reset,w=j.formState.errors;(0,f.useEffect)((function(){y(s)}),[s,y]);return(0,o.jsx)("form",{onSubmit:g((function(e){a((0,h.Tv)(e))})),className:"form flex-wrap px-3 ".concat(l?"pointer-events-none opacity-60":""),disabled:l,children:(0,o.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[(0,o.jsxs)("div",{className:"form mb-2 flex-wrap items-center gap-3",children:[(0,o.jsxs)("div",{className:"select-wrapper mb-2",children:[(0,o.jsx)("label",{htmlFor:"brand",className:"select-label",children:"Car brand"}),(0,o.jsx)(p.Qr,{name:"brand",control:N,rules:{required:!0,message:"Brand is required"},render:function(e){var r=e.field;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("select",(0,m.Z)((0,m.Z)({},r),{},{className:"select-brand",children:[(0,o.jsx)("option",{value:"",className:"select-placeholder",children:"Enter the text"}),d&&d.map((function(e,r){return(0,o.jsx)("option",{value:e,className:"select-text",children:e},r)}))]})),w.brand&&(0,o.jsx)("p",{className:"error ".concat(l?"opacity-0":"opacity-100"),children:"required"===w.brand.type?"Brand is required":w.brand.message})]})}})]}),(0,o.jsxs)("div",{className:"select-wrapper mb-2",children:[(0,o.jsx)("label",{htmlFor:"price",className:"select-label",children:"Price/ 1 hour"}),(0,o.jsx)("div",{children:(0,o.jsx)(p.Qr,{name:"price",control:N,rules:{required:!0,min:{value:0,message:"Must be 0 or greater"}},render:function(e){var r=e.field;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("select",(0,m.Z)((0,m.Z)({},r),{},{className:"select-price",children:[(0,o.jsx)("option",{value:"",className:"select-placeholder",children:"To $"}),i&&i.map((function(e,r){return(0,o.jsx)("option",{value:e,className:"select-text",children:e},r)}))]})),w.price&&(0,o.jsx)("p",{className:"error ".concat(l?"opacity-0":"opacity-100"),children:"required"===w.price.type?"Price is required":w.price.message})]})}})})]}),(0,o.jsxs)("div",{className:"mb-2 flex flex-col",children:[(0,o.jsx)("label",{htmlFor:"minMileage",className:"select-label",children:"Car mileage / km (from)"}),(0,o.jsxs)("div",{className:"relative flex after:absolute after:inset-y-0 after:right-1/2 after:h-[48px] after:w-[1px] after:bg-[rgba(138,138,137,0.2)] after:content-['']",children:[(0,o.jsxs)("label",{className:"relative",children:[(0,o.jsx)("input",(0,m.Z)({type:"number",className:"select-from relative m-auto select-text"},v("from",{required:"This field is required",min:{value:0,message:"Must be 0 or greater"}}))),(0,o.jsx)("span",{className:"select-placeholder absolute left-3 top-1/2 -translate-y-1/2",children:"From"})]}),(0,o.jsxs)("label",{className:"relative",children:[(0,o.jsx)("input",(0,m.Z)({type:"number",className:"select-to select-text"},v("to",{required:"This field is required",min:{value:0,message:"Must be 0 or greater"},validate:function(e,r){var s=r.from;return parseInt(e)>parseInt(s)||"To must be greater than From"}}))),(0,o.jsx)("span",{className:"select-placeholder absolute left-3 top-1/2 -translate-y-1/2",children:"To"})]}),(0,o.jsxs)("p",{className:"error flex items-center justify-between gap-1 ".concat(l?"opacity-0":"opacity-100"),children:[(null===w||void 0===w?void 0:w.from)&&(0,o.jsx)("span",{children:w.from.message}),(null===w||void 0===w?void 0:w.to)&&(0,o.jsx)("span",{children:w.to.message})]})]})]})]}),(0,o.jsxs)("div",{className:"-mt-6 mb-2 flex flex-wrap items-center justify-center gap-3",children:[(0,o.jsx)(t.Z,{type:"submit",className:"button-search",label:"Search"}),(0,o.jsx)(t.Z,{type:"button",className:"button-search",onClick:function(){a((0,h.sx)()),y({brand:"",price:"",from:"",to:""})},label:"Reset"})]})]})})},v=s(9592),g=function(){var e=(0,u.I0)(),r=(0,u.v9)(b.Wz),s=(0,u.v9)(b.AD),a=(0,c.ff)(r,s);return(0,f.useEffect)((function(){e((0,v.x)())}),[e]),(0,f.useEffect)((function(){e((0,h.Tv)(null))}),[e]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("section",{children:(0,o.jsxs)("div",{children:[(0,o.jsx)(j,{cars:a}),(null===r||void 0===r?void 0:r.length)>0&&(0,o.jsx)(d,{adverts:a})]})})})}}}]);
//# sourceMappingURL=62.33849f28.chunk.js.map