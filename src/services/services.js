import {axiosService} from "./axios.service";
import {urls} from "../config";

const services = {
    getTodos: () => axiosService(urls.todos),
    getAlbums: () => axiosService(urls.albums),
    getComments: () => axiosService(urls.comments),
    getPosts: (id) => axiosService.get(`${urls.posts}/${id}`)
}

export {services};