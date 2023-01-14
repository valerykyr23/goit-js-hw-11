const refs = {
    input: document.querySelector("input"),
    form: document.querySelector(".search-form"),
    buttonSearch: document.querySelector(".search-btn"),
    buttonLoadMore: document.querySelector(".load-more"),
    gallery: document.querySelector(".gallery"),

}
 
refs.form.addEventListener("submit", onSearch); 
refs.buttonLoadMore.addEventListener("click", onLoad);
let inputValue = "";


const API_KEY = "32855803-d56bfd48c48aac08c2ef5d962";
const BASE_URL = "https://pixabay.com/api";




function onSearch(event) {

    event.preventDefault();
    const inputValue = event.currentTarget.elements.searchQuery.value;
    console.log(inputValue)

    const url = `${BASE_URL}/?key=${API_KEY}&q=${inputValue}&image_type="photo"&orientation="horizontal"&safesearch=true`;

    return fetch(url).then(response => response.json())
        .then(data => {
            console.log(data)
        createMarkup(data)})
        .catch(error => console.log(error))
}

function onLoad() { }

function createMarkup(array) {

    console.log(array.hits)

  
    const markup = array.map(array => `<div class="photo-card">
  <img src="${array.webformatURL}" alt="${array.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes: ${array.likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${array.views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${array.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${array.downloads}</b>
    </p>
  </div>
</div>`).join("");
    
    // {webformatURL,largeImageURL,tags,likes,views,comments,downloads}
refs.gallery.insertAdjacentHTML("beforeend", markup);
}