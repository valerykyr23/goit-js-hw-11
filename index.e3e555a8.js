!function(){var n={input:document.querySelector("input"),form:document.querySelector(".search-form"),buttonSearch:document.querySelector(".search-btn"),buttonLoadMore:document.querySelector(".load-more"),gallery:document.querySelector(".gallery")};n.form.addEventListener("submit",(function(e){e.preventDefault();var o=e.currentTarget.elements.searchQuery.value;console.log(o);var t="".concat("https://pixabay.com/api","/?key=").concat("32855803-d56bfd48c48aac08c2ef5d962","&q=").concat(o,'&image_type="photo"&orientation="horizontal"&safesearch=true');return fetch(t).then((function(n){return n.json()})).then((function(e){console.log(e),function(e){console.log(e.hits);var o=e.map((function(n){return'<div class="photo-card">\n  <img src="'.concat(n.webformatURL,'" alt="').concat(n.tags,'" loading="lazy" />\n  <div class="info">\n    <p class="info-item">\n      <b>Likes: ').concat(n.likes,'</b>\n    </p>\n    <p class="info-item">\n      <b>Views: ').concat(n.views,'</b>\n    </p>\n    <p class="info-item">\n      <b>Comments: ').concat(n.comments,'</b>\n    </p>\n    <p class="info-item">\n      <b>Downloads: ').concat(n.downloads,"</b>\n    </p>\n  </div>\n</div>")})).join("");n.gallery.insertAdjacentHTML("beforeend",o)}(e)})).catch((function(n){return console.log(n)}))})),n.buttonLoadMore.addEventListener("click",(function(){}))}();
//# sourceMappingURL=index.e3e555a8.js.map
