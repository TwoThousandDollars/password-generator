(()=>{"use strict";const e=()=>{let e=document.getElementById("content"),t=document.createElement("form");t.action="",t.method="get";let n=document.createElement("div");function l(){n.innerText=(()=>{let e=document.querySelectorAll('input[type="checkbox"]'),t=document.querySelector('input[type="range"]').value,n=[{type:"uppercase",values:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]},{type:"lowercase",values:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]},{type:"numbers",values:[0,1,2,3,4,5,6,7,8,9]},{type:"symbols",values:["!","#","$","%","^","&","*"]}],l=function(e){let t=[];for(let l=0;l<e.length;l++)if(!0===e[l].checked)for(let r=0;r<n.length;r++)e[l].name===n[r].type&&t.push(n[r].values);return t}(e),r="";function o(e){return e[Math.floor(Math.random()*e.length)]}return r=l.length<1?"Please select at least one password constraint.":function(e,t){let n="";e.forEach((e=>{n=n.concat(o(e))}));let l=t-e.length,r=function(e){let t=[];for(let n=0;n<e.length;n++)for(let l=0;l<e[n].length;l++)t.push(e[n][l]);return t}(e);for(let e=0;e<l;e++)n=n.concat(o(r));return n}(l,t),r})()}function r(e){let t=document.createElement("input");return t.type="checkbox",t.name=e,t.id=e,t.checked=!0,t.oninput=()=>{l()},t}function o(e){let t=document.createElement("label");return t.innerText=e,t.htmlFor=e,t}n.id="passwordDisplay",n.classList.add("password-display"),function(e,t){for(let n=0;n<e.length;n++)t.appendChild(e[n]);let n=function(){let e=document.createElement("div");e.classList.add("form-group--number");let t=document.createElement("div"),n=document.createElement("p");n.innerText="Password Length",n.classList.add("form-label--number");let r=document.createElement("p");t.appendChild(n),t.appendChild(r);let o=document.createElement("input");return o.type="range",o.min=8,o.max=100,o.value=16,o.oninput=()=>{r.innerText=o.value,l()},r.innerText=o.value,e.appendChild(t),e.appendChild(o),e}();t.appendChild(n)}(function(){let e=[];for(let t=0;t<arguments.length;t++){let n=document.createElement("div");n.classList="form-group";let l=o(arguments[t]),a=r(arguments[t]);n.appendChild(a),n.appendChild(l),e.push(n)}return e}("uppercase","lowercase","numbers","symbols"),t),e.appendChild(t),e.appendChild(n),l()};window.onload=()=>{e()}})();