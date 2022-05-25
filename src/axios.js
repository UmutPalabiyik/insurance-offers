import axios from "axios";

// base url 
const instance = axios.create({
    baseURL : "https://snetmyapp.herokuapp.com"
})


export default instance;

