
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


function onSearch(event) {

  event.preventDefault();
  
  picsApiService.query = event.currentTarget.elements.searchQuery.value.trim();
  picsApiService.fetchPicsPixabay();


//   if (inputValue === "") {
//     clearAll();

//      Notiflix.Notify.warning('Please type something');

//     return;

//   } else {

//     fetchPicsPixabay(inputValue)
   
//       .then(data => {
//         console.log(data)
        
// if(data.hits.length === 0) {
//   throw new Error(response.statusText)
// }

// else {
//   clearAll();
        
//         createMarkup(data);

//          Notiflix.Notify.success('WOOOOOW! Wounderfull pictures!You have success!');
//         }
//       })
//       .catch(error => {

//         clearAll();

//         callError(error);

//         })
//   }

    
}

function onLoad() { 
  picsApiService.fetchPicsPixabay();
}



function callError (error) { 
Notiflix.Notify.failure("Ups! We dont have pics that you are looking for.");
}

function createMarkup(array) {

  let showingObj = array.hits;

  console.log(array.hits.length)
  

  
  const markup = showingObj.map(obj => `<div class="photo-card">
   <a>  href="${obj.largeImageURL}"
  <img src="${obj.webformatURL}" alt="${obj.tags}" loading="lazy" /> </a>
  <div class="info">
    <p class="info-item">
      <b>Likes: ${obj.likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${obj.views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${obj.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${obj.downloads}</b>
    </p>
  </div>
</div>`).join("");
    
    // {webformatURL,largeImageURL,tags,likes,views,comments,downloads}
refs.gallery.insertAdjacentHTML("beforeend", markup);
}


function clearAll() {
  refs.gallery.innerHTML = "";
}