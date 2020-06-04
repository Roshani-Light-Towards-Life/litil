import {HOST} from "../config/index"

export const buildImageUri = (url) => {
    return HOST + url;
}