(self.webpackChunkadditive_finder=self.webpackChunkadditive_finder||[]).push([[1296],{1296:(e,t,i)=>{"use strict";i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>s,copyVisualViewport:()=>D,keyboardDidClose:()=>c,keyboardDidOpen:()=>g,keyboardDidResize:()=>w,resetKeyboardAssist:()=>n,setKeyboardClose:()=>f,setKeyboardOpen:()=>b,startKeyboardAssist:()=>h,trackViewportChanges:()=>u});const s="ionKeyboardDidShow",o="ionKeyboardDidHide";let d={},a={},r=!1;const n=()=>{d={},a={},r=!1},h=e=>{p(e),e.visualViewport&&(a=D(e.visualViewport),e.visualViewport.onresize=()=>{u(e),g()||w(e)?b(e):c(e)&&f(e)})},p=e=>{e.addEventListener("keyboardDidShow",t=>b(e,t)),e.addEventListener("keyboardDidHide",()=>f(e))},b=(e,t)=>{l(e,t),r=!0},f=e=>{y(e),r=!1},g=()=>!r&&d.width===a.width&&(d.height-a.height)*a.scale>150,w=e=>r&&!c(e),c=e=>r&&a.height===e.innerHeight,l=(e,t)=>{const i=new CustomEvent(s,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-a.height}});e.dispatchEvent(i)},y=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},u=e=>{d=Object.assign({},a),a=D(e.visualViewport)},D=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);