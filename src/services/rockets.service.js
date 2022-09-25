import {axiosService} from "./axios.service";
import {urls} from "../config";

const rocketsService = {
    getAll: () => axiosService.get(urls.rockets)
}

export {rocketsService};