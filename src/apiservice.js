

export default class PicsApiService {

    constructor() {
        this.myQuery = "";
        this.pageNumber = 1;
    }


fetchPicsPixabay() {
    
const API_KEY = "32855803-d56bfd48c48aac08c2ef5d962";
const BASE_URL = "https://pixabay.com/api";
const url = `${BASE_URL}/?key=${API_KEY}&q=${this.myQuery}&image_type="photo"&orientation="horizontal"&safesearch=true&page=${this.pageNumber}&per_page=40`;
    
    
    console.log(this)

   
    return fetch(url)
        .then(response => response.json())
        .then(data => {


                console.log(data.hits);

                this.pageNumber += 1;  

                return data.hits;
            })
        
    }


    resetPage() {
        this.pageNumber = 1;
    }
    
    set query(newQuery) { 
        
        this.myQuery = newQuery;
    }
    

    get query() {
        
        return this.myQuery;
    }


}