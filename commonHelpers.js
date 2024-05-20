import{a as S,S as P,i as p}from"./assets/vendor-f736e62a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const v="https://pixabay.com",$="/api/",q={key:"43828991-79d1a60f3e87126db3a63842a",imageType:"photo",orientation:"horizontal",safesearch:"true"},E=(r,s,t)=>{const o=new URLSearchParams(q);return o.append("q",r),o.append("page",s),o.append("per_page",t),o},d=async(r,s=1,t=15)=>{const o=`${v}${$}?${E(r,s,t)}`;try{return(await S.get(o)).data}catch(e){throw new Error(e.response?e.response.status:e.message)}},m=r=>{const s=r.map(t=>`
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

`).join("");document.querySelector(".gallery").innerHTML=s};let l=1;const C=15;let c=[],f="",h=0,g;const M=document.querySelector(".search-form"),y=document.querySelector(".load-button"),R=document.querySelector(".loader");let b=new P(".gallery a");i("none");const A=async r=>{r.preventDefault(),a("block");const t=r.target.elements.searchInput.value;if(t.trim()===""){alert("please fill in the line");return}try{l=1;const o=await d(t);a("none"),i("block"),o.totalHits===0&&(i("none"),L("Sorry, there are no images matching your search query. Please try again!")),m(o.hits),b.refresh(),f=t,h=o.totalHits,c=o.hits,g=document.querySelector(".gallery-item").getBoundingClientRect()}catch(o){a("none"),w(o.message)}},B=async r=>{r.preventDefault();try{if(l=l+1,c.length>=h){i("none"),L("We're sorry, but you've reached the end of search results.");return}const s=await d(f,l,C);a("none");const t=[...c,...s.hits];m(t),scrollBy(0,g.height*2),b.refresh(),c=t}catch(s){a("none"),w(s.message)}};M.addEventListener("submit",A);y.addEventListener("click",B);function w(r){p.show({title:"Error",message:r,messageColor:"white",backgroundColor:"tomato"})}function L(r){p.show({title:"Message",message:r,messageColor:"white",backgroundColor:"teal"})}function a(r){R.style.display=r}function i(r){y.style.display=r}
//# sourceMappingURL=commonHelpers.js.map
