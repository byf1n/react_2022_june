import {axiosService} from "./axios.service";
import {urls} from "../config";

const usersService = {
    getAll: () => axiosService.get(urls.users),
    getPosts: (userId) => axiosService.get(`${urls.posts}/?userId=${userId}`)
}

export {usersService}

