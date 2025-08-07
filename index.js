import{a as c}from"./assets/vendor-BkCUij8E.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const l=["all","sofa","wardrobe","bed","table","chairs","kitchen","children-room","office","entryway","bathroom","outdoor","decor"],f=document.querySelector(".categories-list"),d=document.querySelector(".furniture-list");async function p(){try{const t=(await c("https://furniture-store.b.goit.study/api/categories")).data;t.unshift({_id:"0",name:"Всі товари"}),g(t)}catch(s){console.log(s.message)}}function g(s){const t=s.map((n,o)=>{const e=l[o];return`
        <li
  class="category-card"
  style="
  background-image: -webkit-image-set(
    url('./src/images/our-furniture/${e}@1x.png') 1x,
    url('./src/images/our-furniture/${e}@2x.png') 2x
  );
  background-image: image-set(
    url('./src/images/our-furniture/${e}@1x.png') 1x,
    url('./src/images/our-furniture/${e}@2x.png') 2x
  );
"
>
  <p class="category-title">${n.name}</p>
</li>`}).join("");f.insertAdjacentHTML("beforeend",t)}async function m(){try{const t=(await c("https://furniture-store.b.goit.study/api/furnitures?limit=8")).data;y(t)}catch(s){console.log(s.message)}}function y(s){const n=s.furnitures.map(o=>{const{_id:e,name:r,description:i,price:a,images:u}=o;return`
    <li class="furniture-card" id="${e}"> 
  <img src="${u[0]}" alt="${i}" class="furniture-image" />
  <p class="furniture-name">${r}</p>
  <div class="color-wrap">
    <span class="grey-color"></span>
    <span class="beige-color"></span>
    <span class="black-color"></span>
  </div>
  <p class="furniture-price">${a} грн</p>
  <button class="details-btn" type="button">Детальніше</button>
</li>`}).join("");d.insertAdjacentHTML("beforeend",n)}p();m();
//# sourceMappingURL=index.js.map
