(self.webpackChunkadditive_finder=self.webpackChunkadditive_finder||[]).push([[592],{592:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ion_select:()=>c,ion_select_option:()=>x,ion_select_popover:()=>w});var n=i(6304),o=i(3150),s=i(7585),a=i(2377),r=i(7053),l=i(1269);const d=(e,t)=>{if(1===e.nodeType)return(e.tagName===t.toUpperCase()?[e]:Array.from(e.querySelectorAll(t))).find(t=>t.value===e.value)},c=class{constructor(e){(0,o.r)(this,e),this.ionChange=(0,o.e)(this,"ionChange",7),this.ionCancel=(0,o.e)(this,"ionCancel",7),this.ionFocus=(0,o.e)(this,"ionFocus",7),this.ionBlur=(0,o.e)(this,"ionBlur",7),this.ionStyle=(0,o.e)(this,"ionStyle",7),this.inputId="ion-sel-"+v++,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=e=>{this.setFocus(),this.open(e)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}disabledChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.didInit&&this.ionChange.emit({value:this.value})}connectedCallback(){var e=this;return(0,n.Z)(function*(){e.updateOverlayOptions(),e.emitStyle(),e.mutationO=((e,t,i)=>{if("undefined"==typeof MutationObserver)return;const n=new MutationObserver(e=>{i(((e,t)=>{let i;return e.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)i=d(e.addedNodes[t],"ion-select-option")||i}),i})(e))});return n.observe(e,{childList:!0,subtree:!0}),n})(e.el,0,(0,n.Z)(function*(){e.updateOverlayOptions()}))})()}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}componentDidLoad(){this.didInit=!0}open(e){var t=this;return(0,n.Z)(function*(){if(t.disabled||t.isExpanded)return;const i=t.overlay=yield t.createOverlay(e);return t.isExpanded=!0,i.onDidDismiss().then(()=>{t.overlay=void 0,t.isExpanded=!1,t.setFocus()}),yield i.present(),i})()}createOverlay(e){let t=this.interface;return"action-sheet"!==t&&"popover"!==t||!this.multiple||(console.warn(`Select interface cannot be "${t}" with a multi-value select. Using the "alert" interface instead.`),t="alert"),"popover"!==t||e||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),t="alert"),"popover"===t?this.openPopover(e):"action-sheet"===t?this.openActionSheet():this.openAlert()}updateOverlayOptions(){const e=this.overlay;if(!e)return;const t=this.childOpts,i=this.value;switch(this.interface){case"action-sheet":e.buttons=this.createActionSheetButtons(t,i);break;case"popover":const n=e.querySelector("ion-select-popover");n&&(n.options=this.createPopoverOptions(t,i));break;case"alert":e.inputs=this.createAlertInputs(t,this.multiple?"checkbox":"radio",i)}}createActionSheetButtons(e,t){const i=e.map(e=>{const i=h(e),n=Array.from(e.classList).filter(e=>"hydrated"!==e).join(" "),o=`${f} ${n}`;return{role:p(i,t,this.compareWith)?"selected":"",text:e.textContent,cssClass:o,handler:()=>{this.value=i}}});return i.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}}),i}createAlertInputs(e,t,i){return e.map(e=>{const n=h(e),o=Array.from(e.classList).filter(e=>"hydrated"!==e).join(" ");return{type:t,cssClass:`${f} ${o}`,label:e.textContent||"",value:n,checked:p(n,i,this.compareWith),disabled:e.disabled}})}createPopoverOptions(e,t){return e.map(e=>{const i=h(e),n=Array.from(e.classList).filter(e=>"hydrated"!==e).join(" ");return{text:e.textContent||"",cssClass:`${f} ${n}`,value:i,checked:p(i,t,this.compareWith),disabled:e.disabled,handler:()=>{this.value=i,this.close()}}})}openPopover(e){var t=this;return(0,n.Z)(function*(){const i=t.interfaceOptions,n=(0,s.b)(t),o=t.value,a=Object.assign(Object.assign({mode:n},i),{component:"ion-select-popover",cssClass:["select-popover",i.cssClass],event:e,componentProps:{header:i.header,subHeader:i.subHeader,message:i.message,value:o,options:t.createPopoverOptions(t.childOpts,o)}});return r.c.create(a)})()}openActionSheet(){var e=this;return(0,n.Z)(function*(){const t=(0,s.b)(e),i=e.interfaceOptions,n=Object.assign(Object.assign({mode:t},i),{buttons:e.createActionSheetButtons(e.childOpts,e.value),cssClass:["select-action-sheet",i.cssClass]});return r.b.create(n)})()}openAlert(){var e=this;return(0,n.Z)(function*(){const t=e.getLabel(),i=t?t.textContent:null,n=e.interfaceOptions,o=e.multiple?"checkbox":"radio",a=(0,s.b)(e),l=Object.assign(Object.assign({mode:a},n),{header:n.header?n.header:i,inputs:e.createAlertInputs(e.childOpts,o,e.value),buttons:[{text:e.cancelText,role:"cancel",handler:()=>{e.ionCancel.emit()}},{text:e.okText,handler:t=>{e.value=t}}],cssClass:["select-alert",n.cssClass,e.multiple?"multiple-select-alert":"single-select-alert"]});return r.a.create(l)})()}close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}getLabel(){return(0,a.h)(this.el)}hasValue(){return""!==this.getText()}get childOpts(){return Array.from(this.el.querySelectorAll("ion-select-option"))}getText(){const e=this.selectedText;return null!=e&&""!==e?e:b(this.childOpts,this.value,this.compareWith)}setFocus(){this.focusEl&&this.focusEl.focus()}emitStyle(){this.ionStyle.emit({interactive:!0,select:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})}render(){const{disabled:e,el:t,inputId:i,isExpanded:n,name:r,placeholder:d,value:c}=this,p=(0,s.b)(this),{labelText:h,labelId:g}=(0,a.d)(t,i);(0,a.e)(!0,t,r,u(c),e);let b=!1,m=this.getText();""===m&&null!=d&&(m=d,b=!0);const v={"select-text":!0,"select-placeholder":b},f=b?"placeholder":"text",x=void 0!==h?""!==m?`${m}, ${h}`:h:m;return(0,o.h)(o.H,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":e?"true":null,"aria-label":x,class:{[p]:!0,"in-item":(0,l.h)("ion-item",t),"select-disabled":e,"select-expanded":n}},(0,o.h)("div",{"aria-hidden":"true",class:v,part:f},m),(0,o.h)("div",{class:"select-icon",role:"presentation",part:"icon"},(0,o.h)("div",{class:"select-icon-inner"})),(0,o.h)("label",{id:g},x),(0,o.h)("button",{type:"button",disabled:e,id:i,"aria-labelledby":g,"aria-haspopup":"listbox","aria-expanded":`${n}`,onFocus:this.onFocus,onBlur:this.onBlur,ref:e=>this.focusEl=e}))}get el(){return(0,o.i)(this)}static get watchers(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],value:["valueChanged"]}}},p=(e,t,i)=>void 0!==e&&(Array.isArray(e)?e.some(e=>g(e,t,i)):g(e,t,i)),h=e=>{const t=e.value;return void 0===t?e.textContent||"":t},u=e=>{if(null!=e)return Array.isArray(e)?e.join(","):e.toString()},g=(e,t,i)=>"function"==typeof i?i(e,t):"string"==typeof i?e[i]===t[i]:Array.isArray(t)?t.includes(e):e===t,b=(e,t,i)=>void 0===t?"":Array.isArray(t)?t.map(t=>m(e,t,i)).filter(e=>null!==e).join(", "):m(e,t,i)||"",m=(e,t,i)=>{const n=e.find(e=>g(h(e),t,i));return n?n.textContent:null};let v=0;const f="select-interface-option";c.style={ios:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px}",md:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px}:host-context(.item-label-floating) .select-icon{-webkit-transform:translate3d(0,  -9px,  0);transform:translate3d(0,  -9px,  0)}"};const x=class{constructor(e){(0,o.r)(this,e),this.inputId="ion-selopt-"+y++,this.disabled=!1}render(){return(0,o.h)(o.H,{role:"option",id:this.inputId,class:(0,s.b)(this)})}get el(){return(0,o.i)(this)}};let y=0;x.style=":host{display:none}";const w=class{constructor(e){(0,o.r)(this,e),this.options=[]}onSelect(e){const t=this.options.find(t=>t.value===e.target.value);t&&(0,r.s)(t.handler)}render(){const e=this.options.find(e=>e.checked),t=e?e.value:void 0;return(0,o.h)(o.H,{class:(0,s.b)(this)},(0,o.h)("ion-list",null,void 0!==this.header&&(0,o.h)("ion-list-header",null,this.header),(void 0!==this.subHeader||void 0!==this.message)&&(0,o.h)("ion-item",null,(0,o.h)("ion-label",{class:"ion-text-wrap"},void 0!==this.subHeader&&(0,o.h)("h3",null,this.subHeader),void 0!==this.message&&(0,o.h)("p",null,this.message))),(0,o.h)("ion-radio-group",{value:t},this.options.map(e=>(0,o.h)("ion-item",{class:(0,l.g)(e.cssClass)},(0,o.h)("ion-label",null,e.text),(0,o.h)("ion-radio",{value:e.value,disabled:e.disabled}))))))}};w.style=".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-list-header.sc-ion-select-popover,.sc-ion-select-popover-h ion-label.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"}}]);