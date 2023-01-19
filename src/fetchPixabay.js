export function fetchPicsPixabay(value) {
    let pageNumber = 1;
const API_KEY = "32855803-d56bfd48c48aac08c2ef5d962";
const BASE_URL = "https://pixabay.com/api";
const url = `${BASE_URL}/?key=${API_KEY}&q=${value}&image_type="photo"&orientation="horizontal"&safesearch=true&page=${pageNumber}&per_page=40`;
    
    return fetch(url)
        .then(response => {

            console.log(response)
            
        if (!response.ok ) {
     throw new Error(response.statusText)
        }

        return response.json();
})
}



 // {webformatURL,largeImageURL,tags,likes,views,comments,downloads}

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


// `<div class="photo-card">
//    <a class="gallery-item" href="${hit.largeImageURL}">
//   <img  class="gallery-img" src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy" /> </a>
//   <div class="info">
//     <p class="info-item">
//       <b>Likes: ${hit.likes}</b>
//     </p>
//     <p class="info-item">
//       <b>Views: ${hit.views}</b>
//     </p>
//     <p class="info-item">
//       <b>Comments: ${hit.comments}</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads: ${hit.downloads}</b>
//     </p>
//   </div>
// </div>`).join("");


//  picsApiService.fetchPicsPixabay()
//       .then(hits => {

//         console.log(hits)
              
//         if (hits.length > 0) {
                  
//           console.log(hits.length);
                   
//           createMarkup(hits);
          
//           Notiflix.Notify.success('Hooray! We found totalHits images.');

//           refs.buttonLoadMore.style.display = 'block';
//         } else {
          
          
//           clearAll();

//           callError();

//           refs.buttonLoadMore.style.display = 'none';

//         }
                
      
      
//       })

//     }

// }