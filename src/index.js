// Импорты других файлов и компонентов

import "./css/styles.css";
import PicsApiService from "./apiservice";

// Импорты библиотек и инициализация

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';
Notiflix.Notify.init({ cssAnimationStyle: "zoom", fontAwesomeIconStyle: "shadow" });

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

   onSpinnerEnabled();
  setTimeout(() => {
    onSpinnerDisabled();
  }, 2000);
  
  picsApiService.query = event.currentTarget.elements.searchQuery.value.trim();
  picsApiService.resetPage();

  if (picsApiService.query === "") {
    Notiflix.Notify.warning('Please, type something.');
    return;
  }

  refs.buttonLoadMore.style.display = 'none';
  // clearAll();
  
  // Если инпут не пустой - сделай фетч
        
  picsApiService.fetchPicsPixabay()
    .then(({ hits, totalHits }) => {

      if (hits.length > 0) {
        clearAll();
        Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
        createMarkup(hits);
        new SimpleLightbox('.gallery a');
        refs.buttonLoadMore.style.display = 'block';

      } else {
        clearAll();
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
    })
    .catch(error => console.log('ERROR: ' + error));
}

// Не обрабатывается ошибка 400

function onLoad() {


  picsApiService.fetchPicsPixabay().then(({ hits }) => {

    if (hits.length === 0) {
      refs.buttonLoadMore.style.display = 'none';
      Notiflix.Notify.info(
        "We're sorry, but you've reached the end of search results."
      )
      return;
    }
setTimeout(() => {
    onSpinnerDisabled();
  }, 2000);
    createMarkup(hits);
    new SimpleLightbox('.gallery a').refresh();


    const { height: cardHeight } = document
      .querySelector(".gallery")
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: "smooth",
    });

  }).catch(error => Notiflix.Notify.info(error.message));
}


function createMarkup(value) {

  

  const markup = value.map(hit => 
    

    `<div class="general-photo-card-container">    
    
  
        <a class="gallery-img-link" href="${hit.largeImageURL}">
        
          <img
            class="gallery-image"
            src="${hit.webformatURL}"
            alt="${hit.tags}"
            loading="lazy"
        />
        
        </a>
        
        <div class="img-general-info-container">
          <p><b>Likes</b><br>${hit.likes}</br></p>
          <p><b>Views</b><br>${hit.views}</br></p>
          <p><b>Comments</b><br>${hit.comments}</br></p>
          <p><b>Downloads</b><br>${hit.downloads}</br></p>
        </div>
      </div>` ).join("");
  
   
  refs.gallery.insertAdjacentHTML("beforeend", markup);
  
}


function clearAll() {
  refs.gallery.innerHTML = "";
}

// Код для скролл-кнопки


const scrollUpBtn = document.querySelector('.scrollUpBtn');
console.log(scrollUpBtn);
const rootEl = document.documentElement;
console.log(rootEl);

// When scrolling on the website calling a function that calculates scrolled pixels
onScrollFunction();
window.onscroll = function () {
  onScrollFunction();
};

// When scrolling more than 2500px class .showBtn either add or removed, which either reveal button or removes it
function onScrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollUpBtn.classList.add('showBtn');
  } else {
    scrollUpBtn.classList.remove('showBtn');
  }
}

scrollUpBtn.addEventListener('click', scrollUpTop);

// Function that scrolls the page up when clicked on the button
function scrollUpTop() {
  rootEl.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// Спинер

const spinnerEl = document.querySelector('.backdrop-spinner');

function onSpinnerEnabled() {
  return spinnerEl.classList.remove('visually-hidden');
}
function onSpinnerDisabled() {
  return spinnerEl.classList.add('visually-hidden');
}
export { onSpinnerEnabled, onSpinnerDisabled };


// refs.buttonSearch.addEventListener('click', e => {
  
//   onSpinnerEnabled();
//   setTimeout(() => {
//     onSpinnerDisabled();
//   }, 2000);
// });