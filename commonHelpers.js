import{a as v,S as P,i as f}from"./assets/vendor-f736e62a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const $="https://pixabay.com",q="/api/",E={key:"43828991-79d1a60f3e87126db3a63842a",imageType:"photo",orientation:"horizontal",safesearch:"true"},C=(r,s,t)=>{const o=new URLSearchParams(E);return o.append("q",r),o.append("page",s),o.append("per_page",t),o},h=async(r,s=1,t=15)=>{const o=`${$}${q}?${C(r,s,t)}`;try{return(await v.get(o)).data}catch(e){throw new Error(e.response?e.response.status:e.message)}},y=r=>{const s=r.map(t=>`
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

`).join("");document.querySelector(".gallery").innerHTML=s};let i=1;const g=15;let l=[],b="",d=0,p;const M=document.querySelector(".search-form"),w=document.querySelector(".load-button"),R=document.querySelector(".loader");let L=new P(".gallery a");c("none");const A=async r=>{r.preventDefault(),a("block");const t=r.target.elements.searchInput.value;if(t.trim()===""){alert("please fill in the line"),a("none");return}try{i=1;const o=await h(t);a("none"),c("block"),o.totalHits===0&&(c("none"),m("Sorry, there are no images matching your search query. Please try again!")),y(o.hits),L.refresh(),b=t,d=o.totalHits,d<=g&&(c("none"),m("We're sorry, but you've reached the end of search results.")),l=o.hits;let e=document.querySelector(".gallery-item");p=e==null?void 0:e.getBoundingClientRect()}catch(o){a("none"),S(o.message)}},B=async r=>{r.preventDefault();try{i=i+1;const s=await h(b,i,g);a("none");const t=[...l,...s.hits];if(y(t),p||scrollBy(0,p.height*2),L.refresh(),l=t,l.length>=d){c("none"),m("We're sorry, but you've reached the end of search results.");return}}catch(s){a("none"),S(s.message)}};M.addEventListener("submit",A);w.addEventListener("click",B);function S(r){f.show({title:"Error",message:r,messageColor:"white",backgroundColor:"tomato"})}function m(r){f.show({title:"Message",message:r,messageColor:"white",backgroundColor:"teal"})}function a(r){R.style.display=r}function c(r){w.style.display=r}
//# sourceMappingURL=commonHelpers.js.map
