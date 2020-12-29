import axios from "axios";

const instance = axios.create({
    baseURL: "https://kage-app.herokuapp.com",
});

export default instance;
