import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
const getUsers = () => axiosInstance(`/users`)
const getAlbumsFromUser = (id) => axiosInstance(`/users/${id}/albums`)
const getAlbums = () => axiosInstance(`/albums`)
const getPhotoFromAlbums = (id) => axiosInstance(`/albums/${id}/photos`)


export {getUsers, getAlbums, getAlbumsFromUser, getPhotoFromAlbums};