import{S as c,i as l}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const u="https://pixabay.com",m="/api/",f={key:"43828991-79d1a60f3e87126db3a63842a",imageType:"photo",orientation:"horizontal",safesearch:"true"},p=t=>{const s=new URLSearchParams(f);return s.append("q",t),s},d=t=>{const s=`${u}${m}?${p(t)}`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},h=t=>{const s=t.map(e=>`
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

`).join("");document.querySelector(".gallery").innerHTML=s},g=document.querySelector(".search-form"),y=document.querySelector(".loader");let b=new c(".gallery a");const w=t=>{t.preventDefault(),i("block");const e=t.target.elements.searchInput.value;if(e.trim()===""){alert("please fill in the line");return}d(e).then(n=>{i("none"),n.totalHits===0&&S("Sorry, there are no images matching your search query. Please try again!"),h(n.hits),b.refresh()}).catch(n=>{i("none"),L(n.message)})};g.addEventListener("submit",w);function L(t){l.show({title:"Error",message:t,messageColor:"white",backgroundColor:"tomato"})}function S(t){l.show({title:"Message",message:t,messageColor:"white",backgroundColor:"teal"})}function i(t){y.style.display=t}
//# sourceMappingURL=commonHelpers.js.map
