(()=>{var e,t={459:()=>{document.addEventListener("DOMContentLoaded",(function(){console.log("Ready..."),AOS.init();var e=document.querySelectorAll("[data-scroll-layer]");if(e){var t=document.querySelectorAll("[data-scroll-layer-trigger]"),a=new IntersectionObserver((function(t){t.forEach((function(t){if(t.isIntersecting){e.forEach((function(e){e.classList.add("invisible")}));var a=t.target.attributes["data-scroll-layer-trigger"].value;console.log(a);var r=document.querySelector('[data-scroll-layer="'.concat(a,'"]'));r&&r.classList.remove("invisible")}}))}),{});t.forEach((function(e){a.observe(e)}))}var r=document.querySelector("[data-slideshow]");if(r){var n=r.querySelectorAll("[data-slide]"),o=r.querySelectorAll("[data-slide-num]"),i=["bg-gray-150"],s=["border","border-gray-150"],l=!1,d=0;r.addEventListener("mouseover",(function(){l=!0})),r.addEventListener("mouseleave",(function(){l=!1})),o.forEach((function(e){e.addEventListener("click",(function(){n.forEach((function(e){e.classList.add("hidden")})),d=e.dataset.slideNum,n[d].classList.remove("hidden"),updateSlideNumMarkers()}))})),setInterval((function(){l||(n.forEach((function(e){e.classList.add("hidden")})),++d>=n.length&&(d=0),n[d].classList.remove("hidden"),updateSlideNumMarkers())}),1e4),updateSlideNumMarkers=function(){o.forEach((function(e){var t,a,r,n;((t=e.classList).remove.apply(t,i),(a=e.classList).add.apply(a,s),e.dataset.slideNum==d)&&((r=e.classList).remove.apply(r,s),(n=e.classList).add.apply(n,i))}))}}var c=document.querySelector("[data-form]");c.addEventListener("submit",(function(e){e.preventDefault();var t=c.parentElement,a=c.querySelector("[data-input-email]"),r=c.querySelector("[data-input-first-name]"),n=c.querySelector("[data-input-last-name]"),o=c.querySelector("[data-input-message]"),i=c.querySelector("[data-button-submit]"),s=document.createElement("p");s.classList.add("font-bold","p-4","border","border-green-500","text-green-500","rounded-sm"),s.innerHTML="Thank you!",i.disabled=!0,fetch("https://submit-form.com/1WwymTxU",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({firstName:r.value,lastName:n.value,email:a.value,message:o.value})}).then((function(e){200==e.status&&t.replaceChild(s,c)})).catch((function(e){i.disabled=!1}))}))}))},892:()=>{}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,a,n,o)=>{if(!a){var i=1/0;for(c=0;c<e.length;c++){for(var[a,n,o]=e[c],s=!0,l=0;l<a.length;l++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](a[l])))?a.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,n,o]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={487:0,72:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var n,o,[i,s,l]=a,d=0;if(i.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var c=l(r)}for(t&&t(a);d<i.length;d++)o=i[d],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},a=self.webpackChunktarango=self.webpackChunktarango||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),r.O(void 0,[72],(()=>r(459)));var n=r.O(void 0,[72],(()=>r(892)));n=r.O(n)})();