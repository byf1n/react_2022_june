import {axiosService} from "./axios.service";
import {urls} from "../config";

const usersService = {
    getAll: () => axiosService.get(urls.users),
    postUser: (user) => axiosService.post(urls.users, user)
}

export {usersService};