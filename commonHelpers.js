import{a as l,S as u,i as c}from"./assets/vendor-f736e62a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const m="https://pixabay.com",p="/api/",f={key:"43828991-79d1a60f3e87126db3a63842a",imageType:"photo",orientation:"horizontal",safesearch:"true"},d=t=>{const r=new URLSearchParams(f);return r.append("q",t),r},h=async t=>{const r=`${m}${p}?${d(t)}`;try{return(await l.get(r)).data}catch(e){throw new Error(e.response?e.response.status:e.message)}},g=t=>{const r=t.map(e=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
            <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
            />
        </a>
        <div class="info">
                        <p class="info-item">
                            <b>Likes</b>
                            <span>${e.likes}</span> 
                        </p>
                        <p class="info-item">
                            <b>Views</b>
                            <span>${e.views}</span>
                        </p>
                        <p class="info-item">
                            <b>Comments</b>
                            <span>${e.comments}</span>
                        </p>
                        <p class="info-item">
                            <b>Downloads</b>
                            <span>${e.downloads}</span>
                        </p>
                    </div>
    </li>

`).join("");document.querySelector(".gallery").innerHTML=r},y=document.querySelector(".search-form"),b=document.querySelector(".loader");let w=new u(".gallery a");const L=async t=>{t.preventDefault(),i("block");const e=t.target.elements.searchInput.value;if(e.trim()===""){alert("please fill in the line");return}try{const a=await h(e);i("none"),a.totalHits===0&&$("Sorry, there are no images matching your search query. Please try again!"),g(a.hits),w.refresh()}catch(a){i("none"),S(a.message)}};y.addEventListener("submit",L);function S(t){c.show({title:"Error",message:t,messageColor:"white",backgroundColor:"tomato"})}function $(t){c.show({title:"Message",message:t,messageColor:"white",backgroundColor:"teal"})}function i(t){b.style.display=t}
//# sourceMappingURL=commonHelpers.js.map
