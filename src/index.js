import "./styles.css/gallery.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';
Notiflix.Notify.init({ cssAnimationStyle: "zoom", fontAwesomeIconStyle: "shadow" });
import PicsApiService from "./apiservice";


const refs = {
    input: document.querySelector("input"),
    form: document.querySelector(".search-form"),
    buttonSearch: document.querySelector(".search-btn"),
    buttonLoadMore: document.querySelector(".load-more"),
    gallery:document.querySelector(".gallery")
    
}


refs.form.addEventListener("submit", onSearch); 
refs.buttonLoadMore.addEventListener("click", onLoad);
refs.buttonLoadMore.style.display = 'none';


console.log(SimpleLightbox);


const picsApiService = new PicsApiService();

console.log(picsApiService);


function onSearch(event) {

  event.preventDefault();

  clearAll();
  
  picsApiService.query = event.currentTarget.elements.searchQuery.value.trim();

  picsApiService.resetPage();

  if (picsApiService.query === "") {
    clearAll();

    Notiflix.Notify.warning('Please,type something.');

    refs.buttonLoadMore.style.display = 'none';

    return;

  } else {
    picsApiService.fetchPicsPixabay()
      .then(hits => {

        console.log(hits)
              
        if (hits.length > 0) {
                  
          console.log(hits.length);
                   
          createMarkup(hits);
          
          Notiflix.Notify.success('Hooray! We found totalHits images.');

          refs.buttonLoadMore.style.display = 'block';
        } else {
          
          
          clearAll();

          callError();

          refs.buttonLoadMore.style.display = 'none';

        }
                
      })
      
  }

}

  

function onLoad() { 
  picsApiService.fetchPicsPixabay().then(createMarkup);
}



function callError (error) { 
Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
}



function createMarkup(array) {

  
  const markup = array.map(hit => `<div class="photo-card">
   <a href="${hit.largeImageURL}">  
  <img  class="gallery_img" src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy" /> </a>
  <div class="info">
    <p class="info-item">
      <b>Likes: ${hit.likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${hit.views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${hit.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${hit.downloads}</b>
    </p>
  </div>
</div>`).join("");
    
   
  refs.gallery.insertAdjacentHTML("beforeend", markup);

  const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});
  
}


function clearAll() {
  refs.gallery.innerHTML = "";
}


