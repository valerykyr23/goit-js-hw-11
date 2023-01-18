
import Notiflix from 'notiflix';
Notiflix.Notify.init({ cssAnimationStyle: "zoom", fontAwesomeIconStyle: "shadow" });


const refs = {
    input: document.querySelector("input"),
    form: document.querySelector(".search-form"),
    buttonSearch: document.querySelector(".search-btn"),
    buttonLoadMore: document.querySelector(".load-more"),
    gallery: document.querySelector(".gallery"),

}
 
refs.form.addEventListener("submit", onSearch); 
refs.buttonLoadMore.addEventListener("click", onLoad);



import { fetchPicsPixabay } from "./fetchPixabay";

import PicsApiService from "./apiservice";


const picsApiService = new PicsApiService();

console.log(picsApiService);


// function onSearch(event) {

//   event.preventDefault();

//   clearAll();
  
//   picsApiService.query = event.currentTarget.elements.searchQuery.value.trim();
//   picsApiService.resetPage();
//   picsApiService.fetchPicsPixabay().then(hits => {
//     if (hits.length > 0) {
//       console.log(hits.length);
//       createMarkup(hits);
//       Notiflix.Notify.success('Hooray! We found totalHits images.')
//       } else {
//         Notiflix.Notify.failure(
//             'Sorry, there are no images matching your search query. Please try again.')
//       }
//     }) 
// }


function onSearch(event) {

  event.preventDefault();

  clearAll();
  
  picsApiService.query = event.currentTarget.elements.searchQuery.value.trim();

  picsApiService.resetPage();

  if (picsApiService.query === "") {
    clearAll();

    Notiflix.Notify.warning('Type something.')

    return;

  } else {
    picsApiService.fetchPicsPixabay()
      .then(hits => {

        console.log(hits)
              
        if (hits.length > 0) {
                  
          console.log(hits.length);
                   
          createMarkup(hits);
                      
          Notiflix.Notify.success('Hooray! We found totalHits images.')
        } else {
          
          
          clearAll();

        callError()}
                
      })
      
  }

}

  

function onLoad() { 
  picsApiService.fetchPicsPixabay().then(createMarkup);
}



function callError (error) { 
Notiflix.Notify.failure("Ups! We dont have pics that you are looking for.");
}





function createMarkup(array) {

  
  const markup = array.map(hit => `<div class="photo-card">
   <a>  href="${hit.largeImageURL}"
  <img src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy" /> </a>
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
  
}


function clearAll() {
  refs.gallery.innerHTML = "";
}



 // {webformatURL,largeImageURL,tags,likes,views,comments,downloads}