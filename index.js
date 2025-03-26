import{S as c,i as d,a as p}from"./assets/vendor-CZCqCKWq.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const u=r=>{if(document.querySelector(".loader").style.display="none",parseInt(r.data.totalHits)>0){const a=r.data.hits.map(t=>`<li class="gallery-item"><a href="${t.largeImageURL}" class="gallery-img"><img src="${t.webformatURL}" alt="${t.tags}"></a>
            <div class="legend">
  <div class="field">
    <span class="label">Likes</span>
    <span class="value">${t.likes}</span>
  </div>
  <div class="field">
    <span class="label">Views</span>
    <span class="value">${t.views}</span>
  </div>
  <div class="field">
    <span class="label">Comments</span>
    <span class="value">${t.comments}</span>
  </div>
  <div class="field">
    <span class="label">Downloads</span>
    <span class="value">${t.downloads}</span>
  </div>
</div></li>`).join("");document.querySelector(".gallery").innerHTML=a;let o=new c(".gallery-item a",{captionsData:"alt",captionDelay:250});o.on("show.simplelightbox",function(){}),o.refresh()}else d.show({title:"Error",titleColor:"#FFFFFF",titleSize:"16px",titleLineHeight:"1.5",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FFFFFF",messageSize:"16px",messageLineHeight:"1.5",close:!0,progressBar:!0,progressBarColor:"#B51B1B",position:"topRight"}),document.querySelector(".gallery").innerHTML=""},m="49502149-61d0264429aca11602d0077d5",f=r=>{p.get(`https://pixabay.com/api/?key=${m}&q=${encodeURIComponent(r)}&image_type=photo`).then(a=>{u(a)}).catch(a=>{console.log(a)})};let n="";const i=document.querySelector(".form");i.addEventListener("submit",r=>{r.preventDefault(),n=i.elements.searchText.value,document.querySelector(".loader").style.display="flex",i.reset(),f(n)});
//# sourceMappingURL=index.js.map
