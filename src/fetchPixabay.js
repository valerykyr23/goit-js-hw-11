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