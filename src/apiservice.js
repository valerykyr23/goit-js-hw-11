import axios from 'axios';

export default class PicsApiService {

    constructor() {
        this.myQuery = "";
        this.pageNumber = 1;
        this.perPage = 40;
    }


async fetchPicsPixabay() {
    
const API_KEY = "32855803-d56bfd48c48aac08c2ef5d962";
const BASE_URL = "https://pixabay.com/api";
const url = `${BASE_URL}/?key=${API_KEY}&q=${this.myQuery}&image_type="photo"&orientation="horizontal"&safesearch=true&page=${this.pageNumber}&per_page=${this.perPage}`
     console.log(this)

   try {
    const response = await axios.get(url);
       console.log(response);
       this.pageNumber += 1;  
       return response.data;
       
  } catch (error) {
    console.log(error);
  }
        
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