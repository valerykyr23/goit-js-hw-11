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




// function onSearch(event) {

//   event.preventDefault();

//   clearAll();
  
//   picsApiService.query = event.currentTarget.elements.searchQuery.value.trim();

//   picsApiService.resetPage();

//   if (picsApiService.query === "") {
//     clearAll();

//     Notiflix.Notify.warning('Please,type something.');

//     refs.buttonLoadMore.style.display = 'none';

//     return;

//   } else {
//     picsApiService.fetchPicsPixabay()
//       .then(( {hits,totalHits}) => {

//         const infoResponseObj = {
//           hits: hits,
//           totalHits: totalHits,
//         }
              
//         if (infoResponseObj.hits.length > 0) {
                  
//           console.log(infoResponseObj.hits.length);
                   
//           createMarkup(infoResponseObj.hits);
          
//           Notiflix.Notify.success('Hooray! We found totalHits images.');

//           refs.buttonLoadMore.style.display = 'block';
//         } else {
          
          
//           clearAll();

//           callError();

//           refs.buttonLoadMore.style.display = 'none';

//         }
                
      
      
//       })
//       .catch(error => {

//                 clearAll();

//             callError(error)});

//     }

// }


  

// function onLoad() {
//   picsApiService.fetchPicsPixabay().then(({ hits, totalHits }) => {

//     const infoResponseObj = {
//       hits: hits,
//       totalHits: totalHits,
//     }

//     if (infoResponseObj.hits < infoResponseObj.totalHits) {

//       Notiflix.Notify.info("We are sorry, but you've reached the end of search results.");

//       refs.buttonLoadMore.style.display = 'none';

//     } else {
//       createMarkup(infoResponseObj.hits);
//    }
      

//   })


//   const { height: cardHeight } = document
//         .querySelector('.gallery')
//         .firstElementChild.getBoundingClientRect();

//       window.scrollBy({
//         top: cardHeight * 2,
//         behavior: 'smooth',
//       });
// }



// function callError (error) {
// Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
// }



// function createMarkup(value) {

  
//   const markup = value.map(hit =>  `<div class="general-photo-card-container">
    
  


//         <a class="gallery-img-link" href="${hit.largeImageURL}">


        

//           <img
//             class="gallery-image"
//             src="${hit.webformatURL}"
//             alt="${hit.tags}"
//             loading="lazy"
//         />
        
//         </a>


        

//         <div class="img-general-info-container">



//           <div class="every-img-info-box-title-number-inside">
            
//             <p class="">

//             <b>Likes</b>

//             </p>

//             <span>${hit.likes}</span>
//           </div>


//           <div class="every-img-info-box-title-number-inside">
           
//             <p class="">

//             <b>Views</b>

//             </p>

//               <span>${hit.views}</span>
//           </div>


//           <div class="every-img-info-box-title-number-inside">
            
//             <p class="">

//             <b>Comments</b>

//             </p>
//             <span>${hit.comments}</span>
//           </div>


//           <div class="every-img-info-box-title-number-inside">
            
//             <p class="">
            
//             <b>Downloads</b>

//             </p>

//             <span>${hit.downloads}</span>
//           </div>


//         </div>


//       </div>`).join("");
  
   
//   refs.gallery.insertAdjacentHTML("beforeend", markup);

//   const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});
  
// }


// function clearAll() {
//   refs.gallery.innerHTML = "";
// }



// return fetch(url)
//         .then(response => {

//             console.log(response)
            
//         if (!response.ok ) {
//      throw new Error(response.statusText)
//         }

//         return response.json();
// })
//         .then(data => {


//                 console.log(data);

//                 this.pageNumber += 1;

//                 return data;
//         })
            


//         / picsApiService.fetchPicsPixabay().then(({ hits, totalHits }) => {

  //   const infoResponseObj = {
  //     hits: hits,
  //     totalHits: totalHits,
  //   }

  //   if (infoResponseObj.hits.length < infoResponseObj.totalHits.length) {

  //     Notiflix.Notify.info("We are sorry, but you've reached the end of search results.");

  //     refs.buttonLoadMore.style.display = 'none';

  //   } else {
  //     createMarkup(infoResponseObj.hits);
  //  }
      

  // })

  // const { height: cardHeight } = document
  //       .querySelector('.gallery')
  //       .firstElementChild.getBoundingClientRect();

  //     window.scrollBy({
  //       top: cardHeight * 2,
  //       behavior: 'smooth',
  //     })
  

//   / function onSearch(event) {

//   event.preventDefault();

//   clearAll();
  
//   picsApiService.query = event.currentTarget.elements.searchQuery.value.trim();

//   picsApiService.resetPage();

// // Если инпут пустой

//   if (picsApiService.query === "") {
//     clearAll();

//     Notiflix.Notify.warning('Please,type something.');

//     refs.buttonLoadMore.style.display = 'none';

//     return;

//   }

//   // Если инпут не пустой - сделай фетч
        
//     picsApiService.fetchPicsPixabay()
//       .then(({ hits, totalHits }) => {
        
//         const infoResponseObj = {
//           hits: hits,
//           totalHits: totalHits,

//         };
//         // Если хитс больше 0 рендери разметку - Успех!

//          if (infoResponseObj.hits.length > 0) {
                  
//           console.log(infoResponseObj.hits.length);
                   
//           createMarkup(infoResponseObj.hits);
          
//           Notiflix.Notify.success('Hooray! We found totalHits images.');

//           refs.buttonLoadMore.style.display = 'block';

//           const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});
//          }
        
        
        
//         else if (infoResponseObj.hits < infoResponseObj.totalHits) {

//       Notiflix.Notify.info("We are sorry, but you've reached the end of search results.");

//       refs.buttonLoadMore.style.display = 'none';

//     }

//            // Если хитс  равны 0 - Ошибка!
//             else  {
          
//           clearAll();

//           Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");

//           refs.buttonLoadMore.style.display = 'none';

//         }        
//       })
      
//     }
