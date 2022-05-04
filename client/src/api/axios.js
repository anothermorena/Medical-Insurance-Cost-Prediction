import axios from 'axios';

//set the url for the entire application
const BASE_URL = 'http://localhost:8000';

export default axios.create({
    baseURL: BASE_URL
});