import{a as P,S as v,i as m}from"./assets/vendor-f736e62a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const $="https://pixabay.com",q="/api/",E={key:"43828991-79d1a60f3e87126db3a63842a",imageType:"photo",orientation:"horizontal",safesearch:"true"},C=(r,s,t)=>{const o=new URLSearchParams(E);return o.append("q",r),o.append("page",s),o.append("per_page",t),o},f=async(r,s=1,t=15)=>{const o=`${$}${q}?${C(r,s,t)}`;try{return(await P.get(o)).data}catch(e){throw new Error(e.response?e.response.status:e.message)}},h=r=>{const s=r.map(t=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
            <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
            />
        </a>
        <div class="info">
                        <p class="info-item">
                            <b>Likes</b>
                            <span>${t.likes}</span> 
                        </p>
                        <p class="info-item">
                            <b>Views</b>
                            <span>${t.views}</span>
                        </p>
                        <p class="info-item">
                            <b>Comments</b>
                            <span>${t.comments}</span>
                        </p>
                        <p class="info-item">
                            <b>Downloads</b>
                            <span>${t.downloads}</span>
                        </p>
                    </div>
    </li>

`).join("");document.querySelector(".gallery").innerHTML=s};let c=1;const g=15;let l=[],y="",p=0,d;const M=document.querySelector(".search-form"),b=document.querySelector(".load-button"),R=document.querySelector(".loader");let w=new v(".gallery a");i("none");const A=async r=>{r.preventDefault(),a("block");const t=r.target.elements.searchInput.value;if(t.trim()===""){alert("please fill in the line"),a("none");return}try{c=1;const o=await f(t);a("none"),i("block"),o.totalHits===0&&(i("none"),S("Sorry, there are no images matching your search query. Please try again!")),h(o.hits),w.refresh(),y=t,p=o.totalHits,p<=g&&i("none"),l=o.hits;let e=document.querySelector(".gallery-item");d=e==null?void 0:e.getBoundingClientRect()}catch(o){a("none"),L(o.message)}},B=async r=>{r.preventDefault();try{c=c+1;const s=await f(y,c,g);a("none");const t=[...l,...s.hits];if(h(t),d||scrollBy(0,d.height*2),w.refresh(),l=t,l.length>=p){i("none"),S("We're sorry, but you've reached the end of search results.");return}}catch(s){a("none"),L(s.message)}};M.addEventListener("submit",A);b.addEventListener("click",B);function L(r){m.show({title:"Error",message:r,messageColor:"white",backgroundColor:"tomato"})}function S(r){m.show({title:"Message",message:r,messageColor:"white",backgroundColor:"teal"})}function a(r){R.style.display=r}function i(r){b.style.display=r}
//# sourceMappingURL=commonHelpers.js.map
