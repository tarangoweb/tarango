(()=>{var e,a={459:()=>{document.addEventListener("DOMContentLoaded",(function(){console.log("Ready..."),AOS.init();var e=document.querySelectorAll("[data-scroll-layer]");if(e){var a=document.querySelectorAll("[data-scroll-layer-trigger]"),t=new IntersectionObserver((function(a){a.forEach((function(a){if(a.isIntersecting){e.forEach((function(e){e.classList.add("invisible")}));var t=a.target.attributes["data-scroll-layer-trigger"].value;console.log(t);var r=document.querySelector('[data-scroll-layer="'.concat(t,'"]'));r&&r.classList.remove("invisible")}}))}),{});a.forEach((function(e){t.observe(e)}))}var r=document.querySelector("[data-slideshow]");if(r){var n=r.querySelectorAll("[data-slide]"),o=r.querySelectorAll("[data-slide-num]"),i=["bg-gray-150"],s=["border","border-gray-150"],l=!1,d=0;r.addEventListener("mouseover",(function(){l=!0})),r.addEventListener("mouseleave",(function(){l=!1})),o.forEach((function(e){e.addEventListener("click",(function(){n.forEach((function(e){e.classList.remove("animate-fade-in"),e.classList.add("animate-fade-out")})),d=e.dataset.slideNum,n[d].classList.remove("animate-fade-out"),n[d].classList.add("animate-fade-in"),updateSlideNumMarkers()}))})),setInterval((function(){l||(n.forEach((function(e){e.classList.remove("animate-fade-in"),e.classList.add("animate-fade-out")})),++d>=n.length&&(d=0),n[d].classList.remove("animate-fade-out"),n[d].classList.add("animate-fade-in"),updateSlideNumMarkers())}),1e4),updateSlideNumMarkers=function(){o.forEach((function(e){var a,t,r,n;((a=e.classList).remove.apply(a,i),(t=e.classList).add.apply(t,s),e.dataset.slideNum==d)&&((r=e.classList).remove.apply(r,s),(n=e.classList).add.apply(n,i))}))}}var c=document.querySelector("[data-form]");c.addEventListener("submit",(function(e){e.preventDefault();var a=c.parentElement,t=c.querySelector("[data-input-email]"),r=c.querySelector("[data-input-first-name]"),n=c.querySelector("[data-input-last-name]"),o=c.querySelector("[data-input-message]"),i=c.querySelector("[data-button-submit]"),s=document.createElement("p");s.classList.add("font-bold","p-4","border","border-green-500","text-green-500","rounded-sm"),s.innerHTML="Thank you!",i.disabled=!0,fetch("https://submit-form.com/1WwymTxU",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({firstName:r.value,lastName:n.value,email:t.value,message:o.value})}).then((function(e){200==e.status&&a.replaceChild(s,c)})).catch((function(e){i.disabled=!1}))}))}))},892:()=>{}},t={};function r(e){var n=t[e];if(void 0!==n)return n.exports;var o=t[e]={exports:{}};return a[e](o,o.exports,r),o.exports}r.m=a,e=[],r.O=(a,t,n,o)=>{if(!t){var i=1/0;for(c=0;c<e.length;c++){for(var[t,n,o]=e[c],s=!0,l=0;l<t.length;l++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](t[l])))?t.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(c--,1);var d=n();void 0!==d&&(a=d)}}return a}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[t,n,o]},r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={487:0,72:0};r.O.j=a=>0===e[a];var a=(a,t)=>{var n,o,[i,s,l]=t,d=0;if(i.some((a=>0!==e[a]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var c=l(r)}for(a&&a(t);d<i.length;d++)o=i[d],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},t=self.webpackChunktarango=self.webpackChunktarango||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})(),r.O(void 0,[72],(()=>r(459)));var n=r.O(void 0,[72],(()=>r(892)));n=r.O(n)})();