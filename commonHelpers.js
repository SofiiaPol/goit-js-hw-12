import{a as l,S as p,i as c}from"./assets/vendor-f736e62a.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const u="https://pixabay.com",m="/api/",d={key:"43828991-79d1a60f3e87126db3a63842a",imageType:"photo",orientation:"horizontal",safesearch:"true"},f=(r,a,t)=>{const s=new URLSearchParams(d);return s.append("q",r),s.append("page",a),s.append("per_page",t),s},g=async(r,a=1,t=15)=>{const s=`${u}${m}?${f(r,a,t)}`;try{const e=await l.get(s);return console.log(e.data),e.data}catch(e){throw new Error(e.response?e.response.status:e.message)}},h=r=>{const a=r.map(t=>`
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

`).join("");document.querySelector(".gallery").innerHTML=a},y=document.querySelector(".search-form"),b=document.querySelector(".loader");let w=new p(".gallery a");const L=async r=>{r.preventDefault(),i("block");const t=r.target.elements.searchInput.value;if(t.trim()===""){alert("please fill in the line");return}try{const s=await g(t);i("none"),s.totalHits===0&&$("Sorry, there are no images matching your search query. Please try again!"),h(s.hits),w.refresh()}catch(s){i("none"),S(s.message)}};y.addEventListener("submit",L);function S(r){c.show({title:"Error",message:r,messageColor:"white",backgroundColor:"tomato"})}function $(r){c.show({title:"Message",message:r,messageColor:"white",backgroundColor:"teal"})}function i(r){b.style.display=r}
//# sourceMappingURL=commonHelpers.js.map
