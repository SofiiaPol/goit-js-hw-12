import{a as L,S,i as p}from"./assets/vendor-f736e62a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const P="https://pixabay.com",v="/api/",$={key:"43828991-79d1a60f3e87126db3a63842a",imageType:"photo",orientation:"horizontal",safesearch:"true"},E=(o,s,t)=>{const r=new URLSearchParams($);return r.append("q",o),r.append("page",s),r.append("per_page",t),r},d=async(o,s=1,t=15)=>{const r=`${P}${v}?${E(o,s,t)}`;try{const e=await L.get(r);return console.log(e.data),e.data}catch(e){throw new Error(e.response?e.response.status:e.message)}},m=o=>{const s=o.map(t=>`
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

`).join("");document.querySelector(".gallery").innerHTML=s};let c=1;const q=15;let i=[],f="",h=0;const M=document.querySelector(".search-form"),g=document.querySelector(".load-button"),A=document.querySelector(".loader");let y=new S(".gallery a");u("none");const C=async o=>{o.preventDefault(),n("block");const t=o.target.elements.searchInput.value;if(t.trim()===""){alert("please fill in the line");return}try{c=1;const r=await d(t);n("none"),u("block"),r.totalHits===0&&w("Sorry, there are no images matching your search query. Please try again!"),m(r.hits),y.refresh(),f=t,h=r.totalHits,i=r.hits}catch(r){n("none"),b(r.message)}},I=async o=>{o.preventDefault();try{if(c=c+1,i.length>=h){u("none"),w("We're sorry, but you've reached the end of search results.");return}const s=await d(f,c,q);n("none");const t=[...i,...s.hits];m(t),y.refresh(),i=t}catch(s){n("none"),b(s.message)}};M.addEventListener("submit",C);g.addEventListener("click",I);function b(o){p.show({title:"Error",message:o,messageColor:"white",backgroundColor:"tomato"})}function w(o){p.show({title:"Message",message:o,messageColor:"white",backgroundColor:"teal"})}function n(o){A.style.display=o}function u(o){g.style.display=o}
//# sourceMappingURL=commonHelpers.js.map
