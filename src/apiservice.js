import axios from 'axios';

export default class PicsApiService {
    MAX_RESULTS = 500;

    constructor() {
        this.myQuery = "";
        this.pageNumber = 1;
        this.perPage = 40;
    }


    async fetchPicsPixabay() {
        const API_KEY = "32855803-d56bfd48c48aac08c2ef5d962";
        const BASE_URL = "https://pixabay.com/api";
        const FULL_URL = `${BASE_URL}/?key=${API_KEY}&q=${this.myQuery}&image_type="photo"&orientation="horizontal"&safesearch=true&page=${this.pageNumber}&per_page=${this.perPage}`

        try {
            if ((this.pageNumber - 1) * this.perPage > this.MAX_RESULTS) {
                throw new Error("We're sorry, but you've reached the end of search results.")
            }
            const response = await axios.get(FULL_URL);
            this.pageNumber += 1;  
            return response.data;
            
        } catch (error) {
            throw error;
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