
// Импорты других файлов и компонентов

import "./css/styles.css";
import PicsApiService from "./apiservice";

// Импорты библиотек и инициализация

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';
Notiflix.Notify.init({ cssAnimationStyle: "zoom", fontAwesomeIconStyle: "shadow" });
import axios from 'axios';

// Доступ к дом-елементам

const refs = {
    input: document.querySelector("input"),
    form: document.querySelector(".search-form"),
    buttonSearch: document.querySelector(".search-btn"),
    buttonLoadMore: document.querySelector(".load-more"),
    gallery:document.querySelector(".gallery")
    
}

// Слушатели событий

refs.form.addEventListener("submit", onSearch); 
refs.buttonLoadMore.addEventListener("click", onLoad);


refs.buttonLoadMore.style.display = 'none';
const picsApiService = new PicsApiService();




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

  }

  // Если инпут не пустой - сделай фетч
        
    picsApiService.fetchPicsPixabay()
    .then(({ hits, totalHits }) => {
        

      if (hits.length > 0) {
        Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
        createMarkup(hits);
        new SimpleLightbox('.gallery a');
        refs.buttonLoadMore.style.display = 'block';

        // if (infoResponseObj.hits < infoResponseObj.totalHits) {
        //   refs.buttonLoadMore.style.display = 'block';
        // } else {
        //   refs.buttonLoadMore.style.display = 'none';
        //   Notiflix.Notify.info(
        //     "We're sorry, but you've reached the end of search results."
        //   );
        // }
      } else {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        clearAll();
        refs.buttonLoadMore.style.display = 'none';
      }
    })
    .catch(error => console.log('ERROR: ' + error));
}


// Не обрабатывается ошибка 400

function onLoad() {


  picsApiService.fetchPicsPixabay().then(({ hits, totalHits }) => {

   

    if (hits.length === 0) {
      refs.buttonLoadMore.style.display = 'none';
      Notiflix.Notify.info(
        "We're sorry, but you've reached the end of search results."
      )
    }

 createMarkup(hits);
     new SimpleLightbox('.gallery a');

  }).catch(error => console.log('ERROR: ' + error));
}




function createMarkup(value) {

  const markup = value.map(hit =>  `<div class="general-photo-card-container">    
    
  
        <a class="gallery-img-link" href="${hit.largeImageURL}">
        
          <img
            class="gallery-image"
            src="${hit.webformatURL}"
            alt="${hit.tags}"
            loading="lazy"
        />
        
        </a>
        
        <div class="img-general-info-container">

          <p class="info-item">
          <p><b>Likes</b> <br>${hit.likes}</br></p>
        </p>
        <p class="info-item">
          <p><b>Views</b> <br>${hit.views}</br></p>
        </p>
        <p class="info-item">
          <p><b>Comments</b> <br>${hit.comments}</br></p>
        </p>
        <p class="info-item">
          <p><b>Downloads</b> <br>${hit.downloads}</br></p>
        </p>
        
        </div>
      </div>`).join("");
  
   
  refs.gallery.insertAdjacentHTML("beforeend", markup);
  
}


function clearAll() {
  refs.gallery.innerHTML = "";
}


